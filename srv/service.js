const cds = require('@sap/cds');
const axios = require('axios');


module.exports = cds.service.impl(async function () {
    let {
        PAN_Details,
        PAN_vendor_reponse_details,
        Pan_Details, VENDOR_DATA,
        PAN_PRICE_DETAILS,
        Projects,
        Items,
        Vendors,
        PAN_Info,
        Project_Details,
        Item_details,
        vendorTaxDetails,
        PanWebEvent,
        Vendor_details
    } = this.entities;

    const c4re = await cds.connect.to("dbservice");

    var vcap = JSON.parse(process.env.VCAP_SERVICES);
    var panformDest;
    // let auth = req?.headers?.authorization;
    // console.log(auth);
    vcap.destination.forEach((dest) => {
        if (dest?.name != undefined && dest?.name == "main_db2-destination-service") {
            panformDest = dest;
        }
    })

    //development
    //    panformDest =  vcap.destination[0]

    var tokenurl = panformDest.credentials.url + "/oauth/token?grant_type=client_credentials";
    var basicAuth = panformDest.credentials.clientid + ":" + panformDest.credentials.clientsecret;
    var basicAuth = btoa(basicAuth);
    var basicStr = "Basic " + basicAuth;


    var axiosTokenResp = await axios.request({
        url: tokenurl,
        method: 'get',
        headers: {
            Authorization: basicStr
        }
    })
    var accesstoken = axiosTokenResp.data.access_token;

    var authDest = axiosTokenResp.data.token_type + " " + accesstoken;
    // console.log(authDest);

    var destinationurl = panformDest.credentials.uri + "/destination-configuration/v1/destinations/Dynamic_Iflow-srv-api"

    var destinationResp = await axios.request({
        url: destinationurl,
        method: 'get',
        headers: {
            Authorization: authDest
        }
    })

    var baseSrvUrl = destinationResp?.data?.destinationConfiguration?.URL;

    c4re.destination.url = baseSrvUrl;
    console.log()


    // this.before("READ", PAN_Details, async (req) => {
    //     debugger
    //     const pan_details = await c4re.get("/odata/v4/catalog/tab1");

    //     const pan_details_data = [];

    //     pan_details.value.forEach(space => {
    //         pan_details_data.push({
    //             PAN_Number: `${space?.PAN_Number ?? 'NA'}`,
    //             Project_Description: `${space?.Project_Description ?? 'NA'}`
    //         })
    //     });
    //     await DELETE.from(PAN_Details);
    //     await INSERT.into(PAN_Details).entries(pan_details_data);

    //     const vendor = await c4re.get("/odata/v4/catalog/vendor_data");

    //     const vendor_data = [];
    //     vendor.value.forEach(space => {
    //         vendor_data.push({
    //             vendor_code: space.Proposed_Vendor_Code,
    //             PAN_Number: space.PAN_Number,
    //             Vendor_Name: space.Vendor_Name,
    //             Vendor_Location: space.Vendor_Location,
    //             Technically_Approved: space.Technically_Approved
    //         })
    //     });
    //     await DELETE.from(VENDOR_DATA);
    //     await INSERT.into(VENDOR_DATA).entries(vendor_data);

    //     const item_price_details = await c4re.get("/odata/v4/catalog/PAN_PRICE_DETAILS");

    //     const items_details = [];
    //     item_price_details.value.forEach(space => {

    //         if (space.Item_Code) {
    //             items_details.push({
    //                 PAN_Number: space.PAN_Number,
    //                 vendor_code: space.Proposed_Vendor_Code,
    //                 Item_Code: space.Item_Code,
    //                 Item_Short_Description: space.Item_Short_Description,
    //                 Quantity: space.Quantity,
    //                 Amount: space.Amount,
    //                 Unit_Price: space.Unit_Price
    //             })
    //         }

    //     });
    //     await DELETE.from(PAN_PRICE_DETAILS);
    //     await INSERT.into(PAN_PRICE_DETAILS).entries(items_details);
    // })

    this.before("READ", [Project_Details, Pan_Details, Items, Projects, Vendors, PAN_Info], async (req) => {

        try {

            const pan_details = await c4re.get("/odata/v4/pan-approval/PAN_Details_APR");//pan_details
            await DELETE.from(PAN_Info);
            await INSERT.into(PAN_Info).entries(pan_details.value);

            // const proj_details = await c4re.get("/odata/v4/pan-approval/PAN_proj_APR");//proj


            const pan_proj = [];
            if (pan_details.value) {
                pan_details.value.forEach(ele => {
                    // if (ele.task_id.trim() !== '') {
                    pan_proj.push({
                        ProjectId: `${ele.ProjectId || 'NA'}`,
                        PAN_Number: `${ele.PAN_Number || 'NA'}`,
                        task_id: `${ele.task_id || 'NA'}`
                    })
                    // }

                });
            }

            await DELETE.from(Projects);
            var tabledata = await SELECT.from(Projects);
            await INSERT.into(Projects).entries(pan_proj);
            var tabledata = await SELECT.from(Project_Details);




            console.log();

            const vendor_details = await c4re.get("/odata/v4/pan-approval/PAN_vendor_data_APR");//vendor
            await DELETE.from(Vendors);
            await INSERT.into(Vendors).entries(vendor_details.value);


            const vendor_res_details = await c4re.get("/odata/v4/pan-approval/PAN_vendor_response_APR");//vendor
            await DELETE.from(PAN_vendor_reponse_details);
            await INSERT.into(PAN_vendor_reponse_details).entries(vendor_res_details.value);



            const item_details = await c4re.get("/odata/v4/pan-approval/PAN_PRICE_DETAILS_APR");//items
            await DELETE.from(Items);
            await INSERT.into(Items).entries(item_details.value);


            const item_tax_details = await c4re.get("/odata/v4/pan-approval/vendorTaxDetails_APR");//items
            await DELETE.from(vendorTaxDetails);
            await INSERT.into(vendorTaxDetails).entries(item_tax_details.value);

            const pan_web_event = await c4re.get("/odata/v4/pan-approval/PAN_WEB_EVENT_APR");//Pan web event
            await DELETE.from(PanWebEvent);
            await INSERT.into(PanWebEvent).entries(pan_web_event.value);
        } catch (error) {
            console.log(error);
        }
    })

    this.on("cbeObjectPageData", async (req) => {

        let project_id = req.data.projectId;

        let project_details = await SELECT.from(Project_Details).where({ ProjectId: project_id });
        let list_of_items = await SELECT.from(Item_details).where({ ProjectId: project_id });
        let vendor_list = await SELECT.from(Vendor_details).where({ ProjectId: project_id });
        let pan_info = await SELECT.from(PAN_Info);
        let vendor_response_deatils = await SELECT.from(PAN_vendor_reponse_details);
        let tax_details = await SELECT.from(vendorTaxDetails);
        let pan_web_event = await SELECT.from(PanWebEvent);

        let result = [project_details,list_of_items,vendor_list,pan_info,vendor_response_deatils,tax_details,pan_web_event];

        return JSON.stringify(result);

        // console.log();
    })
})
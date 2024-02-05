const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    let { PAN_Details, VENDOR_DATA, PAN_PRICE_DETAILS } = this.entities;

    const c4re = await cds.connect.to("dbservice");


    this.before("READ", PAN_Details, async (req) => {
        debugger
        const pan_details = await c4re.get("/odata/v4/catalog/tab1");

        const pan_details_data = [];

        pan_details.value.forEach(space => {
            pan_details_data.push({
                PAN_Number: space.PAN_Number,
                Project_Description: space.Project_Description
            })
        });
        await DELETE.from(PAN_Details);
        await INSERT.into(PAN_Details).entries(pan_details_data);

        const vendor = await c4re.get("/odata/v4/catalog/vendor_data");

        const vendor_data = [];
        vendor.value.forEach(space => {
            vendor_data.push({
                vendor_code: space.Proposed_Vendor_Code,
                PAN_Number: space.PAN_Number,
                Vendor_Name: space.Vendor_Name,
                Vendor_Location: space.Vendor_Location,
                Technically_Approved: space.Technically_Approved
            })
        });
        await DELETE.from(VENDOR_DATA);
        await INSERT.into(VENDOR_DATA).entries(vendor_data);

        const item_price_details = await c4re.get("/odata/v4/catalog/PAN_PRICE_DETAILS");

        const items_details = [];
        item_price_details.value.forEach(space => {

            if (space.Item_Code) {
                items_details.push({
                    PAN_Number: space.PAN_Number,
                    vendor_code: space.Proposed_Vendor_Code,
                    Item_Code: space.Item_Code,
                    Item_Short_Description: space.Item_Short_Description,
                    Quantity: space.Quantity,
                    Amount: space.Amount,
                    Unit_Price: space.Unit_Price
                })
            }
            
        });
        await DELETE.from(PAN_PRICE_DETAILS);
        await INSERT.into(PAN_PRICE_DETAILS).entries(items_details);
    })
})
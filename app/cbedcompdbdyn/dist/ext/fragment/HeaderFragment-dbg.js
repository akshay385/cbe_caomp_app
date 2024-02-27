sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/export/Spreadsheet",
    "sap/ui/model/json/JSONModel",
    'sap/ui/export/library',
], function (MessageToast, Spreadsheet, JSONModel, exportLibrary) {
    'use strict';
    var EdmType = exportLibrary.EdmType;
    return {
        onRowExpand: function (oEvent) {

            // MessageToast.show("Custom handler invoked.");
            if (oEvent.getSource().getPressed() == true) {
                debugger
                oEvent.getSource().setText("ItemList-CollapseAll");
                // let totat_basicpricing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon1");
                // if (totat_basicpricing.getSrc() == "sap-icon://navigation-right-arrow") {
                //     totat_basicpricing.firePress();
                // }

                let total_incluing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");
                if (total_incluing.getSrc() == "sap-icon://navigation-right-arrow") {
                    total_incluing.firePress();
                }

                let viewmore_pricebasis = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");
                if (viewmore_pricebasis.getSrc() == "sap-icon://navigation-right-arrow") {
                    viewmore_pricebasis.firePress();
                }
            }
            else {
                oEvent.getSource().setText("ItemList-ExpandAll");
                // let totat_basicpricing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon1");
                // if (totat_basicpricing.getSrc() == "sap-icon://navigation-up-arrow") {
                //     totat_basicpricing.firePress();
                // }

                let total_incluing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");
                if (total_incluing.getSrc() == "sap-icon://navigation-up-arrow") {
                    total_incluing.firePress();
                }

                let viewmore_pricebasis = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");
                if (viewmore_pricebasis.getSrc() == "sap-icon://navigation-down-arrow") {
                    viewmore_pricebasis.firePress();
                }
            }

        },
        onColumnExpand: function (oEvent) {

            // MessageToast.show("Custom handler invoked.");

            var sectionslist = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].getSubSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[1].mAggregations.content[0].mAggregations.items;

            var cylindrical_icon = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[1].mAggregations.items[0].mAggregations.items[1];
            if (oEvent.getSource().getPressed() == true) {
                oEvent.getSource().setText("VendorList-CollapseAll");

                if (cylindrical_icon.getSrc() == "sap-icon://expand") {
                    cylindrical_icon.firePress();
                }
                for (let i = 0; i < sectionslist.length; i++) {
                    let totalsectionvboxlen = sectionslist[0].getItems()[1].getItems().length
                    debugger
                    var sectionsicon = sectionslist[i].getItems()[1].getItems()[totalsectionvboxlen - 1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[1].mAggregations.header.mAggregations.items[1];
                    if (sectionsicon.getSrc() == "sap-icon://expand") {
                        sectionsicon.firePress();
                    }

                }
            }
            else {
                oEvent.getSource().setText("VendorList-ExpandAll");
                if (cylindrical_icon.getSrc() == "sap-icon://collapse") {
                    cylindrical_icon.firePress();
                }
                for (let i = 0; i < sectionslist.length; i++) {
                    let totalsectionvboxlen = sectionslist[0].getItems()[1].getItems().length
                    var sectionsicon = sectionslist[i].getItems()[1].getItems()[totalsectionvboxlen - 1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[1].mAggregations.header.mAggregations.items[1];
                    if (sectionsicon.getSrc() == "sap-icon://collapse") {
                        sectionsicon.firePress();
                    }

                }
            }

        },
        onExportExcel: async function (oEvent) {

            debugger
            // Parse the data from Excel into an array
            var data = [];

            // var oModel = new JSONModel(data);
            //mainhbiox
            var mainhbox = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--mainhbox1");

            //project desc
            let project_desc = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--projectvalue").getText();


            let table = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--itemstable1");
            let table_items = [];

            debugger
            for (let i = 0; i < table.getItems().length; i++) {
                table_items.push({
                    // mta_no: (i + 1),
                    // item_desc: table.getItems()[i].getCells()[0].getText(),
                    // tag_no: table.getItems()[i].getCells()[1].getText(),
                    // types_of_vessel: table.getItems()[i].getCells()[2].getText(),
                    // cap_each: table.getItems()[i].getCells()[3].getText(),
                    // dia: table.getItems()[i].getCells()[4].getText(),
                    // tl_tl: table.getItems()[i].getCells()[5].getText(),
                    // moc: table.getItems()[i].getCells()[6].getText(),
                    // dpb: table.getItems()[i].getCells()[7].getText(),
                    // weights: table.getItems()[i].getCells()[8].getText(),
                    // quantity: table.getItems()[i].getCells()[9].getText(),
                })

            }
            var data = [
                { 2: "Commercial Bid Evaluation" },
                { 1: "", 11: 'Supplier' },
                { 1: "", 11: 'Location' },
                { 1: "Project", 2: `${"Project: " + project_desc}`, 11: 'Qtn. Ref.' },
                { 1: "", 11: 'Date' },
                { 1: "", 11: 'Validity' },
                { 1: "", },
                // { 1: "MTO Sr.NO ", 2: 'Items Description', 3: "Tag No", 4: "Type of Vessel", 5: "Capacity Each ( Cu Mtr )", 6: "Dia mm", 7: "TL to TL Length (mm)", 8: "MOC", 9: "Design Pressure bar", 10: "Weights", 11: "Quantity" },
            ];

            let col_header = {};
            let colcnt = 2;

            for (let i = 0; i < table.getColumns().length; i++) {
                debugger
                if (table.getColumns()[i].getVisible() == true) {
                    col_header[colcnt] = table.getColumns()[i].getHeader().getText();
                    colcnt++;
                }
            }
            data.push(col_header)

            data[1][colcnt] = data[1][11]; //supplier
            delete data[1][11];

            data[2][colcnt] = data[2][11]; //Location
            delete data[2][11];

            data[3][colcnt] = data[3][11]; //Qnt ref
            delete data[3][11];

            data[4][colcnt] = data[4][11]; //DAte
            delete data[4][11];

            data[5][colcnt] = data[5][11]; //Validity
            delete data[5][11];

            debugger
            for (let i = 0; i < table.getItems().length; i++) {
                let v_item = {};
                let v_cnt = 2;
                for (let j = 0; j < table.getColumns().length; j++) {
                    if (table.getColumns()[j].getVisible() == true) {
                        debugger
                        v_item[v_cnt] = table.getItems()[i].getCells()[j].getText();
                        v_cnt++;
                    }
                }
                data.push(v_item);

            }


            // for (let i = 0; i < table_items.length; i++) {
            //     data.push({
            //         1: table_items[i]?.mta_no ?? '',
            //         2: table_items[i]?.item_desc ?? '',
            //         3: table_items[i]?.tag_no ?? '',
            //         4: table_items[i]?.types_of_vessel ?? '',
            //         5: table_items[i]?.cap_each ?? '',
            //         6: table_items[i]?.dia ?? '',
            //         7: table_items[i]?.tl_tl ?? '',
            //         8: table_items[i]?.moc ?? '',
            //         9: table_items[i]?.dpb ?? '',
            //         10: table_items[i]?.weights ?? '',
            //         11: table_items[i]?.quantity ?? '',
            //     })

            // }
            var new_data = [
                { 1: "", 2: '' },
                { 1: "3", [colcnt]: 'Spares for 2 Years operation' },
                { 1: " ", [colcnt]: 'Grand Total' },
                { 1: "4", [colcnt]: 'Freight' },
                { 1: "5", [colcnt]: 'Inspection / Testing Charges' },
                { 1: "B.3", [colcnt]: 'Documentation Charges' },
                // { 1: "3", 10: 'Total Basic Price including packing, marking & forwarding' },
                { 1: "C", [colcnt]: 'RNOD' },
                { 1: "D.1", [colcnt]: 'Custom Duty & Cess' },
                { 1: "D.2", [colcnt]: 'Tax' },
                // { 1: "D.3", 10: 'IGST' },
                // { 1: "D.4", 10: 'UGST' },
                { 1: "D.6", [colcnt]: 'Shipment charges from EXW to ISRO Mahendragiri' },
                { 1: "D", [colcnt]: 'Total Basic Price including packing, marking & forwarding, Transportation including Taxes' },
                { [colcnt]: 'Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes' },
                { 1: "F", [colcnt]: 'Per Diem rate for Supervision for Erection and commissioning' },
                // { 1: "G.1", 10: 'PriceBasic' },
                // { 1: "G.2", 10: 'Point of delivery' },
                { 1: "G.3", [colcnt]: 'Scope and Responsibilities' },
                { 1: "G.4", [colcnt]: 'Commercial Terms' },
                { 1: "G.5", [colcnt]: 'Compliance Terms' },
                { 1: "G.6", [colcnt]: 'Others' },
                // { 1: "G.7", 2: 'CPBG' },
                // {1:"G.8" ,2:'CPBG'}, 
                { 1: "G.9", [colcnt]: 'Contact person' },
                { 1: "G.10", [colcnt]: 'Contact No' },
                { 1: "G.11", [colcnt]: 'Order can be given to ..' },
                { 1: "G.12", [colcnt]: 'Technical approved' },
                { 1: "G.13", [colcnt]: 'Approved vendor' },
            ]

            debugger
            var leftsection = data.concat(new_data);
            var rightsectiondata = [];

            var list_of_sections = mainhbox.getItems()[1].getContent()[0].getItems();

            let vendor = [];
            let updatvendor = [];
            // let cnt = 12;  //original cnt
            let cnt = colcnt + 2;
            for (let i = 0; i < list_of_sections.length; i++) {
                // for (let i = 0; i < 1; i++) {


                let vendor_name = list_of_sections[i].getItems()[0].getItems()[0].getText();
                let venodor_location = list_of_sections[i].getItems()[0].getItems()[1].getText();

                let list_of_status = list_of_sections[i].getItems()[1].getItems();
                let arr = [];
                vendor = [
                    { [cnt]: '' },
                    { [cnt]: vendor_name },
                    { [cnt]: venodor_location }
                ];

                // for (let j = 0; j < list_of_status.length; j++) {

                let updatarr = [];

                let pricesbasishbox = list_of_sections[i].getItems()[2].getItems()[1].getItems();

                for (let j = 0; j < list_of_status.length; j++) {

                    let qnt_ref = list_of_status[j].getItems()[0].getItems()[0].getText();
                    let rdate = list_of_status[j].getItems()[0].getItems()[1].getText();
                    let validity = list_of_status[j].getItems()[0].getItems()[2].getText();
                    let pan_status_name = list_of_status[j].getItems()[1].getItems()[0].getText();


                    let keyl = cnt;//12
                    let keym = (cnt + 1)//13
                    let keyn = (cnt + 2)//14

                    cnt = cnt + 3;

                    let arr = [
                        { [keyl]: qnt_ref },
                        { [keyl]: rdate },
                        { [keyl]: validity },
                        { [keyl]: pan_status_name },
                        { [keyl]: 'Unit Rate', [keym]: 'Total Amount' }
                        // { [keyl]: 'Unit Rate', [keym]: 'Rate per unit', [keyn]: 'Total Amount' }
                    ];

                    for (let k = 0; k < table_items.length; k++) {
                        arr.push({
                            [keyl]: list_of_status[j].getItems()[1].getItems()[1].getItems()[k].getCells()[0].getText(),
                            [keym]: list_of_status[j].getItems()[1].getItems()[1].getItems()[k].getCells()[1].getText(),
                            // [keyn]: list_of_status[j].getItems()[1].getItems()[1].getItems()[k].getCells()[2].getText(),
                        });
                    }

                    let items_table = list_of_status[j].getItems()[1].getItems()[1].getItems();
                    let tablelen = table_items.length;

                    let aftertable = [
                        { [keyl]: "" },
                        { [keym]: items_table[tablelen + 1].getCells()[1].getText() },
                        { [keym]: items_table[tablelen + 2].getCells()[1].getText() },
                        { [keyl]: items_table[tablelen + 3].getCells()[0].getText(), [keym]: items_table[tablelen + 3].getCells()[1].getText() },
                        { [keyl]: items_table[tablelen + 4].getCells()[0].getText(), [keym]: items_table[tablelen + 4].getCells()[1].getText() },
                        { [keyl]: items_table[tablelen + 5].getCells()[0].getText(), [keym]: items_table[tablelen + 5].getCells()[1].getText() },
                        { [keym]: items_table[tablelen + 6].getCells()[1].getText() },
                        { [keym]: items_table[tablelen + 7].getCells()[1].getText() },
                        { [keyl]: items_table[tablelen + 8].getContent()[0].getText() },
                        // { [keyl]: items_table[tablelen + 9].getCells()[0].getText(), [keyn]: items_table[tablelen + 9].getCells()[2].getText() }, // sgst
                        // { [keyl]: items_table[tablelen + 10].getCells()[0].getText(), [keyn]: items_table[tablelen + 10].getCells()[2].getText() }, // igst
                        // { [keyl]: items_table[tablelen + 11].getCells()[0].getText(), [keyn]: items_table[tablelen + 11].getCells()[2].getText() }, // ugst
                        { [keyl]: items_table[tablelen + 9].getCells()[0].getText() }, // shipment     //Till here
                        { [keym]: items_table[tablelen + 10].getCells()[1].getText() }, // including tax
                        { [keym]: items_table[tablelen + 11].getCells()[1].getText() }, // excluding tax
                        { [keym]: items_table[tablelen + 12].getCells()[1].getText() }, // perdeim
                        // { [keyl]: pricesbasishbox[j].getItems()[0].getText() }, // pricebasis
                        // { [keyl]: pricesbasishbox[j].getItems()[1].getText() },
                        { [keyl]: pricesbasishbox[j].getItems()[0].getContent()[0].getText() },
                        { [keyl]: pricesbasishbox[j].getItems()[1].getContent()[0].getText() },
                        { [keyl]: pricesbasishbox[j].getItems()[2].getContent()[0].getText() },
                        { [keyl]: pricesbasishbox[j].getItems()[3].getContent()[0].getText() },
                        // { [keyl]: pricesbasishbox[j].getItems()[6].getContent()[0].getText() },
                        { [keyl]: pricesbasishbox[j].getItems()[4].getText() },
                        { [keyl]: pricesbasishbox[j].getItems()[5].getText() },
                        { [keyl]: pricesbasishbox[j].getItems()[6].getText() },
                        { [keyl]: pricesbasishbox[j].getItems()[7].getText() },
                        { [keyl]: pricesbasishbox[j].getItems()[8].getText() },
                    ];

                    arr = arr.concat(aftertable);


                    updatarr.push(arr);

                }
                // Check if all subarrays in updatarr have the same length
                const lengths = updatarr.map(subarr => subarr.length);
                const isSameLength = lengths.every((val, i, arr) => val === arr[0]);

                let finalArray = []
                if (isSameLength) {
                    // Merge objects from all arrays in updatarr
                    // let finalArray = [];
                    for (let i = 0; i < updatarr[0].length; i++) {
                        let mergedObject = {};
                        for (let j = 0; j < updatarr.length; j++) {
                            Object.assign(mergedObject, updatarr[j][i]);
                        }
                        finalArray.push(mergedObject);
                    }
                    console.log(finalArray);
                } else {
                    console.log("Arrays in updatarr have different lengths. Unable to merge.");
                }



                vendor = vendor.concat(finalArray);

                updatvendor.push(vendor);
            }
            let finalArray1 = []
            const lengths1 = updatvendor.map(subarr => subarr.length);
            const isSameLength1 = lengths1.every((val, i, arr) => val === arr[0]);
            if (isSameLength1) {
                // Merge objects from all arrays in updatarr
                // let finalArray = [];
                for (let i = 0; i < updatvendor[0].length; i++) {
                    let mergedObject = {};
                    for (let j = 0; j < updatvendor.length; j++) {
                        Object.assign(mergedObject, updatvendor[j][i]);
                    }
                    finalArray1.push(mergedObject);
                }
                console.log(finalArray1);
            } else {
                console.log("Arrays in updatarr have different lengths. Unable to merge.");
            }

            console.log(finalArray1);

            // leftsection,finalArray1

            let mergedArray = [];
            if (leftsection.length === finalArray1.length) {


                // Iterate over the arrays simultaneously
                for (let i = 0; i < leftsection.length; i++) {
                    // Merge objects from both arrays
                    let mergedObject = Object.assign({}, leftsection[i], finalArray1[i]);
                    mergedArray.push(mergedObject);
                }

                console.log(mergedArray);
            } else {
                console.log("Arrays have different lengths. Unable to merge.");
            }




            let oColumns = [];
            for (let i = 1; i < cnt; i++) {
                if (cnt == 1) {
                    oColumns.push({ label: ` `, property: `${i + 1}`, type: EdmType.String, width: '100' });
                }
                else {
                    oColumns.push({ label: ` `, property: `${i + 1}`, type: EdmType.String });
                }

            }

            debugger
            // let func = 'getExcelData';
            // let testdata = 'ABC';
            // let oFunction = oEvent.getSource().getModel().bindContext("/getExcelData(...)");
            // let jsoondata = JSON.stringify(mergedArray);
            // oFunction.setParameter('data', jsoondata);
            // oFunction.execute();
            // console.log();

            debugger
            // Update the columns array to match the columns in your Excel spreadsheet
            var oSpreadsheet = new sap.ui.export.Spreadsheet({
                workbook: {
                    // columns: [
                    //     { label: ' ', property: '1', type: EdmType.String },
                    //     { label: 'B', property: '2', type: EdmType.String },
                    //     { label: 'C', property: '3', type: EdmType.String },
                    //     { label: 'D', property: '4', type: EdmType.String },
                    //     { label: 'E', property: '5', type: EdmType.String },
                    //     { label: 'F', property: '6', type: EdmType.String },
                    //     { label: 'G', property: '7', type: EdmType.String },
                    //     { label: 'H', property: '8', type: EdmType.String },
                    //     { label: 'I', property: '9', type: EdmType.String },
                    //     { label: 'J', property: '10', type: EdmType.String },
                    //     { label: 'K', property: '11', type: EdmType.String },
                    //     // { label: 'K', property: 'l0', type: EdmType.String },
                    //     // { label: 'K', property: 'm0', type: EdmType.String },
                    //     // { label: 'K', property: 'n0', type: EdmType.String },
                    //     // { label: 'K', property: 'o', type: EdmType.String },
                    // ],
                    columns: oColumns,
                    context: {
                        application: 'SAP UI5 Export Sample',
                        author: 'Sample'
                    },
                    hierarchyLevel: 'level'
                },
                // Pass the parsed data array to the dataSource property
                dataSource: mergedArray,
                fileName: 'cbe_comp.xlsx' // Adjust the filename if needed
            });

            oSpreadsheet.build()
                .then(function () {
                    MessageToast.show("Exported successfully!");
                })
                .catch(function (reason) {
                    MessageToast.show("Export failed: " + reason);
                });
        }








    };
});

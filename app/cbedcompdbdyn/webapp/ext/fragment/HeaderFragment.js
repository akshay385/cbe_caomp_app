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
            debugger
            // MessageToast.show("Custom handler invoked.");
            if (oEvent.getSource().getPressed() == true) {
                oEvent.getSource().setText("Row-CollapseAll");
                let totat_basicpricing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon1");
                if (totat_basicpricing.getSrc() == "sap-icon://navigation-right-arrow") {
                    totat_basicpricing.firePress();
                }

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
                oEvent.getSource().setText("Row-ExpandAll");
                let totat_basicpricing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon1");
                if (totat_basicpricing.getSrc() == "sap-icon://navigation-up-arrow") {
                    totat_basicpricing.firePress();
                }

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
            debugger
            // MessageToast.show("Custom handler invoked.");

            var sectionslist = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].getSubSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[1].mAggregations.content[0].mAggregations.items;

            var cylindrical_icon = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[1].mAggregations.items[0].mAggregations.items[1];
            if (oEvent.getSource().getPressed() == true) {
                oEvent.getSource().setText("Column-CollapseAll");

                if (cylindrical_icon.getSrc() == "sap-icon://expand") {
                    cylindrical_icon.firePress();
                }
                for (let i = 0; i < sectionslist.length; i++) {
                    let totalsectionvboxlen = sectionslist[0].getItems()[1].getItems().length
                    var sectionsicon = sectionslist[i].getItems()[1].getItems()[totalsectionvboxlen - 1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[2].mAggregations.header.mAggregations.items[1];
                    if (sectionsicon.getSrc() == "sap-icon://expand") {
                        sectionsicon.firePress();
                    }

                }
            }
            else {
                oEvent.getSource().setText("Column-ExpandAll");
                if (cylindrical_icon.getSrc() == "sap-icon://collapse") {
                    cylindrical_icon.firePress();
                }
                for (let i = 0; i < sectionslist.length; i++) {
                    let totalsectionvboxlen = sectionslist[0].getItems()[1].getItems().length
                    var sectionsicon = sectionslist[i].getItems()[1].getItems()[totalsectionvboxlen - 1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[2].mAggregations.header.mAggregations.items[1];
                    if (sectionsicon.getSrc() == "sap-icon://collapse") {
                        sectionsicon.firePress();
                    }

                }
            }

        },
        onExportExcel: function (oEvent) {
            debugger;
            // Parse the data from Excel into an array
            var data = [];

            // var oModel = new JSONModel(data);
            //mainhbiox
            var mainhbox = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--mainhbox1");

            //project desc
            let project_desc = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--projectvalue").getText();


            let table = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--itemstable1");
            let table_items = [];

            for (let i = 0; i < table.getItems().length; i++) {
                table_items.push({
                    mta_no: (i + 1),
                    item_desc: table.getItems()[i].getCells()[0].getText(),
                    tag_no: table.getItems()[i].getCells()[1].getText(),
                    types_of_vessel: table.getItems()[i].getCells()[2].getText(),
                    cap_each: table.getItems()[i].getCells()[3].getText(),
                    dia: table.getItems()[i].getCells()[4].getText(),
                    tl_tl: table.getItems()[i].getCells()[5].getText(),
                    moc: table.getItems()[i].getCells()[6].getText(),
                    dpb: table.getItems()[i].getCells()[7].getText(),
                    weights: table.getItems()[i].getCells()[8].getText(),
                    quantity: table.getItems()[i].getCells()[9].getText(),
                })

            }
            var data = [
                { a: "Commercial Bid Evaluation" },
                { a: "item", b: 'Air Storage Tanks - 6 Nos.',k:'Supplier' },
                { a: "indent", b: 'Awaited' ,k:'Location'},
                { a: "project", b: project_desc, i: " ",k:'Qtn. Ref.' },
                { a: "Client", b: 'ISRO -TWT' ,k:'Date'},
                { a: "", b: '',k:'Validity' },
                { a: "", b: '', f: "Cylindrical Data" },
                { a: "MTO Sr.NO ", b: 'Items Description', c: "Tag No", d: "Type of Vessel", e: "Capacity Each ( Cu Mtr )", f: "Dia mm", g: "TL to TL Length (mm)", h: "MOC", i: "Design Pressure bar", j: "Weights", k: "Quantity" },
                { a: "", b: '' },
            ];


            for (let i = 0; i < table_items.length; i++) {
                data.push({
                    a: table_items[i].mta_no,
                    b: table_items[i].item_desc,
                    c: table_items[i].tag_no,
                    d: table_items[i].types_of_vessel,
                    e: table_items[i].cap_each,
                    f: table_items[i].dia,
                    g: table_items[i].tl_tl,
                    h: table_items[i].moc,
                    i: table_items[i].dpb,
                    j: table_items[i].weights,
                    k: table_items[i].quantity,
                })

            }
            var new_data = [
            { a: "", b: '' },
            { a: "3", b: 'Spares for 2 Years operation' },
            { a: " ", b: 'Grand Total' },
            { a: "4", b: 'Packing, Marking, Forwarding & Freight' },
            { a: "5", b: 'Inspection / Testing Charges' },
            { a: "B.3", b: 'Documentation Charges' },
            { a: "3", b: 'Total Basic Price including packing, marking & forwarding' },
            { a: "C", b: 'RNOD' },
            { a: "D.1", b: 'Custom Duty & Cess' },
            { a: "D.2", b: 'SGST' },
            { a: "D.3", b: 'IGST' },
            { a: "D.4", b: 'UGST' },
            { a: "D.6", b: 'Shipment charges from EXW to ISRO Mahendragiri', h: "L/S" },
            { a: "D", b: 'Total Basic Price including packing, marking & forwarding, Transportation including Taxes' },
            { b: 'Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes' },
            { a: "E", b: 'Spares for 2 Years operation' },
            { a: "F", b: 'Per Diem rate for Supervision for Erection and commissioning' },
            { a: "G.1", b: 'PriceBasic' },
            { a: "G.2", b: 'Point of delivery' },
            { a: "G.3", b: 'Delivery Period' },
            { a: "G.5", b: 'Liquidated Damages' },
            { a: "G.6", b: 'Warranty / Defect Liability Period' },
            { a: "G.7", b: 'CPBG' },
            // {a:"G.8" ,b:'CPBG'}, 
            { a: "G.9", b: 'Contact person' },
            { a: "G.10", b: 'Contact No' },
            { a: "G.11", b: 'Order can be given to ..' },
            { a: "G.12", b: 'Technical approved' },
            { a: "G.13", b: 'Approved vendor' },]

            var updatedata = data.concat(new_data);
            var rightsectiondata = [];

            var list_of_sections = mainhbox.getItems()[1].getContent()[0].getItems();

            for (let i = 0; i < list_of_sections.length; i++) {
                debugger
                let vendor_name = list_of_sections[i].getItems()[0].getItems()[0].getText();
                let venodor_location =list_of_sections[i].getItems()[0].getItems()[1].getText();

                let list_of_status = list_of_sections[i].getItems()[1].getItems();
                let arr=[];
                for (let j = 0; j < list_of_status.length; j++) {
                    let qnt_ref = list_of_status[j].getItems()[0].getItems()[0].getText();
                    let rdate = list_of_status[j].getItems()[0].getItems()[1].getText();
                    let validity = list_of_status[j].getItems()[0].getItems()[2].getText();
                    let pan_status_name = list_of_status[j].getItems()[1].getItems()[0].getText();
                    arr = [
                        {l:qnt_ref},
                        {l:rdate},
                        {l:validity},
                        {m:pan_status_name},
                    ]

                    for (let k = 0; k < table_items.length; k++) {
                        arr.push({
                            l : list_of_status[j].getItems()[1].getItems()[1].getItems()[k].getCells()[0].getText(),
                            m : list_of_status[j].getItems()[1].getItems()[1].getItems()[k].getCells()[1].getText(),
                            n : list_of_status[j].getItems()[1].getItems()[1].getItems()[k].getCells()[2].getText(),
                        });  
                    }
                    let items_table = list_of_status[j].getItems()[1].getItems()[1].getItems();
                    let tablelen = table_items.length;
                    let aftertable = [
                        {n:items_table[tablelen+1].getCells()[2].getText()},
                        {n:items_table[tablelen+2].getCells()[2].getText()},
                        {l:items_table[tablelen+3].getCells()[0].getText(),n:items_table[tablelen+3].getCells()[2].getText()},
                        {l:items_table[tablelen+4].getCells()[0].getText(),n:items_table[tablelen+4].getCells()[2].getText()},
                        {l:items_table[tablelen+5].getCells()[0].getText(),n:items_table[tablelen+5].getCells()[2].getText()},
                        {n:items_table[tablelen+6].getCells()[2].getText()},
                        {n:items_table[tablelen+7].getCells()[2].getText()},
                        {l:items_table[tablelen+8].getCells()[0].getText()},
                        {l:items_table[tablelen+9].getCells()[0].getText(),n:items_table[tablelen+9].getCells()[2].getText()},//sgst
                        {l:items_table[tablelen+10].getCells()[0].getText(),n:items_table[tablelen+10].getCells()[2].getText()},//igst
                        {l:items_table[tablelen+11].getCells()[0].getText(),n:items_table[tablelen+11].getCells()[2].getText()},//ugst
                        {l:items_table[tablelen+12].getCells()[0].getText()},//shipment
                        {n:items_table[tablelen+13].getCells()[2].getText()},//including tax
                        {n:items_table[tablelen+14].getCells()[2].getText()},//excluding tax
                        {n:items_table[tablelen+15].getCells()[2].getText()},//perdeim 
                    ]
                    
                    arr = arr.concat(aftertable);
                    debugger
                }
                
            }









            debugger
            // Update the columns array to match the columns in your Excel spreadsheet
            var oSpreadsheet = new sap.ui.export.Spreadsheet({
                workbook: {
                    columns: [
                        { label: ' ', property: 'a', type: EdmType.String },
                        { label: 'B', property: 'b', type: EdmType.String },
                        { label: 'C', property: 'c', type: EdmType.String },
                        { label: 'D', property: 'd', type: EdmType.String },
                        { label: 'E', property: 'e', type: EdmType.String },
                        { label: 'F', property: 'f', type: EdmType.String },
                        { label: 'G', property: 'g', type: EdmType.String },
                        { label: 'H', property: 'h', type: EdmType.String },
                        { label: 'I', property: 'i', type: EdmType.String },
                        { label: 'J', property: 'j', type: EdmType.String },
                        { label: 'K', property: 'k', type: EdmType.String },
                    ],
                    context: {
                        application: 'SAP UI5 Export Sample',
                        author: 'Sample'
                    },
                    hierarchyLevel: 'level'
                },
                // Pass the parsed data array to the dataSource property
                dataSource: updatedata,
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

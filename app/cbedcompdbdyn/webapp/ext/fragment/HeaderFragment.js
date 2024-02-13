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
                    mta_no:(i+1),
                    item_desc: table.getItems()[i].getCells()[0].getText(),
                    cap_each: table.getItems()[i].getCells()[1].getText(),
                    dia: table.getItems()[i].getCells()[2].getText(),
                    tl_tl: table.getItems()[i].getCells()[3].getText(),
                    moc: table.getItems()[i].getCells()[4].getText(),
                    dpb: table.getItems()[i].getCells()[5].getText(),
                    weights: table.getItems()[i].getCells()[6].getText(),
                    quantity: table.getItems()[i].getCells()[7].getText(),
                })

            }
            var data = [
                { a:"Commercial Bid Evaluation"},
                { a:"item",b:'Air Storage Tanks - 6 Nos.'},
                { a:"indent",b:'Awaited'},
                { a:"project",b:project_desc,i:" "},
                { a:"Client",b:'ISRO -TWT'},
                { a:"",b:''},
                { a:"",b:'',f:"Cylindrical Data"},
                { a:"MTO Sr.NO ",b:'Items Description',e:"Capacity Each ( Cu Mtr )",f:"Dia mm",g:"TL to TL Length (mm)",h:"MOC",i:"Design Pressure bar",j:"Weights",k:"Quantity"},
               ];

               for (let i = 0; i < table_items.length; i++) {
                    data.push({
                        a:table_items[i].mta_no,
                        b:table_items[i].item_desc,
                        // c:table_items[i].,
                        // d:table_items[i].mta_no,
                        e:table_items[i].cap_each,
                        f:table_items[i].dia,
                        g:table_items[i].tl_tl,
                        h:table_items[i].moc,
                        i:table_items[i].dpb,
                        j:table_items[i].weights,
                        k:table_items[i].quantity,
                    })
                
               }
            //     var udata = [];
            //    udata.push(data);
             
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
                dataSource: [data],
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

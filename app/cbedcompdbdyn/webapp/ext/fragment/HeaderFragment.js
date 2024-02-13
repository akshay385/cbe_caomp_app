sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/export/Spreadsheet",
    "sap/ui/model/json/JSONModel",
    'sap/ui/export/library',
], function (MessageToast, Spreadsheet,JSONModel,exportLibrary) {
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
        
            var oModel = new JSONModel(data);
        
            // Update the columns array to match the columns in your Excel spreadsheet
            var oSpreadsheet = new sap.ui.export.Spreadsheet({
                workbook: {
                    columns: [
                        { label: 'Client', property: 'Client', type: EdmType.String },
                        { label: 'Project', property: 'Project', type: EdmType.String },
                        { label: 'Indent', property: 'Indent', type: EdmType.String },
                        { label: 'Item No', property: 'itemno', type: EdmType.String },
                        { label: 'Item Description', property: 'item_desc', type: EdmType.String },
                        { label: 'Capacity Each (Cu Mtr)', property: 'capacity_each_in_cu_mtr', type: EdmType.String },
                        { label: 'Dia (mm)', property: 'dia_in_mm', type: EdmType.String },
                        { label: 'TL to TL Length (mm)', property: 'tl_to_tl_len', type: EdmType.String },
                        { label: 'MOC', property: 'moc', type: EdmType.String },
                        { label: 'Design Pressure (bar)', property: 'design_pressure_bar', type: EdmType.String },
                        { label: 'Weights (Kgs)', property: 'weights_in_kg', type: EdmType.String },
                        { label: 'Qty No', property: 'qty_no', type: EdmType.String }
                    ],
                    context: {
                        application: 'SAP UI5 Export Sample',
                        author: 'Sample'
                    },
                    hierarchyLevel: 'level'
                },
                // Pass the parsed data array to the dataSource property
                dataSource: data,
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

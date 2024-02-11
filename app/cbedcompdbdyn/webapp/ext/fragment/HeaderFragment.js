sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onRowExpand: function(oEvent) {debugger
            // MessageToast.show("Custom handler invoked.");
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

            

        },
        onColumnExpand: function(oEvent) {debugger
            // MessageToast.show("Custom handler invoked.");
            var sectionslist = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].getSubSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[1].mAggregations.content[0].mAggregations.items;
            for (let i = 0; i < sectionslist.length; i++) {
                let totalsectionvboxlen = sectionslist[0].getItems()[1].getItems().length
                var sectionsicon = sectionslist[i].getItems()[1].getItems()[totalsectionvboxlen - 1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[2].mAggregations.header.mAggregations.items[1];
                if (sectionsicon.getSrc()=="sap-icon://expand") {
                    sectionsicon.firePress();
                }
                
                
            }
        }
    };
});

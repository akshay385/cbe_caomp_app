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
            MessageToast.show("Custom handler invoked.");
        }
    };
});

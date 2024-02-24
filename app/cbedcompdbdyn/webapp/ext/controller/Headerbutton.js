sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onpress: function(oEvent) {
            debugger
            let headeractions_content = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomAction::custbutton").getParent();
                headeractions_content.destroyActions();
                headeractions_content.addAction(new sap.m.Button('sdfjlkds12asdsadsadsad34',{
                    text:'Hello'
                }))
                headeractions_content.addAction(new sap.m.Button('sdfjlkds4412asdsadsadsad34',{
                    text:'Hello'
                }))

            MessageToast.show("Custom handler invoked.");
        }
    };
});

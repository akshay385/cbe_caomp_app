sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onChangefun: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
            debugger
        }
    };
});

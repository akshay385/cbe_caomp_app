sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        collapseFunD: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});

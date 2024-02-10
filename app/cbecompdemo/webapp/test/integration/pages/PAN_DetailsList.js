sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'cbecompdemo',
            componentId: 'PAN_DetailsList',
            contextPath: '/PAN_Details'
        },
        CustomPageDefinitions
    );
});
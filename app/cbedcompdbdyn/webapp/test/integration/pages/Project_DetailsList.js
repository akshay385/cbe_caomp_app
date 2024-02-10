sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'cbedcompdbdyn',
            componentId: 'Project_DetailsList',
            contextPath: '/Project_Details'
        },
        CustomPageDefinitions
    );
});
sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cbecomp',
            componentId: 'ItemObjectPage',
            contextPath: '/PAN_Details'
        },
        CustomPageDefinitions
    );
});
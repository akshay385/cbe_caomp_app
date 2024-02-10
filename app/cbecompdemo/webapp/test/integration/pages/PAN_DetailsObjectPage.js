sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cbecompdemo',
            componentId: 'PAN_DetailsObjectPage',
            contextPath: '/PAN_Details'
        },
        CustomPageDefinitions
    );
});
sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cbedcompdbdyn',
            componentId: 'Project_DetailsObjectPage',
            contextPath: '/Project_Details'
        },
        CustomPageDefinitions
    );
});
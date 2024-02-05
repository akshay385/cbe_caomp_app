sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cbecomp',
            componentId: 'supplierObjectPage',
            contextPath: '/PAN_Details/supplier_rel'
        },
        CustomPageDefinitions
    );
});
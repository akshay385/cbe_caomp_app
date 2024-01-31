sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cbe/cbecompdyn/test/integration/FirstJourney',
		'cbe/cbecompdyn/test/integration/pages/ItemList',
		'cbe/cbecompdyn/test/integration/pages/ItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, ItemList, ItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cbe/cbecompdyn') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheItemList: ItemList,
					onTheItemObjectPage: ItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);
sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cbecompdemo/test/integration/FirstJourney',
		'cbecompdemo/test/integration/pages/PAN_DetailsList',
		'cbecompdemo/test/integration/pages/PAN_DetailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, PAN_DetailsList, PAN_DetailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cbecompdemo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePAN_DetailsList: PAN_DetailsList,
					onThePAN_DetailsObjectPage: PAN_DetailsObjectPage
                }
            },
            opaJourney.run
        );
    }
);
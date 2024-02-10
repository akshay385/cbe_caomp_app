sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cbedcompdbdyn/test/integration/FirstJourney',
		'cbedcompdbdyn/test/integration/pages/Project_DetailsList',
		'cbedcompdbdyn/test/integration/pages/Project_DetailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Project_DetailsList, Project_DetailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cbedcompdbdyn') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProject_DetailsList: Project_DetailsList,
					onTheProject_DetailsObjectPage: Project_DetailsObjectPage
                }
            },
            opaJourney.run
        );
    }
);
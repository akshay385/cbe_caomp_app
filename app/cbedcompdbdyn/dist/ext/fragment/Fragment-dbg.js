sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onPress_includingtax: function (oEvent) {
            debugger
            // MessageToast.show("Custom handler invoked.");
            var hBox = oEvent.getSource().getParent().getParent().getParent().getParent();
            if (oEvent.getSource().getParent().getParent().getItems()[7].getVisible() == true) {
                oEvent.getSource().getParent().getParent().getItems()[7].setVisible(false)
                oEvent.getSource().getParent().getParent().getItems()[8].setVisible(false)
                oEvent.getSource().getParent().getParent().getItems()[9].setVisible(false)
                oEvent.getSource().getParent().getParent().getItems()[10].setVisible(false)
                oEvent.getSource().getParent().getParent().getItems()[11].setVisible(false)
                oEvent.getSource().setSrc("sap-icon://navigation-right-arrow");
            }
            else {
                oEvent.getSource().getParent().getParent().getItems()[7].setVisible(true)
                oEvent.getSource().getParent().getParent().getItems()[8].setVisible(true)
                oEvent.getSource().getParent().getParent().getItems()[9].setVisible(true)
                oEvent.getSource().getParent().getParent().getItems()[10].setVisible(true)
                oEvent.getSource().getParent().getParent().getItems()[11].setVisible(true)
                oEvent.getSource().setSrc("sap-icon://navigation-up-arrow");
            }

            var listofsections = hBox.getItems()[1].getContent()[0].getItems();
            for (let i = 0; i < listofsections.length; i++) {
                for (let k = 0; k < listofsections[i].getItems()[1].getItems().length; k++) {
                    var oTablesection = listofsections[i].getItems()[1].getItems()[k].mAggregations.items[1].mAggregations.items[1];
                    let len = oTablesection.getItems().length
                    for (let j = (len - 4); j >= (len - 8); j--) {
                        if (oTablesection.getItems()[j].getVisible() == true) {
                            oTablesection.getItems()[j].setVisible(false)
                        }
                        else {
                            oTablesection.getItems()[j].setVisible(true)
                        }
                    }
                }


            }


        },
        onPress_priccebasis: function (oEvent) {
            debugger
            // MessageToast.show("Custom handler invoked.");
            var leftitems = oEvent.getSource().getParent().getParent().getItems();
            var hBox = oEvent.getSource().getParent().getParent().getParent().getParent();
            let leftsection = hBox.getItems()[1].getContent()[0].getItems();

            for (let j = 0; j < leftsection.length; j++) {
                if (leftsection[j].getItems()[2].getVisible() == true) {
                    leftsection[j].getItems()[2].setVisible(false);
                }
                else {
                    leftsection[j].getItems()[2].setVisible(true);
                }

            }
            if (oEvent.getSource().getSrc()=="sap-icon://navigation-down-arrow") {
                oEvent.getSource().setSrc("sap-icon://navigation-right-arrow")
            }
            else{
                oEvent.getSource().setSrc("sap-icon://navigation-down-arrow")
            }

            for (let i = 16; i < leftitems.length; i++) {
                if (leftitems[i].getVisible() == true) {
                    leftitems[i].setVisible(false);
                    // oEvent.getSource().getParent().getItems()[0].setVisible(false);//Price details text
                }
                else {
                    leftitems[i].setVisible(true);
                    // oEvent.getSource().getParent().getItems()[0].setVisible(true);//Price details text
                }

            }
        },
        onPress_forwaring: function (oEvent) {
            debugger
            // MessageToast.show("Custom handler invoked.");
            var hBox = oEvent.getSource().getParent().getParent().getParent().getParent();
            if (oEvent.getSource().getParent().getParent().getItems()[2].getVisible() == true) {
                oEvent.getSource().getParent().getParent().getItems()[2].setVisible(false)
                oEvent.getSource().getParent().getParent().getItems()[3].setVisible(false)
                oEvent.getSource().getParent().getParent().getItems()[4].setVisible(false)
                oEvent.getSource().setSrc("sap-icon://navigation-right-arrow");

            }
            else {
                oEvent.getSource().getParent().getParent().getItems()[2].setVisible(true)
                oEvent.getSource().getParent().getParent().getItems()[3].setVisible(true)
                oEvent.getSource().getParent().getParent().getItems()[4].setVisible(true)
                oEvent.getSource().setSrc("sap-icon://navigation-up-arrow");

            }

            var listofsections = hBox.getItems()[1].getContent()[0].getItems();
            for (let i = 0; i < listofsections.length; i++) {
                for (let k = 0; k < listofsections[i].getItems()[1].getItems().length; k++) {
                    var oTablesection = listofsections[i].getItems()[1].getItems()[k].mAggregations.items[1].mAggregations.items[1];
                    let len = oTablesection.getItems().length
                    for (let j = (len - 11); j > (len - 14); j--) {
                        if (oTablesection.getItems()[j].getVisible() == true) {
                            oTablesection.getItems()[j].setVisible(false)
                        }
                        else {
                            oTablesection.getItems()[j].setVisible(true)
                        }
                    }

                }

            }
        }
    };
});

sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onPress: function (oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        onChangefun: function (oEvent) {
            debugger
            oEvent.getSource().getParent().getItems()[1].getItems()[0].setVisible(false);
            oEvent.getSource().getParent().getItems()[1].getItems()[1].setVisible(false);
            oEvent.getSource().getParent().getItems()[1].getItems()[2].setVisible(false);
            if (oEvent.getSource().mProperties.value == "Original Offer") {
                oEvent.getSource().getParent().getItems()[1].getItems()[0].setVisible(true)
            } else if (oEvent.getSource().mProperties.value == "Reverse Auction Offer") {
                oEvent.getSource().getParent().getItems()[1].getItems()[1].setVisible(true)
            }
            else {
                oEvent.getSource().getParent().getItems()[1].getItems()[2].setVisible(true)
            }
        },
        onChangefun1: function (oEvent) {
            debugger
            oEvent.getSource().getParent().getItems()[1].getItems()[0].setVisible(false);
            oEvent.getSource().getParent().getItems()[1].getItems()[1].setVisible(false);
            if (oEvent.getSource().mProperties.value == "Original and Final Offer") {
                oEvent.getSource().getParent().getItems()[1].getItems()[0].setVisible(true)
            } else if (oEvent.getSource().mProperties.value == "Final negotiated Offer") {
                oEvent.getSource().getParent().getItems()[1].getItems()[1].setVisible(true)
            }
            else {
                oEvent.getSource().getParent().getItems()[1].getItems()[2].setVisible(true)
            }
        },
        onChangefun2: function (oEvent) {
            debugger
            oEvent.getSource().getParent().getItems()[1].getItems()[0].setVisible(false);
            oEvent.getSource().getParent().getItems()[1].getItems()[1].setVisible(false);
            if (oEvent.getSource().mProperties.value == "Original Offer") {
                oEvent.getSource().getParent().getItems()[1].getItems()[0].setVisible(true)
            } else if (oEvent.getSource().mProperties.value == "Final Offer") {
                oEvent.getSource().getParent().getItems()[1].getItems()[1].setVisible(true)
            }
            else {
                oEvent.getSource().getParent().getItems()[1].getItems()[2].setVisible(true)
            }
        },
        onChangefun3: function (oEvent) {
            debugger
            oEvent.getSource().getParent().getItems()[1].getItems()[0].setVisible(false);
            oEvent.getSource().getParent().getItems()[1].getItems()[1].setVisible(false);
            if (oEvent.getSource().mProperties.value == "Original Offer") {
                oEvent.getSource().getParent().getItems()[1].getItems()[0].setVisible(true)
            } else if (oEvent.getSource().mProperties.value == "Online Reverse Auction Offer") {
                oEvent.getSource().getParent().getItems()[1].getItems()[1].setVisible(true)
            }
            else {
                oEvent.getSource().getParent().getItems()[1].getItems()[2].setVisible(true)
            }
        },
        collapseFunB: function (oEvent) {
            debugger
            var doc_charges = oEvent.getSource().getParent().getParent().getParent().getParent().getFormElements()[5];
            var main_hbox = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent();

            var oVbox1 = main_hbox.getItems()[1].getContent()[0].getItems()[0];
            var oVbox2 = main_hbox.getItems()[1].getContent()[0].getItems()[1];
            var oVbox3 = main_hbox.getItems()[1].getContent()[0].getItems()[2];
            var oVbox4 = main_hbox.getItems()[1].getContent()[0].getItems()[3];
            var oVbox5 = main_hbox.getItems()[1].getContent()[0].getItems()[4];

            var v1_doc = oVbox1.getItems()[1].getItems()[0].getItems()[5].getItems()[6];
            var v11_doc = oVbox1.getItems()[1].getItems()[1].getItems()[5].getItems()[6];
            var v12_doc = oVbox1.getItems()[1].getItems()[2].getItems()[5].getItems()[6];
            var v2_doc = oVbox2.getItems()[1].getItems()[0].getItems()[5].getItems()[6];
            var v22_doc = oVbox2.getItems()[1].getItems()[1].getItems()[5].getItems()[6];
            var v3_doc = oVbox3.getItems()[1].getItems()[0].getItems()[5].getItems()[6];
            var v33_doc = oVbox3.getItems()[1].getItems()[1].getItems()[5].getItems()[6];
            var v4_doc = oVbox4.getItems()[1].getItems()[0].getItems()[5].getItems()[6];
            var v44_doc = oVbox4.getItems()[1].getItems()[1].getItems()[5].getItems()[6];
            var v5_doc = oVbox5.getItems()[1].getItems()[0].getItems()[5].getItems()[6];
            var v55_doc = oVbox5.getItems()[1].getItems()[1].getItems()[5].getItems()[6];


            if (doc_charges.getVisible() == true) {
                doc_charges.setVisible(false);
                v1_doc.setVisible(false);
                v11_doc.setVisible(false);
                v12_doc.setVisible(false);
                v2_doc.setVisible(false);
                v22_doc.setVisible(false);
                v3_doc.setVisible(false);
                v33_doc.setVisible(false);
                v4_doc.setVisible(false);
                v44_doc.setVisible(false);
                v5_doc.setVisible(false);
                v55_doc.setVisible(false);
                oEvent.getSource().mProperties.src = "sap-icon://navigation-right-arrow"
            }
            else {
                doc_charges.setVisible(true);
                v1_doc.setVisible(true);
                v11_doc.setVisible(true);
                v12_doc.setVisible(true);
                v2_doc.setVisible(true);
                v22_doc.setVisible(true);
                v3_doc.setVisible(true);
                v33_doc.setVisible(true);
                v4_doc.setVisible(true);
                v44_doc.setVisible(true);
                v5_doc.setVisible(true);
                v55_doc.setVisible(true);
                oEvent.getSource().mProperties.src = "sap-icon://navigation-up-arrow"
            }


        },
        collapseFunD: function (oEvent) {
            debugger
            var excel_d_group = oEvent.getSource().getParent().getParent().getParent().getParent().mAggregations.formElements[8];

            var oTablesHbox = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[0].mAggregations.items[1];
            var oTablesHbox1 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[1].mAggregations.items[1];
            var oTablesHbox2 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[2].mAggregations.items[1];
            var oTablesHbox3 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[3].mAggregations.items[1];
            var oTablesHbox4 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[4].mAggregations.items[1];

            var oVbox = oTablesHbox.getParent().getItems()[2].mAggregations.items[1];
            var oVbox1 = oTablesHbox1.getParent().getItems()[2].mAggregations.items[1];
            var oVbox2 = oTablesHbox2.getParent().getItems()[2].mAggregations.items[1];
            var oVbox3 = oTablesHbox3.getParent().getItems()[2].mAggregations.items[1];
            var oVbox4 = oTablesHbox4.getParent().getItems()[2].mAggregations.items[1];


            if (excel_d_group.getVisible() == true) {
                excel_d_group.setVisible(false);


                oEvent.getSource().mProperties.src = "sap-icon://navigation-right-arrow"
                // Vendor1
                let tabitems
                let tabfrag = oTablesHbox.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(false)
                            // item.addStyleClass("CellBold")
                        }
                    })
                })

                // Vendor 2

                tabfrag = oTablesHbox1.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(false)
                        }
                    })
                })

                // Vendor 3

                tabfrag = oTablesHbox2.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(false)
                        }
                    })
                })

                // Vendor 4

                tabfrag = oTablesHbox3.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(false)
                        }
                    })
                })


                //Vendor 5

                tabfrag = oTablesHbox4.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(false)
                        }
                    })
                })

            }
            else {
                excel_d_group.setVisible(true);
                oEvent.getSource().mProperties.src = "sap-icon://navigation-up-arrow"
                // Vendor1
                let tabitems
                let tabfrag = oTablesHbox.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(true)
                        }
                    })
                })

                // Vendor 2

                tabfrag = oTablesHbox1.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(true)
                        }
                    })
                })

                // Vendor 3

                tabfrag = oTablesHbox2.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(true)
                        }
                    })
                })

                // Vendor 4

                tabfrag = oTablesHbox3.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(true)
                        }
                    })
                })


                //Vendor 5

                tabfrag = oTablesHbox4.getItems();
                tabfrag.forEach((frag) => {
                    tabitems = frag.getItems()[5].getItems();
                    tabitems.forEach((item, index) => {
                        // if(index == 15 ){
                        // 	item.setVisible(false)
                        // } else 
                        if (index >= 9 && index <= 13) {
                            item.setVisible(true)
                        }
                    })
                })
            }
        },
        collapseFunG: function (oEvent) {
            var oTablesHbox = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[0].mAggregations.items[1];
            var oTablesHbox1 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[1].mAggregations.items[1];
            var oTablesHbox2 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[2].mAggregations.items[1];
            var oTablesHbox3 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[3].mAggregations.items[1];
            var oTablesHbox4 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[4].mAggregations.items[1];

            var oVbox = oTablesHbox.getParent().getItems()[2];//.mAggregations.items[1];
            var oVbox1 = oTablesHbox1.getParent().getItems()[2];//.mAggregations.items[1];
            var oVbox2 = oTablesHbox2.getParent().getItems()[2];//.mAggregations.items[1];
            var oVbox3 = oTablesHbox3.getParent().getItems()[2];//.mAggregations.items[1];
            var oVbox4 = oTablesHbox4.getParent().getItems()[2];//.mAggregations.items[1];

            debugger
            var excel_g_group = oEvent.getSource().getParent().getParent().getParent().getParent().mAggregations.formElements[14];

            if (excel_g_group.getVisible() == true) {
                excel_g_group.setVisible(false);
                oVbox.setVisible(false);
                oVbox1.setVisible(false);
                oVbox2.setVisible(false);
                oVbox3.setVisible(false);
                oVbox4.setVisible(false);
                oEvent.getSource().mProperties.src = "sap-icon://navigation-right-arrow"
            } else {
                excel_g_group.setVisible(true);
                oVbox.setVisible(true);
                oVbox1.setVisible(true);
                oVbox2.setVisible(true);
                oVbox3.setVisible(true);
                oVbox4.setVisible(true);
                oEvent.getSource().mProperties.src = "sap-icon://navigation-down-arrow"
            }
        }
    };
});

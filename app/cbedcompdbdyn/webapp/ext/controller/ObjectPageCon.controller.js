sap.ui.define(['sap/ui/core/mvc/ControllerExtension', 'sap/m/MessageToast'], function (ControllerExtension, MessageToast) {
	'use strict';

	return ControllerExtension.extend('cbedcompdbdyn.ext.controller.ObjectPageCon', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf cbedcompdbdyn.ext.controller.ObjectPageCon
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				// this.onAfterBinding();
				// window.location.reload(true);
			},
			routing: {
				onAfterBinding: async function (oBindingContext) {
					try {
						debugger
						// let testheaderbutton1 = this.base.getView().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::ObjectPage-OPHeaderContent");
						// testheaderbutton1.addContent(new sap.ui.core.Icon("icon111",{
						// 	src:"sap-icon://expand"
						// }))
						function generateUniqueId() {
							// Generate a random number
							var randomNumber = Math.floor(Math.random() * 1000000);

							// Get the current timestamp
							var timestamp = new Date().getTime();

							// Combine timestamp and random number to create a unique ID
							var uniqueId = timestamp + '-' + randomNumber;

							return uniqueId;
						}
						// window.location.reload(true);
						var tempspath = oBindingContext.sPath;
						var project_id = tempspath.match(/'([^']+)'/);
						sap.ui.core.BusyIndicator.show();

						//Base URI for deployment
						// var base_uri_value = this.base.getAppComponent().getManifestObject()._oBaseUri._string;
						var base_uri_value = "";

						//Project Info
						if (base_uri_value) {
							var settings = {
								url: base_uri_value + 'odata/v4/catalogcbeservice/Project_Details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
								method: "GET",
							}
						}
						else {
							var settings = {
								url: '/odata/v4/catalogcbeservice/Project_Details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
								method: "GET",
							}
						}

						var project_details;
						await $.ajax(settings).done(async (results, textStatus, request) => {
							project_details = results.value;
						}).fail((err) => {
							console.log(err);
							MessageToast.show(err)
						});

						//list of items
						if (base_uri_value) {
							var settings = {
								url: base_uri_value + 'odata/v4/catalogcbeservice/Item_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
								method: "GET",
							}
						}
						else {
							var settings = {
								url: '/odata/v4/catalogcbeservice/Item_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
								method: "GET",
							}
						}

						var list_of_items;
						await $.ajax(settings).done(async (results, textStatus, request) => {
							list_of_items = results.value;
						}).fail((err) => {
							console.log(err);
							MessageToast.show(err)
						});

						//vendo list
						if (base_uri_value) {
							var settings = {
								url: base_uri_value + 'odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
								method: "GET",
							}
						} else {
							var settings = {
								url: '/odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
								method: "GET",
							}
						}

						var vendor_list;
						await $.ajax(settings).done(async (results, textStatus, request) => {
							vendor_list = results.value;
						}).fail((err) => {
							console.log(err);
						});

						//PAN Info
						if (base_uri_value) {
							var settings = {
								url: base_uri_value + 'odata/v4/catalogcbeservice/PAN_Info',
								method: "GET",
							}
						} else {
							var settings = {
								url: '/odata/v4/catalogcbeservice/PAN_Info',
								method: "GET",
							}
						}

						var pan_info;
						await $.ajax(settings).done(async (results, textStatus, request) => {
							pan_info = results.value;
						}).fail((err) => {
							console.log(err);
						});

						//vendor Response
						if (base_uri_value) {
							var settings = {
								url: base_uri_value + 'odata/v4/catalogcbeservice/PAN_vendor_reponse_details',
								method: "GET",
							}
						} else {
							var settings = {
								url: '/odata/v4/catalogcbeservice/PAN_vendor_reponse_details',
								method: "GET",
							}
						}

						var vendor_response_deatils;
						await $.ajax(settings).done(async (results, textStatus, request) => {
							vendor_response_deatils = results.value;
						}).fail((err) => {
							console.log(err);
						});

						var omainHBox = this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();

						debugger
						let lefttablecolms = omainHBox.getItems()[0].getItems()[2].getItems()[0].getColumns();
						for (let i = 0; i < lefttablecolms.length; i++) {
							lefttablecolms[i].setStyleClass("custcolorclass");
						}


						// omainHBox.refreshAggregation();
						// omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[0].getItems()[1].setText(`${DataGiven.Indent}`);
						omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[0].getItems()[0].setVisible(false);
						//Project
						omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[1].getItems()[1].setText(`${" " + project_details[0]?.Project_Description ?? ' '}`);
						omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[1].getItems()[1].setTextAlign("End");
						//indent
						// omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[2].getItems()[1].setText(`${DataGiven.Client}`);
						omainHBox.getItems()[0].getItems()[0].getItems()[0].getItems()[2].getItems()[0].setVisible(false);

						var itemstable = omainHBox.getItems()[0].getItems()[2].getItems()[0];
						var cylindricaldata_hbox = omainHBox.getItems()[0].getItems()[1].getItems()[0];
						if (!cylindricaldata_hbox.getItems()[1]) {
							cylindricaldata_hbox.addItem(new sap.ui.core.Icon(`${"cylindricaldtaicon" + generateUniqueId()}`, {
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								width: "20px",
								press: function (oEvent) {
									debugger
									var vbox_omainhbox = omainHBox.getItems()[0];
									let total_basic_pricing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--total_basic_pricing");
									let temp_total_basic_pricing;
									let total_including_tax = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--newItemID1");
									let temp_total_including_tax;



									if (vbox_omainhbox.getWidth() == "30%") {
										itemstable.setFixedLayout(false);
										vbox_omainhbox.setWidth("80%");
										oEvent.getSource().setSrc("sap-icon://collapse");
										//
										// temp_total_basic_pricing = total_basic_pricing.getText();
										// total_basic_pricing.setText(total_basic_pricing.getTooltip());
										// total_basic_pricing.setTooltip(temp_total_basic_pricing);

										// //
										// temp_total_including_tax = total_including_tax.getText();
										// total_including_tax.setText(total_including_tax.getTooltip());
										// total_including_tax.setTooltip(temp_total_including_tax);

									}
									else {
										itemstable.setFixedLayout(true);
										vbox_omainhbox.setWidth("30%");
										oEvent.getSource().setSrc("sap-icon://expand");
										//
										// temp_total_basic_pricing = total_basic_pricing.getTooltip();
										// total_basic_pricing.setText(total_basic_pricing.getTooltip());
										// total_basic_pricing.setTooltip(temp_total_basic_pricing);

										// //
										// temp_total_including_tax = total_including_tax.getTooltip();
										// total_including_tax.setText(total_including_tax.getTooltip());
										// total_including_tax.setTooltip(temp_total_including_tax);

									}

								}
							}))
						}

						itemstable.destroyItems();

						// itemstable.refresh();

						const uniqueItemCodes = new Set();
						const uniqueItems = [];

						// Iterate over list_of_items to filter unique items based on Item_Code
						list_of_items.forEach(item => {
							if (!uniqueItemCodes.has(item.Item_Code)) {
								uniqueItemCodes.add(item.Item_Code);
								uniqueItems.push(item);
							}
						});

						for (let i = 0; i < uniqueItems.length; i++) {

							itemstable.addItem(new sap.m.ColumnListItem(`${"collistitem" + (i + 1)}`));
							let columnlist = itemstable.getItems()[i];

							let itemdesc = new sap.m.Text(`${"itemdesc" + (i + 1)}`, {
								text: `${list_of_items[i]?.Item_Short_Description ?? ' '}`,
								tooltip: `${list_of_items[i]?.Item_Short_Description ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(itemdesc);

							let tag_no = new sap.m.Text(`${"tag_no" + (i + 1)}`, {
								text: `${list_of_items[i]?.tag_no ?? ' '}`,
								tooltip: `${list_of_items[i]?.tag_no ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(tag_no);

							let types_of_vessel = new sap.m.Text(`${"types_of_vessel" + (i + 1)}`, {
								text: `${list_of_items[i]?.types_of_vessel ?? ' '}`,
								tooltip: `${list_of_items[i]?.types_of_vessel ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(types_of_vessel);

							let capacity_each_in_cu_mtr = new sap.m.Text(`${"capacity_each_in_cu_mtr" + (i + 1)}`, {
								text: `${list_of_items[i]?.capactity_each ?? ' '}`,
								tooltip: `${list_of_items[i]?.capactity_each ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(capacity_each_in_cu_mtr);

							let dia_in_mm = new sap.m.Text(`${"dia_in_mm" + (i + 1)}`, {
								text: `${list_of_items[i]?.dia ?? ' '}`,
								tooltip: `${list_of_items[i]?.dia ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(dia_in_mm);

							let tl_to_tl_len = new sap.m.Text(`${"tl_to_tl_len" + (i + 1)}`, {
								text: `${list_of_items[i]?.tl_tl_len ?? ' '}`,
								tooltip: `${list_of_items[i]?.tl_tl_len ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(tl_to_tl_len);

							let moc = new sap.m.Text(`${"moc" + (i + 1)}`, {
								text: `${list_of_items[i]?.moc ?? ' '}`,
								tooltip: `${list_of_items[i]?.moc ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(moc);

							let design_pressure_bar = new sap.m.Text(`${"design_pressure_bar" + (i + 1)}`, {
								text: `${list_of_items[i]?.design_pb ?? ' '}`,
								tooltip: `${list_of_items[i]?.design_pb ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(design_pressure_bar);

							let weights_in_kg = new sap.m.Text(`${"weights_in_kg" + (i + 1)}`, {
								text: `${list_of_items[i]?.weights ?? ' '}`,
								tooltip: `${list_of_items[i]?.weights ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(weights_in_kg);

							let qty_no = new sap.m.Text(`${"qty_no" + (i + 1)}`, {
								text: `${list_of_items[i]?.Quantity ?? ' '}`,
								tooltip: `${list_of_items[i]?.Quantity ?? ' '}`,
								wrapping: false
							})
							columnlist.addCell(qty_no);

						}

						////////////////////////////////////////////////////////////////////////////////////////////////////////////
						var Scrollhbox = omainHBox.getItems()[1].getContent()[0];
						Scrollhbox.destroyItems();

						//vendor details
						if (base_uri_value) {
							var settings = {
								url: base_uri_value + 'odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
								method: "GET",
							}
						} else {
							var settings = {
								url: '/odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
								method: "GET",
							}
						}

						var vendorslist;
						await $.ajax(settings).done(async (results, textStatus, request) => {
							vendorslist = results.value;
						}).fail((err) => {
							console.log(err);
						});

						let processedVendorIds = new Set();

						let classitemiter = 0;

						for (let i = 0; i < vendorslist.length; i++) {

							const vendorId = vendorslist[i].vendor_code;


							// Check if the vendor ID has already been processed
							if (processedVendorIds.has(vendorId)) {
								continue; // Skip the iteration if already processed
							}

							// Add the current vendor ID to the set of processed IDs
							processedVendorIds.add(vendorId);


							Scrollhbox.addItem(new sap.m.VBox(`${"sectionvbox" + (i + 1)}`))
							let curr_sectionvbox = Scrollhbox.getItems()[classitemiter];
							classitemiter++;
							debugger
							curr_sectionvbox.addStyleClass("BorderClass");

							curr_sectionvbox.addItem(new sap.m.VBox(`${"vboxsuppnameloc" + (i + 1)}`));
							curr_sectionvbox.addItem(new sap.m.HBox(`${"hbmiddlesection" + (i + 1)}`));
							curr_sectionvbox.addItem(new sap.m.VBox(`${"vbox_last_section" + (i + 1)}`));


							//3rd vbox final one
							var vbox_last_section = curr_sectionvbox.getItems()[2];
							vbox_last_section.setVisible(false);

							var combobox = new sap.m.ComboBox(`${"combobox" + (i + 1)}`, {
								change: function (oEvent) {

									for (let index = 0; index < oEvent.getSource().getParent().getItems()[1].getItems().length; index++) {
										if (oEvent.getSource().getItems()[index].getText() == oEvent.getSource().getValue()) {
											oEvent.getSource().getParent().getItems()[1].getItems()[index].setVisible(true);
										}
										else {
											oEvent.getSource().getParent().getItems()[1].getItems()[index].setVisible(false);
										}

									}
								}
							});
							vbox_last_section.addItem(combobox);

							debugger
							var hboxcombo = new sap.m.HBox(`${"hboxcombo" + (i + 1)}`);
							vbox_last_section.addItem(hboxcombo);

							var last_hcombobox = vbox_last_section.getItems()[1];

							// for (let l = 0; l < DataGiven.items[0].bidders.length; l++) {
							// 	var 

							// }
							/////////////////////////////////////////////////////
							//vbox1
							let vboxsuppnameloc = curr_sectionvbox.getItems()[0];


							//Supplier
							vboxsuppnameloc.addItem(new sap.m.Title(`${"SupplierName" + (i + 1)}`, {
								text: `${vendorslist[i].Vendor_Name ? vendorslist[i].Vendor_Name : ' '}`
							}));
							vboxsuppnameloc.getItems()[0].addStyleClass('titleStyleClass');

							//Location
							vboxsuppnameloc.addItem(new sap.m.Title(`${"SupplierLocation" + (i + 1)}`, {
								text: `${vendorslist[i].Vendor_Location ? vendorslist[i].Vendor_Location : ' '}`
							}));

							vboxsuppnameloc.getItems()[1].addStyleClass('titleStyleClass');

							debugger
							vboxsuppnameloc.addStyleClass("v11spaceBetweenclass");

							/////////////////////////////////////////////////////////////////////////////////////////////////////////
							//Hbox middle

							var hbmiddlesection = curr_sectionvbox.getItems()[1];

							debugger
							let k = 0;
							let iterator = 0;
							do {
								if (vendorslist[k].ProjectId == project_id[1] && vendorslist[k].Proposed_Vendor_Code == vendorslist[i].Proposed_Vendor_Code) {
									hbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection" + generateUniqueId()}`, {
										// width: "500px"
									}));

									var itmlen = hbmiddlesection.getItems().length
									var vbmiddlesection = hbmiddlesection.getItems()[itmlen - 1];
									vbmiddlesection.addStyleClass("customVBox");

									vbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb" + generateUniqueId()}`));

									var vbmiddlesection_innervb = vbmiddlesection.getItems()[0];

									vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_qtn_ref" + generateUniqueId()}`, {
										text: `${vendorslist[k]?.qtn_ref ?? 'NA'}`,
									}));
									vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_date" + generateUniqueId()}`, {
										text: `${vendorslist[k]?.date ?? 'NA'}`
									}));
									vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_validity" + generateUniqueId()}`, {
										text: `${vendorslist[k]?.validity ?? 'NA'}`
									}));
									vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_cylindrical_space" + generateUniqueId()}`, {
										text: ""
									}));
									vbmiddlesection_innervb.addStyleClass("vbmiddlesectionclass");

									var inner_vbox = new sap.m.VBox(`${"innervbox" + generateUniqueId()}`, {
										// width: "100%"
									});
									vbmiddlesection.addItem(inner_vbox);

									debugger
									let matchedObject = pan_info.find(item => item.PAN_Number === vendorslist[k].PAN_Number);

									inner_vbox.addItem(new sap.m.Label(`${"original_offer" + generateUniqueId()}`, {
										text: `${matchedObject?.status_a ?? ' '}`,
										design: "Bold"
									}));

									var oTable = new sap.m.Table({
										id: `${"offer" + generateUniqueId()}`,
										class: "tableBorder",
										growing: true,
										growingThreshold: 20,
										width: "350px",
										fixedLayout: true
									});

									debugger
									oTable.addStyleClass("tableBorder");

									inner_vbox.addItem(oTable);

									var oColumn1 = new sap.m.Column({
										id: `${"unit_rate" + generateUniqueId()}`,
										header: new sap.m.Label({ text: "Unit Rate", design: "Bold", wrapping: false }),
										styleClass:'custcolorclass'
									});

									var oColumn2 = new sap.m.Column({
										id: `${"unit_rate_per" + generateUniqueId()}`,
										header: new sap.m.Label({ text: "Rate per Unit", design: "Bold", wrapping: false }),
										styleClass:'custcolorclass'
									});

									debugger
									var oColumn3 = new sap.m.Column({
										id: `${"total_amt_offer" + generateUniqueId()}`,
										header: new sap.m.HBox(),
										styleClass:'custcolorclass'

									});

									oTable.addColumn(oColumn1);
									oTable.addColumn(oColumn2);
									oTable.addColumn(oColumn3);

									//Total amount expand property

									var colheader = oTable.getColumns()[2].getHeader();

									colheader.addItem(new sap.m.Label({
										text: "Total Amount",
										design: "Bold"
									}))


									//end of total amount 

									var uniquelistitem = [];
									var grandTotalAmount = 0
									var grandTotalUnit = '';
									let cnt = 0;
									let processedOfferIds = new Set();



									// Filter list_of_items based on PAN_Number and Proposed_Vendor_Code
									const filteredItems = list_of_items.filter(item =>
										item.PAN_Number === vendorslist[k].PAN_Number &&
										item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
									);

									debugger
									// Iterate over uniqueItems
									for (let i = 0; i < uniqueItems.length; i++) {

										const currentItem = uniqueItems[i];
										const foundItem = filteredItems.find(item => item.Item_Code === currentItem.Item_Code);

										if (foundItem) {
											// Found item, create ColumnListItem with data
											var AmtWithoutCommas = foundItem.Amount.replace(/,/g, '') ?? 0;
											var quantityWithoutCommas = foundItem.Quantity.replace(/,/g, '') ?? 0;

											const total_amount_value = Number(AmtWithoutCommas ?? 0) * Number(quantityWithoutCommas ?? 0);
											const total_amount_display = `${total_amount_value} ${foundItem.Unit_Price ?? ' '}`;

											grandTotalAmount += total_amount_value;
											grandTotalUnit = foundItem.Unit_Price;

											const oItem = new sap.m.ColumnListItem({
												id: `${"item1data" + generateUniqueId()}`,
												cells: [
													new sap.m.Text({ text: `${AmtWithoutCommas ?? ' '} ${foundItem.Unit_Price}` }),
													new sap.m.Text({ text: `${foundItem.unit_rate_per_unit ?? ' '}` }),
													new sap.m.Text({ text: total_amount_display }),
												]
											});

											oTable.addItem(oItem);
										} else {
											// Item not found, create empty row
											const oItem = new sap.m.ColumnListItem({
												id: `${"item1data" + generateUniqueId()}`,
												cells: [
													new sap.m.Text({ text: "" }),
													new sap.m.Text({ text: "" }),
													new sap.m.Text({ text: "" })
												]
											});

											oTable.addItem(oItem);
										}
									}
									////////////////////////////////////////////////////////////////////////////////
									debugger
									const vendorresponse_selecteditem = vendor_response_deatils.filter(item =>
										item.PAN_Number === vendorslist[k].PAN_Number &&
										item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
									);

									var oItem1 = new sap.m.ColumnListItem({
										id: `${"blankspace" + generateUniqueId()}`,
										cells: [
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" })
										]
									});

									oTable.addItem(oItem1);
									var oItem2 = new sap.m.ColumnListItem({
										id: `${"spare" + generateUniqueId()}`,
										cells: [
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: `${vendorslist[k]?.spares_for_2_years ?? ' '}` })
										]
									});

									oTable.addItem(oItem2);
									var oItem3 = new sap.m.ColumnListItem({
										id: `${"grandtotal" + generateUniqueId()}`,
										cells: [
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
											new sap.m.Label({ text: `${grandTotalAmount + " " + grandTotalUnit}`, design: "Bold" })
										]
									});

									oTable.addItem(oItem3);
									var oItem4 = new sap.m.ColumnListItem({
										id: `${"parkingmarking" + generateUniqueId()}`,
										visible: false,
										cells: [

											new sap.m.Text({ text: `${vendorslist[k]?.packing_marking_forwarding ?? ' '}` }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
										]
									});

									oTable.addItem(oItem4);
									var oItem5 = new sap.m.ColumnListItem({
										id: `${"inspection" + generateUniqueId()}`,
										visible: false,
										cells: [

											new sap.m.Text({ text: `${vendorslist[k]?.inspection_testing_charges ?? ' '}` }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
										]
									});

									oTable.addItem(oItem5);
									var oItem6 = new sap.m.ColumnListItem({
										id: `${"documentation" + generateUniqueId()}`,
										visible: false,
										cells: [

											new sap.m.Text({ text: `${vendorslist[k]?.documentation_charges ?? ' '}` }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
										]
									});

									oTable.addItem(oItem6);
									var oItem7 = new sap.m.ColumnListItem({
										id: `${"totalbasicpricing" + generateUniqueId()}`,
										cells: [


											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
											new sap.m.Label({ text: `${grandTotalAmount + " " + grandTotalUnit}`, design: "Bold" })
											// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_including_packing ?? ' '}`, design: "Bold" }),
										]
									});

									oTable.addItem(oItem7);
									var oItem8 = new sap.m.ColumnListItem({
										id: `${"rnod" + generateUniqueId()}`,
										cells: [

											new sap.m.Label({ text: `${vendorslist[k]?.rnod ?? ' '}`, design: "Bold" }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
										]
									});

									oTable.addItem(oItem8);
									var oItem9 = new sap.m.ColumnListItem({
										id: `${"customduty" + generateUniqueId()}`,
										visible: false,
										cells: [

											new sap.m.Text({ text: `${vendorslist[k]?.custom_duty_cess ?? ' '}` }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
										]
									});

									oTable.addItem(oItem9);
									var oItem10 = new sap.m.ColumnListItem({
										id: `${"sgst" + generateUniqueId()}`,
										visible: false,
										cells: [

											new sap.m.Text({ text: `${vendorslist[k]?.sgst ?? ' '}` }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
										]
									});

									oTable.addItem(oItem10);
									var oItem11 = new sap.m.ColumnListItem({
										id: `${"igst" + generateUniqueId()}`,
										visible: false,
										cells: [

											new sap.m.Text({ text: `${vendorslist[k]?.igst ?? ' '}` }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: `${(Number(vendorslist[k]?.igst ?? ' ')) * (Number(vendorslist[k]?.total_basic_price_including_packing ?? ' ')) / 100}` }),
										]
									});

									oTable.addItem(oItem11);
									var oItem12 = new sap.m.ColumnListItem({
										id: `${"ugst" + generateUniqueId()}`,
										visible: false,
										cells: [

											new sap.m.Text({ text: `${vendorslist[k]?.ugst ?? " "}` }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: `${(Number(vendorslist[k]?.ugst ?? ' ')) * (Number(vendorslist[k]?.total_basic_price_including_packing ?? ' ')) / 100}` }),
										]
									});

									oTable.addItem(oItem12);
									var oItem13 = new sap.m.ColumnListItem({
										id: `${"shipment" + generateUniqueId()}`,
										visible: false,
										cells: [

											new sap.m.Text({ text: `${vendorslist[k]?.shipment_charges ?? ' '}` }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
										]
									});

									oTable.addItem(oItem13);
									var oItem14 = new sap.m.ColumnListItem({
										id: `${"totalincludingtaxes" + generateUniqueId()}`,
										cells: [
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
											// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_with_taxes ?? ' '}`, design: "Bold" })
											new sap.m.Label({ text: `${grandTotalAmount + " " + grandTotalUnit}`, design: "Bold" })
										]
									});
									oTable.addItem(oItem14);
									var oItem14 = new sap.m.ColumnListItem({
										id: `${"total_excluding_taxes" + generateUniqueId()}`,
										cells: [
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
											// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_without_taxes ?? ' '}`, design: "Bold" })
											new sap.m.Label({ text: `${grandTotalAmount + " " + grandTotalUnit}`, design: "Bold" })
										]
									});
									oTable.addItem(oItem14);
									var oItem15 = new sap.m.ColumnListItem({
										id: `${"perdiemrate" + generateUniqueId()}`,
										cells: [
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: "" }),
											new sap.m.Text({ text: `${vendorslist[k]?.per_diem_rate_for_supervision ?? ' '}` })
										]
									});
									oTable.addItem(oItem15);

									debugger
									var combobox_item = vbox_last_section.getItems()[0]

									// combobox_item.setValue(`${total_offers_of_vendor[total_offers_of_vendor.length - 1].offer_name}`);



									var item = new sap.ui.core.Item(`${"item1" + (generateUniqueId())}`, {
										text: `${matchedObject?.status_a ?? ' '}`
									})

									combobox_item.addItem(item);

									combobox_item.setValue(`${matchedObject?.status_a ?? ''}`);

									last_hcombobox.addItem(new sap.m.VBox(`${"offer" + generateUniqueId()}`));

									var chvbox = last_hcombobox.getItems()[iterator];
									iterator++;

									debugger
									// if (combobox_item.getValue() != vendorslist[k]?.PAN_Number ?? ' ') {
									// 	chvbox.setVisible(false)
									// }

									chvbox.addStyleClass("spacebetweenclass");

									debugger
									//Price Basis
									chvbox.addItem(new sap.m.Text(`${"pricebasis" + generateUniqueId()}`, {
										// text: `${vendorslist[k]?.PriceBasis ?? ' '}`,
										text: `${vendorslist[k]?.Vendor_Name ?? ' '}`,

									}));
									chvbox.getItems()[0].addStyleClass("pricebasispadding");

									//Point of Delivery
									chvbox.addItem(new sap.m.Text(`${"pointofdelivery" + generateUniqueId()}`, {
										// text: `${vendorslist[k]?.point_of_delivery ?? ' '}`,
										text: `${vendorslist[k]?.Vendor_Name ?? ' '}`,
										// height:"15px"
									}));

									//Delivery Period
									chvbox.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll" + generateUniqueId()}`, {
										vertical: true,
										// width: "500px",
										height: "100px"
									}))
									chvbox.getItems()[1].addStyleClass("deliveryperiodpadding");

									chvbox.getItems()[2].addContent(new sap.m.Text(`${"deliveryperiod" + generateUniqueId()}`, {
										// text: `${vendorslist[k]?.delivery_period ?? ' '}`
										text: `${vendorslist[k]?.CPBG ?? ' '}`
										// text: `${vendorresponse_selecteditem[0].Scope_and_Responsibilities ?? ' '}`
									}));


									//Payment Terms
									chvbox.addItem(new sap.m.ScrollContainer(`${"paymenttermsScroll" + generateUniqueId()}`, {
										vertical: true,
										// width: "500px",
										height: "100px"
									}))

									chvbox.getItems()[3].addContent(new sap.m.Text(`${"paymentterms" + generateUniqueId()}`, {
										// text: `${vendorslist[k]?.payment_terms ?? ' '}`
										text: `${vendorslist[k]?.CPBG ?? ' '}`
										// text: `${vendorresponse_selecteditem[0].Scope_and_Responsibilities ?? ' '}`
									}));

									//Liquidated Damages
									chvbox.addItem(new sap.m.ScrollContainer(`${"liquidedScroll" + generateUniqueId()}`, {
										vertical: true,
										// width: "500px",
										height: "100px"
									}))

									chvbox.getItems()[4].addContent(new sap.m.Text(`${"liquided" + generateUniqueId()}`, {
										// text: `${vendorslist[k]?.liquidated_damages ?? ' '}`
										text: `${vendorslist[k]?.CPBG ?? ' '}`
										// text: `${vendorresponse_selecteditem[0].Scope_and_Responsibilities ?? ' '}`
									}));

									//Warranty / Defect Liability Period
									chvbox.addItem(new sap.m.ScrollContainer(`${"warrantyScroll" + generateUniqueId()}`, {
										vertical: true,
										// width: "500px",
										height: "100px"
									}))

									chvbox.getItems()[5].addContent(new sap.m.Text(`${"warranty" + generateUniqueId()}`, {
										// text: `${vendorslist[k]?.warranty_defect_liability_period ?? ' '}`
										text: `${vendorslist[k]?.CPBG ?? ' '}`
										// text: `${vendorresponse_selecteditem[0].Scope_and_Responsibilities ?? ' '}`
									}));

									//CPBG
									chvbox.addItem(new sap.m.ScrollContainer(`${"cpbgScroll" + generateUniqueId()}`, {
										vertical: true,
										// width: "500px",
										height: "100px"
									}))

									chvbox.getItems()[6].addContent(new sap.m.Text(`${"cpbg" + generateUniqueId()}`, {
										// text: `${vendorresponse_selecteditem[0]?.CPBG ?? ' '}`
										text: `${vendorslist[k]?.CPBG ?? ' '}`
									}));

									const inputString = vendorresponse_selecteditem[0]?.Vendor_Contact_PersonDASH1 ?? '';
									if (inputString) {
										var regex = /name\s*:(.*?)\s*email/;
										var match = inputString.match(regex);
									}

									var contactPerson = match ? match[1].trim() : null;

									debugger
									//Contact Person
									chvbox.addItem(new sap.m.Text(`${"contactperson" + generateUniqueId()}`, {
										text: `${contactPerson ?? 'testContact'}`,
										// height:"100px"
									}));
									const regexPh1 = /ph1\s*:\s*(.*?)\s*ph2/;
									const matchPh1 = inputString.match(regexPh1);
									const phoneNumber1 = matchPh1 ? matchPh1[1].trim() : null;

									// Extracting ph2
									const regexPh2 = /ph2\s*:\s*(.*?)$/;
									const matchPh2 = inputString.match(regexPh2);
									const phoneNumber2 = matchPh2 ? matchPh2[1].trim() : null;

									//Contact NO
									chvbox.addItem(new sap.m.Text(`${"contactno" + generateUniqueId()}`, {
										text: `${phoneNumber1 + ", " + phoneNumber2 ?? 'test'}`,
										// height:"25px"
									}));

									//Order can be given to……...
									chvbox.addItem(new sap.m.Text(`${"ordercanbe" + generateUniqueId()}`, {
										text: `${vendorslist[k]?.order_given_to ?? 'test'}`,
										// height:"25px"
									}));

									//Techncially Approved
									chvbox.addItem(new sap.m.Text(`${"technicallyapproved" + generateUniqueId()}`, {
										text: `${vendorslist[k]?.Technically_Approved ?? 'test'}`,
										// height:"25px"
									}));

									//Approved Vendor
									chvbox.addItem(new sap.m.Text(`${"approvedvendor" + generateUniqueId()}`, {
										text: `${vendorslist[k]?.approved_vendor ?? 'test'}`,
										// height:"25px"
									}));

									let lastitemchvbox = chvbox.getItems()[(chvbox.getItems().length - 1)];

									lastitemchvbox.addStyleClass("customlaststyleclassrsection");

								}
								k++;
								debugger
							} while (k < vendorslist.length);
							//end of do-while loop
							debugger

							for (let i = 0; i < hbmiddlesection.getItems().length - 1; i++) {
								debugger
								hbmiddlesection.getItems()[i].setVisible(false);
								hbmiddlesection.getParent().getItems()[2].getItems()[1].getItems()[i].setVisible(false);
								// lastitemchvbox.getItems()
							}

							//geting final status 
							let status_lastsection = hbmiddlesection.getItems()[hbmiddlesection.getItems().length - 1];
							status_lastsection.getItems()[1].getItems()[1].getColumns()[2].getHeader().addItem(new sap.ui.core.Icon(`${"total_amount_icon" + generateUniqueId()}`, {
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								width: "20px",
								press: function (oEvent) {
									debugger
									var hboxlist = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getItems();
									if (hboxlist.length == 1) {
										MessageToast.show('No More Status');

									}
									else {
										for (let i = 0; i < hboxlist.length - 1; i++) {
											if (hboxlist[i].getVisible() == true) {
												hboxlist[i].setVisible(false);
												oEvent.getSource().setSrc("sap-icon://expand");
											}
											else {
												hboxlist[i].setVisible(true);
												oEvent.getSource().setSrc("sap-icon://collapse");
											}

										}
									}


								}
							}))
							debugger



						}  //end of for-loop



						//under testing
						// var iconTotalPricingB = omainHBox.getItems()[0].getItems()[3].getItems()[5].getItems()[1];
						// var iconTotalPricingD = omainHBox.getItems()[0].getItems()[3].getItems()[12].getItems()[1];
						// var iconTotalPricingG = omainHBox.getItems()[0].getItems()[3].getItems()[15].getItems()[1];

						// iconTotalPricingB.firePress();
						// iconTotalPricingD.firePress();
						// iconTotalPricingG.firePress();

						debugger
						//left section and respective fields
						// omainHBox.getItems()[0].getItems()[3].getItems()[2].setVisible(false);
						// omainHBox.getItems()[0].getItems()[3].getItems()[3].setVisible(false);
						// omainHBox.getItems()[0].getItems()[3].getItems()[4].setVisible(false);
						// omainHBox.getItems()[0].getItems()[3].getItems()[7].setVisible(false);
						// omainHBox.getItems()[0].getItems()[3].getItems()[8].setVisible(false);
						// omainHBox.getItems()[0].getItems()[3].getItems()[9].setVisible(false);
						// omainHBox.getItems()[0].getItems()[3].getItems()[10].setVisible(false);
						// omainHBox.getItems()[0].getItems()[3].getItems()[11].setVisible(false);

						// var listofsections = omainHBox.getItems()[1].getContent()[0].getItems();
						// for (let i = 0; i < listofsections.length; i++) {

						// 	var oTablesection = listofsections[i].getItems()[1].getItems()[0].mAggregations.items[1].mAggregations.items[1];
						// 	// listofsections[i].getItems()[3].setVisible(false);
						// 	debugger
						// 	let len = oTablesection.getItems().length
						// 	for (let j = (len - 4); j >= (len - 8); j--) {

						// 		oTablesection.getItems()[j].setVisible(false)

						// 	}

						// }

						// //left last section under price details and its respective
						// var leftsectionlastvbox = omainHBox.getItems()[0].getItems()[3].getItems();
						// for (let i = 16; i < leftsectionlastvbox.length; i++) {
						// 	leftsectionlastvbox[i].setVisible(false);
						// }
						// leftsectionlastvbox[15].getItems()[0].setVisible(false);

						let righthboxxontainer = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--rightHboxcontainer");





						sap.ui.core.BusyIndicator.hide();
						// let rightsectionpri = omainHBox.getItems()[1].getContent()[0].getItems();
						// // omainHBox.getItems()[1].getContent()[0].getItems()
						// for (let i = 0; i < rightsectionpri.length; i++) {
						// 	rightsectionpri.getItems()[2].setVisible(false);

						// }
					}
					catch (error) {
						debugger
						MessageToast.show(error)
					}
				}
			}
		}
	});
});

sap.ui.define(['sap/ui/core/mvc/ControllerExtension', 'sap/m/MessageToast', 'sap/ui/export/Spreadsheet',
	'sap/ui/model/json/JSONModel',
	'sap/ui/export/library'], function (ControllerExtension, MessageToast, exportLibrary) {
		'use strict';

		var EdmType = exportLibrary.EdmType;
		let flag = true;
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

					let header_anchor = this.base.getView().mAggregations.content[0].mAggregations.headerTitle;

					header_anchor.destroyActions();

				},
				routing: {
					onAfterBinding: async function (oBindingContext) {
						try {

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



							let funcName = 'cbeObjectPageData'
							let oFunction = this.base.getView().getModel().bindContext(`/${funcName}(...)`)
							oFunction.setParameter('projectId', project_id[1])
							await oFunction.execute();

							let result = oFunction.getBoundContext().getValue();


							result = JSON.parse(result.value);

							console.log(result);



							// //Project Info
							// if (base_uri_value) {
							// 	var settings = {
							// 		url: base_uri_value + 'odata/v4/catalogcbeservice/Project_Details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
							// 		method: "GET",
							// 	}
							// }
							// else {
							// 	var settings = {
							// 		url: '/odata/v4/catalogcbeservice/Project_Details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
							// 		method: "GET",
							// 	}
							// }

							// var project_details;
							// await $.ajax(settings).done(async (results, textStatus, request) => {
							// 	project_details = results.value;
							// }).fail((err) => {
							// 	console.log(err);
							// 	MessageToast.show(err)
							// });

							// //list of items
							// if (base_uri_value) {
							// 	var settings = {
							// 		url: base_uri_value + 'odata/v4/catalogcbeservice/Item_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
							// 		method: "GET",
							// 	}
							// }
							// else {
							// 	var settings = {
							// 		url: '/odata/v4/catalogcbeservice/Item_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
							// 		method: "GET",
							// 	}
							// }

							// var list_of_items;
							// await $.ajax(settings).done(async (results, textStatus, request) => {
							// 	list_of_items = results.value;
							// }).fail((err) => {
							// 	console.log(err);
							// 	MessageToast.show(err)
							// });

							// //vendo list
							// if (base_uri_value) {
							// 	var settings = {
							// 		url: base_uri_value + 'odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
							// 		method: "GET",
							// 	}
							// } else {
							// 	var settings = {
							// 		url: '/odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
							// 		method: "GET",
							// 	}
							// }

							// var vendor_list;
							// await $.ajax(settings).done(async (results, textStatus, request) => {
							// 	vendor_list = results.value;
							// }).fail((err) => {
							// 	console.log(err);
							// });

							// //PAN Info
							// if (base_uri_value) {
							// 	var settings = {
							// 		url: base_uri_value + 'odata/v4/catalogcbeservice/PAN_Info',
							// 		method: "GET",
							// 	}
							// } else {
							// 	var settings = {
							// 		url: '/odata/v4/catalogcbeservice/PAN_Info',
							// 		method: "GET",
							// 	}
							// }

							// var pan_info;
							// await $.ajax(settings).done(async (results, textStatus, request) => {
							// 	pan_info = results.value;
							// }).fail((err) => {
							// 	console.log(err);
							// });

							// //vendor Response
							// if (base_uri_value) {
							// 	var settings = {
							// 		url: base_uri_value + 'odata/v4/catalogcbeservice/PAN_vendor_reponse_details',
							// 		method: "GET",
							// 	}
							// } else {
							// 	var settings = {
							// 		url: '/odata/v4/catalogcbeservice/PAN_vendor_reponse_details',
							// 		method: "GET",
							// 	}
							// }

							// var vendor_response_deatils;
							// await $.ajax(settings).done(async (results, textStatus, request) => {
							// 	vendor_response_deatils = results.value;
							// }).fail((err) => {
							// 	console.log(err);
							// });


							// // Item Tax Details
							// if (base_uri_value) {
							// 	var settings = {
							// 		url: base_uri_value + 'odata/v4/catalogcbeservice/vendorTaxDetails',
							// 		method: "GET",
							// 	}
							// } else {
							// 	var settings = {
							// 		url: '/odata/v4/catalogcbeservice/vendorTaxDetails',
							// 		method: "GET",
							// 	}
							// }

							// var tax_details;
							// await $.ajax(settings).done(async (results, textStatus, request) => {
							// 	tax_details = results.value;
							// }).fail((err) => {
							// 	console.log(err);
							// });


							// // Item Tax Details
							// if (base_uri_value) {
							// 	var settings = {
							// 		url: base_uri_value + 'odata/v4/catalogcbeservice/PanWebEvent',
							// 		method: "GET",
							// 	}
							// } else {
							// 	var settings = {
							// 		url: '/odata/v4/catalogcbeservice/PanWebEvent',
							// 		method: "GET",
							// 	}
							// }

							// var pan_web_event;
							// await $.ajax(settings).done(async (results, textStatus, request) => {
							// 	pan_web_event = results.value;
							// }).fail((err) => {
							// 	console.log(err);
							// });

							var project_details = result[0][0];
							var list_of_items = result[1];
							var vendorslist = result[2];
							var pan_info = result[3];
							var vendor_response_deatils = result[4];
							var tax_details = result[5];
							var pan_web_event = result[6];

							debugger

							var omainHBox = this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();


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

										let cnt = 0;
										let oTable = itemstable.getColumns();
										for (let i = 0; i < oTable.length; i++) {
											if (oTable[i].getVisible() == true) {
												cnt++;
											}
										}

										if (cnt < 5) {
											itemstable.setFixedLayout(true)
										}

									}
								}))
							}

							itemstable.destroyItems();

							// itemstable.refresh();

							const uniqueItemCodes = new Set();
							let uniqueItems = [];

							// Iterate over list_of_items to filter unique items based on Item_Code
							list_of_items.forEach(item => {

								if (!uniqueItemCodes.has(item.Item_Code)) {
									uniqueItemCodes.add(item.Item_Code);
									uniqueItems.push(item);
								}
							});




							// let testdata = [];

							// list_of_items.forEach(item => {
							// 	const uniqueKey = `${item.Item_Code}-${item.Proposed_Vendor_Code}-${item.PAN_Number}`;
							// 	const [Item_Code, Vendor_Code, PAN_Number] = uniqueKey.split("-");

							// 	 
							// 	if (!uniqueItemCodes.has(uniqueKey)) {
							// 		uniqueItemCodes.add(uniqueKey);
							// 		uniqueItems.push(item);
							// 	}
							// 	let list_in_uniqueItems = uniqueItems.filter(item => item.Proposed_Vendor_Code == Vendor_Code && item.Item_Code == Item_Code && item.PAN_Number == PAN_Number)
							// 	for (let i = 0; i < list_in_uniqueItems.length; i++) {
							// 		const element = list_in_uniqueItems[i];
							// 		console.log(element)
							// 		testdata.push(list_in_uniqueItems[i]);

							// 	}
							// });

							// let sortedData = list_of_items.sort((d1, d2) => {
							// 	if (d1.Item_Code > d2.Item_Code && d1.Proposed_Vendor_Code > d2.Proposed_Vendor_Code) {
							// 		return 1;
							// 	} else if (d1.Item_Code < d2.Item_Code && d1.Proposed_Vendor_Code < d2.Proposed_Vendor_Code) {
							// 		return -1;
							// 	} else {
							// 		return 0;
							// 	}
							// });

							// let sortedData = list_of_items.sort((d1, d2) => {
							// 	if (d1.Item_Code !== d2.Item_Code) {
							// 		return d1.Item_Code.localeCompare(d2.Item_Code);
							// 	} else {
							// 		return d1.Proposed_Vendor_Code.localeCompare(d2.Proposed_Vendor_Code);
							// 	}
							// });

							// let groupedData = sortedData.reduce((acc, currentItem) => {
							// 	let key = `${currentItem.Item_Code}-${currentItem.Proposed_Vendor_Code}`;
							// 	if (!acc[key]) {
							// 		acc[key] = [];
							// 	}
							// 	acc[key].push(currentItem);
							// 	return acc;
							// }, {});

							let sortedData = list_of_items.sort((d1, d2) => {
								if (d1.Item_Code !== d2.Item_Code) {
									return d1.Item_Code.localeCompare(d2.Item_Code);
								} else if (d1.Proposed_Vendor_Code !== d2.Proposed_Vendor_Code) {
									return d1.Proposed_Vendor_Code.localeCompare(d2.Proposed_Vendor_Code);
								} else {
									return d1.PAN_Number.localeCompare(d2.PAN_Number);
								}
							});

							// let groupedData = sortedData.reduce((acc, currentItem) => {
							// 	if (!acc[currentItem.Item_Code]) {
							// 		acc[currentItem.Item_Code] = {};
							// 	}
							// 	if (!acc[currentItem.Item_Code][currentItem.Proposed_Vendor_Code]) {
							// 		acc[currentItem.Item_Code][currentItem.Proposed_Vendor_Code] = {};
							// 	}
							// 	if (!acc[currentItem.Item_Code][currentItem.Proposed_Vendor_Code][currentItem.PAN_Number]) {
							// 		acc[currentItem.Item_Code][currentItem.Proposed_Vendor_Code][currentItem.PAN_Number] = [];
							// 	}
							// 	acc[currentItem.Item_Code][currentItem.Proposed_Vendor_Code][currentItem.PAN_Number].push(currentItem);
							// 	return acc;
							// }, {});

							let groupedData = sortedData.reduce((acc, currentItem) => {
								let key = `${currentItem.Item_Code}-${currentItem.Proposed_Vendor_Code}-${currentItem.PAN_Number}`;
								if (!acc[key]) {
									acc[key] = [];
								}
								acc[key].push(currentItem);
								return acc;
							}, {});

							console.log(groupedData);
							debugger

							let maxGroupKey = "";
							let maxGroupLength = 0;

							// Find the group with the largest array
							for (let key in groupedData) {
								if (groupedData[key].length > maxGroupLength) {
									maxGroupLength = groupedData[key].length;
									maxGroupKey = key;
								}
							}

							let largestArray = groupedData[maxGroupKey]

							// // Loop through the largest group's array
							// console.log("Items in the largest group:");
							// deb
							// groupedData[maxGroupKey].forEach(item => {
							// 	console.log(item);
							// });

							//  

							// let target = [];
							// let innerArray = [];
							// let Item_Code;
							// let Item_Codep;
							// let Proposed_Vendor_Code;
							// let Proposed_Vendor_Codep;
							// let len = sortedData.length - 1;

							// // SEPARATE DATA BY LEVEL
							// sortedData.forEach((item, index) => {
							// 	Item_Code = item.Item_Code;
							// 	if (Item_Codep != undefined && Proposed_Vendor_Codep != undefined) {
							// 		if (Item_Code !== Item_Codep && Proposed_Vendor_Code !== Proposed_Vendor_Codep) {
							// 			target.push(innerArray);
							// 			innerArray = [];
							// 		}
							// 	}
							// 	innerArray.push(item);
							// 	Item_Codep = item.Item_Code;
							// 	Proposed_Vendor_Codep = item.Proposed_Vendor_Code;
							// 	if (index == len) {
							// 		target.push(innerArray);
							// 	}
							// });

							// let sortedData = list_of_items.sort((d1, d2) => {
							// 	if (d1.Item_Code !== d2.Item_Code) {
							// 		return d1.Item_Code.localeCompare(d2.Item_Code);
							// 	} else {
							// 		return d1.Proposed_Vendor_Code.localeCompare(d2.Proposed_Vendor_Code);
							// 	}
							// });

							// let groupedData = sortedData.reduce((acc, currentItem) => {
							// 	let key = `${currentItem.Item_Code}-${currentItem.Proposed_Vendor_Code}`;
							// 	if (!acc[key]) {
							// 		acc[key] = [];
							// 	}
							// 	acc[key].push(currentItem);
							// 	return acc;
							// }, {});

							// let maxGroupKey = "";
							// let maxGroupLength = 0;

							// // Find the group with the largest array
							// for (let key in groupedData) {
							// 	if (groupedData[key].length > maxGroupLength) {
							// 		maxGroupLength = groupedData[key].length;
							// 		maxGroupKey = key;
							// 	}
							// }

							// uniqueItems = groupedData[maxGroupKey];






							let tag_no_iterator = 1;

							for (let i = 0; i < uniqueItems.length; i++) {



								itemstable.addItem(new sap.m.ColumnListItem(`${"collistitem" + (i + 1)}`));
								let columnlist = itemstable.getItems()[i];

								let itemdesc = new sap.m.Text(`${"itemdesc" + (i + 1)}`, {
									text: `${uniqueItems[i]?.Item_Short_Description ?? ' '}`,
									tooltip: `${uniqueItems[i]?.Item_Short_Description ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(itemdesc);




								let tag_no = new sap.m.Text(`${"tag_no" + (i + 1)}`, {
									text: `${uniqueItems[i]?.tag_no ?? ' '}`,
									tooltip: `${uniqueItems[i]?.tag_no ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(tag_no);

								let types_of_vessel = new sap.m.Text(`${"types_of_vessel" + (i + 1)}`, {
									text: `${uniqueItems[i]?.types_of_vessel ?? ' '}`,
									tooltip: `${uniqueItems[i]?.types_of_vessel ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(types_of_vessel);

								let capacity_each_in_cu_mtr = new sap.m.Text(`${"capacity_each_in_cu_mtr" + (i + 1)}`, {
									text: `${uniqueItems[i]?.capactity_each ?? ' '}`,
									tooltip: `${uniqueItems[i]?.capactity_each ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(capacity_each_in_cu_mtr);

								let dia_in_mm = new sap.m.Text(`${"dia_in_mm" + (i + 1)}`, {
									text: `${uniqueItems[i]?.dia ?? ' '}`,
									tooltip: `${uniqueItems[i]?.dia ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(dia_in_mm);

								let tl_to_tl_len = new sap.m.Text(`${"tl_to_tl_len" + (i + 1)}`, {
									text: `${uniqueItems[i]?.tl_tl_len ?? ' '}`,
									tooltip: `${uniqueItems[i]?.tl_tl_len ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(tl_to_tl_len);

								let moc = new sap.m.Text(`${"moc" + (i + 1)}`, {
									text: `${uniqueItems[i]?.moc ?? ' '}`,
									tooltip: `${uniqueItems[i]?.moc ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(moc);

								let design_pressure_bar = new sap.m.Text(`${"design_pressure_bar" + (i + 1)}`, {
									text: `${uniqueItems[i]?.design_pb ?? ' '}`,
									tooltip: `${uniqueItems[i]?.design_pb ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(design_pressure_bar);

								let weights_in_kg = new sap.m.Text(`${"weights_in_kg" + (i + 1)}`, {
									text: `${uniqueItems[i]?.weights ?? ' '}`,
									tooltip: `${uniqueItems[i]?.weights ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(weights_in_kg);
								//uom
								let uom = new sap.m.Text(`${"uom" + (i + 1)}`, {
									text: `${uniqueItems[i]?.UOM ?? ' '}`,
									tooltip: `${uniqueItems[i]?.UOM ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(uom);


								let qnt = 0;
								for (let j = 0; j < list_of_items.length; j++) {
									// const element = list_of_items[i];

									let quantity = list_of_items[j].Quantity;
									let strippedQuantity = quantity.replace(/,/g, '');
									let integerQuantity = parseFloat(strippedQuantity, 10);

									if (list_of_items[j].Item_Code == uniqueItems[i].Item_Code && quantity) {
										qnt = qnt + integerQuantity;
									}


								}


								let qty_no = new sap.m.Text(`${"qty_no" + (i + 1)}`, {
									// text: `${list_of_items[i]?.Quantity ?? ' '}`,
									text: `${qnt ?? ' '}`,
									tooltip: `${qnt ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(qty_no);

							}










							//dynamic generation of column
							let counter_item = {
								0: 0,
								1: 0,
								2: 0,
								3: 0,
								4: 0,
								5: 0,
								6: 0,
								7: 0,
								8: 0,
								9: 0,
								10: 0

							};

							for (let l = 0; l < itemstable.getColumns().length; l++) {
								itemstable.getColumns()[l].setVisible(true);

							}


							for (let itm = 0; itm < itemstable.getItems().length; itm++) {
								//  
								let current_item_cells = itemstable.getItems()[itm].getCells();
								for (let cell = 0; cell < current_item_cells.length; cell++) {
									//  
									if (current_item_cells[cell].getText().trim() == '') {
										//  
										counter_item[cell] += 1;
									}
								}
							}

							for (let key in counter_item) {
								if (counter_item[key] == itemstable.getItems().length) {

									itemstable.getColumns()[key].setVisible(false);
								}
								// console.log(`Key: ${key}, Value: ${counter_item[key]}`);
							}

							//end of dynamic generation of Columns










							////////////////////////////////////////////////////////////////////////////////////////////////////////////
							var Scrollhbox = omainHBox.getItems()[1].getContent()[0];
							Scrollhbox.destroyItems();

							//vendor details
							// if (base_uri_value) {
							// 	var settings = {
							// 		url: base_uri_value + 'odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
							// 		method: "GET",
							// 	}
							// } else {
							// 	var settings = {
							// 		url: '/odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq ' + `'${project_id[1]}'`,
							// 		method: "GET",
							// 	}
							// }

							// var vendorslist;
							// await $.ajax(settings).done(async (results, textStatus, request) => {
							// 	vendorslist = results.value;
							// }).fail((err) => {
							// 	console.log(err);
							// });

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

								curr_sectionvbox.addStyleClass("BorderClass");

								curr_sectionvbox.addItem(new sap.m.VBox(`${"vboxsuppnameloc" + (i + 1)}`));
								curr_sectionvbox.addItem(new sap.m.HBox(`${"hbmiddlesection" + (i + 1)}`));
								curr_sectionvbox.addItem(new sap.m.VBox(`${"vbox_last_section" + (i + 1)}`));

								// curr_sectionvbox.getItems()[0].addStyleClass("section_header");
								curr_sectionvbox.getItems()[0].addStyleClass("stickyright");

								//3rd vbox final one
								var vbox_last_section = curr_sectionvbox.getItems()[2];
								// vbox_last_section.setVisible(false);

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


								var hboxcombo = new sap.m.HBox(`${"hboxcombo" + (i + 1)}`);
								vbox_last_section.addItem(hboxcombo);

								var last_hcombobox = vbox_last_section.getItems()[1];

								// for (let l = 0; l < DataGiven.items[0].bidders.length; l++) {
								// 	var 

								// }
								/////////////////////////////////////////////////////
								//vbox1
								let vboxsuppnameloc = curr_sectionvbox.getItems()[0];
								vboxsuppnameloc.addStyleClass("alignmentVendorClass")

								let test = vendorslist[i]?.Vendor_Name ?? ' ';
								let shortenedString

								if (test.length > 20) {
									shortenedString = test.substring(0, 15) + '...';
									console.log(shortenedString);
								}
								else {
									shortenedString = vendorslist[i]?.Vendor_Name
								}

								//Supplier
								vboxsuppnameloc.addItem(new sap.m.Title(`${"SupplierName" + (i + 1)}`, {
									// text: `${vendorslist[i].Vendor_Name ? vendorslist[i].Vendor_Name : ' '}`,
									text: `${shortenedString ?? ' '}`,
									wrapping: true,
									tooltip: `${vendorslist[i].Vendor_Name ? vendorslist[i].Vendor_Name : ' '}`,
								}));



								vboxsuppnameloc.getItems()[0].addStyleClass('vendorTitle');

								// vboxsuppnameloc.getItems()[0]

								//Location
								vboxsuppnameloc.addItem(new sap.m.Title(`${"SupplierLocation" + (i + 1)}`, {
									text: `${vendorslist[i].Vendor_Location ? vendorslist[i].Vendor_Location : ' '}`
								}));

								console.log(vendorslist);

								vboxsuppnameloc.getItems()[1].addStyleClass('titleStyleClass');


								vboxsuppnameloc.addStyleClass("v11spaceBetweenclass");

								/////////////////////////////////////////////////////////////////////////////////////////////////////////
								//Hbox middle

								var hbmiddlesection = curr_sectionvbox.getItems()[1];
								hbmiddlesection.addStyleClass("alignmentVendorClass");


								// let filteredWebEvent = pan_web_event.filter(item => item.number === vendorslist[i].PAN_Number);
								// let filteredVendorList = vendorslist.filter(item => item.ProjectId === project_id[1] && item.Proposed_Vendor_Code === vendorslist[i].Proposed_Vendor_Code);


								let k = 0;
								let iterator = 0;

								//original
								// do {
								// 	if (vendorslist[k].ProjectId == project_id[1] && vendorslist[k].Proposed_Vendor_Code == vendorslist[i].Proposed_Vendor_Code) {
								// 		hbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection" + generateUniqueId()}`, {
								// 			// width: "500px"
								// 		}));

								// 		var itmlen = hbmiddlesection.getItems().length
								// 		var vbmiddlesection = hbmiddlesection.getItems()[itmlen - 1];
								// 		vbmiddlesection.addStyleClass("customVBox");

								// 		vbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb" + generateUniqueId()}`));

								// 		var vbmiddlesection_innervb = vbmiddlesection.getItems()[0];

								// 		vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_qtn_ref" + generateUniqueId()}`, {
								// 			text: `${vendorslist[k]?.qtn_ref ?? 'NA'}`,
								// 		}));
								// 		vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_date" + generateUniqueId()}`, {
								// 			text: `${vendorslist[k]?.date ?? 'NA'}`
								// 		}));
								// 		vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_validity" + generateUniqueId()}`, {
								// 			text: `${vendorslist[k]?.validity ?? 'NA'}`
								// 		}));
								// 		vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_cylindrical_space" + generateUniqueId()}`, {
								// 			text: ""
								// 		}));
								// 		vbmiddlesection_innervb.addStyleClass("vbmiddlesectionclass");

								// 		var inner_vbox = new sap.m.VBox(`${"innervbox" + generateUniqueId()}`, {
								// 			// width: "100%"
								// 		});
								// 		vbmiddlesection.addItem(inner_vbox);


								// 		let matchedObject = pan_info.find(item => item.PAN_Number === vendorslist[k].PAN_Number);

								// 		inner_vbox.addItem(new sap.m.Label(`${"original_offer" + generateUniqueId()}`, {
								// 			text: `${matchedObject?.status_a ?? ' '}`,
								// 			design: "Bold"
								// 		}));

								// 		var oTable = new sap.m.Table({
								// 			id: `${"offer" + generateUniqueId()}`,
								// 			class: "tableBorder",
								// 			growing: true,
								// 			growingThreshold: 20,
								// 			width: "350px",
								// 			fixedLayout: true
								// 		});


								// 		oTable.addStyleClass("tableBorder");

								// 		inner_vbox.addItem(oTable);

								// 		var oColumn1 = new sap.m.Column({
								// 			id: `${"unit_rate" + generateUniqueId()}`,
								// 			header: new sap.m.Label({ text: "Unit Rate", design: "Bold", wrapping: false }),
								// 			styleClass: 'custcolorclass'
								// 		});

								// 		var oColumn2 = new sap.m.Column({
								// 			id: `${"unit_rate_per" + generateUniqueId()}`,
								// 			header: new sap.m.Label({ text: "Rate per Unit", design: "Bold", wrapping: false }),
								// 			styleClass: 'custcolorclass'
								// 		});


								// 		var oColumn3 = new sap.m.Column({
								// 			id: `${"total_amt_offer" + generateUniqueId()}`,
								// 			header: new sap.m.HBox(),
								// 			styleClass: 'custcolorclass'

								// 		});

								// 		oTable.addColumn(oColumn1);
								// 		oTable.addColumn(oColumn2);
								// 		oTable.addColumn(oColumn3);

								// 		//Total amount expand property

								// 		var colheader = oTable.getColumns()[2].getHeader();

								// 		colheader.addItem(new sap.m.Label({
								// 			text: "Total Amount",
								// 			design: "Bold"
								// 		}))


								// 		//end of total amount 

								// 		var uniquelistitem = [];
								// 		var grandTotalAmount = 0
								// 		var grandTotalUnit = '';
								// 		let cnt = 0;
								// 		let processedOfferIds = new Set();



								// 		// Filter list_of_items based on PAN_Number and Proposed_Vendor_Code
								// 		const filteredItems = list_of_items.filter(item =>
								// 			item.PAN_Number === vendorslist[k].PAN_Number &&
								// 			item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
								// 		);


								// 		// Iterate over uniqueItems
								// 		for (let i = 0; i < uniqueItems.length; i++) {

								// 			const currentItem = uniqueItems[i];
								// 			const foundItem = filteredItems.find(item => item.Item_Code === currentItem.Item_Code);

								// 			if (foundItem) {
								// 				// Found item, create ColumnListItem with data
								// 				var AmtWithoutCommas = foundItem.Amount.replace(/,/g, '') ?? 0;
								// 				var quantityWithoutCommas = foundItem.Quantity.replace(/,/g, '') ?? 0;

								// 				const total_amount_value = Number(AmtWithoutCommas ?? 0) * Number(quantityWithoutCommas ?? 0);
								// 				const total_amount_display = `${total_amount_value} ${foundItem.Unit_Price ?? ' '}`;

								// 				grandTotalAmount += total_amount_value;
								// 				grandTotalUnit = foundItem.Unit_Price;

								// 				const oItem = new sap.m.ColumnListItem({
								// 					id: `${"item1data" + generateUniqueId()}`,
								// 					cells: [
								// 						new sap.m.Text({ text: `${AmtWithoutCommas ?? ' '} ${foundItem.Unit_Price}` }),
								// 						new sap.m.Text({ text: `${foundItem.unit_rate_per_unit ?? ' '}` }),
								// 						new sap.m.Text({ text: total_amount_display }),
								// 					]
								// 				});

								// 				oTable.addItem(oItem);
								// 			} else {
								// 				// Item not found, create empty row
								// 				const oItem = new sap.m.ColumnListItem({
								// 					id: `${"item1data" + generateUniqueId()}`,
								// 					cells: [
								// 						new sap.m.Text({ text: "" }),
								// 						new sap.m.Text({ text: "" }),
								// 						new sap.m.Text({ text: "" })
								// 					]
								// 				});

								// 				oTable.addItem(oItem);
								// 			}
								// 		}
								// 		////////////////////////////////////////////////////////////////////////////////

								// 		const vendorresponse_selecteditem = vendor_response_deatils.filter(item =>
								// 			item.PAN_Number === vendorslist[k].PAN_Number &&
								// 			item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
								// 		);

								// 		//Tax Details
								// 		const tax_details_filtered = tax_details.filter(item =>
								// 			item.PAN_Number === vendorslist[k].PAN_Number &&
								// 			item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
								// 		);

								// 		let valuesMap = {}; // Object to store values for specified names

								// 		const namesToCheck = [
								// 			'Spares for 2 Years operation',
								// 			'Packing, Marking, Forwarding & Freight',
								// 			'Inspection / Testing Charges',
								// 			'Documentation Charges',
								// 			'RNOD',
								// 			'Custom Duty & Cess',
								// 			'SGST',
								// 			'IGST',
								// 			'UGST',
								// 			'Shipment charges from EXW to ISRO Mahendragiri',
								// 			'Per Diem rate for Supervision for Erection and commissioning',
								// 			'PriceBasis',
								// 			'Point of Delivery',
								// 			'Delivery Period',
								// 			'Payment Terms',
								// 			'Liquidated Damages',
								// 			'Warranty / Defect Liability Period',
								// 			'CPBG',
								// 			'Contact Person',
								// 			'Contact No.',
								// 			'Order can be given to',
								// 			'Techncially Approved',
								// 			'Approved Vendor',//22
								// 			'Packing Value',//23
								// 			'Inspection Value',//24
								// 			'Document Value'//25
								// 		];

								// 		for (let i = 0; i < tax_details_filtered.length; i++) {
								// 			const item = tax_details_filtered[i];
								// 			if (namesToCheck.includes(item.name)) {
								// 				valuesMap[item.name] = item.value; // Store the value for the name
								// 			}
								// 		}
								// 		 
								// 		 

								// 		var oItem1 = new sap.m.ColumnListItem({
								// 			id: `${"blankspace" + generateUniqueId()}`,
								// 			cells: [
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" })
								// 			]
								// 		});



								// 		oTable.addItem(oItem1);
								// 		var oItem2 = new sap.m.ColumnListItem({
								// 			id: `${"spare" + generateUniqueId()}`,
								// 			cells: [
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: `${(valuesMap[namesToCheck[0]] ?? 0) + " " + grandTotalUnit ?? ' '}` })
								// 			]
								// 		});


								// 		let spares_2_value = grandTotalAmount + (parseFloat(valuesMap[namesToCheck[0]]) || 0)
								// 		oTable.addItem(oItem2);
								// 		var oItem3 = new sap.m.ColumnListItem({
								// 			id: `${"grandtotal" + generateUniqueId()}`,
								// 			cells: [
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Label({ text: `${spares_2_value + " " + grandTotalUnit}`, design: "Bold" })
								// 			]
								// 		});

								// 		oTable.addItem(oItem3);
								// 		var oItem4 = new sap.m.ColumnListItem({
								// 			id: `${"parkingmarking" + generateUniqueId()}`,
								// 			visible: false,
								// 			cells: [

								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[1]] ?? ' '}` }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[23]] ?? ' '}` }),
								// 			]
								// 		});

								// 		oTable.addItem(oItem4);
								// 		var oItem5 = new sap.m.ColumnListItem({
								// 			id: `${"inspection" + generateUniqueId()}`,
								// 			visible: false,
								// 			cells: [

								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[2]] ?? ' '}` }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[24]] ?? ' '}` }),
								// 			]
								// 		});

								// 		oTable.addItem(oItem5);
								// 		var oItem6 = new sap.m.ColumnListItem({
								// 			id: `${"documentation" + generateUniqueId()}`,
								// 			visible: false,
								// 			cells: [

								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[3]] ?? ' '}` }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[25]] ?? ' '}` }),
								// 			]
								// 		});

								// 		let totalchargesB = spares_2_value + (parseInt(valuesMap[namesToCheck[23]]) || 0) + (parseInt(valuesMap[namesToCheck[24]]) || 0) + (parseInt(valuesMap[namesToCheck[25]]) || 0)
								// 		oTable.addItem(oItem6);
								// 		var oItem7 = new sap.m.ColumnListItem({
								// 			id: `${"totalbasicpricing" + generateUniqueId()}`,
								// 			cells: [


								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Label({ text: `${totalchargesB + " " + grandTotalUnit}`, design: "Bold" })
								// 				// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_including_packing ?? ' '}`, design: "Bold" }),
								// 			]
								// 		});

								// 		oTable.addItem(oItem7);
								// 		var oItem8 = new sap.m.ColumnListItem({
								// 			id: `${"rnod" + generateUniqueId()}`,
								// 			cells: [

								// 				new sap.m.Label({ text: `${valuesMap[namesToCheck[4]] ?? ' '}`, design: "Bold" }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" }),
								// 			]
								// 		});

								// 		oTable.addItem(oItem8);
								// 		var oItem9 = new sap.m.ColumnListItem({
								// 			id: `${"customduty" + generateUniqueId()}`,
								// 			visible: false,
								// 			cells: [

								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[5]] ?? ' '}` }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" }),
								// 			]
								// 		});

								// 		oTable.addItem(oItem9);
								// 		let sgst_amt = (parseFloat(valuesMap[namesToCheck[6]]) || 0) * totalchargesB / 100;
								// 		var oItem10 = new sap.m.ColumnListItem({
								// 			id: `${"sgst" + generateUniqueId()}`,
								// 			visible: false,
								// 			cells: [

								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[6]] ?? ' '}` }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: sgst_amt + " " + grandTotalUnit }),
								// 			]
								// 		});

								// 		let igst_amt = (parseFloat(valuesMap[namesToCheck[7]]) || 0) * totalchargesB / 100;
								// 		oTable.addItem(oItem10);
								// 		var oItem11 = new sap.m.ColumnListItem({
								// 			id: `${"igst" + generateUniqueId()}`,
								// 			visible: false,
								// 			cells: [

								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[7]] ?? ' '}` }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: `${igst_amt + " " + grandTotalUnit}` }),
								// 			]
								// 		});

								// 		let ugst_amt = (parseFloat(valuesMap[namesToCheck[8]]) || 0) * totalchargesB / 100;
								// 		oTable.addItem(oItem11);
								// 		var oItem12 = new sap.m.ColumnListItem({
								// 			id: `${"ugst" + generateUniqueId()}`,
								// 			visible: false,
								// 			cells: [

								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[8]] ?? " "}` }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: `${ugst_amt + " " + grandTotalUnit}` }),
								// 			]
								// 		});

								// 		oTable.addItem(oItem12);
								// 		var oItem13 = new sap.m.ColumnListItem({
								// 			id: `${"shipment" + generateUniqueId()}`,
								// 			visible: false,
								// 			cells: [

								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[9]] ?? ' '}` }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" }),
								// 			]
								// 		});

								// 		let totalincludingtax = totalchargesB + sgst_amt + igst_amt + ugst_amt
								// 		oTable.addItem(oItem13);
								// 		var oItem14 = new sap.m.ColumnListItem({
								// 			id: `${"totalincludingtaxes" + generateUniqueId()}`,
								// 			cells: [
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" }),
								// 				// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_with_taxes ?? ' '}`, design: "Bold" })
								// 				new sap.m.Label({ text: `${totalincludingtax + " " + grandTotalUnit}`, design: "Bold" })
								// 			]
								// 		});
								// 		oTable.addItem(oItem14);
								// 		var oItem14 = new sap.m.ColumnListItem({
								// 			id: `${"total_excluding_taxes" + generateUniqueId()}`,
								// 			cells: [
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" }),
								// 				// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_without_taxes ?? ' '}`, design: "Bold" })
								// 				new sap.m.Label({ text: `${totalchargesB + " " + grandTotalUnit}`, design: "Bold" })
								// 			]
								// 		});
								// 		oTable.addItem(oItem14);
								// 		var oItem15 = new sap.m.ColumnListItem({
								// 			id: `${"perdiemrate" + generateUniqueId()}`,
								// 			cells: [
								// 				new sap.m.Text({ text: `${valuesMap[namesToCheck[10]] ?? ' '}` }),
								// 				new sap.m.Text({ text: "" }),
								// 				new sap.m.Text({ text: "" })
								// 			]
								// 		});
								// 		oTable.addItem(oItem15);


								// 		var combobox_item = vbox_last_section.getItems()[0]

								// 		// combobox_item.setValue(`${total_offers_of_vendor[total_offers_of_vendor.length - 1].offer_name}`);



								// 		var item = new sap.ui.core.Item(`${"item1" + (generateUniqueId())}`, {
								// 			text: `${matchedObject?.status_a ?? ' '}`
								// 		})

								// 		combobox_item.addItem(item);

								// 		combobox_item.setValue(`${matchedObject?.status_a ?? ''}`);

								// 		last_hcombobox.addItem(new sap.m.VBox(`${"offer" + generateUniqueId()}`));

								// 		var chvbox = last_hcombobox.getItems()[iterator];
								// 		iterator++;


								// 		// if (combobox_item.getValue() != vendorslist[k]?.PAN_Number ?? ' ') {
								// 		// 	chvbox.setVisible(false)
								// 		// }

								// 		chvbox.addStyleClass("spacebetweenclass");


								// 		//Price Basis
								// 		chvbox.addItem(new sap.m.Text(`${"pricebasis" + generateUniqueId()}`, {
								// 			text: `${valuesMap[namesToCheck[11]] ?? ' '}`,
								// 			// text: `${vendorslist[k]?.Vendor_Name ?? ' '}`,

								// 		}));
								// 		chvbox.getItems()[0].addStyleClass("pricebasispadding");

								// 		//Point of Delivery
								// 		chvbox.addItem(new sap.m.Text(`${"pointofdelivery" + generateUniqueId()}`, {
								// 			text: `${valuesMap[namesToCheck[12]] ?? ' '}`,
								// 			// text: `${vendorslist[k]?.Vendor_Name ?? ' '}`,
								// 			// height:"15px"
								// 		}));

								// 		//Delivery Period
								// 		chvbox.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll" + generateUniqueId()}`, {
								// 			vertical: true,
								// 			// width: "500px",
								// 			height: "100px"
								// 		}))
								// 		chvbox.getItems()[1].addStyleClass("deliveryperiodpadding");

								// 		chvbox.getItems()[2].addContent(new sap.m.Text(`${"deliveryperiod" + generateUniqueId()}`, {
								// 			text: `${valuesMap[namesToCheck[13]] ?? ' '}`
								// 			// text: `${vendorslist[k]?.CPBG ?? ' '}`
								// 			// text: `${vendorresponse_selecteditem[0].Scope_and_Responsibilities ?? ' '}`
								// 		}));


								// 		//Payment Terms
								// 		chvbox.addItem(new sap.m.ScrollContainer(`${"paymenttermsScroll" + generateUniqueId()}`, {
								// 			vertical: true,
								// 			// width: "100%",
								// 			height: "100px"
								// 		}))

								// 		chvbox.getItems()[3].addContent(new sap.m.Text(`${"paymentterms" + generateUniqueId()}`, {
								// 			text: `${valuesMap[namesToCheck[14]] ?? ' '}`
								// 			// text: `${vendorslist[k]?.CPBG ?? ' '}`
								// 			// text: `${vendorresponse_selecteditem[0].Scope_and_Responsibilities ?? ' '}`
								// 		}));

								// 		//Liquidated Damages
								// 		chvbox.addItem(new sap.m.ScrollContainer(`${"liquidedScroll" + generateUniqueId()}`, {
								// 			vertical: true,
								// 			// width: "500px",
								// 			height: "100px"
								// 		}))

								// 		chvbox.getItems()[4].addContent(new sap.m.Text(`${"liquided" + generateUniqueId()}`, {
								// 			text: `${valuesMap[namesToCheck[15]] ?? ' '}`
								// 			// text: `${vendorslist[k]?.CPBG ?? ' '}`
								// 			// text: `${vendorresponse_selecteditem[0].Scope_and_Responsibilities ?? ' '}`
								// 		}));

								// 		//Warranty / Defect Liability Period
								// 		chvbox.addItem(new sap.m.ScrollContainer(`${"warrantyScroll" + generateUniqueId()}`, {
								// 			vertical: true,
								// 			// width: "500px",
								// 			height: "100px"
								// 		}))

								// 		chvbox.getItems()[5].addContent(new sap.m.Text(`${"warranty" + generateUniqueId()}`, {
								// 			text: `${valuesMap[namesToCheck[16]] ?? ' '}`
								// 			// text: `${vendorslist[k]?.CPBG ?? ' '}`
								// 			// text: `${vendorresponse_selecteditem[0].Scope_and_Responsibilities ?? ' '}`
								// 		}));

								// 		//CPBG
								// 		chvbox.addItem(new sap.m.ScrollContainer(`${"cpbgScroll" + generateUniqueId()}`, {
								// 			vertical: true,
								// 			// width: "500px",
								// 			height: "100px"
								// 		}))

								// 		chvbox.getItems()[6].addContent(new sap.m.Text(`${"cpbg" + generateUniqueId()}`, {
								// 			// text: `${vendorresponse_selecteditem[0]?.CPBG ?? ' '}`
								// 			text: `${valuesMap["CPBG"] ?? ' '}`
								// 		}));

								// 		const inputString = vendorresponse_selecteditem[0]?.Vendor_Contact_PersonDASH1 ?? '';
								// 		if (inputString) {
								// 			var regex = /name\s*:(.*?)\s*email/;
								// 			var match = inputString.match(regex);
								// 		}

								// 		var contactPerson = match ? match[1].trim() : null;


								// 		//Contact Person
								// 		chvbox.addItem(new sap.m.Text(`${"contactperson" + generateUniqueId()}`, {
								// 			text: `${contactPerson ?? ' '}`,
								// 			// height:"100px"
								// 		}));
								// 		const regexPh1 = /ph1\s*:\s*(.*?)\s*ph2/;
								// 		const matchPh1 = inputString.match(regexPh1);
								// 		const phoneNumber1 = matchPh1 ? matchPh1[1].trim() : null;

								// 		// Extracting ph2
								// 		const regexPh2 = /ph2\s*:\s*(.*?)$/;
								// 		const matchPh2 = inputString.match(regexPh2);
								// 		const phoneNumber2 = matchPh2 ? matchPh2[1].trim() : null;

								// 		//Contact NO
								// 		chvbox.addItem(new sap.m.Text(`${"contactno" + generateUniqueId()}`, {
								// 			text: `${phoneNumber1 + ", " + phoneNumber2 ?? ' '}`,
								// 			// height:"25px"
								// 		}));

								// 		//Order can be given to……...
								// 		chvbox.addItem(new sap.m.Text(`${"ordercanbe" + generateUniqueId()}`, {
								// 			text: `${valuesMap["Order can be give to"] ?? ' '}`,
								// 			// height:"25px"
								// 		}));

								// 		//Techncially Approved
								// 		chvbox.addItem(new sap.m.Text(`${"technicallyapproved" + generateUniqueId()}`, {
								// 			text: `${valuesMap["Technically Approved"] ?? ' '}`,
								// 			// height:"25px"
								// 		}));

								// 		//Approved Vendor
								// 		chvbox.addItem(new sap.m.Text(`${"approvedvendor" + generateUniqueId()}`, {
								// 			text: `${valuesMap["Approved Vendor"] ?? ' '}`,
								// 			// height:"25px"
								// 		}));

								// 		chvbox.getItems()[chvbox.getItems().length - 4].addStyleClass("contactpersonpadding")

								// 		let lastitemchvbox = chvbox.getItems()[(chvbox.getItems().length - 1)];

								// 		lastitemchvbox.addStyleClass("customlaststyleclassrsection");

								// 	}
								// 	k++;

								// } while (k < vendorslist.length);

								//modified

								do {


									if (vendorslist[k].ProjectId == project_id[1] && vendorslist[k].Proposed_Vendor_Code == vendorslist[i].Proposed_Vendor_Code) {

										let panNumber = vendorslist[k].PAN_Number;

										function isPAN_NumberExists(PAN_Number) {
											for (let i = 0; i < pan_web_event.length; i++) {
												if (pan_web_event[i].number === PAN_Number) {
													return true;
												}
											}
											return false;
										}
										if (isPAN_NumberExists(panNumber)) {
											let filteredWebEvent = pan_web_event.filter(item => item.number === vendorslist[k].PAN_Number);

											for (let webnt = 0; webnt < filteredWebEvent.length; webnt++) {
												// if (isPAN_NumberExists(panNumber)) {



												hbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection" + generateUniqueId()}`, {
													// width: "500px"
												}));

												// let qnty = list_of_items.filter


												var itmlen = hbmiddlesection.getItems().length
												var vbmiddlesection = hbmiddlesection.getItems()[itmlen - 1];
												vbmiddlesection.addStyleClass("customVBox");

												vbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb" + generateUniqueId()}`));

												var vbmiddlesection_innervb = vbmiddlesection.getItems()[0];

												vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_qtn_ref" + generateUniqueId()}`, {
													text: `${filteredWebEvent[webnt]?.number ?? 'NA'}`,
												}));
												vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_date" + generateUniqueId()}`, {
													text: `${filteredWebEvent[webnt]?.date ?? 'NA'}`
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
													alignItems: "Center"
												});
												vbmiddlesection.addItem(inner_vbox);


												let matchedObject = pan_info.find(item => item.PAN_Number === vendorslist[k].PAN_Number);

												inner_vbox.addItem(new sap.m.Label(`${"original_offer" + generateUniqueId()}`, {
													text: `${filteredWebEvent[webnt]?.eventNo ?? ' '}`,
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


												oTable.addStyleClass("tableBorder");

												inner_vbox.addItem(oTable);

												var oColumn1 = new sap.m.Column({
													id: `${"unit_rate" + generateUniqueId()}`,
													header: new sap.m.Label({ text: "Unit Price", design: "Bold", wrapping: false }),
													width: "100px"
													// hAlign:'Center'
													// styleClass: 'colAlignmentClass'
												});

												var oColumn2 = new sap.m.Column({
													id: `${"unit_rate_per" + generateUniqueId()}`,
													header: new sap.m.Label({ text: "Quantity", design: "Bold", wrapping: true }),
													width: '70px'
													// hAlign:'Center'
													// styleClass: 'colAlignmentClass'
												});


												var oColumn3 = new sap.m.Column({
													id: `${"total_amt_offer" + generateUniqueId()}`,
													header: new sap.m.HBox(),
													// hAlign:'Center',
													width: '140px',
													// styleClass: 'colAlignmentClass'

												});

												oTable.addColumn(oColumn1);


												oTable.addColumn(oColumn2);

												oTable.addColumn(oColumn3);





												//Total amount expand property


												var colheader = oTable.getColumns()[2].getHeader()

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

												let extendedprice = 0;
												let tax_value = '';

												function formatCurrency(amount, currencyCode) {

													let formattedAmount = '';
													switch (currencyCode) {
														case 'INR':
															formattedAmount += parseFloat(amount).toLocaleString('en-IN', { maximumFractionDigits: 2 });
															break;
														default:
															formattedAmount += parseFloat(amount).toLocaleString('en-US', { maximumFractionDigits: 2 });
															break;
													}
													return formattedAmount;
												}

												const vendorresponse_selecteditem = vendor_response_deatils.filter(item =>
													item.PAN_Number === vendorslist[k].PAN_Number &&
													item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
												);



												grandTotalUnit = vendorresponse_selecteditem[0]?.Order_CurrencyORBid_currency ?? 'NA';
												var onlyonce = false;

												// Iterate over uniqueItems
												for (let i = 0; i < uniqueItems.length; i++) {



													const currentItem = uniqueItems[i];
													let itemMatchingPrjVenPan = list_of_items.filter(item => item.ProjectId == project_id[1] && item.Proposed_Vendor_Code == vendorslist[k].Proposed_Vendor_Code && item.Item_Code == uniqueItems[i].Item_Code && item.PAN_Number == panNumber)
													let foundItem = filteredItems.filter(item => item.Item_Code === currentItem.Item_Code);

													if (foundItem && itemMatchingPrjVenPan.length) {

														if (itemMatchingPrjVenPan.length == 1) {
															var AmtWithoutCommas = itemMatchingPrjVenPan[0].Unit_Price?.replace(/,/g, '') ?? 0;
															var quantityWithoutCommas = itemMatchingPrjVenPan[0].Quantity?.replace(/,/g, '') ?? 0;
															let extendedPriceWithoutComms = itemMatchingPrjVenPan[0].extendedPrice?.replace(/,/g, '') ?? 0;

															extendedprice = extendedprice + parseFloat(extendedPriceWithoutComms ?? 0);
															tax_value = tax_value + (itemMatchingPrjVenPan[0]?.Indian_Tax_PER ?? ' ') + '\n'

															const total_amount_value = Number(AmtWithoutCommas ?? 0) * Number(quantityWithoutCommas ?? 0);
															const total_amount_display = `${total_amount_value} ${itemMatchingPrjVenPan[0].Unit_Price ?? ' '}`;

															grandTotalAmount += total_amount_value;
															// grandTotalUnit = itemMatchingPrjVenPan[0].Unit_Price;

															// let qnty = list_of_items.filter(item => item.Proposed_Vendor_Code == vendorslist[k].Proposed_Vendor_Code  && item.PAN_Number ==itemMatchingPrjVenPan[0]. )


															const oItem = new sap.m.ColumnListItem({
																id: `${"item1data" + generateUniqueId()}`,
																cells: [
																	new sap.m.Text({ text: `${formatCurrency(AmtWithoutCommas, grandTotalUnit) ?? ' '} ${grandTotalUnit}` }),
																	new sap.m.Text({ text: `${itemMatchingPrjVenPan[0].Quantity ?? ' '}` }),
																	new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}` }),

																],
																// visible: false,
																visible: true
															});
															oTable.addItem(oItem);
														}
														else {


															for (let l = 0; l < itemMatchingPrjVenPan.length; l++) {
																var AmtWithoutCommas = itemMatchingPrjVenPan[l].Unit_Price?.replace(/,/g, '') ?? 0;
																var quantityWithoutCommas = itemMatchingPrjVenPan[l].Quantity?.replace(/,/g, '') ?? 0;
																let extendedPriceWithoutComms = itemMatchingPrjVenPan[l].extendedPrice?.replace(/,/g, '') ?? 0;

																extendedprice = extendedprice + parseFloat(extendedPriceWithoutComms ?? 0);
																tax_value = tax_value + (itemMatchingPrjVenPan[0]?.Indian_Tax_PER ?? ' ') + '\n'

																const total_amount_value = Number(AmtWithoutCommas ?? 0) * Number(quantityWithoutCommas ?? 0);
																const total_amount_display = `${total_amount_value} ${itemMatchingPrjVenPan[0].Unit_Price ?? ' '}`;

																grandTotalAmount += total_amount_value;
																// grandTotalUnit = itemMatchingPrjVenPan[0].Unit_Price;

																// let qnty = list_of_items.filter(item => item.Proposed_Vendor_Code == vendorslist[k].Proposed_Vendor_Code  && item.PAN_Number ==itemMatchingPrjVenPan[0]. )

																if (l == 0) {
																	let oContent = [];
																	let col1 = new sap.m.Label({ text: `Unit Rate`, design: 'Bold' });
																	col1.addStyleClass("labelColorClass")
																	let col2 = new sap.m.Label({ text: `Quantity`, design: 'Bold' });
																	col2.addStyleClass("labelColorClass")
																	let col3 = new sap.m.Label({ text: `Total Amount`, design: 'Bold' });
																	col3.addStyleClass("labelColorClass")

																	let cols = [];
																	cols.push(col1)
																	cols.push(col2)
																	cols.push(col3)
																	let hbox = new sap.m.HBox({
																		justifyContent: 'SpaceBetween',
																		alignContent: 'SpaceBetween',
																		items: cols
																	})
																	hbox.addStyleClass("hboxPopoverClass")
																	oContent.push(hbox)
																	var resultarray = [];
																	for (let j = 1; j < itemMatchingPrjVenPan.length; j++) {
																		var AmtWithoutCommas = itemMatchingPrjVenPan[j].Unit_Price?.replace(/,/g, '') ?? 0;
																		var quantityWithoutCommas = itemMatchingPrjVenPan[j].Quantity?.replace(/,/g, '') ?? 0;
																		let extendedPriceWithoutComms = itemMatchingPrjVenPan[j].extendedPrice?.replace(/,/g, '') ?? 0;

																		extendedprice = extendedprice + parseFloat(extendedPriceWithoutComms ?? 0);
																		tax_value = tax_value + (itemMatchingPrjVenPan[j]?.Indian_Tax_PER ?? ' ') + '\n'

																		const total_amount_value = Number(AmtWithoutCommas ?? 0) * Number(quantityWithoutCommas ?? 0);
																		const total_amount_display = `${total_amount_value} ${itemMatchingPrjVenPan[j].Unit_Price ?? ' '}`;

																		grandTotalAmount += total_amount_value;
																		let hbox = new sap.m.HBox({
																			justifyContent: 'SpaceBetween',
																			alignContent: 'SpaceBetween',
																			items: [
																				new sap.m.Text({ text: `${formatCurrency(AmtWithoutCommas, grandTotalUnit) ?? ' '} ${grandTotalUnit}` }),
																				new sap.m.Text({ text: `${itemMatchingPrjVenPan[j].Quantity ?? ' '}` }),
																				new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}` }),
																			]
																		})


																		resultarray.push(
																			{
																				"vendorcode": shortenedString,
																				"unit_rate": `${formatCurrency(AmtWithoutCommas, grandTotalUnit) ?? ' '} ${grandTotalUnit}`,
																				"quantity": `${itemMatchingPrjVenPan[j].Quantity ?? ' '}`,
																				"total": `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}`
																			}
																		)



																		hbox.addStyleClass("hboxPopoverClass")
																		oContent.push(hbox)
																	}
																	if (resultarray.length) {
																		var oModel = this.base.getExtensionAPI().getModel();
																		var oFunction1 = oModel.bindContext("/storeVendorDetails(...)");
																		var jsoondata = JSON.stringify(resultarray);
																		oFunction1.setParameter('result', jsoondata);
																		await oFunction1.execute();
																	}



																	const oItem = new sap.m.ColumnListItem({
																		id: `${"item1data" + generateUniqueId()}`,
																		cells: [
																			new sap.m.Text({ text: `${formatCurrency(AmtWithoutCommas, grandTotalUnit) ?? ' '} ${grandTotalUnit}` }),
																			new sap.m.Text({ text: `${itemMatchingPrjVenPan[l].Quantity ?? ' '}` }),
																			new sap.m.HBox({
																				items: [
																					new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit} ⠀` }),
																					new sap.ui.core.Icon({
																						src: "sap-icon://overflow",
																						activeColor: 'black',
																						color: 'black',
																						press: function (oEvent) {
																							debugger
																							let popover = new sap.m.Popover({
																								showHeader: false,
																								placement: sap.m.PlacementType.Bottom,
																								content: oContent
																							})
																							if (oEvent.getSource().getParent().getParent().getTable().getColumns()[2].getStyleClass() == 'columnStyleClass') {
																								popover.addStyleClass("PopOverClassBox");
																							}

																							popover.openBy(oEvent.getSource());
																						}
																					}),

																				]
																			})
																			// new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}` }),

																		],
																		// visible: false,
																		visible: true
																	});
																	oTable.addItem(oItem);
																	break;
																}


																// if (itemMatchingPrjVenPan.length - 1 == l && itemMatchingPrjVenPan.length > 1) {
																// 	var onlyonce = false;
																// 	const oItem = new sap.m.ColumnListItem({
																// 		id: `${"item1data" + generateUniqueId()}`,
																// 		cells: [
																// 			new sap.m.Text({ text: `${formatCurrency(AmtWithoutCommas, grandTotalUnit) ?? ' '} ${grandTotalUnit}` }),
																// 			new sap.m.Text({ text: `${itemMatchingPrjVenPan[l].Quantity ?? ' '}` }),
																// 			new sap.m.HBox({
																// 				items: [
																// 					new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}` }),
																// 					new sap.m.MenuButton({
																// 						menu: new sap.m.Menu({
																// 							items:new sap.m.MenuItem({
																// 								text:`${itemMatchingPrjVenPan[l].Quantity}`,


																// 							})
																// 						})
																// 					})
																// 					// 	new sap.ui.core.Icon({
																// 					// 		src: "sap-icon://navigation-up-arrow",
																// 					// 		color: "darkblue",
																// 					// 		hoverColor: "red",
																// 					// 		activeColor: "darkgreen",
																// 					// 		size: "12px",
																// 					// 		width: "20px",
																// 					// 		press: async function (oEvent) {


																// 					// 			let curr_row_sId = oEvent.getSource().getParent().getParent().sId;
																// 					// 			let total_rows = oEvent.getSource().getParent().getParent().getParent().getItems();
																// 					// 			let curr_index = 0;

																// 					// 			//to obtain the current index to identify in the oTable
																// 					// 			for (let i = 0; i < total_rows.length; i++) {
																// 					// 				if (total_rows[i].sId == curr_row_sId) {
																// 					// 					curr_index = i;
																// 					// 					break;
																// 					// 				}
																// 					// 			}
																// 					// 			let to_be_incremented = 0;
																// 					// 			debugger
																// 					// 			for (let j = curr_index - 1; j >= 0; j--) {
																// 					// 				if (Object.keys(total_rows[j].oModels).length === 0) {
																// 					// 					// if (total_rows[j].getVisible() == true) {
																// 					// 					// 	total_rows[j].setVisible(false);
																// 					// 					// 	to_be_incremented++;
																// 					// 					// }
																// 					// 					// else {
																// 					// 					total_rows[j].setVisible(true)
																// 					// 					to_be_incremented++;
																// 					// 					// }

																// 					// 				}
																// 					// 			}
																// 					// 			let mainHbox = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--mainhbox1")
																// 					// 			let leftVboxTable = mainHbox.getItems()[0].getItems()[2].getItems()[0];
																// 					// 			let vendors = mainHbox.getItems()[1].getContent()[0].getItems();

																// 					// 			if (!onlyonce) {
																// 					// 				let k = 0;
																// 					// 				while (k < to_be_incremented) {
																// 					// 					let oCell = [];
																// 					// 					for (let i = 0; i < leftVboxTable.getColumns().length; i++) {
																// 					// 						oCell.push(new sap.m.Text());

																// 					// 					}
																// 					// 					leftVboxTable.insertItem(new sap.m.ColumnListItem({
																// 					// 						cells: oCell
																// 					// 					}), curr_index);
																// 					// 					k++;
																// 					// 				}

																// 					// 				for (let v = 0; v < vendors.length; v++) {
																// 					// 					let inner_vbox = vendors[v].getItems()[1].getItems()
																// 					// 					for (let inn = 0; inn < inner_vbox.length; inn++) {
																// 					// 						let oTable = inner_vbox[inn].getItems()[1].getItems()[1];
																// 					// 						let k = 0;
																// 					// 						while (k < to_be_incremented) {
																// 					// 							if (oTable.getItems()[curr_index].sId == curr_row_sId) {

																// 					// 								break;
																// 					// 							}
																// 					// 							oTable.insertItem(new sap.m.ColumnListItem({
																// 					// 								cells: [
																// 					// 									new sap.m.Text(),
																// 					// 									new sap.m.Text(),
																// 					// 									new sap.m.Text(),
																// 					// 								]
																// 					// 							}), curr_index);
																// 					// 							k++;
																// 					// 						}
																// 					// 					}
																// 					// 				}
																// 					// 				onlyonce = true
																// 					// 			}
																// 					// 			// if (oEvent.getSource().getSrc() == 'sap-icon://navigation-up-arrow') {
																// 					// 			// 	for (let v = 0; v < vendors.length; v++) {
																// 					// 			// 		let inner_vbox = vendors[v].getItems()[1].getItems()
																// 					// 			// 		for (let inn = 0; inn < inner_vbox.length; inn++) {
																// 					// 			// 			let oTable = inner_vbox[inn].getItems()[1].getItems()[1];
																// 					// 			// 			let k = 0;
																// 					// 			// 			while (k < to_be_incremented) {
																// 					// 			// 				if (oTable.getItems()[curr_index].sId == curr_row_sId ) {
																// 					// 			// 					 
																// 					// 			// 					break;
																// 					// 			// 				}
																// 					// 			// 				oTable.getItems()[curr_index - k+1].setVisible(false);
																// 					// 			// 				k++;
																// 					// 			// 			}
																// 					// 			// 		}
																// 					// 			// 	}
																// 					// 			// 	oEvent.getSource().setSrc("sap-icon://navigation-right-arrow");
																// 					// 			// }
																// 					// 			// else {
																// 					// 			// 	for (let v = 0; v < vendors.length; v++) {
																// 					// 			// 		let inner_vbox = vendors[v].getItems()[1].getItems()
																// 					// 			// 		for (let inn = 0; inn < inner_vbox.length; inn++) {
																// 					// 			// 			let oTable = inner_vbox[inn].getItems()[1].getItems()[1];
																// 					// 			// 			let k = 0;
																// 					// 			// 			while (k < to_be_incremented) {
																// 					// 			// 				oTable.getItems()[curr_index - k+1].setVisible(true);
																// 					// 			// 				k++;
																// 					// 			// 			}
																// 					// 			// 		}
																// 					// 			// 		oEvent.getSource().setSrc("sap-icon://navigation-up-arrow");
																// 					// 			// 	}
																// 					// 			// }


																// 					// 		}
																// 					// 	})
																// 				]
																// 			})
																// 			// new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}` }),

																// 		]
																// 	});
																// 	var uidModel = new sap.ui.model.json.JSONModel();
																// 	uidModel.setProperty("/item_id", `${"item_id" + generateUniqueId()}`);
																// 	oItem.setModel(uidModel, "uidModel");

																// 	oTable.addItem(oItem);
																// }
																// else {
																// 	const oItem = new sap.m.ColumnListItem({
																// 		id: `${"item1data" + generateUniqueId()}`,
																// 		cells: [
																// 			new sap.m.Text({ text: `${formatCurrency(AmtWithoutCommas, grandTotalUnit) ?? ' '} ${grandTotalUnit}` }),
																// 			new sap.m.Text({ text: `${itemMatchingPrjVenPan[l].Quantity ?? ' '}` }),
																// 			new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}` }),

																// 		],
																// 		// visible: false,
																// 		visible: true
																// 	});
																// 	oTable.addItem(oItem);
																// }





															}
														}

														// Found item, create ColumnListItem with data
														// var AmtWithoutCommas = itemMatchingPrjVenPan[0].Unit_Price?.replace(/,/g, '') ?? 0;
														// var quantityWithoutCommas = itemMatchingPrjVenPan[0].Quantity?.replace(/,/g, '') ?? 0;
														// let extendedPriceWithoutComms = itemMatchingPrjVenPan[0].extendedPrice?.replace(/,/g, '') ?? 0;

														// extendedprice = extendedprice + parseFloat(extendedPriceWithoutComms ?? 0);
														// tax_value = tax_value + (itemMatchingPrjVenPan[0]?.Indian_Tax_PER ?? ' ') + '\n'

														// const total_amount_value = Number(AmtWithoutCommas ?? 0) * Number(quantityWithoutCommas ?? 0);
														// const total_amount_display = `${total_amount_value} ${itemMatchingPrjVenPan[0].Unit_Price ?? ' '}`;

														// grandTotalAmount += total_amount_value;
														// // grandTotalUnit = itemMatchingPrjVenPan[0].Unit_Price;

														// // let qnty = list_of_items.filter(item => item.Proposed_Vendor_Code == vendorslist[k].Proposed_Vendor_Code  && item.PAN_Number ==itemMatchingPrjVenPan[0]. )

														// const oItem = new sap.m.ColumnListItem({
														// 	id: `${"item1data" + generateUniqueId()}`,
														// 	cells: [
														// 		new sap.m.Text({ text: `${formatCurrency(AmtWithoutCommas, grandTotalUnit) ?? ' '} ${grandTotalUnit}` }),
														// 		new sap.m.Text({ text: `${itemMatchingPrjVenPan[0].Quantity ?? ' '}` }),
														// 		new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}` }),

														// 	]
														// });

														// oTable.addItem(oItem);
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

												//Tax Details
												const tax_details_filtered = tax_details.filter(item =>
													item.PAN_Number === vendorslist[k].PAN_Number &&
													item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
												);

												let valuesMap = {}; // Object to store values for specified names

												const namesToCheck = [
													'Spares for 2 Years operation',
													'Packing, Marking, Forwarding & Freight',
													// 'Freight',
													'Inspection / Testing Charges',
													'Documentation Charges',
													'RNOD',
													'Custom Duty & Cess',
													'SGST',
													'IGST',
													'UGST',
													'Shipment charges from EXW to ISRO Mahendragiri',
													'Per Diem rate for Supervision for Erection and commissioning',
													'PriceBasis',
													'Point of Delivery',
													'Delivery Period',
													'Payment Terms',
													'Liquidated Damages',
													'Warranty / Defect Liability Period',
													'CPBG',
													'Contact Person',
													'Contact No.',
													'Order can be given to',
													'Techncially Approved',
													'Approved Vendor',//22
													'Freight',//23  //fetching from database
													'Inspection Value',//24
													'Document Value'//25
												];

												for (let i = 0; i < tax_details_filtered.length; i++) {
													const item = tax_details_filtered[i];
													if (namesToCheck.includes(item.name)) {
														valuesMap[item.name] = item.value; // Store the value for the name
													}
												}



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
														new sap.m.Text({ text: `${formatCurrency(valuesMap[namesToCheck[0]] ?? 0) + " " + grandTotalUnit ?? ' '}` })
													]
												});


												let spares_2_value = grandTotalAmount + (parseFloat(valuesMap[namesToCheck[0]]) || 0)
												oTable.addItem(oItem2);
												var oItem3 = new sap.m.ColumnListItem({
													id: `${"grandtotal" + generateUniqueId()}`,
													cells: [
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" }),
														new sap.m.Label({ text: `${formatCurrency(spares_2_value) + " " + grandTotalUnit}`, design: "Bold" })
													]
												});

												let freightVal = formatCurrency(valuesMap[namesToCheck[23]]) == 'NaN' ? '0' : formatCurrency(valuesMap[namesToCheck[23]]);
												oTable.addItem(oItem3);
												var oItem4 = new sap.m.ColumnListItem({
													id: `${"freight" + generateUniqueId()}`,
													visible: false,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[1]] ?? ' '}` }),
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: `${freightVal + " " + grandTotalUnit}` }),
														// new sap.m.Text({ text: `${formatCurrency(valuesMap[namesToCheck[23]]) == 'NaN' ? '0' : formatCurrency(valuesMap[namesToCheck[23]]) + " " + grandTotalUnit}` }),
													]
												});

												oTable.addItem(oItem4);
												var oItem5 = new sap.m.ColumnListItem({
													id: `${"inspection" + generateUniqueId()}`,
													visible: false,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[2]] ?? ' '}` }),
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: `${valuesMap[namesToCheck[24]] ?? ' '}` }),
													]
												});

												oTable.addItem(oItem5);
												var oItem6 = new sap.m.ColumnListItem({
													id: `${"documentation" + generateUniqueId()}`,
													visible: false,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[3]] ?? ' '}` }),
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: `${valuesMap[namesToCheck[25]] ?? ' '}` }),
													]
												});

												let totalchargesB = spares_2_value + (parseInt(valuesMap[namesToCheck[23]]) || 0) + (parseInt(valuesMap[namesToCheck[24]]) || 0) + (parseInt(valuesMap[namesToCheck[25]]) || 0)
												oTable.addItem(oItem6);
												// var oItem7 = new sap.m.ColumnListItem({
												// 	id: `${"totalbasicpricing" + generateUniqueId()}`,
												// 	cells: [


												// 		new sap.m.Text({ text: "" }),
												// 		new sap.m.Text({ text: "" }),
												// 		new sap.m.Label({ text: `${totalchargesB + " " + grandTotalUnit}`, design: "Bold" })
												// 		// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_including_packing ?? ' '}`, design: "Bold" }),
												// 	]
												// });

												// oTable.addItem(oItem7);
												var oItem8 = new sap.m.ColumnListItem({
													id: `${"rnod" + generateUniqueId()}`,
													visible: false,
													cells: [

														new sap.m.Label({ text: `${valuesMap[namesToCheck[4]] ?? ' '}`, design: "Bold" }),
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" }),
													]
												});

												oTable.addItem(oItem8);
												var oItem9 = new sap.m.ColumnListItem({
													id: `${"customduty" + generateUniqueId()}`,
													visible: false,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[5]] ?? ' '}` }),
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" }),
													]
												});

												oTable.addItem(oItem9);

												// var oItem10 = new sap.m.ColumnListItem({
												// 	id: `${"tax" + generateUniqueId()}`,
												// 	visible: true,
												// 	cells: [

												// 		new sap.m.Text({ text: "hellllllllllllskjdfhjkdshfsdkjfjhdskjfhkjdshfdsjkfhsdjkfhdskfjkdshfjkdshfjkdshfkhdslllllllllo",width:"300%",wrapping:false }),

												// 	]
												// });

												// oTable.addItem(oItem10);
												var oItem10 = new sap.m.CustomListItem({
													id: `${"tax_field" + generateUniqueId()}`,
													visible: false,
													content: [
														new sap.m.Text({ text: tax_value, width: "294px", height: "40px" })

													]
												});

												oTable.addItem(oItem10);



												// alert(oTable.getItems().length);


												let sgst_amt = (parseFloat(valuesMap[namesToCheck[6]]) || 0) * totalchargesB / 100;
												// var oItem10 = new sap.m.ColumnListItem({
												// 	id: `${"sgst" + generateUniqueId()}`,
												// 	visible: false,
												// 	cells: [

												// 		new sap.m.Text({ text: `${valuesMap[namesToCheck[6]] ?? ' '}` }),
												// 		new sap.m.Text({ text: "" }),
												// 		new sap.m.Text({ text: sgst_amt + " " + grandTotalUnit }),
												// 	]
												// });

												let igst_amt = (parseFloat(valuesMap[namesToCheck[7]]) || 0) * totalchargesB / 100;
												// oTable.addItem(oItem10);
												// var oItem11 = new sap.m.ColumnListItem({
												// 	id: `${"igst" + generateUniqueId()}`,
												// 	visible: false,
												// 	cells: [

												// 		new sap.m.Text({ text: `${valuesMap[namesToCheck[7]] ?? ' '}` }),
												// 		new sap.m.Text({ text: "" }),
												// 		new sap.m.Text({ text: `${igst_amt + " " + grandTotalUnit}` }),
												// 	]
												// });

												let ugst_amt = (parseFloat(valuesMap[namesToCheck[8]]) || 0) * totalchargesB / 100;
												// oTable.addItem(oItem11);
												// var oItem12 = new sap.m.ColumnListItem({
												// 	id: `${"ugst" + generateUniqueId()}`,
												// 	visible: false,
												// 	cells: [

												// 		new sap.m.Text({ text: `${valuesMap[namesToCheck[8]] ?? " "}` }),
												// 		new sap.m.Text({ text: "" }),
												// 		new sap.m.Text({ text: `${ugst_amt + " " + grandTotalUnit}` }),
												// 	]
												// });

												// oTable.addItem(oItem12);
												var oItem13 = new sap.m.ColumnListItem({
													id: `${"shipment" + generateUniqueId()}`,
													visible: false,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[9]] ?? ' '}` }),
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" }),
													]
												});
												if (!extendedprice) {
													extendedprice = 0;
												}

												let totalincludingtax = totalchargesB + sgst_amt + igst_amt + ugst_amt
												oTable.addItem(oItem13);
												var oItem14 = new sap.m.ColumnListItem({
													id: `${"totalincludingtaxes" + generateUniqueId()}`,
													cells: [
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" }),
														// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_with_taxes ?? ' '}`, design: "Bold" })
														// new sap.m.Label({ text: `${totalincludingtax + " " + grandTotalUnit}`, design: "Bold" })
														new sap.m.Label({ text: `${formatCurrency(extendedprice ?? 0) + " " + grandTotalUnit}`, design: "Bold" })
													]
												});
												oTable.addItem(oItem14);
												var oItem14 = new sap.m.ColumnListItem({
													id: `${"total_excluding_taxes" + generateUniqueId()}`,
													cells: [
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" }),
														// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_without_taxes ?? ' '}`, design: "Bold" })
														// new sap.m.Label({ text: `${totalchargesB + " " + grandTotalUnit}`, design: "Bold" })
														new sap.m.Label({ text: `${formatCurrency(extendedprice) + " " + grandTotalUnit}`, design: "Bold" })
													]
												});
												oTable.addItem(oItem14);
												var oItem15 = new sap.m.ColumnListItem({
													id: `${"perdiemrate" + generateUniqueId()}`,
													cells: [
														new sap.m.Text({ text: `${valuesMap[namesToCheck[10]] ?? ' '}` }),
														new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" })
													]
												});
												oTable.addItem(oItem15);
												if (vendorslist[k].Rank == '1') {


													oTable.getColumns()[0].setStyleClass("columnStyleClass");
													oTable.getColumns()[1].setStyleClass("columnStyleClass");
													oTable.getColumns()[2].setStyleClass("columnStyleClass");
													oTable.getItems()[oTable.getItems().length - 5].addStyleClass("customColumnList")
												}


												oTable.getItems()[oTable.getItems().length - 5].addStyleClass("taxCell")

												let tax_text = oTable.getItems()[oTable.getItems().length - 5].getContent()[0].addStyleClass("taxTextClass")


												var combobox_item = vbox_last_section.getItems()[0]

												// combobox_item.setValue(`${total_offers_of_vendor[total_offers_of_vendor.length - 1].offer_name}`);



												var item = new sap.ui.core.Item(`${"item1" + (generateUniqueId())}`, {
													text: `${filteredWebEvent[webnt].eventNo ?? ' '}`
												})

												combobox_item.addItem(item);

												combobox_item.setValue(`${filteredWebEvent[webnt].eventNo ?? ''}`);

												last_hcombobox.addItem(new sap.m.VBox(`${"offer" + generateUniqueId()}`));

												var chvbox = last_hcombobox.getItems()[iterator];
												iterator++;


												// if (combobox_item.getValue() != vendorslist[k]?.PAN_Number ?? ' ') {
												// 	chvbox.setVisible(false)
												// }

												chvbox.addStyleClass("spacebetweenclass");


												// //Price Basis
												// chvbox.addItem(new sap.m.Text(`${"pricebasis" + generateUniqueId()}`, {
												// 	text: `${valuesMap[namesToCheck[11]] ?? ' '}`,
												// 	// text: `${vendorslist[k]?.Vendor_Name ?? ' '}`,

												// }));
												// chvbox.getItems()[0].addStyleClass("pricebasispadding");

												// //Point of Delivery
												// chvbox.addItem(new sap.m.Text(`${"pointofdelivery" + generateUniqueId()}`, {
												// 	text: `${valuesMap[namesToCheck[12]] ?? ' '}`,
												// 	// text: `${vendorslist[k]?.Vendor_Name ?? ' '}`,
												// 	// height:"15px"
												// }));


												//Delivery Period
												chvbox.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll" + generateUniqueId()}`, {
													vertical: true,
													width: "350px",
													height: "100px"
												}))
												// chvbox.getItems()[1].addStyleClass("deliveryperiodpadding");

												chvbox.getItems()[0].addContent(new sap.m.Text(`${"Scopedeliveryperiod" + generateUniqueId()}`, {
													// text: `${valuesMap[namesToCheck[13]] ?? ' '}`
													// text: `${vendorslist[k]?.CPBG ?? ' '}`
													text: `${vendorresponse_selecteditem[0]?.Scope_and_Responsibilities ?? ' '}`
												}));


												//Payment Terms
												chvbox.addItem(new sap.m.ScrollContainer(`${"CommercialpaymenttermsScroll" + generateUniqueId()}`, {
													vertical: true,
													// width: "100%",
													height: "100px"
												}))

												chvbox.getItems()[1].addContent(new sap.m.Text(`${"Compliancepaymentterms" + generateUniqueId()}`, {
													// text: `${valuesMap[namesToCheck[14]] ?? ' '}`
													// text: `${vendorslist[k]?.CPBG ?? ' '}`
													text: `${vendorresponse_selecteditem[0]?.Commercial_Terms ?? ' '}`
												}));

												//Liquidated Damages
												chvbox.addItem(new sap.m.ScrollContainer(`${"OthersliquidedScroll" + generateUniqueId()}`, {
													vertical: true,
													// width: "500px",
													height: "100px"
												}))

												chvbox.getItems()[2].addContent(new sap.m.Text(`${"Othersliquided" + generateUniqueId()}`, {
													// text: `${valuesMap[namesToCheck[15]] ?? ' '}`
													// text: `${vendorslist[k]?.CPBG ?? ' '}`
													text: `${vendorresponse_selecteditem[0]?.Compliance_Terms ?? ' '}`
												}));

												//Warranty / Defect Liability Period
												chvbox.addItem(new sap.m.ScrollContainer(`${"warrantyScroll" + generateUniqueId()}`, {
													vertical: true,
													// width: "500px",
													height: "100px"
												}))

												chvbox.getItems()[3].addContent(new sap.m.Text(`${"warranty" + generateUniqueId()}`, {
													// text: `${valuesMap[namesToCheck[16]] ?? ' '}`
													// text: `${vendorslist[k]?.CPBG ?? ' '}`
													text: `${vendorresponse_selecteditem[0]?.Others ?? ' '}`
												}));

												// //CPBG
												// chvbox.addItem(new sap.m.ScrollContainer(`${"cpbgScroll" + generateUniqueId()}`, {
												// 	vertical: true,
												// 	// width: "500px",
												// 	height: "100px"
												// }))

												// chvbox.getItems()[4].addContent(new sap.m.Text(`${"cpbg" + generateUniqueId()}`, {
												// 	text: `${vendorresponse_selecteditem[0]?.CPBG ?? ' '}`
												// 	// text: `${valuesMap["CPBG"] ?? ' '}`
												// }));

												const inputString = vendorresponse_selecteditem[0]?.Vendor_Contact_PersonDASH1 ?? '';
												if (inputString) {
													var regex = /name\s*:(.*?)\s*email/;
													var match = inputString.match(regex);
												}

												var contactPerson = match ? match[1].trim() : null;


												//Contact Person
												chvbox.addItem(new sap.m.Text(`${"contactperson" + generateUniqueId()}`, {
													// text: `${contactPerson ?? ' '}`,
													text: `${vendorresponse_selecteditem[0]?.Vendor_Contact_PersonDASH1 ?? ' '}`,
													// height:"100px"
												}));
												const regexPh1 = /ph1\s*:\s*(.*?)\s*ph2/;
												const matchPh1 = inputString.match(regexPh1);
												let phoneNumber1 = matchPh1 ? matchPh1[1].trim() : null;

												// Extracting ph2
												const regexPh2 = /ph2\s*:\s*(.*?)$/;
												const matchPh2 = inputString.match(regexPh2);
												let phoneNumber2 = matchPh2 ? matchPh2[1].trim() : null;
												if (phoneNumber1 == null) {
													phoneNumber1 = ' ';
												}
												if (phoneNumber2 == null) {
													phoneNumber2 = ' ';
												}

												//Contact NO
												chvbox.addItem(new sap.m.Text(`${"contactno" + generateUniqueId()}`, {
													text: `${phoneNumber1 + " " + phoneNumber2 ?? ' '}`,
													// height:"25px"
												}));

												//Order can be given to……...
												chvbox.addItem(new sap.m.Text(`${"ordercanbe" + generateUniqueId()}`, {
													text: `${valuesMap["Order can be give to"] ?? ' '}`,
													// height:"25px"
												}));


												//Techncially Approved
												chvbox.addItem(new sap.m.Text(`${"technicallyapproved" + generateUniqueId()}`, {
													text: `${vendorslist[k].Technically_Approved ?? ' '}`,
													// height:"25px"
												}));



												//Approved Vendor
												chvbox.addItem(new sap.m.Text(`${"approvedvendor" + generateUniqueId()}`, {
													text: `${vendorslist[k].Awarded_Vendor ?? ' '}`,
													// height:"25px"
												}));

												// chvbox.getItems()[chvbox.getItems().length - 4].addStyleClass("contactpersonpadding")

												let lastitemchvbox = chvbox.getItems()[(chvbox.getItems().length - 1)];

												lastitemchvbox.addStyleClass("customlaststyleclassrsection");
												// }

											}



											// 	hbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection" + generateUniqueId()}`, {
											// 		// width: "500px"
											// 	}));



											// 	var itmlen = hbmiddlesection.getItems().length
											// 	var vbmiddlesection = hbmiddlesection.getItems()[itmlen - 1];
											// 	vbmiddlesection.addStyleClass("customVBox");

											// 	vbmiddlesection.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb" + generateUniqueId()}`));

											// 	var vbmiddlesection_innervb = vbmiddlesection.getItems()[0];

											// 	vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_qtn_ref" + generateUniqueId()}`, {
											// 		text: `${filteredWebEvent[0]?.number ?? 'NA'}`,
											// 	}));
											// 	vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_date" + generateUniqueId()}`, {
											// 		text: `${filteredWebEvent[0]?.date ?? 'NA'}`
											// 	}));
											// 	vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_validity" + generateUniqueId()}`, {
											// 		text: `${vendorslist[k]?.validity ?? 'NA'}`
											// 	}));
											// 	vbmiddlesection_innervb.addItem(new sap.m.Text(`${"org_cylindrical_space" + generateUniqueId()}`, {
											// 		text: ""
											// 	}));
											// 	vbmiddlesection_innervb.addStyleClass("vbmiddlesectionclass");

											// 	var inner_vbox = new sap.m.VBox(`${"innervbox" + generateUniqueId()}`, {
											// 		// width: "100%"
											// 		alignItems: "Center"
											// 	});
											// 	vbmiddlesection.addItem(inner_vbox);


											// 	let matchedObject = pan_info.find(item => item.PAN_Number === vendorslist[k].PAN_Number);

											// 	inner_vbox.addItem(new sap.m.Label(`${"original_offer" + generateUniqueId()}`, {
											// 		text: `${filteredWebEvent[0]?.eventNo ?? ' '}`,
											// 		design: "Bold"
											// 	}));

											// 	var oTable = new sap.m.Table({
											// 		id: `${"offer" + generateUniqueId()}`,
											// 		class: "tableBorder",
											// 		growing: true,
											// 		growingThreshold: 20,
											// 		width: "350px",
											// 		fixedLayout: true
											// 	});


											// 	oTable.addStyleClass("tableBorder");

											// 	inner_vbox.addItem(oTable);

											// 	var oColumn1 = new sap.m.Column({
											// 		id: `${"unit_rate" + generateUniqueId()}`,
											// 		header: new sap.m.Label({ text: "Unit Rate", design: "Bold", wrapping: false }),
											// 		// styleClass: 'custcolorclass'
											// 	});

											// 	// var oColumn2 = new sap.m.Column({
											// 	// 	id: `${"unit_rate_per" + generateUniqueId()}`,
											// 	// 	header: new sap.m.Label({ text: "Rate per Unit", design: "Bold", wrapping: false }),
											// 	// 	// styleClass: 'custcolorclass'
											// 	// });


											// 	var oColumn3 = new sap.m.Column({
											// 		id: `${"total_amt_offer" + generateUniqueId()}`,
											// 		header: new sap.m.HBox(),
											// 		// styleClass: 'custcolorclass'

											// 	});

											// 	oTable.addColumn(oColumn1);
											// 	// oTable.addColumn(oColumn2);
											// 	oTable.addColumn(oColumn3);

											// 	//Total amount expand property

											// 	 
											// 	var colheader = oTable.getColumns()[1].getHeader()

											// 	colheader.addItem(new sap.m.Label({
											// 		text: "Total Amount",
											// 		design: "Bold"
											// 	}))


											// 	//end of total amount 

											// 	var uniquelistitem = [];
											// 	var grandTotalAmount = 0
											// 	var grandTotalUnit = '';
											// 	let cnt = 0;
											// 	let processedOfferIds = new Set();



											// 	// Filter list_of_items based on PAN_Number and Proposed_Vendor_Code
											// 	const filteredItems = list_of_items.filter(item =>
											// 		item.PAN_Number === vendorslist[k].PAN_Number &&
											// 		item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
											// 	);

											// 	let extendedprice = 0;
											// 	let tax_value = '';

											// 	function formatCurrency(amount, currencyCode) {
											// 		 
											// 		let formattedAmount = '';
											// 		switch (currencyCode) {
											// 			case 'INR':
											// 				formattedAmount += parseFloat(amount).toLocaleString('en-IN', { maximumFractionDigits: 2 });
											// 				break;
											// 			default:
											// 				formattedAmount += parseFloat(amount).toLocaleString('en-US', { maximumFractionDigits: 2 });
											// 				break;
											// 		}
											// 		return formattedAmount;
											// 	}

											// 	// Iterate over uniqueItems
											// 	for (let i = 0; i < uniqueItems.length; i++) {


											// 		const currentItem = uniqueItems[i];
											// 		let itemMatchingPrjVenPan = list_of_items.filter(item => item.ProjectId == project_id[1] && item.Proposed_Vendor_Code == vendorslist[k].Proposed_Vendor_Code && item.Item_Code == uniqueItems[i].Item_Code && item.PAN_Number == panNumber)
											// 		const foundItem = filteredItems.find(item => item.Item_Code === currentItem.Item_Code);

											// 		if (foundItem || itemMatchingPrjVenPan.length) {
											// 			 
											// 			// Found item, create ColumnListItem with data
											// 			var AmtWithoutCommas = itemMatchingPrjVenPan[0].Amount?.replace(/,/g, '') ?? 0;
											// 			var quantityWithoutCommas = itemMatchingPrjVenPan[0].Quantity?.replace(/,/g, '') ?? 0;
											// 			let extendedPriceWithoutComms = itemMatchingPrjVenPan[0].extendedPrice?.replace(/,/g, '') ?? 0;

											// 			extendedprice = extendedprice + parseFloat(extendedPriceWithoutComms ?? 0);
											// 			tax_value = tax_value + (itemMatchingPrjVenPan[0]?.Indian_Tax_PER ?? ' ') + '\n'

											// 			const total_amount_value = Number(AmtWithoutCommas ?? 0) * Number(quantityWithoutCommas ?? 0);
											// 			const total_amount_display = `${total_amount_value} ${itemMatchingPrjVenPan[0].Unit_Price ?? ' '}`;

											// 			grandTotalAmount += total_amount_value;
											// 			grandTotalUnit = itemMatchingPrjVenPan[0].Unit_Price;

											// 			const oItem = new sap.m.ColumnListItem({
											// 				id: `${"item1data" + generateUniqueId()}`,
											// 				cells: [
											// 					new sap.m.Text({ text: `${formatCurrency(AmtWithoutCommas, grandTotalUnit) ?? ' '} ${itemMatchingPrjVenPan[0].Unit_Price}` }),
											// 					// new sap.m.Text({ text: `${itemMatchingPrjVenPan[0].unit_rate_per_unit ?? ' '}` }),
											// 					new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}` }),
											// 				]
											// 			});

											// 			oTable.addItem(oItem);
											// 		} else {
											// 			// Item not found, create empty row
											// 			const oItem = new sap.m.ColumnListItem({
											// 				id: `${"item1data" + generateUniqueId()}`,
											// 				cells: [
											// 					new sap.m.Text({ text: "" }),
											// 					// new sap.m.Text({ text: "" }),
											// 					new sap.m.Text({ text: "" })
											// 				]
											// 			});

											// 			oTable.addItem(oItem);
											// 		}
											// 	}
											// 	////////////////////////////////////////////////////////////////////////////////


											// 	const vendorresponse_selecteditem = vendor_response_deatils.filter(item =>
											// 		item.PAN_Number === vendorslist[k].PAN_Number &&
											// 		item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
											// 	);

											// 	//Tax Details
											// 	const tax_details_filtered = tax_details.filter(item =>
											// 		item.PAN_Number === vendorslist[k].PAN_Number &&
											// 		item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
											// 	);

											// 	let valuesMap = {}; // Object to store values for specified names

											// 	const namesToCheck = [
											// 		'Spares for 2 Years operation',
											// 		'Packing, Marking, Forwarding & Freight',
											// 		// 'Freight',
											// 		'Inspection / Testing Charges',
											// 		'Documentation Charges',
											// 		'RNOD',
											// 		'Custom Duty & Cess',
											// 		'SGST',
											// 		'IGST',
											// 		'UGST',
											// 		'Shipment charges from EXW to ISRO Mahendragiri',
											// 		'Per Diem rate for Supervision for Erection and commissioning',
											// 		'PriceBasis',
											// 		'Point of Delivery',
											// 		'Delivery Period',
											// 		'Payment Terms',
											// 		'Liquidated Damages',
											// 		'Warranty / Defect Liability Period',
											// 		'CPBG',
											// 		'Contact Person',
											// 		'Contact No.',
											// 		'Order can be given to',
											// 		'Techncially Approved',
											// 		'Approved Vendor',//22
											// 		'Freight',//23  //fetching from database
											// 		'Inspection Value',//24
											// 		'Document Value'//25
											// 	];

											// 	for (let i = 0; i < tax_details_filtered.length; i++) {
											// 		const item = tax_details_filtered[i];
											// 		if (namesToCheck.includes(item.name)) {
											// 			valuesMap[item.name] = item.value; // Store the value for the name
											// 		}
											// 	}



											// 	var oItem1 = new sap.m.ColumnListItem({
											// 		id: `${"blankspace" + generateUniqueId()}`,
											// 		cells: [
											// 			new sap.m.Text({ text: "" }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Text({ text: "" })
											// 		]
											// 	});



											// 	oTable.addItem(oItem1);
											// 	var oItem2 = new sap.m.ColumnListItem({
											// 		id: `${"spare" + generateUniqueId()}`,
											// 		cells: [
											// 			new sap.m.Text({ text: "" }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Text({ text: `${formatCurrency(valuesMap[namesToCheck[0]] ?? 0) + " " + grandTotalUnit ?? ' '}` })
											// 		]
											// 	});


											// 	let spares_2_value = grandTotalAmount + (parseFloat(valuesMap[namesToCheck[0]]) || 0)
											// 	oTable.addItem(oItem2);
											// 	var oItem3 = new sap.m.ColumnListItem({
											// 		id: `${"grandtotal" + generateUniqueId()}`,
											// 		cells: [
											// 			new sap.m.Text({ text: "" }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Label({ text: `${formatCurrency(spares_2_value) + " " + grandTotalUnit}`, design: "Bold" })
											// 		]
											// 	});

											// 	oTable.addItem(oItem3);
											// 	var oItem4 = new sap.m.ColumnListItem({
											// 		id: `${"parkingmarking" + generateUniqueId()}`,
											// 		visible: true,
											// 		cells: [

											// 			new sap.m.Text({ text: `${valuesMap[namesToCheck[1]] ?? ' '}` }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Text({ text: `${formatCurrency(valuesMap[namesToCheck[23]] ?? 0) + " " + grandTotalUnit}` }),
											// 		]
											// 	});

											// 	oTable.addItem(oItem4);
											// 	var oItem5 = new sap.m.ColumnListItem({
											// 		id: `${"inspection" + generateUniqueId()}`,
											// 		visible: true,
											// 		cells: [

											// 			new sap.m.Text({ text: `${valuesMap[namesToCheck[2]] ?? ' '}` }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Text({ text: `${valuesMap[namesToCheck[24]] ?? ' '}` }),
											// 		]
											// 	});

											// 	oTable.addItem(oItem5);
											// 	var oItem6 = new sap.m.ColumnListItem({
											// 		id: `${"documentation" + generateUniqueId()}`,
											// 		visible: true,
											// 		cells: [

											// 			new sap.m.Text({ text: `${valuesMap[namesToCheck[3]] ?? ' '}` }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Text({ text: `${valuesMap[namesToCheck[25]] ?? ' '}` }),
											// 		]
											// 	});

											// 	let totalchargesB = spares_2_value + (parseInt(valuesMap[namesToCheck[23]]) || 0) + (parseInt(valuesMap[namesToCheck[24]]) || 0) + (parseInt(valuesMap[namesToCheck[25]]) || 0)
											// 	oTable.addItem(oItem6);
											// 	// var oItem7 = new sap.m.ColumnListItem({
											// 	// 	id: `${"totalbasicpricing" + generateUniqueId()}`,
											// 	// 	cells: [


											// 	// 		new sap.m.Text({ text: "" }),
											// 	// 		new sap.m.Text({ text: "" }),
											// 	// 		new sap.m.Label({ text: `${totalchargesB + " " + grandTotalUnit}`, design: "Bold" })
											// 	// 		// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_including_packing ?? ' '}`, design: "Bold" }),
											// 	// 	]
											// 	// });

											// 	// oTable.addItem(oItem7);
											// 	var oItem8 = new sap.m.ColumnListItem({
											// 		id: `${"rnod" + generateUniqueId()}`,
											// 		cells: [

											// 			new sap.m.Label({ text: `${valuesMap[namesToCheck[4]] ?? ' '}`, design: "Bold" }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Text({ text: "" }),
											// 		]
											// 	});

											// 	oTable.addItem(oItem8);
											// 	var oItem9 = new sap.m.ColumnListItem({
											// 		id: `${"customduty" + generateUniqueId()}`,
											// 		visible: true,
											// 		cells: [

											// 			new sap.m.Text({ text: `${valuesMap[namesToCheck[5]] ?? ' '}` }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Text({ text: "" }),
											// 		]
											// 	});

											// 	oTable.addItem(oItem9);

											// 	// var oItem10 = new sap.m.ColumnListItem({
											// 	// 	id: `${"tax" + generateUniqueId()}`,
											// 	// 	visible: true,
											// 	// 	cells: [

											// 	// 		new sap.m.Text({ text: "hellllllllllllskjdfhjkdshfsdkjfjhdskjfhkjdshfdsjkfhsdjkfhdskfjkdshfjkdshfjkdshfkhdslllllllllo",width:"300%",wrapping:false }),

											// 	// 	]
											// 	// });

											// 	// oTable.addItem(oItem10);
											// 	var oItem10 = new sap.m.CustomListItem({
											// 		id: `${"tax_field" + generateUniqueId()}`,
											// 		visible: true,
											// 		content: [
											// 			new sap.m.Text({ text: tax_value, width: "343px" })

											// 		]
											// 	});

											// 	oTable.addItem(oItem10);

											// 	// alert(oTable.getItems().length);


											// 	let sgst_amt = (parseFloat(valuesMap[namesToCheck[6]]) || 0) * totalchargesB / 100;
											// 	// var oItem10 = new sap.m.ColumnListItem({
											// 	// 	id: `${"sgst" + generateUniqueId()}`,
											// 	// 	visible: false,
											// 	// 	cells: [

											// 	// 		new sap.m.Text({ text: `${valuesMap[namesToCheck[6]] ?? ' '}` }),
											// 	// 		new sap.m.Text({ text: "" }),
											// 	// 		new sap.m.Text({ text: sgst_amt + " " + grandTotalUnit }),
											// 	// 	]
											// 	// });

											// 	let igst_amt = (parseFloat(valuesMap[namesToCheck[7]]) || 0) * totalchargesB / 100;
											// 	// oTable.addItem(oItem10);
											// 	// var oItem11 = new sap.m.ColumnListItem({
											// 	// 	id: `${"igst" + generateUniqueId()}`,
											// 	// 	visible: false,
											// 	// 	cells: [

											// 	// 		new sap.m.Text({ text: `${valuesMap[namesToCheck[7]] ?? ' '}` }),
											// 	// 		new sap.m.Text({ text: "" }),
											// 	// 		new sap.m.Text({ text: `${igst_amt + " " + grandTotalUnit}` }),
											// 	// 	]
											// 	// });

											// 	let ugst_amt = (parseFloat(valuesMap[namesToCheck[8]]) || 0) * totalchargesB / 100;
											// 	// oTable.addItem(oItem11);
											// 	// var oItem12 = new sap.m.ColumnListItem({
											// 	// 	id: `${"ugst" + generateUniqueId()}`,
											// 	// 	visible: false,
											// 	// 	cells: [

											// 	// 		new sap.m.Text({ text: `${valuesMap[namesToCheck[8]] ?? " "}` }),
											// 	// 		new sap.m.Text({ text: "" }),
											// 	// 		new sap.m.Text({ text: `${ugst_amt + " " + grandTotalUnit}` }),
											// 	// 	]
											// 	// });

											// 	// oTable.addItem(oItem12);
											// 	var oItem13 = new sap.m.ColumnListItem({
											// 		id: `${"shipment" + generateUniqueId()}`,
											// 		visible: true,
											// 		cells: [

											// 			new sap.m.Text({ text: `${valuesMap[namesToCheck[9]] ?? ' '}` }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Text({ text: "" }),
											// 		]
											// 	});
											// 	if (!extendedprice) {
											// 		extendedprice = 0;
											// 	}

											// 	let totalincludingtax = totalchargesB + sgst_amt + igst_amt + ugst_amt
											// 	oTable.addItem(oItem13);
											// 	var oItem14 = new sap.m.ColumnListItem({
											// 		id: `${"totalincludingtaxes" + generateUniqueId()}`,
											// 		cells: [
											// 			new sap.m.Text({ text: "" }),
											// 			// new sap.m.Text({ text: "" }),
											// 			// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_with_taxes ?? ' '}`, design: "Bold" })
											// 			// new sap.m.Label({ text: `${totalincludingtax + " " + grandTotalUnit}`, design: "Bold" })
											// 			new sap.m.Label({ text: `${formatCurrency(extendedprice ?? 0) + " " + grandTotalUnit}`, design: "Bold" })
											// 		]
											// 	});
											// 	oTable.addItem(oItem14);
											// 	var oItem14 = new sap.m.ColumnListItem({
											// 		id: `${"total_excluding_taxes" + generateUniqueId()}`,
											// 		cells: [
											// 			new sap.m.Text({ text: "" }),
											// 			// new sap.m.Text({ text: "" }),
											// 			// new sap.m.Label({ text: `${vendorslist[k]?.total_basic_price_without_taxes ?? ' '}`, design: "Bold" })
											// 			// new sap.m.Label({ text: `${totalchargesB + " " + grandTotalUnit}`, design: "Bold" })
											// 			new sap.m.Label({ text: `${formatCurrency(extendedprice) + " " + grandTotalUnit}`, design: "Bold" })
											// 		]
											// 	});
											// 	oTable.addItem(oItem14);
											// 	var oItem15 = new sap.m.ColumnListItem({
											// 		id: `${"perdiemrate" + generateUniqueId()}`,
											// 		cells: [
											// 			new sap.m.Text({ text: `${valuesMap[namesToCheck[10]] ?? ' '}` }),
											// 			// new sap.m.Text({ text: "" }),
											// 			new sap.m.Text({ text: "" })
											// 		]
											// 	});
											// 	oTable.addItem(oItem15);


											// 	oTable.getItems()[oTable.getItems().length - 5].addStyleClass("taxCell")


											// 	var combobox_item = vbox_last_section.getItems()[0]

											// 	// combobox_item.setValue(`${total_offers_of_vendor[total_offers_of_vendor.length - 1].offer_name}`);



											// 	var item = new sap.ui.core.Item(`${"item1" + (generateUniqueId())}`, {
											// 		text: `${filteredWebEvent[0].eventNo ?? ' '}`
											// 	})

											// 	combobox_item.addItem(item);

											// 	combobox_item.setValue(`${filteredWebEvent[0].eventNo ?? ''}`);

											// 	last_hcombobox.addItem(new sap.m.VBox(`${"offer" + generateUniqueId()}`));

											// 	var chvbox = last_hcombobox.getItems()[iterator];
											// 	iterator++;


											// 	// if (combobox_item.getValue() != vendorslist[k]?.PAN_Number ?? ' ') {
											// 	// 	chvbox.setVisible(false)
											// 	// }

											// 	chvbox.addStyleClass("spacebetweenclass");


											// 	// //Price Basis
											// 	// chvbox.addItem(new sap.m.Text(`${"pricebasis" + generateUniqueId()}`, {
											// 	// 	text: `${valuesMap[namesToCheck[11]] ?? ' '}`,
											// 	// 	// text: `${vendorslist[k]?.Vendor_Name ?? ' '}`,

											// 	// }));
											// 	// chvbox.getItems()[0].addStyleClass("pricebasispadding");

											// 	// //Point of Delivery
											// 	// chvbox.addItem(new sap.m.Text(`${"pointofdelivery" + generateUniqueId()}`, {
											// 	// 	text: `${valuesMap[namesToCheck[12]] ?? ' '}`,
											// 	// 	// text: `${vendorslist[k]?.Vendor_Name ?? ' '}`,
											// 	// 	// height:"15px"
											// 	// }));


											// 	//Delivery Period
											// 	chvbox.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll" + generateUniqueId()}`, {
											// 		vertical: true,
											// 		width: "350px",
											// 		height: "100px"
											// 	}))
											// 	// chvbox.getItems()[1].addStyleClass("deliveryperiodpadding");

											// 	chvbox.getItems()[0].addContent(new sap.m.Text(`${"Scopedeliveryperiod" + generateUniqueId()}`, {
											// 		// text: `${valuesMap[namesToCheck[13]] ?? ' '}`
											// 		// text: `${vendorslist[k]?.CPBG ?? ' '}`
											// 		text: `${vendorresponse_selecteditem[0]?.Scope_and_Responsibilities ?? ' '}`
											// 	}));


											// 	//Payment Terms
											// 	chvbox.addItem(new sap.m.ScrollContainer(`${"CommercialpaymenttermsScroll" + generateUniqueId()}`, {
											// 		vertical: true,
											// 		// width: "100%",
											// 		height: "100px"
											// 	}))

											// 	chvbox.getItems()[1].addContent(new sap.m.Text(`${"Compliancepaymentterms" + generateUniqueId()}`, {
											// 		// text: `${valuesMap[namesToCheck[14]] ?? ' '}`
											// 		// text: `${vendorslist[k]?.CPBG ?? ' '}`
											// 		text: `${vendorresponse_selecteditem[0]?.Commercial_Terms ?? ' '}`
											// 	}));

											// 	//Liquidated Damages
											// 	chvbox.addItem(new sap.m.ScrollContainer(`${"OthersliquidedScroll" + generateUniqueId()}`, {
											// 		vertical: true,
											// 		// width: "500px",
											// 		height: "100px"
											// 	}))

											// 	chvbox.getItems()[2].addContent(new sap.m.Text(`${"Othersliquided" + generateUniqueId()}`, {
											// 		// text: `${valuesMap[namesToCheck[15]] ?? ' '}`
											// 		// text: `${vendorslist[k]?.CPBG ?? ' '}`
											// 		text: `${vendorresponse_selecteditem[0]?.Compliance_Terms ?? ' '}`
											// 	}));

											// 	//Warranty / Defect Liability Period
											// 	chvbox.addItem(new sap.m.ScrollContainer(`${"warrantyScroll" + generateUniqueId()}`, {
											// 		vertical: true,
											// 		// width: "500px",
											// 		height: "100px"
											// 	}))

											// 	chvbox.getItems()[3].addContent(new sap.m.Text(`${"warranty" + generateUniqueId()}`, {
											// 		// text: `${valuesMap[namesToCheck[16]] ?? ' '}`
											// 		// text: `${vendorslist[k]?.CPBG ?? ' '}`
											// 		text: `${vendorresponse_selecteditem[0]?.Others ?? ' '}`
											// 	}));

											// 	// //CPBG
											// 	// chvbox.addItem(new sap.m.ScrollContainer(`${"cpbgScroll" + generateUniqueId()}`, {
											// 	// 	vertical: true,
											// 	// 	// width: "500px",
											// 	// 	height: "100px"
											// 	// }))

											// 	// chvbox.getItems()[4].addContent(new sap.m.Text(`${"cpbg" + generateUniqueId()}`, {
											// 	// 	text: `${vendorresponse_selecteditem[0]?.CPBG ?? ' '}`
											// 	// 	// text: `${valuesMap["CPBG"] ?? ' '}`
											// 	// }));

											// 	const inputString = vendorresponse_selecteditem[0]?.Vendor_Contact_PersonDASH1 ?? '';
											// 	if (inputString) {
											// 		var regex = /name\s*:(.*?)\s*email/;
											// 		var match = inputString.match(regex);
											// 	}

											// 	var contactPerson = match ? match[1].trim() : null;


											// 	//Contact Person
											// 	chvbox.addItem(new sap.m.Text(`${"contactperson" + generateUniqueId()}`, {
											// 		// text: `${contactPerson ?? ' '}`,
											// 		text: `${vendorresponse_selecteditem[0]?.Vendor_Contact_PersonDASH1 ?? ' '}`,
											// 		// height:"100px"
											// 	}));
											// 	const regexPh1 = /ph1\s*:\s*(.*?)\s*ph2/;
											// 	const matchPh1 = inputString.match(regexPh1);
											// 	let phoneNumber1 = matchPh1 ? matchPh1[1].trim() : null;

											// 	// Extracting ph2
											// 	const regexPh2 = /ph2\s*:\s*(.*?)$/;
											// 	const matchPh2 = inputString.match(regexPh2);
											// 	let phoneNumber2 = matchPh2 ? matchPh2[1].trim() : null;
											// 	if (phoneNumber1 == null) {
											// 		phoneNumber1 = ' ';
											// 	}
											// 	if (phoneNumber2 == null) {
											// 		phoneNumber2 = ' ';
											// 	}

											// 	//Contact NO
											// 	chvbox.addItem(new sap.m.Text(`${"contactno" + generateUniqueId()}`, {
											// 		text: `${phoneNumber1 + " " + phoneNumber2 ?? ' '}`,
											// 		// height:"25px"
											// 	}));

											// 	//Order can be given to……...
											// 	chvbox.addItem(new sap.m.Text(`${"ordercanbe" + generateUniqueId()}`, {
											// 		text: `${valuesMap["Order can be give to"] ?? ' '}`,
											// 		// height:"25px"
											// 	}));


											// 	//Techncially Approved
											// 	chvbox.addItem(new sap.m.Text(`${"technicallyapproved" + generateUniqueId()}`, {
											// 		text: `${vendorslist[k].Technically_Approved ?? ' '}`,
											// 		// height:"25px"
											// 	}));

											// 	//Approved Vendor
											// 	chvbox.addItem(new sap.m.Text(`${"approvedvendor" + generateUniqueId()}`, {
											// 		text: `${vendorslist[k].Awarded_Vendor ?? ' '}`,
											// 		// height:"25px"
											// 	}));

											// 	// chvbox.getItems()[chvbox.getItems().length - 4].addStyleClass("contactpersonpadding")

											// 	let lastitemchvbox = chvbox.getItems()[(chvbox.getItems().length - 1)];

											// 	lastitemchvbox.addStyleClass("customlaststyleclassrsection");

										}
									}
									k++;

								} while (k < vendorslist.length);

								// end of do-while loop



								for (let i = 0; i < hbmiddlesection.getItems().length - 1; i++) {

									hbmiddlesection.getItems()[i].setVisible(false);
									hbmiddlesection.getParent().getItems()[2].getItems()[1].getItems()[i].setVisible(false);
									// lastitemchvbox.getItems()
								}



								// geting final status 
								let status_lastsection = hbmiddlesection?.getItems()[hbmiddlesection?.getItems().length - 1];
								if (status_lastsection) {
									status_lastsection.getItems()[1].getItems()[1].getColumns()[2].getHeader().addItem(new sap.ui.core.Icon(`${"total_amount_icon" + generateUniqueId()}`, {
										src: "sap-icon://expand",
										color: "darkblue",
										hoverColor: "red",
										activeColor: "darkgreen",
										size: "12px",
										width: "20px",
										press: function (oEvent) {

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
								}
							}  //end of for-loop

							sap.ui.core.BusyIndicator.hide();

							//Vendor bidding for same item twice with different quantity

							let leftVboxTable = omainHBox.getItems()[0].getItems()[2].getItems()[0];
							let vendors = omainHBox.getItems()[1].getContent()[0].getItems();

							for (let v = 0; v < vendors.length; v++) {
								let inner_vbox = vendors[v].getItems()[1].getItems()
								for (let inn = 0; inn < inner_vbox.length; inn++) {
									let oTableItems = inner_vbox[inn].getItems()[1].getItems()[1].getItems();
									for (let i = 0; i < oTableItems.length; i++) {


										if (oTableItems[i].getMetadata()._sClassName != 'sap.m.CustomListItem') {
											let lastCell = oTableItems[i].getCells()[2];


											if (Object.keys(lastCell.mAggregations).length != 0) {
												debugger
												// await lastCell.getItems()[1].firePress();
												// lastCell.getItems()[1].setVisible(false);
											}
										}



									}

								}
							}


							let sect_under_spares = omainHBox.getItems()[0].getItems()[3].getItems();
							for (let i = 2; i <= 8; i++) {
								sect_under_spares[i].setVisible(false);
							}
							for (let i = 13; i < sect_under_spares.length; i++) {
								sect_under_spares[i].setVisible(false);
							}
							if (sect_under_spares[9].getItems()[1].getSrc() == 'sap-icon://navigation-up-arrow') {
								sect_under_spares[9].getItems()[1].setSrc('sap-icon://navigation-right-arrow')
							}
							if (sect_under_spares[12].getItems()[1].getSrc() == 'sap-icon://navigation-down-arrow') {
								sect_under_spares[12].getItems()[1].setSrc('sap-icon://navigation-right-arrow')
							}



							let itemListButton = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::HeaderFacetCustomContainer::HeaderFragment--rowexpand");
							// await itemListButton.firePress();
							// await itemListButton.firePress();




							let rightsectionpri = omainHBox.getItems()[1].getContent()[0].getItems();
							// omainHBox.getItems()[1].getContent()[0].getItems()
							for (let i = 0; i < rightsectionpri.length; i++) {
								rightsectionpri[i].getItems()[2].setVisible(false);

							}
						}
						catch (error) {

							MessageToast.show(error)
						}
					}
				}
			}
		});
	});

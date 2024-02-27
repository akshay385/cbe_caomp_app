sap.ui.define(['sap/ui/core/mvc/ControllerExtension', 'sap/m/MessageToast', 'sap/ui/export/Spreadsheet',
	'sap/ui/model/json/JSONModel',
	'sap/ui/export/library'], function (ControllerExtension, MessageToast, exportLibrary) {
		'use strict';

		var EdmType = exportLibrary.EdmType;
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
					// header_anchor.addAction(new sap.m.ToggleButton("rowexpand", {
					// 	text: 'ItemList-ExpandAll',
					// 	press: function (oEvent) {

					// 		// MessageToast.show("Custom handler invoked.");
					// 		if (oEvent.getSource().getPressed() == true) {
					// 			 
					// 			oEvent.getSource().setText("ItemList-CollapseAll");
					// 			let totat_basicpricing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon1");
					// 			if (totat_basicpricing.getSrc() == "sap-icon://navigation-right-arrow") {
					// 				totat_basicpricing.firePress();
					// 			}

					// 			let total_incluing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");
					// 			if (total_incluing.getSrc() == "sap-icon://navigation-right-arrow") {
					// 				total_incluing.firePress();
					// 			}

					// 			let viewmore_pricebasis = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");
					// 			if (viewmore_pricebasis.getSrc() == "sap-icon://navigation-right-arrow") {
					// 				viewmore_pricebasis.firePress();
					// 			}
					// 		}
					// 		else {
					// 			oEvent.getSource().setText("ItemList-ExpandAll");
					// 			let totat_basicpricing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon1");
					// 			if (totat_basicpricing.getSrc() == "sap-icon://navigation-up-arrow") {
					// 				totat_basicpricing.firePress();
					// 			}

					// 			let total_incluing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");
					// 			if (total_incluing.getSrc() == "sap-icon://navigation-up-arrow") {
					// 				total_incluing.firePress();
					// 			}

					// 			let viewmore_pricebasis = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");
					// 			if (viewmore_pricebasis.getSrc() == "sap-icon://navigation-down-arrow") {
					// 				viewmore_pricebasis.firePress();
					// 			}
					// 		}

					// 	},
					// }))

					// header_anchor.addAction(new sap.m.ToggleButton("columnexpand", {
					// 	text: 'VendorList-ExpandAll',
					// 	press: function (oEvent) {

					// 		// MessageToast.show("Custom handler invoked.");

					// 		// var sectionslist = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].getSubSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[1].mAggregations.content[0].mAggregations.items;
					// 		var sectionslist = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--rightHboxcontainer").getItems();

					// 		// var cylindrical_icon = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[1].mAggregations.items[0].mAggregations.items[1];
					// 		var cylindrical_icon = oEvent.getSource().getParent().getParent().getParent().getParent().mAggregations.rootControl.mAggregations.content[0].mAggregations.sections[0].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[1].mAggregations.items[0].mAggregations.items[1];
					// 		if (oEvent.getSource().getPressed() == true) {
					// 			oEvent.getSource().setText("VendorList-CollapseAll");

					// 			if (cylindrical_icon.getSrc() == "sap-icon://expand") {
					// 				cylindrical_icon.firePress();
					// 			}
					// 			for (let i = 0; i < sectionslist.length; i++) {
					// 				let totalsectionvboxlen = sectionslist[0].getItems()[1].getItems().length
					// 				var sectionsicon = sectionslist[i].getItems()[1].getItems()[totalsectionvboxlen - 1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[2].mAggregations.header.mAggregations.items[1];
					// 				if (sectionsicon.getSrc() == "sap-icon://expand") {
					// 					sectionsicon.firePress();
					// 				}

					// 			}
					// 		}
					// 		else {
					// 			oEvent.getSource().setText("VendorList-ExpandAll");
					// 			if (cylindrical_icon.getSrc() == "sap-icon://collapse") {
					// 				cylindrical_icon.firePress();
					// 			}
					// 			for (let i = 0; i < sectionslist.length; i++) {
					// 				let totalsectionvboxlen = sectionslist[0].getItems()[1].getItems().length
					// 				var sectionsicon = sectionslist[i].getItems()[1].getItems()[totalsectionvboxlen - 1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[2].mAggregations.header.mAggregations.items[1];
					// 				if (sectionsicon.getSrc() == "sap-icon://collapse") {
					// 					sectionsicon.firePress();
					// 				}

					// 			}
					// 		}

					// 	},
					// }))

					// header_anchor.addAction(new sap.ui.core.Icon('exportexcelid', {
					// 	src: 'sap-icon://excel-attachment',
					// 	tooltip: 'Export as excel',
					// 	press: async function (oEvent) {
					// 		 
					// 		let EdmType = new sap.ui.export.EdmType();

					// 		// Parse the data from Excel into an array
					// 		var data = [];

					// 		// var oModel = new JSONModel(data);
					// 		//mainhbiox
					// 		var mainhbox = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--mainhbox1");

					// 		//project desc
					// 		let project_desc = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--projectvalue").getText();


					// 		let table = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--itemstable1");
					// 		let table_items = [];

					// 		for (let i = 0; i < table.getItems().length; i++) {
					// 			table_items.push({
					// 				mta_no: (i + 1),
					// 				item_desc: table.getItems()[i].getCells()[0].getText(),
					// 				tag_no: table.getItems()[i].getCells()[1].getText(),
					// 				types_of_vessel: table.getItems()[i].getCells()[2].getText(),
					// 				cap_each: table.getItems()[i].getCells()[3].getText(),
					// 				dia: table.getItems()[i].getCells()[4].getText(),
					// 				tl_tl: table.getItems()[i].getCells()[5].getText(),
					// 				moc: table.getItems()[i].getCells()[6].getText(),
					// 				dpb: table.getItems()[i].getCells()[7].getText(),
					// 				weights: table.getItems()[i].getCells()[8].getText(),
					// 				quantity: table.getItems()[i].getCells()[9].getText(),
					// 			})

					// 		}
					// 		var data = [
					// 			{ 1: "Commercial Bid Evaluation" },
					// 			{ 1: "", 2: '', 11: 'Supplier' },
					// 			{ 1: "", 2: '', 11: 'Location' },
					// 			{ 1: "Project", 2: project_desc, 9: " ", 11: 'Qtn. Ref.' },
					// 			{ 1: "", 2: '', 11: 'Date' },
					// 			{ 1: "", 2: '', 11: 'Validity' },
					// 			{ 1: "", 2: '', 6: "Cylindrical Data" },
					// 			{ 1: "MTO Sr.NO ", 2: 'Items Description', 3: "Tag No", 4: "Type of Vessel", 5: "Capacity Each ( Cu Mtr )", 6: "Dia mm", 7: "TL to TL Length (mm)", 8: "MOC", 9: "Design Pressure bar", 10: "Weights", 11: "Quantity" },
					// 		];


					// 		for (let i = 0; i < table_items.length; i++) {
					// 			data.push({
					// 				1: table_items[i].mta_no,
					// 				2: table_items[i].item_desc,
					// 				3: table_items[i].tag_no,
					// 				4: table_items[i].types_of_vessel,
					// 				5: table_items[i].cap_each,
					// 				6: table_items[i].dia,
					// 				7: table_items[i].tl_tl,
					// 				8: table_items[i].moc,
					// 				9: table_items[i].dpb,
					// 				10: table_items[i].weights,
					// 				11: table_items[i].quantity,
					// 			})

					// 		}
					// 		var new_data = [
					// 			{ 1: "", 2: '' },
					// 			{ 1: "3", 2: 'Spares for 2 Years operation' },
					// 			{ 1: " ", 2: 'Grand Total' },
					// 			{ 1: "4", 2: 'Packing, Marking, Forwarding & Freight' },
					// 			{ 1: "5", 2: 'Inspection / Testing Charges' },
					// 			{ 1: "B.3", 2: 'Documentation Charges' },
					// 			{ 1: "3", 2: 'Total Basic Price including packing, marking & forwarding' },
					// 			{ 1: "C", 2: 'RNOD' },
					// 			{ 1: "D.1", 2: 'Custom Duty & Cess' },
					// 			{ 1: "D.2", 2: 'SGST' },
					// 			{ 1: "D.3", 2: 'IGST' },
					// 			{ 1: "D.4", 2: 'UGST' },
					// 			{ 1: "D.6", 2: 'Shipment charges from EXW to ISRO Mahendragiri' },
					// 			{ 1: "D", 2: 'Total Basic Price including packing, marking & forwarding, Transportation including Taxes' },
					// 			{ 2: 'Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes' },
					// 			{ 1: "F", 2: 'Per Diem rate for Supervision for Erection and commissioning' },
					// 			{ 1: "G.1", 2: 'PriceBasic' },
					// 			{ 1: "G.2", 2: 'Point of delivery' },
					// 			{ 1: "G.3", 2: 'Delivery Period' },
					// 			{ 1: "G.4", 2: 'Payment Terms' },
					// 			{ 1: "G.5", 2: 'Liquidated Damages' },
					// 			{ 1: "G.6", 2: 'Warranty / Defect Liability Period' },
					// 			{ 1: "G.7", 2: 'CPBG' },
					// 			// {1:"G.8" ,2:'CPBG'}, 
					// 			{ 1: "G.9", 2: 'Contact person' },
					// 			{ 1: "G.10", 2: 'Contact No' },
					// 			{ 1: "G.11", 2: 'Order can be given to ..' },
					// 			{ 1: "G.12", 2: 'Technical approved' },
					// 			{ 1: "G.13", 2: 'Approved vendor' },
					// 		]

					// 		var leftsection = data.concat(new_data);
					// 		var rightsectiondata = [];

					// 		var list_of_sections = mainhbox.getItems()[1].getContent()[0].getItems();

					// 		let vendor = [];
					// 		let updatvendor = [];
					// 		let cnt = 12;
					// 		for (let i = 0; i < list_of_sections.length; i++) {
					// 			// for (let i = 0; i < 1; i++) {


					// 			let vendor_name = list_of_sections[i].getItems()[0].getItems()[0].getText();
					// 			let venodor_location = list_of_sections[i].getItems()[0].getItems()[1].getText();

					// 			let list_of_status = list_of_sections[i].getItems()[1].getItems();
					// 			let arr = [];
					// 			vendor = [
					// 				{ [cnt]: '' },
					// 				{ [cnt]: vendor_name },
					// 				{ [cnt]: venodor_location }
					// 			];

					// 			// for (let j = 0; j < list_of_status.length; j++) {

					// 			let updatarr = [];

					// 			let pricesbasishbox = list_of_sections[i].getItems()[2].getItems()[1].getItems();

					// 			for (let j = 0; j < list_of_status.length; j++) {

					// 				let qnt_ref = list_of_status[j].getItems()[0].getItems()[0].getText();
					// 				let rdate = list_of_status[j].getItems()[0].getItems()[1].getText();
					// 				let validity = list_of_status[j].getItems()[0].getItems()[2].getText();
					// 				let pan_status_name = list_of_status[j].getItems()[1].getItems()[0].getText();


					// 				let keyl = cnt;//12
					// 				let keym = (cnt + 1)//13
					// 				let keyn = (cnt + 2)//14

					// 				cnt = cnt + 3;

					// 				let arr = [
					// 					{ [keyl]: qnt_ref },
					// 					{ [keyl]: rdate },
					// 					{ [keyl]: validity },
					// 					{ [keym]: pan_status_name },
					// 					{ [keyl]: 'Unit Rate', [keym]: 'Rate per unit', [keyn]: 'Total Amount' }
					// 				];

					// 				for (let k = 0; k < table_items.length; k++) {
					// 					arr.push({
					// 						[keyl]: list_of_status[j].getItems()[1].getItems()[1].getItems()[k].getCells()[0].getText(),
					// 						[keym]: list_of_status[j].getItems()[1].getItems()[1].getItems()[k].getCells()[1].getText(),
					// 						[keyn]: list_of_status[j].getItems()[1].getItems()[1].getItems()[k].getCells()[2].getText(),
					// 					});
					// 				}

					// 				let items_table = list_of_status[j].getItems()[1].getItems()[1].getItems();
					// 				let tablelen = table_items.length;

					// 				let aftertable = [
					// 					{ [keyl]: "" },
					// 					{ [keyn]: items_table[tablelen + 1].getCells()[2].getText() },
					// 					{ [keyn]: items_table[tablelen + 2].getCells()[2].getText() },
					// 					{ [keyl]: items_table[tablelen + 3].getCells()[0].getText(), [keyn]: items_table[tablelen + 3].getCells()[2].getText() },
					// 					{ [keyl]: items_table[tablelen + 4].getCells()[0].getText(), [keyn]: items_table[tablelen + 4].getCells()[2].getText() },
					// 					{ [keyl]: items_table[tablelen + 5].getCells()[0].getText(), [keyn]: items_table[tablelen + 5].getCells()[2].getText() },
					// 					{ [keyn]: items_table[tablelen + 6].getCells()[2].getText() },
					// 					{ [keyn]: items_table[tablelen + 7].getCells()[2].getText() },
					// 					{ [keyl]: items_table[tablelen + 8].getCells()[0].getText() },
					// 					{ [keyl]: items_table[tablelen + 9].getCells()[0].getText(), [keyn]: items_table[tablelen + 9].getCells()[2].getText() }, // sgst
					// 					{ [keyl]: items_table[tablelen + 10].getCells()[0].getText(), [keyn]: items_table[tablelen + 10].getCells()[2].getText() }, // igst
					// 					{ [keyl]: items_table[tablelen + 11].getCells()[0].getText(), [keyn]: items_table[tablelen + 11].getCells()[2].getText() }, // ugst
					// 					{ [keyl]: items_table[tablelen + 12].getCells()[0].getText() }, // shipment
					// 					{ [keyn]: items_table[tablelen + 13].getCells()[2].getText() }, // including tax
					// 					{ [keyn]: items_table[tablelen + 14].getCells()[2].getText() }, // excluding tax
					// 					{ [keyn]: items_table[tablelen + 15].getCells()[2].getText() }, // perdeim
					// 					{ [keyl]: pricesbasishbox[j].getItems()[0].getText() }, // pricebasis
					// 					{ [keyl]: pricesbasishbox[j].getItems()[1].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[2].getContent()[0].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[3].getContent()[0].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[4].getContent()[0].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[5].getContent()[0].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[6].getContent()[0].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[7].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[8].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[9].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[10].getText() },
					// 					{ [keyl]: pricesbasishbox[j].getItems()[11].getText() },
					// 				];

					// 				arr = arr.concat(aftertable);


					// 				updatarr.push(arr);

					// 			}
					// 			// Check if all subarrays in updatarr have the same length
					// 			const lengths = updatarr.map(subarr => subarr.length);
					// 			const isSameLength = lengths.every((val, i, arr) => val === arr[0]);

					// 			let finalArray = []
					// 			if (isSameLength) {
					// 				// Merge objects from all arrays in updatarr
					// 				// let finalArray = [];
					// 				for (let i = 0; i < updatarr[0].length; i++) {
					// 					let mergedObject = {};
					// 					for (let j = 0; j < updatarr.length; j++) {
					// 						Object.assign(mergedObject, updatarr[j][i]);
					// 					}
					// 					finalArray.push(mergedObject);
					// 				}
					// 				console.log(finalArray);
					// 			} else {
					// 				console.log("Arrays in updatarr have different lengths. Unable to merge.");
					// 			}



					// 			vendor = vendor.concat(finalArray);

					// 			updatvendor.push(vendor);
					// 		}
					// 		let finalArray1 = []
					// 		const lengths1 = updatvendor.map(subarr => subarr.length);
					// 		const isSameLength1 = lengths1.every((val, i, arr) => val === arr[0]);
					// 		if (isSameLength1) {
					// 			// Merge objects from all arrays in updatarr
					// 			// let finalArray = [];
					// 			for (let i = 0; i < updatvendor[0].length; i++) {
					// 				let mergedObject = {};
					// 				for (let j = 0; j < updatvendor.length; j++) {
					// 					Object.assign(mergedObject, updatvendor[j][i]);
					// 				}
					// 				finalArray1.push(mergedObject);
					// 			}
					// 			console.log(finalArray1);
					// 		} else {
					// 			console.log("Arrays in updatarr have different lengths. Unable to merge.");
					// 		}

					// 		console.log(finalArray1);

					// 		// leftsection,finalArray1

					// 		let mergedArray = [];
					// 		if (leftsection.length === finalArray1.length) {


					// 			// Iterate over the arrays simultaneously
					// 			for (let i = 0; i < leftsection.length; i++) {
					// 				// Merge objects from both arrays
					// 				let mergedObject = Object.assign({}, leftsection[i], finalArray1[i]);
					// 				mergedArray.push(mergedObject);
					// 			}

					// 			console.log(mergedArray);
					// 		} else {
					// 			console.log("Arrays have different lengths. Unable to merge.");
					// 		}




					// 		let oColumns = [];
					// 		for (let i = 0; i < cnt; i++) {
					// 			if (cnt == 1) {
					// 				oColumns.push({ label: ` `, property: `${i + 1}`, type: EdmType.String, width: '100' });
					// 			}
					// 			else {
					// 				oColumns.push({ label: ` `, property: `${i + 1}`, type: EdmType.String });
					// 			}

					// 		}

					// 		 
					// 		// let func = 'getExcelData';
					// 		// let testdata = 'ABC';
					// 		// let oFunction = oEvent.getSource().getModel().bindContext("/getExcelData(...)");
					// 		// let jsoondata = JSON.stringify(mergedArray);
					// 		// oFunction.setParameter('data', jsoondata);
					// 		// oFunction.execute();
					// 		// console.log();

					// 		 
					// 		// Update the columns array to match the columns in your Excel spreadsheet
					// 		var oSpreadsheet = new sap.ui.export.Spreadsheet({
					// 			workbook: {
					// 				// columns: [
					// 				//     { label: ' ', property: '1', type: EdmType.String },
					// 				//     { label: 'B', property: '2', type: EdmType.String },
					// 				//     { label: 'C', property: '3', type: EdmType.String },
					// 				//     { label: 'D', property: '4', type: EdmType.String },
					// 				//     { label: 'E', property: '5', type: EdmType.String },
					// 				//     { label: 'F', property: '6', type: EdmType.String },
					// 				//     { label: 'G', property: '7', type: EdmType.String },
					// 				//     { label: 'H', property: '8', type: EdmType.String },
					// 				//     { label: 'I', property: '9', type: EdmType.String },
					// 				//     { label: 'J', property: '10', type: EdmType.String },
					// 				//     { label: 'K', property: '11', type: EdmType.String },
					// 				//     // { label: 'K', property: 'l0', type: EdmType.String },
					// 				//     // { label: 'K', property: 'm0', type: EdmType.String },
					// 				//     // { label: 'K', property: 'n0', type: EdmType.String },
					// 				//     // { label: 'K', property: 'o', type: EdmType.String },
					// 				// ],
					// 				columns: oColumns,
					// 				context: {
					// 					application: 'SAP UI5 Export Sample',
					// 					author: 'Sample'
					// 				},
					// 				hierarchyLevel: 'level'
					// 			},
					// 			// Pass the parsed data array to the dataSource property
					// 			dataSource: mergedArray,
					// 			fileName: 'cbe_comp.xlsx' // Adjust the filename if needed
					// 		});

					// 		oSpreadsheet.build()
					// 			.then(function () {
					// 				MessageToast.show("Exported successfully!");
					// 			})
					// 			.catch(function (reason) {
					// 				MessageToast.show("Export failed: " + reason);
					// 			});
					// 	}
					// }))

					// this.onAfterBinding();
					// window.location.reload(true);
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


							// Item Tax Details
							if (base_uri_value) {
								var settings = {
									url: base_uri_value + 'odata/v4/catalogcbeservice/vendorTaxDetails',
									method: "GET",
								}
							} else {
								var settings = {
									url: '/odata/v4/catalogcbeservice/vendorTaxDetails',
									method: "GET",
								}
							}

							var tax_details;
							await $.ajax(settings).done(async (results, textStatus, request) => {
								tax_details = results.value;
							}).fail((err) => {
								console.log(err);
							});


							// Item Tax Details
							if (base_uri_value) {
								var settings = {
									url: base_uri_value + 'odata/v4/catalogcbeservice/PanWebEvent',
									method: "GET",
								}
							} else {
								var settings = {
									url: '/odata/v4/catalogcbeservice/PanWebEvent',
									method: "GET",
								}
							}

							var pan_web_event;
							await $.ajax(settings).done(async (results, textStatus, request) => {
								pan_web_event = results.value;
							}).fail((err) => {
								console.log(err);
							});

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

							let tag_no_iterator = 1;
							for (let i = 0; i < uniqueItems.length; i++) {

								debugger

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
								//uom
								let uom = new sap.m.Text(`${"uom" + (i + 1)}`, {
									text: `${list_of_items[i]?.UOM ?? ' '}`,
									tooltip: `${list_of_items[i]?.UOM ?? ' '}`,
									wrapping: false
								})
								columnlist.addCell(uom);

								let qty_no = new sap.m.Text(`${"qty_no" + (i + 1)}`, {
									text: `${list_of_items[i]?.Quantity ?? ' '}`,
									tooltip: `${list_of_items[i]?.Quantity ?? ' '}`,
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
								// debugger
								let current_item_cells = itemstable.getItems()[itm].getCells();
								for (let cell = 0; cell < current_item_cells.length; cell++) {
									// debugger
									if (current_item_cells[cell].getText().trim() == '') {
										// debugger
										counter_item[cell] += 1;
									}
								}
							}

							for (let key in counter_item) {
								if (counter_item[key] == itemstable.getItems().length) {
									debugger
									itemstable.getColumns()[key].setVisible(false);
								}
								// console.log(`Key: ${key}, Value: ${counter_item[key]}`);
							}

							//end of dynamic generation of Columns










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

							debugger
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
								debugger
								do {
									debugger

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
													header: new sap.m.Label({ text: "Unit Rate", design: "Bold", wrapping: false }),
													// styleClass: 'custcolorclass'
												});

												// var oColumn2 = new sap.m.Column({
												// 	id: `${"unit_rate_per" + generateUniqueId()}`,
												// 	header: new sap.m.Label({ text: "Rate per Unit", design: "Bold", wrapping: false }),
												// 	// styleClass: 'custcolorclass'
												// });


												var oColumn3 = new sap.m.Column({
													id: `${"total_amt_offer" + generateUniqueId()}`,
													header: new sap.m.HBox(),
													// styleClass: 'custcolorclass'

												});

												oTable.addColumn(oColumn1);
												// oTable.addColumn(oColumn2);
												oTable.addColumn(oColumn3);

												//Total amount expand property

												debugger
												var colheader = oTable.getColumns()[1].getHeader()

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
													debugger
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

												debugger
												// Iterate over uniqueItems
												for (let i = 0; i < uniqueItems.length; i++) {


													const currentItem = uniqueItems[i];
													let itemMatchingPrjVenPan = list_of_items.filter(item => item.ProjectId == project_id[1] && item.Proposed_Vendor_Code == vendorslist[k].Proposed_Vendor_Code && item.Item_Code == uniqueItems[i].Item_Code && item.PAN_Number == panNumber)
													const foundItem = filteredItems.find(item => item.Item_Code === currentItem.Item_Code);

													if (foundItem || itemMatchingPrjVenPan.length) {
														debugger
														// Found item, create ColumnListItem with data
														var AmtWithoutCommas = itemMatchingPrjVenPan[0].Amount?.replace(/,/g, '') ?? 0;
														var quantityWithoutCommas = itemMatchingPrjVenPan[0].Quantity?.replace(/,/g, '') ?? 0;
														let extendedPriceWithoutComms = itemMatchingPrjVenPan[0].extendedPrice?.replace(/,/g, '') ?? 0;

														extendedprice = extendedprice + parseFloat(extendedPriceWithoutComms ?? 0);
														tax_value = tax_value + (itemMatchingPrjVenPan[0]?.Indian_Tax_PER ?? ' ') + '\n'

														const total_amount_value = Number(AmtWithoutCommas ?? 0) * Number(quantityWithoutCommas ?? 0);
														const total_amount_display = `${total_amount_value} ${itemMatchingPrjVenPan[0].Unit_Price ?? ' '}`;

														grandTotalAmount += total_amount_value;
														grandTotalUnit = itemMatchingPrjVenPan[0].Unit_Price;

														const oItem = new sap.m.ColumnListItem({
															id: `${"item1data" + generateUniqueId()}`,
															cells: [
																new sap.m.Text({ text: `${formatCurrency(AmtWithoutCommas, grandTotalUnit) ?? ' '} ${itemMatchingPrjVenPan[0].Unit_Price}` }),
																// new sap.m.Text({ text: `${itemMatchingPrjVenPan[0].unit_rate_per_unit ?? ' '}` }),
																new sap.m.Text({ text: `${formatCurrency(total_amount_value, grandTotalUnit) + " " + grandTotalUnit}` }),
															]
														});

														oTable.addItem(oItem);
													} else {
														// Item not found, create empty row
														const oItem = new sap.m.ColumnListItem({
															id: `${"item1data" + generateUniqueId()}`,
															cells: [
																new sap.m.Text({ text: "" }),
																// new sap.m.Text({ text: "" }),
																new sap.m.Text({ text: "" })
															]
														});

														oTable.addItem(oItem);
													}
												}
												////////////////////////////////////////////////////////////////////////////////


												const vendorresponse_selecteditem = vendor_response_deatils.filter(item =>
													item.PAN_Number === vendorslist[k].PAN_Number &&
													item.Proposed_Vendor_Code === vendorslist[k].Proposed_Vendor_Code
												);

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
														// new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" })
													]
												});



												oTable.addItem(oItem1);
												var oItem2 = new sap.m.ColumnListItem({
													id: `${"spare" + generateUniqueId()}`,
													cells: [
														new sap.m.Text({ text: "" }),
														// new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: `${formatCurrency(valuesMap[namesToCheck[0]] ?? 0) + " " + grandTotalUnit ?? ' '}` })
													]
												});


												let spares_2_value = grandTotalAmount + (parseFloat(valuesMap[namesToCheck[0]]) || 0)
												oTable.addItem(oItem2);
												var oItem3 = new sap.m.ColumnListItem({
													id: `${"grandtotal" + generateUniqueId()}`,
													cells: [
														new sap.m.Text({ text: "" }),
														// new sap.m.Text({ text: "" }),
														new sap.m.Label({ text: `${formatCurrency(spares_2_value) + " " + grandTotalUnit}`, design: "Bold" })
													]
												});

												oTable.addItem(oItem3);
												var oItem4 = new sap.m.ColumnListItem({
													id: `${"parkingmarking" + generateUniqueId()}`,
													visible: true,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[1]] ?? ' '}` }),
														// new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: `${formatCurrency(valuesMap[namesToCheck[23]] ?? 0) + " " + grandTotalUnit}` }),
													]
												});

												oTable.addItem(oItem4);
												var oItem5 = new sap.m.ColumnListItem({
													id: `${"inspection" + generateUniqueId()}`,
													visible: true,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[2]] ?? ' '}` }),
														// new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: `${valuesMap[namesToCheck[24]] ?? ' '}` }),
													]
												});

												oTable.addItem(oItem5);
												var oItem6 = new sap.m.ColumnListItem({
													id: `${"documentation" + generateUniqueId()}`,
													visible: true,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[3]] ?? ' '}` }),
														// new sap.m.Text({ text: "" }),
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
													cells: [

														new sap.m.Label({ text: `${valuesMap[namesToCheck[4]] ?? ' '}`, design: "Bold" }),
														// new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" }),
													]
												});

												oTable.addItem(oItem8);
												var oItem9 = new sap.m.ColumnListItem({
													id: `${"customduty" + generateUniqueId()}`,
													visible: true,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[5]] ?? ' '}` }),
														// new sap.m.Text({ text: "" }),
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
													visible: true,
													content: [
														new sap.m.Text({ text: tax_value, width: "294px" })

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
													visible: true,
													cells: [

														new sap.m.Text({ text: `${valuesMap[namesToCheck[9]] ?? ' '}` }),
														// new sap.m.Text({ text: "" }),
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
														// new sap.m.Text({ text: "" }),
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
														// new sap.m.Text({ text: "" }),
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
														// new sap.m.Text({ text: "" }),
														new sap.m.Text({ text: "" })
													]
												});
												oTable.addItem(oItem15);


												oTable.getItems()[oTable.getItems().length - 5].addStyleClass("taxCell")


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

											// 	debugger
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
											// 		debugger
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
											// 			debugger
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
									status_lastsection.getItems()[1].getItems()[1].getColumns()[1].getHeader().addItem(new sap.ui.core.Icon(`${"total_amount_icon" + generateUniqueId()}`, {
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


							debugger
							//Every time to reinitialize page

							let total_incluing = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");
							let viewmore_pricebasis = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");
							// var iconTotalPricingD = omainHBox.getItems()[0].getItems()[3].getItems()[12].getItems()[1];
							// var iconTotalPricingG = omainHBox.getItems()[0].getItems()[3].getItems()[15].getItems()[1];

							let leftsecion_under_spares = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--leftbelowtable");
							debugger
							leftsecion_under_spares.getItems()[2].setVisible(false);
							leftsecion_under_spares.getItems()[3].setVisible(false);
							leftsecion_under_spares.getItems()[4].setVisible(false);
							leftsecion_under_spares.getItems()[5].setVisible(false);
							leftsecion_under_spares.getItems()[6].setVisible(false);
							leftsecion_under_spares.getItems()[7].setVisible(false);
							leftsecion_under_spares.getItems()[8].setVisible(false);
							total_incluing.setSrc("sap-icon://navigation-right-arrow")


							// total_incluing.firePress();

							for (let i = 0; i < leftsecion_under_spares.getItems().length; i++) {
								leftsecion_under_spares.getItems()[i].setVisible(true);

							}
							viewmore_pricebasis.setSrc("sap-icon://navigation-down-arrow");

							viewmore_pricebasis.firePress();



							// iconTotalPricingG.firePress();

							debugger
							// //left section and respective fields
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

							// 	let len = oTablesection.getItems().length
							// 	for (let j = (len - 4); j >= (len - 10); j--) {

							// 		oTablesection.getItems()[j].setVisible(false)

							// 	}

							// }

							// //left last section under price details and its respective
							// var leftsectionlastvbox = omainHBox.getItems()[0].getItems()[3].getItems();
							// for (let i = 13; i < leftsectionlastvbox.length; i++) {
							// 	leftsectionlastvbox[i].setVisible(false);
							// }
							// // leftsectionlastvbox[15].getItems()[0].setVisible(false);

							// let righthboxxontainer = sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--rightHboxcontainer");


							// let lastvendor = righthboxxontainer.getItems()[righthboxxontainer.getItems().length - 1];





							sap.ui.core.BusyIndicator.hide();
							// let rightsectionpri = omainHBox.getItems()[1].getContent()[0].getItems();
							// // omainHBox.getItems()[1].getContent()[0].getItems()
							// for (let i = 0; i < rightsectionpri.length; i++) {
							// 	rightsectionpri.getItems()[2].setVisible(false);

							// }
						}
						catch (error) {

							MessageToast.show(error)
						}
					}
				}
			}
		});
	});

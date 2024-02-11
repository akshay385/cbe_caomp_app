//@ui5-bundle cbedcompdbdyn/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"cbedcompdbdyn/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("cbedcompdbdyn.Component",{metadata:{manifest:"json"}})});
},
	"cbedcompdbdyn/ext/controller/ObjectPageCon.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/m/MessageToast"],function(e,t){"use strict";return e.extend("cbedcompdbdyn.ext.controller.ObjectPageCon",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(e){try{debugger;function te(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var a=t+"-"+e;return a}var a=e.sPath;var s=a.match(/'([^']+)'/);sap.ui.core.BusyIndicator.show();var n=this.base.getAppComponent().getManifestObject()._oBaseUri._string;if(n){var o={url:n+"odata/v4/catalogcbeservice/Project_Details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/Project_Details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}var d;await $.ajax(o).done(async(e,t,a)=>{d=e.value}).fail(e=>{console.log(e);t.show(e)});if(n){var o={url:n+"odata/v4/catalogcbeservice/Item_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/Item_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}var r;await $.ajax(o).done(async(e,t,a)=>{r=e.value}).fail(e=>{console.log(e);t.show(e)});if(n){var o={url:n+"odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}var m;await $.ajax(o).done(async(e,t,a)=>{m=e.value}).fail(e=>{console.log(e)});if(n){var o={url:n+"odata/v4/catalogcbeservice/PAN_Info",method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/PAN_Info",method:"GET"}}var l;await $.ajax(o).done(async(e,t,a)=>{l=e.value}).fail(e=>{console.log(e)});if(n){var o={url:n+"odata/v4/catalogcbeservice/PAN_vendor_reponse_details",method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/PAN_vendor_reponse_details",method:"GET"}}var i;await $.ajax(o).done(async(e,t,a)=>{i=e.value}).fail(e=>{console.log(e)});var c=this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();c.getItems()[0].getItems()[0].getItems()[0].getItems()[0].getItems()[0].setVisible(false);c.getItems()[0].getItems()[0].getItems()[0].getItems()[1].getItems()[1].setText(`${" "+d[0]?.Project_Description??" "}`);c.getItems()[0].getItems()[0].getItems()[0].getItems()[1].getItems()[1].setTextAlign("End");c.getItems()[0].getItems()[0].getItems()[0].getItems()[2].getItems()[0].setVisible(false);var g=c.getItems()[0].getItems()[2].getItems()[0];var p=c.getItems()[0].getItems()[1].getItems()[0];if(!p.getItems()[1]){p.addItem(new sap.ui.core.Icon(`${"cylindricaldtaicon"+te()}`,{src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",width:"20px",press:function(e){debugger;var t=c.getItems()[0];if(t.getWidth()=="30%"){g.setFixedLayout(false);t.setWidth("70%")}else{g.setFixedLayout(true);t.setWidth("30%")}}}))}g.destroyItems();const ae=new Set;const se=[];r.forEach(e=>{if(!ae.has(e.Item_Code)){ae.add(e.Item_Code);se.push(e)}});for(let de=0;de<se.length;de++){g.addItem(new sap.m.ColumnListItem(`${"collistitem"+(de+1)}`));let re=g.getItems()[de];let me=new sap.m.Text(`${"itemdesc"+(de+1)}`,{text:`${r[de]?.Item_Short_Description??" "}`,tooltip:`${r[de]?.Item_Short_Description??" "}`,wrapping:false});re.addCell(me);let le=new sap.m.Text(`${"capacity_each_in_cu_mtr"+(de+1)}`,{text:`${r[de]?.capactity_each??" "}`,tooltip:`${r[de]?.capactity_each??" "}`,wrapping:false});re.addCell(le);let ie=new sap.m.Text(`${"dia_in_mm"+(de+1)}`,{text:`${r[de]?.dia??" "}`,tooltip:`${r[de]?.dia??" "}`,wrapping:false});re.addCell(ie);let ce=new sap.m.Text(`${"tl_to_tl_len"+(de+1)}`,{text:`${r[de]?.tl_tl_len??" "}`,tooltip:`${r[de]?.tl_tl_len??" "}`,wrapping:false});re.addCell(ce);let ge=new sap.m.Text(`${"moc"+(de+1)}`,{text:`${r[de]?.moc??" "}`,tooltip:`${r[de]?.moc??" "}`,wrapping:false});re.addCell(ge);let pe=new sap.m.Text(`${"design_pressure_bar"+(de+1)}`,{text:`${r[de]?.design_pb??" "}`,tooltip:`${r[de]?.design_pb??" "}`,wrapping:false});re.addCell(pe);let xe=new sap.m.Text(`${"weights_in_kg"+(de+1)}`,{text:`${r[de]?.weights??" "}`,tooltip:`${r[de]?.weights??" "}`,wrapping:false});re.addCell(xe);let ue=new sap.m.Text(`${"qty_no"+(de+1)}`,{text:`${r[de]?.Quantity??" "}`,tooltip:`${r[de]?.Quantity??" "}`,wrapping:false});re.addCell(ue)}var x=c.getItems()[1].getContent()[0];x.destroyItems();if(n){var o={url:n+"odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}else{var o={url:"/odata/v4/catalogcbeservice/Vendor_details?$filter=ProjectId eq "+`'${s[1]}'`,method:"GET"}}var u;await $.ajax(o).done(async(e,t,a)=>{u=e.value}).fail(e=>{console.log(e)});let ne=new Set;let oe=0;for(let we=0;we<u.length;we++){const Ie=u[we].vendor_code;if(ne.has(Ie)){continue}ne.add(Ie);x.addItem(new sap.m.VBox(`${"sectionvbox"+(we+1)}`));let $e=x.getItems()[oe];oe++;debugger;$e.addStyleClass("BorderClass");$e.addItem(new sap.m.VBox(`${"vboxsuppnameloc"+(we+1)}`));$e.addItem(new sap.m.HBox(`${"hbmiddlesection"+(we+1)}`));$e.addItem(new sap.m.VBox(`${"vbox_last_section"+(we+1)}`));var w=$e.getItems()[2];var I=new sap.m.ComboBox(`${"combobox"+(we+1)}`,{change:function(e){for(let t=0;t<e.getSource().getParent().getItems()[1].getItems().length;t++){if(e.getSource().getItems()[t].getText()==e.getSource().getValue()){e.getSource().getParent().getItems()[1].getItems()[t].setVisible(true)}else{e.getSource().getParent().getItems()[1].getItems()[t].setVisible(false)}}}});w.addItem(I);debugger;var _=new sap.m.HBox(`${"hboxcombo"+(we+1)}`);w.addItem(_);var v=w.getItems()[1];let _e=$e.getItems()[0];_e.addItem(new sap.m.Title(`${"SupplierName"+(we+1)}`,{text:`${u[we].Vendor_Name?u[we].Vendor_Name:" "}`}));_e.addItem(new sap.m.Title(`${"SupplierLocation"+(we+1)}`,{text:`${u[we].Vendor_Location?u[we].Vendor_Location:" "}`}));debugger;_e.addStyleClass("v11spaceBetweenclass");var b=$e.getItems()[1];debugger;let ve=0;let be=0;do{if(u[ve].ProjectId==s[1]&&u[ve].Proposed_Vendor_Code==u[we].Proposed_Vendor_Code){b.addItem(new sap.m.VBox(`${"vbmiddlesection"+te()}`,{}));var T=b.getItems().length;var h=b.getItems()[T-1];h.addStyleClass("customVBox");h.addItem(new sap.m.VBox(`${"vbmiddlesection_innervb"+te()}`));var f=h.getItems()[0];f.addItem(new sap.m.Text(`${"org_qtn_ref"+te()}`,{text:`${u[ve]?.qtn_ref??" "}`}));f.addItem(new sap.m.Text(`${"org_date"+te()}`,{text:`${u[ve]?.date??" "}`}));f.addItem(new sap.m.Text(`${"org_validity"+te()}`,{text:`${u[ve]?.validity??" "}`}));f.addItem(new sap.m.Text(`${"org_cylindrical_space"+te()}`,{text:""}));f.addStyleClass("vbmiddlesectionclass");var C=new sap.m.VBox(`${"innervbox"+te()}`,{});h.addItem(C);debugger;let he=l.find(e=>e.PAN_Number===u[ve].PAN_Number);C.addItem(new sap.m.Label(`${"original_offer"+te()}`,{text:`${he?.status_a??" "}`,design:"Bold"}));var y=new sap.m.Table({id:`${"offer"+te()}`,class:"tableBorder",growing:true,growingThreshold:20,width:"350px",fixedLayout:true});debugger;y.addStyleClass("tableBorder");C.addItem(y);var P=new sap.m.Column({id:`${"unit_rate"+te()}`,header:new sap.m.Text({text:"Unit Rate",design:"Bold",wrapping:false})});var S=new sap.m.Column({id:`${"unit_rate_per"+te()}`,header:new sap.m.Label({text:"Rate per Unit",design:"Bold",wrapping:false})});debugger;var V=new sap.m.Column({id:`${"total_amt_offer"+te()}`,header:new sap.m.HBox});y.addColumn(P);y.addColumn(S);y.addColumn(V);var L=y.getColumns()[2].getHeader();L.addItem(new sap.m.Label({text:"Total Amount",design:"Bold"}));var B=[];var N=0;var A="";let fe=0;let Ce=new Set;const ye=r.filter(e=>e.PAN_Number===u[ve].PAN_Number&&e.Proposed_Vendor_Code===u[ve].Proposed_Vendor_Code);debugger;for(let qe=0;qe<se.length;qe++){const Ge=se[qe];const ke=ye.find(e=>e.Item_Code===Ge.Item_Code);if(ke){const De=Number(ke.Amount??0)*Number(ke.Quantity??0);const He=`${De} ${ke.Unit_Price??" "}`;N+=De;A=ke.Unit_Price;const Ue=new sap.m.ColumnListItem({id:`${"item1data"+te()}`,cells:[new sap.m.Text({text:`${ke.Amount??" "} ${ke.Unit_Price}`}),new sap.m.Text({text:`${ke.unit_rate_per_unit??" "}`}),new sap.m.Text({text:He})]});y.addItem(Ue)}else{const Me=new sap.m.ColumnListItem({id:`${"item1data"+te()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(Me)}}debugger;const Pe=i.filter(e=>e.PAN_Number===u[ve].PAN_Number&&e.Proposed_Vendor_Code===u[ve].Proposed_Vendor_Code);var j=new sap.m.ColumnListItem({id:`${"blankspace"+te()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(j);var E=new sap.m.ColumnListItem({id:`${"spare"+te()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:`${u[ve]?.spares_for_2_years??" "}`})]});y.addItem(E);var q=new sap.m.ColumnListItem({id:`${"grandtotal"+te()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${N+" "+A}`,design:"Bold"})]});y.addItem(q);var G=new sap.m.ColumnListItem({id:`${"parkingmarking"+te()}`,cells:[new sap.m.Text({text:`${u[ve]?.packing_marking_forwarding??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(G);var k=new sap.m.ColumnListItem({id:`${"inspection"+te()}`,cells:[new sap.m.Text({text:`${u[ve]?.inspection_testing_charges??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(k);var D=new sap.m.ColumnListItem({id:`${"documentation"+te()}`,cells:[new sap.m.Text({text:`${u[ve]?.documentation_charges??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(D);var H=new sap.m.ColumnListItem({id:`${"totalbasicpricing"+te()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${N+" "+A}`,design:"Bold"})]});y.addItem(H);var U=new sap.m.ColumnListItem({id:`${"rnod"+te()}`,cells:[new sap.m.Label({text:`${u[ve]?.rnod??" "}`,design:"Bold"}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(U);var M=new sap.m.ColumnListItem({id:`${"customduty"+te()}`,cells:[new sap.m.Text({text:`${u[ve]?.custom_duty_cess??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(M);var Q=new sap.m.ColumnListItem({id:`${"sgst"+te()}`,cells:[new sap.m.Text({text:`${u[ve]?.sgst??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(Q);var W=new sap.m.ColumnListItem({id:`${"igst"+te()}`,cells:[new sap.m.Text({text:`${u[ve]?.igst??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${Number(u[ve]?.igst??" ")*Number(u[ve]?.total_basic_price_including_packing??" ")/100}`})]});y.addItem(W);var z=new sap.m.ColumnListItem({id:`${"ugst"+te()}`,cells:[new sap.m.Text({text:`${u[ve]?.ugst??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:`${Number(u[ve]?.ugst??" ")*Number(u[ve]?.total_basic_price_including_packing??" ")/100}`})]});y.addItem(z);var F=new sap.m.ColumnListItem({id:`${"shipment"+te()}`,cells:[new sap.m.Text({text:`${u[ve]?.shipment_charges??" "}`}),new sap.m.Text({text:""}),new sap.m.Text({text:""})]});y.addItem(F);var O=new sap.m.ColumnListItem({id:`${"totalincludingtaxes"+te()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${N+" "+A}`,design:"Bold"})]});y.addItem(O);var O=new sap.m.ColumnListItem({id:`${"total_excluding_taxes"+te()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Label({text:`${N+" "+A}`,design:"Bold"})]});y.addItem(O);var R=new sap.m.ColumnListItem({id:`${"perdiemrate"+te()}`,cells:[new sap.m.Text({text:""}),new sap.m.Text({text:""}),new sap.m.Text({text:`${u[ve]?.per_diem_rate_for_supervision??" "}`})]});y.addItem(R);debugger;var J=w.getItems()[0];var K=new sap.ui.core.Item(`${"item1"+te()}`,{text:`${he?.status_a??" "}`});J.addItem(K);J.setValue(`${he?.status_a??""}`);v.addItem(new sap.m.VBox(`${"offer"+te()}`));var X=v.getItems()[be];be++;debugger;X.addStyleClass("spacebetweenclass");debugger;X.addItem(new sap.m.Text(`${"pricebasis"+te()}`,{text:`${u[ve]?.PriceBasis??"test"}`}));X.addItem(new sap.m.Text(`${"pointofdelivery"+te()}`,{text:`${u[ve]?.point_of_delivery??"test"}`}));X.addItem(new sap.m.ScrollContainer(`${"deliveryperiodScroll"+te()}`,{vertical:true,height:"100px"}));X.getItems()[2].addContent(new sap.m.Text(`${"deliveryperiod"+te()}`,{text:`${u[ve]?.delivery_period??" "}`}));X.addItem(new sap.m.ScrollContainer(`${"paymenttermsScroll"+te()}`,{vertical:true,height:"100px"}));X.getItems()[3].addContent(new sap.m.Text(`${"paymentterms"+te()}`,{text:`${u[ve]?.payment_terms??" "}`}));X.addItem(new sap.m.ScrollContainer(`${"liquidedScroll"+te()}`,{vertical:true,height:"100px"}));X.getItems()[4].addContent(new sap.m.Text(`${"liquided"+te()}`,{text:`${u[ve]?.liquidated_damages??" "}`}));X.addItem(new sap.m.ScrollContainer(`${"warrantyScroll"+te()}`,{vertical:true,height:"100px"}));X.getItems()[5].addContent(new sap.m.Text(`${"warranty"+te()}`,{text:`${u[ve]?.warranty_defect_liability_period??" "}`}));X.addItem(new sap.m.ScrollContainer(`${"cpbgScroll"+te()}`,{vertical:true,height:"100px"}));X.getItems()[6].addContent(new sap.m.Text(`${"cpbg"+te()}`,{text:`${Pe[0]?.CPBG??" "}`}));const Se=Pe[0]?.Vendor_Contact_PersonDASH1??"";if(Se){var Y=/name\s*:(.*?)\s*email/;var Z=Se.match(Y)}var ee=Z?Z[1].trim():null;debugger;X.addItem(new sap.m.Text(`${"contactperson"+te()}`,{text:`${ee??"testContact"}`}));const Ve=/ph1\s*:\s*(.*?)\s*ph2/;const Le=Se.match(Ve);const Be=Le?Le[1].trim():null;const Ne=/ph2\s*:\s*(.*?)$/;const Ae=Se.match(Ne);const je=Ae?Ae[1].trim():null;X.addItem(new sap.m.Text(`${"contactno"+te()}`,{text:`${Be+", "+je??"test"}`}));X.addItem(new sap.m.Text(`${"ordercanbe"+te()}`,{text:`${u[ve]?.order_given_to??"test"}`}));X.addItem(new sap.m.Text(`${"technicallyapproved"+te()}`,{text:`${u[ve]?.Technically_Approved??"test"}`}));X.addItem(new sap.m.Text(`${"approvedvendor"+te()}`,{text:`${u[ve]?.approved_vendor??"test"}`}));let Ee=X.getItems()[X.getItems().length-1];Ee.addStyleClass("customlaststyleclassrsection")}ve++;debugger}while(ve<u.length);debugger;for(let Qe=0;Qe<b.getItems().length-1;Qe++){b.getItems()[Qe].setVisible(false)}let Te=b.getItems()[b.getItems().length-1];Te.getItems()[1].getItems()[1].getColumns()[2].getHeader().addItem(new sap.ui.core.Icon(`${"total_amount_icon"+te()}`,{src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",width:"20px",press:function(e){debugger;var t=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getItems();for(let a=0;a<t.length-1;a++){if(t[a].getVisible()==true){t[a].setVisible(false);e.getSource().setSrc("sap-icon://expand")}else{t[a].setVisible(true);e.getSource().setSrc("sap-icon://collapse")}}}}));debugger}debugger;sap.ui.core.BusyIndicator.hide()}catch(We){debugger;t.show(We)}}}}})});
},
	"cbedcompdbdyn/ext/fragment/Fragment.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core"\n\txmlns="sap.m"\n\txmlns:macros="sap.fe.macros"><HBox id="mainhbox1"><VBox id="leftSectionvbox1" class="rightPadding" width="30%"><HBox id="item_supplier1" justifyContent="SpaceBetween"><VBox id="items1" class="spacebetweenclass" width="80%" alignItems="Start"><HBox id="hindent"><Label design="Bold" id="indentttheader" text="Indent:"></Label><Text id="indentvalue" text=""></Text></HBox><HBox id="hproject"><Label design="Bold" id="projecttheader" text="Project:"></Label><Text id="projectvalue" text=""></Text></HBox><HBox id="hclient"><Label design="Bold" id="clientheader" text="Client:"></Label><Text id="clientvalue" text=""></Text></HBox></VBox><VBox id="supplier_header" class="spacebetweenclass" alignItems="End"><Label design="Bold" class="labelHeightClass" id="supplierheader" text="Supplier :"/><Label design="Bold" id="locationheader" text="Location :"/><Label design="Bold" id="qtn_ref_header" text="Qtn. Ref. :"/><Label design="Bold" id="dateheader" text="Date :"/><Label design="Bold" id="validityheader" text="Validity :"/></VBox></HBox><HBox id="demoxdemoe121" justifyContent="Center"><HBox id="dexmodemotest" height="53px" alignItems="Center"><Label id="titxle12" text="Cylindrical Data " design="Bold"/></HBox></HBox><HBox id="tablesHbox"  width = "auto"><Table id="itemstable1" growing="true" fixedLayout="true" width="100%"><columns><Column id="col2"><Text id="item_desc" text="Item Desc" tooltip="Item Desc" wrapping="false" /></Column><Column id="col3"><Text id="cap_each" text="Capacity Each" tooltip="Capacity each(in mtr)" wrapping="false" /></Column><Column id="col4"><Text id="dia_mm" text="Dia mm" tooltip="Dia mm" wrapping="false" /></Column><Column id="col5"><Text id="tl_tl_len" text="TL to TL Length" tooltip="TL to TL Length (in mm)" wrapping="false" /></Column><Column id="col6"><Text id="t6" text="MOC" tooltip="MOC" wrapping="false"/></Column><Column id="col7"><Text id="t7" text="Design Pressure Bar" tooltip="Design Pressure Bar" wrapping="false" /></Column><Column id="col8"><Text id="t8" text="Weight" tooltip="Weight (in Kgs)" wrapping="false" /></Column><Column id="col9"><Text id="t9" text=" Quantity" tooltip="Quantity" wrapping="false" /></Column></columns></Table></HBox><VBox id="leftbelowtable" class="v3spaceBetweenclass" alignItems="End"><Label id="sparesfor2" text="Spares for 2 Years operation" /><Label design="Bold" id="grandtotal" text=" Grand Total" /><Label id="pmff" text="Packing, Marking, Forwarding and Freight" /><Label id="inspection_testing_charges" text="Inspection / Testing Charges" /><Label id="doc_charges" text="Documentation Charges" /><HBox id="hboxtotal_basic_pricing" alignItems="End"><Label design="Bold" id="total_basic_pricing" text="Total Basic Price including packing, marking..." tooltip="Total Basic Price including packing, marking and forwarding" /><core:Icon id="icon1" src="sap-icon://navigation-up-arrow" color="darkblue" hoverColor="red" activeColor="darkgreen" width="20px" core:require="{ handler: \'cbedcompdbdyn/ext/fragment/Fragment\'}" press="handler.onPress_forwaring" size="13px"></core:Icon></HBox><Label design="Bold" id="rnod" text="RNOD" /><Label id="custom_duty" text="Custom Duty and Cess" /><Label id="sgst" text="SGST" /><Label id="igst" text="IGST" /><Label id="ugst" text="UGST" /><Label id="shipmentcharges" text="Shipment charges from EXW to ISRO Mahendragiri " /><HBox id="total_including_tax" alignItems="End"><Label design="Bold" id="newItemID1" text="Total Basic Price including packing,..." tooltip="Total Basic Price including packing, marking and forwarding, Transportation including Taxes" /><core:Icon id="icon2" src="sap-icon://navigation-up-arrow" color="darkblue" hoverColor="red" activeColor="darkgreen" width="20px" core:require="{ handler: \'cbedcompdbdyn/ext/fragment/Fragment\'}" press="handler.onPress_includingtax" size="13px"></core:Icon></HBox><Label design="Bold" id="total_excluding_taxes" text="Total Basic Price including packing, marking and....." tooltip="Total Basic Price including packing, marking and forwarding, Transportation excluding Taxes" /><Label design="Bold" id="per_diem" text="Per Diem rate for Supervision for Erection and commissioning" /><HBox id="hpricebasis" height="15px" alignItems="End"><Label design="Bold" id="moreid" text=" View more..." /><core:Icon id="icon3" src="sap-icon://navigation-down-arrow" color="darkblue" hoverColor="red" activeColor="darkgreen" width="20px" core:require="{ handler: \'cbedcompdbdyn/ext/fragment/Fragment\'}" press="handler.onPress_priccebasis" size="13px"></core:Icon></HBox><Label id="pricesbasis" text="PriceBasis" /><Label id="point_of_delivery" text="Point of Delivery" /><Label id="del_period" text="Delivery Period"  /><Label id="payment_terms" text="Payment Terms" class="custompayment" /><Label id="liq_dam" text="Liquidated Damages" class="customliquidated" /><Label id="warranty" text="Warranty / Defect Liability Period" class="customwarrantydefect" /><Label id="cpbg" text="CPBG"  class="customcbpg"/><Label id="contact_per" text="Contact Person" /><Label id="contact_no" text="Contact No." /><Label id="ordercanbe" text=" Order can be given to……..." /><Label id="tech_approved" text=" Techncially Approved " class="custtechnically" /><Label id="approvedvendor" text="Approved Vendor" class="custtechnically" /></VBox></VBox><ScrollContainer id="rightScrollcontainer" width="100%" horizontal= "true"><HBox id="rightHboxcontainer" width="70vw" wrap="NoWrap"></HBox></ScrollContainer></HBox></core:FragmentDefinition>',
	"cbedcompdbdyn/ext/fragment/Fragment.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress_includingtax:function(e){debugger;var t=e.getSource().getParent().getParent().getParent().getParent();if(e.getSource().getParent().getParent().getItems()[7].getVisible()==true){e.getSource().getParent().getParent().getItems()[7].setVisible(false);e.getSource().getParent().getParent().getItems()[8].setVisible(false);e.getSource().getParent().getParent().getItems()[9].setVisible(false);e.getSource().getParent().getParent().getItems()[10].setVisible(false);e.getSource().getParent().getParent().getItems()[11].setVisible(false);e.getSource().setSrc("sap-icon://navigation-right-arrow")}else{e.getSource().getParent().getParent().getItems()[7].setVisible(true);e.getSource().getParent().getParent().getItems()[8].setVisible(true);e.getSource().getParent().getParent().getItems()[9].setVisible(true);e.getSource().getParent().getParent().getItems()[10].setVisible(true);e.getSource().getParent().getParent().getItems()[11].setVisible(true);e.getSource().setSrc("sap-icon://navigation-up-arrow")}var g=t.getItems()[1].getContent()[0].getItems();for(let e=0;e<g.length;e++){for(let t=0;t<g[e].getItems()[1].getItems().length;t++){var r=g[e].getItems()[1].getItems()[t].mAggregations.items[1].mAggregations.items[1];let s=r.getItems().length;for(let e=s-4;e>=s-8;e--){if(r.getItems()[e].getVisible()==true){r.getItems()[e].setVisible(false)}else{r.getItems()[e].setVisible(true)}}}}},onPress_priccebasis:function(e){debugger;var t=e.getSource().getParent().getParent().getItems();var g=e.getSource().getParent().getParent().getParent().getParent();let r=g.getItems()[1].getContent()[0].getItems();for(let e=0;e<r.length;e++){if(r[e].getItems()[2].getVisible()==true){r[e].getItems()[2].setVisible(false)}else{r[e].getItems()[2].setVisible(true)}}if(e.getSource().getSrc()=="sap-icon://navigation-down-arrow"){e.getSource().setSrc("sap-icon://navigation-right-arrow")}else{e.getSource().setSrc("sap-icon://navigation-down-arrow")}for(let e=16;e<t.length;e++){if(t[e].getVisible()==true){t[e].setVisible(false)}else{t[e].setVisible(true)}}},onPress_forwaring:function(e){debugger;var t=e.getSource().getParent().getParent().getParent().getParent();if(e.getSource().getParent().getParent().getItems()[2].getVisible()==true){e.getSource().getParent().getParent().getItems()[2].setVisible(false);e.getSource().getParent().getParent().getItems()[3].setVisible(false);e.getSource().getParent().getParent().getItems()[4].setVisible(false);e.getSource().setSrc("sap-icon://navigation-right-arrow")}else{e.getSource().getParent().getParent().getItems()[2].setVisible(true);e.getSource().getParent().getParent().getItems()[3].setVisible(true);e.getSource().getParent().getParent().getItems()[4].setVisible(true);e.getSource().setSrc("sap-icon://navigation-up-arrow")}var g=t.getItems()[1].getContent()[0].getItems();for(let e=0;e<g.length;e++){for(let t=0;t<g[e].getItems()[1].getItems().length;t++){var r=g[e].getItems()[1].getItems()[t].mAggregations.items[1].mAggregations.items[1];let s=r.getItems().length;for(let e=s-11;e>s-14;e--){if(r.getItems()[e].getVisible()==true){r.getItems()[e].setVisible(false)}else{r.getItems()[e].setVisible(true)}}}}}}});
},
	"cbedcompdbdyn/ext/fragment/HeaderFragment.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><HBox id="headervbox1" justifyContent="End"><Button id="rowexpand" core:require="{ handler: \'cbedcompdbdyn/ext/fragment/HeaderFragment\'}" text="RowExpand" press="handler.onRowExpand" /><Button id="columnexpand" core:require="{ handler: \'cbedcompdbdyn/ext/fragment/HeaderFragment\'}" text="ColumnExpand" press="handler.onColumnExpand" /></HBox></core:FragmentDefinition>',
	"cbedcompdbdyn/ext/fragment/HeaderFragment.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onRowExpand:function(e){debugger;let t=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon1");if(t.getSrc()=="sap-icon://navigation-right-arrow"){t.firePress()}let g=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");if(g.getSrc()=="sap-icon://navigation-right-arrow"){g.firePress()}let n=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");if(n.getSrc()=="sap-icon://navigation-right-arrow"){n.firePress()}},onColumnExpand:function(e){debugger;var t=e.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].getSubSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[1].mAggregations.content[0].mAggregations.items;for(let e=0;e<t.length;e++){let n=t[0].getItems()[1].getItems().length;var g=t[e].getItems()[1].getItems()[n-1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[2].mAggregations.header.mAggregations.items[1];if(g.getSrc()=="sap-icon://expand"){g.firePress()}}}}});
},
	"cbedcompdbdyn/i18n/i18n.properties":'# This is the resource bundle for cbedcompdbdyn\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=CBE Comp\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\nflpTitle=CBE Comp App\n',
	"cbedcompdbdyn/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"cbedcompdbdyn","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.3","toolsId":"50b24dac-b725-4cd2-979d-47c9d2b5ea1a"},"dataSources":{"mainService":{"uri":"odata/v4/catalogcbeservice/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"cbecompdbdynobj-display":{"semanticObject":"cbecompdbdynobj","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.6","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"cbedcompdbdyn.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"routes":[{"pattern":":?query:","name":"Project_DetailsList","target":"Project_DetailsList"},{"pattern":"Project_Details({key}):?query:","name":"Project_DetailsObjectPage","target":"Project_DetailsObjectPage"}],"targets":{"Project_DetailsList":{"type":"Component","id":"Project_DetailsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Project_Details","variantManagement":"Page","navigation":{"Project_Details":{"detail":{"route":"Project_DetailsObjectPage"}}}}}},"Project_DetailsObjectPage":{"type":"Component","id":"Project_DetailsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Project_Details","content":{"body":{"sections":{"Fragment":{"template":"cbedcompdbdyn.ext.fragment.Fragment","type":"XMLFragment"}}},"header":{"facets":{"HeaderFragment":{"template":"cbedcompdbdyn.ext.fragment.HeaderFragment","templateEdit":"cbedcompdbdyn.ext.fragment.Fragment","stashed":false,"requestGroupId":"Heroes","flexSettings":{"designtime":"Default"}}}}}}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ObjectPage.ObjectPageController#cbedcompdbdyn::Project_DetailsObjectPage":{"controllerName":"cbedcompdbdyn.ext.controller.ObjectPageCon"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"cbecomparisionapprouter"}}'
}});

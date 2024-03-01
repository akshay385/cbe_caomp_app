sap.ui.define(["sap/m/MessageToast","sap/ui/export/Spreadsheet","sap/ui/model/json/JSONModel","sap/ui/export/library"],function(e,t,g,s){"use strict";var o=s.EdmType;return{onRowExpand:function(e){debugger;if(e.getSource().getText()=="ItemList-ExpandAll"){debugger;e.getSource().setText("ItemList-CollapseAll");let t=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");if(t.getSrc()=="sap-icon://navigation-right-arrow"){t.firePress()}let g=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");if(g.getSrc()=="sap-icon://navigation-right-arrow"){g.firePress()}}else{e.getSource().setText("ItemList-ExpandAll");let t=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon2");if(t.getSrc()=="sap-icon://navigation-up-arrow"){t.firePress()}let g=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--icon3");if(g.getSrc()=="sap-icon://navigation-down-arrow"){g.firePress()}}},onColumnExpand:function(e){var t=e.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].getSubSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[1].mAggregations.content[0].mAggregations.items;var g=e.getSource().getParent().getParent().getParent().getParent().getParent().getSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[1].mAggregations.items[0].mAggregations.items[1];if(e.getSource().getPressed()==true){e.getSource().setText("VendorList-CollapseAll");if(g.getSrc()=="sap-icon://expand"){g.firePress()}for(let e=0;e<t.length;e++){let g=t[0].getItems()[1].getItems().length;debugger;var s=t[e].getItems()[1].getItems()[g-1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[1].mAggregations.header.mAggregations.items[1];if(s.getSrc()=="sap-icon://expand"){s.firePress()}}}else{e.getSource().setText("VendorList-ExpandAll");if(g.getSrc()=="sap-icon://collapse"){g.firePress()}for(let e=0;e<t.length;e++){let g=t[0].getItems()[1].getItems().length;var s=t[e].getItems()[1].getItems()[g-1].mAggregations.items[1].mAggregations.items[1].mAggregations.columns[1].mAggregations.header.mAggregations.items[1];if(s.getSrc()=="sap-icon://collapse"){s.firePress()}}}},onExportExcel:async function(t){debugger;var g=[];var s=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--mainhbox1");let n=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--projectvalue").getText();let r=sap.ui.getCore().byId("cbedcompdbdyn::Project_DetailsObjectPage--fe::CustomSubSection::Fragment--itemstable1");let l=[];debugger;for(let e=0;e<r.getItems().length;e++){l.push({})}var g=[{2:"Commercial Bid Evaluation"},{1:"",11:"Supplier"},{1:"",11:"Location"},{1:"Project",2:`${"Project: "+n}`,11:"Qtn. Ref."},{1:"",11:"Date"},{1:"",11:"Validity"},{1:""}];let a={};let i=2;for(let e=0;e<r.getColumns().length;e++){debugger;if(r.getColumns()[e].getVisible()==true){a[i]=r.getColumns()[e].getHeader().getText();i++}}g.push(a);g[1][i]=g[1][11];delete g[1][11];g[2][i]=g[2][11];delete g[2][11];g[3][i]=g[3][11];delete g[3][11];g[4][i]=g[4][11];delete g[4][11];g[5][i]=g[5][11];delete g[5][11];debugger;for(let e=0;e<r.getItems().length;e++){let t={};let s=2;for(let g=0;g<r.getColumns().length;g++){if(r.getColumns()[g].getVisible()==true){debugger;t[s]=r.getItems()[e].getCells()[g].getText();s++}}g.push(t)}var m=[{1:"",2:""},{1:"3",[i]:"Spares for 2 Years operation"},{1:" ",[i]:"Grand Total"},{1:"4",[i]:"Freight"},{1:"5",[i]:"Inspection / Testing Charges"},{1:"B.3",[i]:"Documentation Charges"},{1:"C",[i]:"RNOD"},{1:"D.1",[i]:"Custom Duty & Cess"},{1:"D.2",[i]:"Tax"},{1:"D.6",[i]:"Shipment charges from EXW to ISRO Mahendragiri"},{1:"D",[i]:"Total Basic Price including packing, marking & forwarding, Transportation including Taxes"},{[i]:"Total Basic Price including packing, marking & forwarding, Transportation excluding Taxes"},{1:"F",[i]:"Per Diem rate for Supervision for Erection and commissioning"},{1:"G.3",[i]:"Scope and Responsibilities"},{1:"G.4",[i]:"Commercial Terms"},{1:"G.5",[i]:"Compliance Terms"},{1:"G.6",[i]:"Others"},{1:"G.9",[i]:"Contact person"},{1:"G.10",[i]:"Contact No"},{1:"G.11",[i]:"Order can be given to .."},{1:"G.12",[i]:"Technical approved"},{1:"G.13",[i]:"Approved vendor"}];debugger;var c=g.concat(m);var u=[];var p=s.getItems()[1].getContent()[0].getItems();let d=[];let f=[];let b=i+2;for(let e=0;e<p.length;e++){let t=p[e].getItems()[0].getItems()[0].getText();let g=p[e].getItems()[0].getItems()[1].getText();let s=p[e].getItems()[1].getItems();let o=[];d=[{[b]:""},{[b]:t},{[b]:g}];let n=[];let r=p[e].getItems()[2].getItems()[1].getItems();for(let e=0;e<s.length;e++){let t=s[e].getItems()[0].getItems()[0].getText();let g=s[e].getItems()[0].getItems()[1].getText();let o=s[e].getItems()[0].getItems()[2].getText();let a=s[e].getItems()[1].getItems()[0].getText();let i=b;let m=b+1;let c=b+2;b=b+3;let u=[{[i]:t},{[i]:g},{[i]:o},{[i]:a},{[i]:"Unit Rate",[m]:"Total Amount"}];for(let t=0;t<l.length;t++){u.push({[i]:s[e].getItems()[1].getItems()[1].getItems()[t].getCells()[0].getText(),[m]:s[e].getItems()[1].getItems()[1].getItems()[t].getCells()[1].getText()})}let p=s[e].getItems()[1].getItems()[1].getItems();let d=l.length;let f=[{[i]:""},{[m]:p[d+1].getCells()[1].getText()},{[m]:p[d+2].getCells()[1].getText()},{[i]:p[d+3].getCells()[0].getText(),[m]:p[d+3].getCells()[1].getText()},{[i]:p[d+4].getCells()[0].getText(),[m]:p[d+4].getCells()[1].getText()},{[i]:p[d+5].getCells()[0].getText(),[m]:p[d+5].getCells()[1].getText()},{[m]:p[d+6].getCells()[1].getText()},{[m]:p[d+7].getCells()[1].getText()},{[i]:p[d+8].getContent()[0].getText()},{[i]:p[d+9].getCells()[0].getText()},{[m]:p[d+10].getCells()[1].getText()},{[m]:p[d+11].getCells()[1].getText()},{[m]:p[d+12].getCells()[1].getText()},{[i]:r[e].getItems()[0].getContent()[0].getText()},{[i]:r[e].getItems()[1].getContent()[0].getText()},{[i]:r[e].getItems()[2].getContent()[0].getText()},{[i]:r[e].getItems()[3].getContent()[0].getText()},{[i]:r[e].getItems()[4].getText()},{[i]:r[e].getItems()[5].getText()},{[i]:r[e].getItems()[6].getText()},{[i]:r[e].getItems()[7].getText()},{[i]:r[e].getItems()[8].getText()}];u=u.concat(f);n.push(u)}const a=n.map(e=>e.length);const i=a.every((e,t,g)=>e===g[0]);let m=[];if(i){for(let e=0;e<n[0].length;e++){let t={};for(let g=0;g<n.length;g++){Object.assign(t,n[g][e])}m.push(t)}console.log(m)}else{console.log("Arrays in updatarr have different lengths. Unable to merge.")}d=d.concat(m);f.push(d)}let x=[];const h=f.map(e=>e.length);const I=h.every((e,t,g)=>e===g[0]);if(I){for(let e=0;e<f[0].length;e++){let t={};for(let g=0;g<f.length;g++){Object.assign(t,f[g][e])}x.push(t)}console.log(x)}else{console.log("Arrays in updatarr have different lengths. Unable to merge.")}console.log(x);let C=[];if(c.length===x.length){for(let e=0;e<c.length;e++){let t=Object.assign({},c[e],x[e]);C.push(t)}console.log(C)}else{console.log("Arrays have different lengths. Unable to merge.")}let T=[];for(let e=1;e<b;e++){if(b==1){T.push({label:` `,property:`${e+1}`,type:o.String,width:"100"})}else{T.push({label:` `,property:`${e+1}`,type:o.String})}}debugger;debugger;var S=new sap.ui.export.Spreadsheet({workbook:{columns:T,context:{application:"SAP UI5 Export Sample",author:"Sample"},hierarchyLevel:"level"},dataSource:C,fileName:"cbe_comp.xlsx"});S.build().then(function(){e.show("Exported successfully!")}).catch(function(t){e.show("Export failed: "+t)})}}});
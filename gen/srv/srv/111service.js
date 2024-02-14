const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
   this.on("getExcelData",async (req)=>{
    console.log(req.data);
   })
});
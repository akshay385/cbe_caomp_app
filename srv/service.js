const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
   this.on("getExcelData",async (req)=>{
      let testdata = JSON.parse(req.data.data);
    console.log(testdata);
   })
});
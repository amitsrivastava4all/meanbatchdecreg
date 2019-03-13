
function readExcel(){
    const xlsxj = require("xlsx-to-json");
    xlsxj({
      input: "/Users/amit/Downloads/Brainmentors training schedule.xlsx", 
      output: "output.json"
    }, function(err, result) {
      if(err) {
        console.error(err);
      }else {
        console.log(result);
      }
    });
}
readExcel();
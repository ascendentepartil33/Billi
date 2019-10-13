const XLSX = require ('xlsx');
const woorkbook = XLSX.readFile('names.xlsx');
const sheet_name_list = workbook.SheetNames;
console.log(XLS.utils.sheet_to_json(woorkbook.Sheets[sheet_name_list[0]]))

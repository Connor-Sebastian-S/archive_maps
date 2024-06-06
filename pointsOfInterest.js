

const XLSX = require('xlsx');
const fs = require('fs');

// Read the Excel file
const workbook = XLSX.readFile('./data/points_data.xlsx');
const sheet_name_list = workbook.SheetNames;
var pointsData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
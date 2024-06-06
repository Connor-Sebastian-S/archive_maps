/*var pointsData = [
    {
        "name": "Wow look at this photo",
        "description": "This photo shows a thing happening at that place",
        "latitude": 56.56561477,
        "longitude": -3.58550088,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Scanian_War_Collage.jpg/1280px-Scanian_War_Collage.jpg",
        "startYear": 1820,
        "endYear": 1830,
        "type": "photo"
    },
    {
        "name": "Battle of Dunkeld",
        "description": "Part of the Jacobite rising of 1689, fought between Jacobite clans supporting the deposed king James VII of Scotland and covenanters supporting William of Orange, King of Scotland, in the streets around Dunkeld Cathedral on 21 August 1689",
        "latitude": 56.5651269,
        "longitude": -3.5896846,
        "startYear": 1689,
        "endYear": 1689,
        "type": "battle"
    },
    {
        "name": "Dunkeld Bridge - Thomas Telford",
        "description": "The bridge was built between 1805 and 1809 by Thomas Telford. It cost £33,978. The pontage was abolished in 1879.",
        "latitude": 56.563956,
        "longitude": -3.585274,
        "startYear": 1805,
        "endYear": 1809,
        "type": "construction"
    },
    {
        "name": "Establishment of The Birnam Institute",
        "description": "The Birnam Institute was established to serve as a community center and library, fostering local education and cultural activities.",
        "latitude": 56.5577,
        "longitude": -3.5707,
        "startYear": 1883,
        "endYear": 1883,
        "type": "construction"
    },
    {
        "name": "Birnam Oak",
        "description": "The Birnam Oak is a historically significant tree, believed to be over 500 years old, linked to Shakespeare's 'Macbeth'.",
        "latitude": 56.5607,
        "longitude": -3.5801,
        "startYear": 1500,
        "endYear": 1500,
        "type": "natural monument"
    },
    {
        "name": "Opening of Dunkeld and Birnam Railway Station",
        "description": "The Dunkeld and Birnam Railway Station was opened, enhancing connectivity and contributing to the growth of the area.",
        "latitude": 56.5567,
        "longitude": -3.5714,
        "startYear": 1856,
        "endYear": 1856,
        "type": "infrastructure"
    },
    {
        "name": "Little Dunkeld Parish Church",
        "description": "Built in 1798 and rebuilt in 1907, the church serves as a notable example of ecclesiastical architecture.",
        "latitude": 56.5584,
        "longitude": -3.5806,
        "startYear": 1798,
        "endYear": 1798,
        "type": "construction"
    }


];*/

const XLSX = require('xlsx');
const fs = require('fs');

// Read the Excel file
const workbook = XLSX.readFile('./data/points_data.xlsx');
const sheet_name_list = workbook.SheetNames;
var pointsData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
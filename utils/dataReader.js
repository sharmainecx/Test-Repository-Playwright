import path from 'path';
import {readCSV} from '../utils/csvreader';
import {readExcel} from '../utils/excelReader';
import fs from 'fs';

export function readData(filePath, sheetName){

    const ext = path.extname(filePath).toLowerCase();

    switch(ext){

        case ".csv":
            console.log("Reading from CSV file");
            return readCSV(filePath);

        case ".xlsx":
            console.log("Reading from Excel file");
            return readExcel(filePath, sheetName || 'Sheet1');

        case ".json":
            console.log("Reading from JSON file");
            const JSONData = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(JSONData);
    }
}
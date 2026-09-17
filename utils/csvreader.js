import fs from 'fs';
import {parse} from 'csv-parse/sync';
import path from 'path';

export function readCSV(filePath){
    const fullPath = path.resolve(filePath);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true

    })
    return records;
}


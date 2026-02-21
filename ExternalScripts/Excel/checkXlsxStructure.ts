import XLSX from 'xlsx';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const xlsxPath = join(__dirname, 'karaoke_songs.xlsx');

const workbook = XLSX.readFile(xlsxPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

console.log('Первые 3 строки:');
console.log(JSON.stringify(data.slice(0, 3), null, 2));
console.log('\nКлючи первой строки:', Object.keys(data[0]));

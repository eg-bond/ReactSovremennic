import fs from 'fs';
import XLSX from 'xlsx';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const xlsxPath = join(__dirname, 'karaoke_songs.xlsx');
const jsonPath = join(__dirname, '../../public/karaoke_songs.json');

const workbook = XLSX.readFile(xlsxPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

const songs = data.map((row: any) => ({
  id: row['№'] || 0,
  artist: row['Исполнитель'] || '',
  song: row['Наименование'] || '',
}));

fs.writeFileSync(jsonPath, JSON.stringify(songs, null, 2));
console.log(`✅ Конвертировано ${songs.length} песен в ${jsonPath}`);

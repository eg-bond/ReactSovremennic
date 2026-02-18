import fs from 'fs';
import XLSX from 'xlsx';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const xlsxPath = join(__dirname, '../../src/karaoke_songs.xlsx');
const jsonPath = join(__dirname, '../../public/karaoke_songs.json');

const workbook = XLSX.readFile(xlsxPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

const songs = data.map((row: any, index: number) => ({
  id: row.id || index + 1,
  artist: row.artist || row['исполнитель'] || row['Исполнитель'] || '',
  song: row.song || row['песня'] || row['Песня'] || row['название'] || row['Название'] || '',
}));

fs.writeFileSync(jsonPath, JSON.stringify(songs, null, 2));
console.log(`✅ Конвертировано ${songs.length} песен в ${jsonPath}`);

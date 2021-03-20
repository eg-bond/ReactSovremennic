// const xlsx =  require('xlsx');
// const fs = require('fs');
import xlsx from 'xlsx';
import fs from 'fs';

//Вытаскиваем JS объект с расписанием из екселя
let workBook = xlsx.readFile("src/Excel/macros.xlsm");
let ws = workBook.Sheets['Лист2'];
let data = xlsx.utils.sheet_to_json(ws);

//Преобразуем извлеченный из екселя объект в удобный для дальнейшего использования
let scedule = {};
for (let i=0; i<7; i++) {
    let dayArr = data.filter(item => item.day === `day${i}`);
    scedule[`day${i}`] = dayArr.map(item => [item.time, item.filmTitle, item.cost]);
}

//Формируем данные для записи в файл расписания в строковом формате
const finalData = `let scedule = ${JSON.stringify(scedule)}
export default scedule;`;

//Записываем получившиеся данные в файл
fs.writeFileSync('src/Excel/scedule.mjs', finalData);




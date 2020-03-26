const xlsx =  require('xlsx');
const fs = require('fs');

//Вытаскиваем JS объект с расписанием из екселя
let workBook = xlsx.readFile("src/Excel/macros.xlsm");
let ws = workBook.Sheets['Лист2'];
let data = xlsx.utils.sheet_to_json(ws);

//Преобразуем извлеченный из екселя объект в удобный для дальнейшего использования
let scedule = {};
for (let i=0; i<7; i++) {
    let dayArr = data.filter(item => item.day === `day${i}`);
    let pureDayArr = dayArr.map(item => [item.time, item.filmTitle, item.cost]);
    scedule[`day${i}`] = pureDayArr;
}

//Формируем данные для записи в файл расписания в строковом формате
const finalData = `let scedule = ${JSON.stringify(scedule)}
export default scedule;`;

//Записываем получившиеся данные в файл
fs.writeFileSync('src/Excel/scedule.js', finalData);




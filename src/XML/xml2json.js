let convert = require('xml-js');
let xml =
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <note importance="high" logged="true">            
                <day4>
                    <time>10:40</time>
                    <filmName>Хищные птицы  2D</filmName>
                    <cost>130</cost>
                </day4>
                <day4>
                    <time>12:50</time>
                    <filmName>Соник в кино  2D</filmName>
                    <cost>200</cost>
                </day4>
                <day4>
                    <time>14:45</time>
                    <filmName>Хищные птицы  2D</filmName>
                    <cost>220</cost>
                </day4>
                <day4>
                    <time>16:55</time>
                    <filmName>Соник в кино  2D</filmName>
                    <cost>280</cost>
                </day4>
                <day4>
                   <time>19:00</time>
                    <filmName>Хищные птицы  2D</filmName>
                    <cost>320</cost>
                </day4>
                <day4>
                    <time>21:15</time>
                    <filmName>Соник в кино  2D</filmName>
                    <cost>320</cost>
                </day4>
                <day4>
                   <time>23:20</time>
                    <filmName>Кома  2D</filmName>
                    <cost>250</cost>
                </day4>
            
    </note>`;
let result1 = convert.xml2json(xml, {compact: true, spaces: 4});
let result2 = convert.xml2json(xml, {compact: false, spaces: 4});
export let day4scedule = JSON.parse(result1);
// console.log(result1);
window.scedule = JSON.parse(result1);

import React from 'react';
import {Route} from "react-router-dom";
import Joker from "./Joker";

const films = [ // Массив с данными по всем фильмам

    { title: 'Оно 2',
        beginDate: 'с 5 сентября',
        endDate: 'по 25 сентября',
        kind: 'Ужасы',
        topImgPath: 'films/top_menu/OnoTwo.gif',
        bottomImgPath: 'films/description/OnoTwo_D.jpg',
        playerCode: 'RxLmsi98DB4',
        link: 'OnoTwo.html' },

    { title: 'Дорогой папа',
        beginDate: 'с 12 сентября',
        endDate: 'по 25 сентября',
        kind: 'Комедия',
        topImgPath: 'films/top_menu/papa.gif',
        bottomImgPath: 'films/description/papa_D.jpg',
        playerCode: 'e1cnRzbPu4I',
        link: 'papa.html' },

    { title: 'Птичий дозор',
        beginDate: 'с 12 сентября',
        endDate: 'по 25 сентября',
        kind: 'Мультфильм',
        topImgPath: 'films/top_menu/birds.gif',
        bottomImgPath: 'films/description/birds_D.jpg',
        playerCode: 'rDtKXZmU-3c',
        link: 'birds.html' },

    { title: 'Тайна печати дракона',
        beginDate: 'с 19 сентября',
        endDate: 'по 2 октября',
        kind: 'Приключения',
        topImgPath: 'films/top_menu/dragon.gif',
        bottomImgPath: 'films/description/dragon_D.jpg',
        playerCode: '7o1G8zkKhNo',
        link: 'dragon.html' },

    { title: 'Герой',
        beginDate: 'с 26 сентября',
        endDate: 'по 2 октября',
        kind: 'Триллер',
        topImgPath: 'films/top_menu/hero.gif',
        bottomImgPath: 'films/description/hero_D.jpg',
        playerCode: '7E74y4e1Gg4',
        link: 'hero.html' },

    { title: 'Джокер',
        beginDate: 'с 3 октября',
        endDate: 'по 23 октября',
        kind: 'Триллер',
        topImgPath: 'films/top_menu/joker.gif',
        bottomImgPath: 'joker_D.jpg',
        playerCode: 'jGfiPs9zuhE',
        link: 'joker.html' },

    { title: 'Малефисента: Владычица тьмы',
        beginDate: 'с 17 октября',
        endDate: 'по 6 ноября',
        kind: 'Фэнтези',
        topImgPath: 'films/top_menu/maleficent.gif',
        bottomImgPath: 'films/description/maleficent_D.jpg',
        playerCode: 'L0ttxMz-tyo',
        link: 'maleficent.html' },

    { title: 'Zомбилэнд: Контрольный Выстрел',
        beginDate: 'с 24 октября',
        endDate: 'по 6 ноября',
        kind: 'Боевик',
        topImgPath: 'films/top_menu/zombieland.gif',
        bottomImgPath: 'films/description/zombieland_D.jpg',
        playerCode: 'E3CPPp8CXHM',
        link: 'zombieland.html' }
]

const filmsToday = [ // Массив с данными по всем фильмам

    { title: 'Оно 2',
        beginDate: 'с 5 сентября',
        endDate: 'по 25 сентября',
        kind: 'Ужасы',
        topImgPath: 'films/top_menu/OnoTwo.gif',
        bottomImgPath: 'films/description/OnoTwo_D.jpg',
        playerCode: 'RxLmsi98DB4',
        link: 'OnoTwo.html' },

    { title: 'Дорогой папа',
        beginDate: 'с 12 сентября',
        endDate: 'по 25 сентября',
        kind: 'Комедия',
        topImgPath: 'films/top_menu/papa.gif',
        bottomImgPath: 'films/description/papa_D.jpg',
        playerCode: 'e1cnRzbPu4I',
        link: 'papa.html' },

    { title: 'Птичий дозор',
        beginDate: 'с 12 сентября',
        endDate: 'по 25 сентября',
        kind: 'Мультфильм',
        topImgPath: 'films/top_menu/birds.gif',
        bottomImgPath: 'films/description/birds_D.jpg',
        playerCode: 'rDtKXZmU-3c',
        link: 'birds.html' },

    { title: 'Тайна печати дракона',
        beginDate: 'с 19 сентября',
        endDate: 'по 2 октября',
        kind: 'Приключения',
        topImgPath: 'films/top_menu/dragon.gif',
        bottomImgPath: 'films/description/dragon_D.jpg',
        playerCode: '7o1G8zkKhNo',
        link: 'dragon.html' }
]

function Cinema(props) {
    return (
        <div>
            <Route path='/joker' render={(props) => <Joker {...props} films = {films[5]} />} />
        </div>
    );
}

export default Cinema;
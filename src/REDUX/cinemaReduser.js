const CREATE_FILMS_TODAY_ARR = "CREATE_FILMS_TODAY_ARR";

let initialState = {
    films: [
        {
            title: 'Джокер',
            beginDate: 'с 3 октября',
            endDate: 'по 23 октября',
            kind: 'Триллер, боевик',
            director: 'Режиссер Джокера',
            duration: '100 мин.',
            age: '18+',
            actors: 'актер1, актер2, актер3, Харрис Дикинсон, Джуно Темпл, Мишель Пфайффер',
            description: ` joker deskription  joker deskription  joker deskription  joker deskription
             joker deskription  joker deskription  joker deskription  joker deskription  joker deskription  joker deskription`,
            topImgPath: './Images/top_menu/joker.gif',
            bottomImgPath: 'Images/description/joker_D.jpg',
            playerCode: 'jGfiPs9zuhE',
            link: 'joker'
        },

        {
            title: 'Гемини',
            beginDate: 'с 10 октября',
            endDate: 'по 30 октября',
            kind: 'говно, боевик',
            director: 'Режиссер гемини',
            duration: '140 мин.',
            age: '12+',
            actors: 'актер4, актер5, актер3, тварь, Харрис Дикинсон, Джуно Темпл, Мишель Пфайффер',
            description: ` гемини deskription  joker deskription  joker deskription  joker deskription
             joker deskription  joker deskription  joker deskription  joker deskription  joker deskription  joker deskription`,
            topImgPath: './Images/top_menu/gemini.gif',
            bottomImgPath: 'Images/description/gemini_D.jpg',
            playerCode: 'Io6_zfPA1BE',
            link: 'gemini'
        },

        {
            title: 'Малефисента: Владычица тьмы',
            beginDate: 'с 17 октября',
            endDate: 'по 6 ноября',
            kind: 'Фэнтези, мультик, джоли',
            director: 'Режиссер малефисенты',
            duration: '90 мин.',
            age: '6+',
            actors: 'актер5, актер123, актер1232133, Харрис Дикинсон, Джуно Темпл, Мишель Пфайффер',
            description: ` малефисента deskription  joker deskription  joker deskription  joker deskription
             joker deskription  joker deskription  joker deskription  joker deskription  joker deskription  joker deskription`,
            topImgPath: './Images/top_menu/maleficent.gif',
            bottomImgPath: 'Images/description/maleficent_D.jpg',
            playerCode: 'L0ttxMz-tyo',
            link: 'maleficent'
        },

        {
            title: 'Zомбилэнд: Контрольный Выстрел',
            beginDate: 'с 24 октября',
            endDate: 'по 6 ноября',
            kind: 'Фэнтези, мультик, джоли',
            director: 'Режиссер Джокера',
            duration: '100 мин.',
            age: '18+',
            actors: 'актер1, актер2, актер3, Харрис Дикинсон, Джуно Темпл, Мишель Пфайффер',
            description: ` joker deskription  joker deskription  joker deskription  joker deskription
             joker deskription  joker deskription  joker deskription  joker deskription  joker deskription  joker deskription`,
            topImgPath: './Images/top_menu/zombieland.gif',
            bottomImgPath: 'Images/description/zombieland_D.jpg',
            playerCode: 'E3CPPp8CXHM',
            link: 'zombieland'
        },

        {
            title: 'Терминатор: Темные судьбы',
            beginDate: 'с 31 октября',
            endDate: 'по 13 ноября',
            kind: 'Фэнтези, мультик, джоли',
            director: 'Режиссер Джокера',
            duration: '100 мин.',
            age: '18+',
            actors: 'актер1, актер2, актер3, Харрис Дикинсон, Джуно Темпл, Мишель Пфайффер',
            description: ` joker deskription  joker deskription  joker deskription  joker deskription
             joker deskription  joker deskription  joker deskription  joker deskription  joker deskription  joker deskription`,
            topImgPath: './Images/top_menu/terminator.gif',
            bottomImgPath: 'Images/description/terminator_D.jpg',
            playerCode: 'A36LahZNUiE',
            link: 'terminator'
        },

        {
            title: 'Девятая',
            beginDate: 'с 7 ноября',
            endDate: 'по 20 ноября',
            kind: 'Фэнтези, мультик, джоли',
            director: 'Режиссер Джокера',
            duration: '100 мин.',
            age: '18+',
            actors: 'актер1, актер2, актер3, Харрис Дикинсон, Джуно Темпл, Мишель Пфайффер',
            description: ` joker deskription  joker deskription  joker deskription  joker deskription
             joker deskription  joker deskription  joker deskription  joker deskription  joker deskription  joker deskription`,
            topImgPath: './Images/top_menu/nine.gif',
            bottomImgPath: 'Images/description/nine_D.jpg',
            playerCode: '6CdM9JrcYRg',
            link: 'nine'
        },

        {
            title: 'Доктор Сон',
            beginDate: 'с 7 ноября',
            endDate: 'по 27 ноября',
            kind: 'Фэнтези, мультик, джоли',
            director: 'Режиссер Джокера',
            duration: '100 мин.',
            age: '18+',
            actors: 'актер1, актер2, актер3, Харрис Дикинсон, Джуно Темпл, Мишель Пфайффер',
            description: ` joker deskription  joker deskription  joker deskription  joker deskription
             joker deskription  joker deskription  joker deskription  joker deskription  joker deskription  joker deskription`,
            topImgPath: './Images/top_menu/sleep.gif',
            bottomImgPath: 'Images/description/sleep_D.jpg',
            playerCode: 'bkhjbv9UbPI',
            link: 'sleep'
        }
    ],
    filmsToday: [],
    filmsTodaySlides: 4,
}


export const cinemaReduser = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FILMS_TODAY_ARR:
            let filmsToday = [];
            for (let i = 0; i<state.filmsTodaySlides; i++) {
                filmsToday[i] = state.films[i];
            }
            return {
                ...state,
                filmsToday: filmsToday
            }

        default:
            return state;
    }
}

export const createFilmsTodayArr = () => {
    return {
        type: CREATE_FILMS_TODAY_ARR
    }
}


export default cinemaReduser;




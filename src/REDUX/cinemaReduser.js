const CREATE_FILMS_TODAY_ARR = "CREATE_FILMS_TODAY_ARR";

let initialState = {
    films: [
        {
            title: 'Вперёд',
            beginDate: 'с 5 марта',
            endDate: 'по 18 марта',
            kind: 'Мультфильм, комедия, приключения',
            director: 'Дэн Скэнлон',
            duration: '114 мин.',
            age: '6+',
            actors: 'Том Холланд, Крис Пратт, Джулия Луис-Дрейфус, Октавия Спенсер, Али Вонг, Джон Ратценбергер, Лина Уэйте, Мэл Родригез.',
            description: `Братья-эльфы Иэн и Барли Лайтфуты живут в волшебном мире, населенном троллями, гоблинами, гномами, кентаврами и единорогами.
             Когда-то их мир переполняла магия, но те времена прошли, и теперь сказочные существа летают на самолетах, пользуются автомобилями, и ведут
              в целом прозаичную жизнь. Однако неожиданная находка приводит к тому, что братья решают отправиться в захватывающее путешествие на поиски
               настоящего волшебства из древних преданий.`,
            playerCode: 'P_mroKXURE8',
            link: 'onward'
        },

        {
            title: 'Остров фантазий',
            beginDate: 'с 5 марта',
            endDate: 'по 18 марта',
            kind: 'Ужасы, фантастика',
            director: 'Джефф Уодлоу',
            duration: '110 мин.',
            age: '16+',
            actors: 'Майкл Пенья, Мэгги Кью, Люси Хейл, Остин Стоуэлл, Портия Даблдэй, Джимми О. Ян, Райан Хансен, Майкл Рукер, Шарлотта МакКинни, Ким Коутс.',
            description: `Загадочный мистер Рорк воплощает в жизнь самые смелые и тайные мечты своих постояльцев на роскошном труднодоступном тропическом курорте.
             Но будут ли готовы гости разгадать тайну острова и спасти свои жизни, когда их фантазии обернутся кошмаром?`,
            playerCode: 'vWeIZ9MjiBs',
            link: 'island'
        },

        {
            title: 'Отель "Белград"',
            beginDate: 'с 5 марта',
            endDate: 'по 18 марта',
            kind: 'Комедия, мелодрама',
            director: 'Константин Статский',
            duration: '107 мин.',
            age: '6+',
            actors: 'Милош Бикович, Диана Пожарская, Борис Дергачев, Александра Кузенкина, Любомир Бандович, Барбара Таталович, Миодраг Радонич, Елизавета Орашанин.',
            description: `Паша, сербский сердцеед и весельчак, — хозяин пятизвездочного отеля в Белграде. Он живет, не зная бед, пока однажды совершенно случайно не 
            портит новое — многомиллионное! — приобретение коллекционера-мафиози. В уплату долга криминальный босс заставляет Пашу жениться на своей дочке. 
            Девушка начинает рьяно готовиться к свадьбе с красавчиком отельером, когда Паша после четырехлетней разлуки неожиданно сталкивается с Дашей, своей русской любовью. 
            В романтичной атмосфере древнего города чувства между ними готовы вспыхнуть вновь…если бы не будущий тесть, настоящий муж, слепой дед и друг-банкрот!..`,
            playerCode: '1NlbDMNcOeA',
            link: 'belgrad'
        },

        {
            title: 'Бладшот',
            beginDate: 'с 12 марта',
            endDate: 'по 25 марта',
            kind: 'Фантастика, боевик, драма',
            director: 'Дэйв Уилсон',
            duration: '109 мин.',
            age: '16+',
            actors: 'Вин Дизель, Эйса Гонсалес, Сэм Хьюэн, Тоби Кеббелл, Гай Пирс, Талула Райли, Ламорн Моррис, Сиддхартх Дхананджай, Алекс Эрнандез.',
            description: `Корпорация RST возвращает к жизни недавно убитого солдата Рэя Гаррисона. Армия нанороботов в его крови превратила Рэя в бессмертного Бладшота,
             наделенного сверхчеловеческой силой и способностью мгновенно самоисцеляться. Контролируя тело Рэя, компания влияет на его разум и воспоминания. 
             Но герой пойдет на все, чтобы выяснить правду.`,
            playerCode: 'Mm-Vo2bUTZM',
            link: 'bloodshot'
        },

        {
            title: 'Тихое место 2',
            beginDate: 'с 19 марта',
            endDate: 'по 1 апреля',
            kind: 'Ужасы, триллер',
            director: 'Джон Красински',
            duration: '96 мин.',
            age: '16+',
            actors: 'Эмили Блант, Милли Симмондс, Киллиан Мёрфи, Ноа Джуп, Джимон Хонсу, Джон Красински, Лорен-Эшли Кристияно, Блейк ДеЛонг, Шери Фэйрчайлд.',
            description: `Семья Эбботт продолжает бороться за жизнь в полной тишине. Вслед за смертельной угрозой, с которой они столкнулись дома, им предстоит познать ужасы внешнего мира. 
            Они вынуждены отправиться в неизвестность, но быстро обнаруживают, что существа, охотящиеся на звук, — не единственные враги за пределами безопасной песчаной тропы…`,
            playerCode: 'ktIFfABLV4w',
            link: 'quiet'
        },

        {
            title: 'Тролли. Мировой тур',
            beginDate: 'с 19 марта',
            endDate: 'по 1 апреля',
            kind: 'Мультфильм, мюзикл, фэнтези',
            director: 'Уолт Дорн, Дэвид П. Смит',
            duration: '94 мин.',
            age: '6+',
            actors: 'Джастин Тимберлейк, Анна Кендрик, Джеймс Корден, Оззи Осборн, Рэйчел Блум, Андерсон Паак, Джордж Клинтон, Мэри Джей Блайдж, Келли Кларксон, Рон Фанчес.',
            description: `Поп-тролли в шоке — оказывается, мир музыки гораздо больше, чем они думали. Рейвы, оупен-эйры, классические концерты и, конечно, 
            хип-хоп баттлы — впереди их ждет головокружительное веселье.
            Но неудержимая королева Рокс планирует уничтожить все… чтобы миром безоговорочно правил хард-рок!
            Розочка, Цветан и их новые друзья отправляются в невероятное путешествие: им предстоит объединить всех троллей и помешать Рокс.`,
            playerCode: 'dMI5ooMWxto',
            link: 'trolls'
        },

        {
            title: 'Мулан',
            beginDate: 'с 26 марта',
            endDate: 'по 8 апреля',
            kind: 'Драма, боевик, фэнтези',
            director: 'Ники Каро',
            duration: '115 мин.',
            age: '6+',
            actors: 'Лю Ифэй, Донни Йен, Джет Ли, Гун Ли, Джейсон Скотт Ли, Йосон Ан, Нельсон Ли, Джан Ю, Джимми Вонг, Доа Моа.',
            description: `История о бесстрашной молодой девушке, которая выдаёт себя за мужчину, чтобы вступить в ряды армии, противостоящей Северным захватчикам,
             надвигающимся на Китай. Старшая дочь храброго воина Хуа, Мулан — энергичная и решительная девушка. Когда Император издаёт указ о том, что один мужчина
              из каждой семьи должен вступить в ряды Имперской армии, Мулан занимает место своего больного отца, еще не зная, что ей предстоит прославиться как одному
               из величайших воинов в истории Китая.`,
            playerCode: 'rVn2NCgCVLU',
            link: 'mulan'
        },

        {
            title: 'На острие',
            beginDate: 'с 26 марта',
            endDate: 'по 8 апреля',
            kind: 'Драма, спорт',
            director: 'Эдуард Бордуков',
            duration: '115 мин.',
            age: '6+',
            actors: 'Светлана Ходченкова, Стася Милославская, Сергей Пускепалис, Алексей Барабаш, Евгений Сытый, Софья Эрнст, Хильда Кармен, Кирилл Дегтярь, Павел Колобков, Мария Киселева.',
            description: `Лучшая саблистка мира, Александра Покровская, знаменита, богата и счастлива. Чтобы войти в историю, ей остается сделать последний шаг — 
            взять олимпийское золото. Но путь ей преграждает девятнадцатилетняя Кира Егорова, девушка из провинции, в одночасье покорившая Москву. 
            Кира побеждает на всех соревнованиях и не сходит с обложек глянцевых журналов. Ее цель — занять место Покровской. Начинается отчаянная схватка не только на турнирах, 
            но и в жизни. Обе одержимы, и, кажется, остановить их не может ничто.
            Весь мир, затаив дыхание, наблюдает за сверканием острых клинков. И все очевиднее: эта яростная борьба уже зашла слишком далеко…`,
            playerCode: 'l9SeVQ05w4Q',
            link: 'edge'
        },

        {
            title: 'Кролик Питер 2',
            beginDate: 'с 2 апреля',
            endDate: 'по 15 апреля',
            kind: 'Фэнтези, комедия, приключения',
            director: 'Уилл Глак',
            duration: '85 мин.',
            age: '6+',
            actors: 'Марго Робби, Роуз Бирн, Элизабет Дебики, Донал Глисон, Дэймон Херриман, Джеймс Корден, Дэвид Ойелоуо, Тара Морис, Нивин Ханна, Тейлор Фергюсон.',
            description: `Продолжение истории маленького и непоседливого кролика по имени Питер. Беатрис, Томас и крольчата, наконец, находят общий язык и начинают спокойную и размеренную жизнь за городом.
             Однако Питеру это совсем не по нраву: его мятежная душа требует приключений, и он отправляется на их поиски в большой город, туда, где его проделки уж точно оценят по достоинству.
              Тем временем, члены его большой дружной семьи, рискуя жизнью, отправляются вслед за Питером, чтобы вернуть его домой, и теперь беглецу предстоит решить, что же для него важнее всего.`,
            playerCode: '6BqRr4NVHW0',
            link: 'piter'
        },

    ],
    filmsToday: [],
    filmsTodaySlides: 3,
}


export const cinemaReduser = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FILMS_TODAY_ARR:
            let filmsToday = [];
            for (let i = 0; i < state.filmsTodaySlides; i++) {
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




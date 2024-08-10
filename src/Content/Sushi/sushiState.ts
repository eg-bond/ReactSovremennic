import { imgSrc } from './sushiHelpers';

export const menuButtons = [
  ['sushi', 'Суши'],
  ['sets', 'Наборы'],
  ['brand', 'Фирменные роллы'],
  ['hot', 'Запеченные роллы'],
  ['rolls', 'Роллы'],
  ['mini', 'Мини-роллы'],
  ['green', 'Овощные роллы'],
  ['colored', 'Цветные роллы'],
  ['child', 'Детское меню'],
  ['salads', 'Салаты'],
  ['soups', 'Супы'],
  ['hot_dishes', 'Горячие блюда'],
  ['gruzia', 'Грузинская кухня'],
  ['pizza', 'Пицца, закуски'],
  ['dessert', 'Десерты'],
  ['garnish', 'Гарниры'],
] as const;

export const sushiState: {
  [property in (typeof menuButtons)[any][0]]: {
    name: string;
    recipe?: string;
    price: string;
    pic: string;
  }[];
} = {
  sushi: [
    {
      name: 'Кальмар',
      price: '70',
      pic: imgSrc('sushi_items', 'squid'),
    },
    {
      name: 'Краб',
      price: '100',
      pic: imgSrc('sushi_items', 'krab'),
    },
    {
      name: 'Лосось',
      price: '150',
      pic: imgSrc('sushi_items', 'salmon'),
    },
    {
      name: 'Угорь',
      price: '120',
      pic: imgSrc('sushi_items', 'ell'),
    },
    {
      name: 'Тунец',
      price: '80',
      pic: imgSrc('sushi_items', 'tuna'),
    },
    {
      name: 'Гребешок',
      price: '120',
      pic: imgSrc('sushi_items', 'greb'),
    },
    {
      name: 'Тобико',
      price: '70',
      pic: imgSrc('sushi_items', 'tobiko'),
    },
    {
      name: 'Японский омлет',
      price: '40',
      pic: imgSrc('sushi_items', 'omlet'),
    },
    {
      name: 'Тигровая креветка',
      price: '90',
      pic: imgSrc('sushi_items', 'shrimp'),
    },
    {
      name: 'Лосось с перепелиным яйцом',
      price: '170',
      pic: imgSrc('sushi_items', 'salmon_egg'),
    },
    {
      name: 'Красный окунь (запеченный)',
      price: '70',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Креветка (запеченная)',
      price: '110',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Краб (запеченный)',
      price: '140',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Угорь (запеченный)',
      price: '130',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Тунец (запеченный)',
      price: '90',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Лосось (запеченный)',
      price: '170',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Гребешок (запеченный)',
      price: '130',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Тунец (острый)',
      price: '80',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Лосось (острый)',
      price: '130',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Гребешок (острый)',
      price: '110',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Креветки (острые)',
      price: '90',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Угорь (острый)',
      price: '110',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Кальмар (острый)',
      price: '70',
      pic: imgSrc('sushi_items', 'spicy'),
    },
  ],
  sets: [
    {
      name: 'Сет «Запечённые суши»',
      recipe:
        'Запеч. лосось (2 шт.), запеч. краб (2 шт.), запеч. угорь (2 шт.), запеч. креветки (2 шт.), ролл "Горячий Макс"',
      price: '1780',
      pic: imgSrc('sets', 'hot'),
    },
    {
      name: 'Сет «Острые суши»',
      recipe:
        'Острый лосось (2 шт.), острый угорь (2 шт.), острый краб (2 шт.), острые крев. (2 шт.), ролл Темпура острый',
      price: '1550',
      pic: imgSrc('sets', 'spicy'),
    },

    {
      name: 'Сет «Горячая Япония»',
      recipe:
        'Ролл "Каникама", ролл "Майами", ролл "Запечённый Муругай", ролл "Запечённый Изуми тай"',
      price: '990',
      pic: imgSrc('sets', 'japan'),
    },
    {
      name: 'Сет «Макси»',
      recipe:
        'Ролл "Темпура Лайт", ролл "Бансай", ролл "Запечённый Муругай", ролл "Сливочный Кани Маки", ролл "Калифорния с креветкой"',
      price: '1100',
      pic: imgSrc('sets', 'maxi'),
    },
  ],
  brand: [
    {
      name: 'Фуджияма',
      recipe:
        'Рис, нори, острый краб, лосось, огурец, лимон имбирь маринованый, кунжут',
      price: '1000',
      pic: imgSrc('brand', 'fuji'),
    },
    {
      name: 'Филадельфия',
      recipe:
        'Рис, нори, огурец, икра тобико, сыр сливочный, лосось, кунжут, лимон',
      price: '670',
      pic: imgSrc('brand', 'fila'),
    },
    {
      name: 'Ассорти',
      recipe:
        'Рис, нори, сыр сливочный, огурец, лосось, кальмар, креветка, угорь, тунец, унаги, окунь',
      price: '450',
      pic: imgSrc('brand', 'assorti'),
    },
    {
      name: 'Дракон',
      recipe: 'Рис, нори, краб, авокадо, огурец, угорь, кунжут, унаги',
      price: '1350',
      pic: imgSrc('brand', 'dragon'),
    },
    {
      name: 'Ночной Токио (без риса)',
      recipe: 'Авокадо, огурец, икра тобико, лосось, краб, лимон',
      price: '1100',
      pic: imgSrc('brand', 'tokyo'),
    },
    {
      name: 'Бостон',
      recipe: 'Рис, нори, острый лосось, огурец, авокадо, краб',
      price: '750',
      pic: imgSrc('brand', 'boston'),
    },

    {
      name: 'Тоттори',
      recipe: 'Рис, нори, сыр сливочный, краб, креветка темпура, кунжут',
      price: '490',
      pic: imgSrc('brand', 'tottori'),
    },
    {
      name: 'Эби',
      recipe: 'Рис, нори, соус масаго, креветка темпура',
      price: '280',
      pic: imgSrc('brand', 'ebi'),
    },
    {
      name: 'Темпура острый',
      recipe: 'Рис, нори, угорь, острый краб, унаги',
      price: '550',
      pic: imgSrc('brand', 'tempura_spicy'),
    },
    {
      name: 'Ролл с лососем',
      recipe: 'Рис, нори, лосось',
      price: '280',
      pic: imgSrc('brand', 'salmon'),
    },
  ],
  hot: [
    {
      name: 'Иватэ (без риса)',
      recipe:
        'Тунец, окунь, краб, лосось, гребешок, соус масаго, кунжут, унаги',
      price: '1090',
      pic: imgSrc('hot', 'ivate'),
    },

    {
      name: 'Запеченный Шиитаке',
      recipe:
        'Рис, нори, шиитаке, сыр сливочный, гребешок, лосось, масаго, кунжут, унаги',
      price: '420',
      pic: imgSrc('hot', 'sheetake'),
    },
    {
      name: 'XXL',
      recipe:
        'Рис, нори, лосось, икра тобико, острый краб, острый гребешок, унаги',
      price: '920',
      pic: imgSrc('hot', 'xxl'),
    },
    {
      name: 'Горячий Макс',
      recipe: 'Рис, нори, лосось, угорь, краб, соус масаго, кунжут, унаги',
      price: '700',
      pic: imgSrc('hot', 'maks'),
    },
    {
      name: 'Хаус',
      recipe:
        'Рис, нори, лосось, тунец, паприка, острый краб, икра тобико, унаги',
      price: '620',
      pic: imgSrc('hot', 'house'),
    },
    {
      name: 'Аканасу',
      recipe: 'Рис, нори, сыр сливочный, томаты, лосось кунжут, унаги',
      price: '410',
      pic: imgSrc('hot', 'akanasu'),
    },
    {
      name: 'Сегун',
      recipe: 'Рис, нори, сыр сливочный, омлет, лосось, соус масаго',
      price: '550',
      pic: imgSrc('hot', 'segun'),
    },
    {
      name: 'Запечённый Изуми Тай',
      recipe:
        'Рис, нори, сыр сливочный, окунь, соус масаго, соус унаги, кунжут',
      price: '250',
      pic: imgSrc('hot', 'izumi_tai'),
    },
    {
      name: 'Запечённый Каникама',
      recipe: 'Рис, нори, сыр сливочный, снежный краб, соус масаго',
      price: '250',
      pic: imgSrc('hot', 'kanikama'),
    },
    {
      name: 'Запечённый Муругай',
      recipe:
        'Рис, нори, сыр сливочный, икра масаго, японский омлет, соус масаго, мидии, соус унаги, паприка',
      price: '270',
      pic: imgSrc('hot', 'murugai'),
    },

    {
      name: 'Red Hot',
      recipe:
        'Рис, нори, креветка, сыр сливочный, икра тобико, угорь, соус спайси',
      price: '570',
      pic: imgSrc('hot', 'red_hot'),
    },
    {
      name: 'Запечённый лосось',
      recipe:
        'Рис, нори, икра масаго, снежный краб, помидор, лосось, соус спайси',
      price: '440',
      pic: imgSrc('hot', 'salmon'),
    },

    {
      name: 'Датэмаки с окунем',
      recipe:
        'Рис, нори, окунь, соус спайси, сыр сливочный, японский омлет, огурец, кунжут, унаги',
      price: '270',
      pic: imgSrc('hot', 'datemaki'),
    },
    {
      name: 'Запечённый Канраки',
      recipe:
        'Рис, нори, кунжит, сыр сливочный, кинза, окунь, соус масаго, сыр, унаги',
      price: '310',
      pic: imgSrc('hot', 'kanraki'),
    },
    {
      name: 'Запеченный тунец',
      recipe:
        'Рис, нори, сыр сливочный, кунжут, японский омлет, соус спайси, чернила каракатицы, тунец',
      price: '270',
      pic: imgSrc('hot', 'tuna'),
    },
    {
      name: 'Запечённый Майами',
      recipe: 'Соус масаго, сыр сливочный, креветка, кунжут',
      price: '290',
      pic: imgSrc('hot', 'miami'),
    },
  ],
  rolls: [
    {
      name: 'Монако',
      recipe: 'Рис, нори, японский омлет, сыр сливочный, икра масаго',
      price: '220',
      pic: imgSrc('rolls', 'monako'),
    },
    {
      name: 'Темпура Лайт',
      recipe: 'Рис, нори, сыр сливочный, помидоры, соус унаги, тесто темпура',
      price: '160',
      pic: imgSrc('rolls', 'tempura_light'),
    },
    {
      name: 'Фиеста',
      recipe: 'Рис, нори, снежный краб, огурцы, икра масаго, сыр сливочный',
      price: '250',
      pic: imgSrc('rolls', 'fiesta'),
    },

    {
      name: 'Тай',
      recipe: 'Рис, нори, сыр сливочный, окунь красный, соус масаго, кунжут',
      price: '270',
      pic: imgSrc('rolls', 'tai'),
    },
    {
      name: 'Калифорния',
      recipe: 'Рис, нори, краб, соус масаго, огурец, авокадо, кунжут',
      price: '450',
      pic: imgSrc('rolls', 'cali'),
    },
    {
      name: 'Калифорния - тобико',
      recipe: 'Рис, нори, соус масаго, краб, икра тобико, огурец, авокадо',
      price: '520',
      pic: imgSrc('rolls', 'cali_tobiko'),
    },
    {
      name: 'Сливочный Кани Маки',
      recipe:
        'Рис, нори, сыр сливочный, снежный краб, соус масаго, огурец, икра масаго, кунжут',
      price: '250',
      pic: imgSrc('rolls', 'kani_maki'),
    },
    {
      name: 'Теплая Филадельфия',
      recipe: 'Рис, нори, сыр сливочный, икра тобико, лосось, унаги',
      price: '670',
      pic: imgSrc('rolls', 'hot_fila'),
    },
    {
      name: 'Калифорния с креветкой',
      recipe: 'Рис, нори, сыр сливочный, креветка, огурец, кунжут',
      price: '290',
      pic: imgSrc('rolls', 'cali_shrimp'),
    },
    {
      name: 'Бансай',
      recipe: 'Рис, нори, сыр сливочный, огурец, бекон, соус унаги',
      price: '250',
      pic: imgSrc('rolls', 'bansai'),
    },
    {
      name: 'Текка',
      recipe: 'Рис, нори, тунец',
      price: '230',
      pic: imgSrc('rolls', 'tekka'),
    },
    {
      name: 'Ролл с кальмаром',
      recipe: 'Рис, нори, кальмар, унаги, кунжут',
      price: '200',
      pic: imgSrc('rolls', 'squid'),
    },
  ],
  mini: [
    {
      name: 'Филадельфия мини',
      recipe:
        'Рис, нори, огурец, икра тобико, сыр сливочный, лосось, кунжут, лимон',
      price: '390',
      pic: imgSrc('mini', 'fila'),
    },
    {
      name: 'Ассорти мини',
      recipe:
        'Рис, нори, сыр сливочный, огурец, лосось, креветка, тунец, унаги, окунь',
      price: '300',
      pic: imgSrc('mini', 'assorti'),
    },
    {
      name: 'Иватэ мини (без риса)',
      recipe:
        'Тунец, окунь, краб, лосось, гребешок, соус масаго, кунжут, унаги',
      price: '580',
      pic: imgSrc('mini', 'ivate'),
    },
    {
      name: 'Горячий Макс мини',
      recipe: 'Рис, нори, лосось, угорь, краб, соус масаго, кунжут, унаги',
      price: '440',
      pic: imgSrc('mini', 'maks'),
    },
    {
      name: 'Темпура мини',
      recipe:
        'Рис, нори, сыр сливочный, лосось, кинза, тесто темпура, панко, унаги, сливочный соус',
      price: '360',
      pic: imgSrc('mini', 'tempura'),
    },
  ],
  green: [
    {
      name: 'Ролл "Айсберг"',
      price: '170',
      pic: imgSrc('green', 'iceberg'),
    },
    {
      name: 'Ролл с огурцом',
      price: '100',
      pic: imgSrc('green', 'cucumber'),
    },
    {
      name: 'Ролл с авокадо',
      price: '140',
      pic: imgSrc('green', 'avocado'),
    },
    {
      name: '"Темпура Хенд"',
      recipe:
        'Рис, нори, паприка, томаты, сыр сливочный, тесто темпура, панко, унаги',
      price: '200',
      pic: imgSrc('green', 'hend'),
    },
  ],
  colored: [
    {
      name: 'Кавати',
      recipe:
        'Рис, соевый лист, краб, соус масаго, огурец, сыр сливочный, кунжут',
      price: '410',
      pic: imgSrc('colored', 'kavati'),
    },
    {
      name: 'Овари',
      recipe: 'Рис, соевый лист, лосось, сыр сливочный, айсберг, лимон',
      price: '480',
      pic: imgSrc('colored', 'ovari'),
    },
    {
      name: 'Хида',
      recipe: 'Рис, соевый лист, тунец, сыр сливочный, авокадо, огурец, кунжут',
      price: '350',
      pic: imgSrc('colored', 'hida'),
    },
  ],
  child: [
    {
      name: 'Котлетки с картофелем фри',
      recipe: 'Котлеты свино-говяжьи, огурец, паприка, картофель фри, зелень',
      price: '360',
      pic: imgSrc('preloader', 'preloader'),
    },
    {
      name: 'Наггетсы с картофелем фри',
      recipe:
        'Куриная грудка в панировке, огурец, помидоры черри, кетчуп, картофель фри',
      price: '350',
      pic: imgSrc('child', 'naggets'),
    },
    {
      name: 'Супчик куриный',
      recipe: 'Куриный бульон, филе куриное, картофель, вермишель, зелень, лук',
      price: '250',
      pic: imgSrc('child', 'soup'),
    },
    {
      name: 'Овощные палочки',
      recipe: 'Огурец, перец болгарский, морковь, сметана',
      price: '220',
      pic: imgSrc('preloader', 'preloader'),
    },
  ],
  salads: [
    {
      name: 'Шеф салат',
      recipe:
        'Говядина, айсберг, томаты, паприка, руккола, кинза, чеснок, оливковое масло, винный уксус',
      price: '540',
      pic: imgSrc('salads', 'chef'),
    },

    {
      name: 'Салат из жаренного авокадо и лосося',
      recipe:
        'Айсберг, руккола, помидоры черри, авокадо, лосось, лимон, соус дресинг, кунжут',
      price: '880',
      pic: imgSrc('salads', 'hot_avocado'),
    },

    {
      name: 'Салат «Цезарь» с курицей',
      recipe:
        'Айсберг, помидоры черри, куриная грудка, сыр пармезан, сухари, соус цезарь',
      price: '400',
      pic: imgSrc('salads', 'cesar_chicken'),
    },

    {
      name: 'Салат «Цезарь» с креветкой',
      recipe:
        'Айсберг, помидоры черри, креветки, сыр пармезан, сухари, соус цезарь',
      price: '500',
      pic: imgSrc('salads', 'cesar_shrimp'),
    },

    {
      name: 'Салат с угрем',
      recipe:
        'Угорь, помидоры свежие, баклажаны,сливочный сыр, соус кисло-сладкий, кинза, кунжут',
      price: '510',
      pic: imgSrc('preloader', 'preloader'),
    },

    {
      name: 'Салат из морских водорослей',
      recipe: 'Морские водоросли, ореховый соус, кунжут, лимон',
      price: '250',
      pic: imgSrc('salads', 'seaweed'),
    },

    {
      name: 'Салат с жареным баклажаном',
      recipe:
        'Баклажаны, помидоры свежие, сыр Фета, кинза, соус кисло-сладкий Чили, кунжут',
      price: '320',
      pic: imgSrc('preloader', 'preloader'),
    },
  ],
  soups: [
    {
      name: 'Ясай',
      recipe:
        'Говядина, грибы шиитаке, лук порей, тофу, рисовая лапша, специи тогораши, бульон Суимоно',
      price: '330',
      pic: imgSrc('soups', 'yasai'),
    },
    {
      name: 'Мисо',
      recipe: 'Бульон, лук порей, тофу, водоросли вакеме, кунжут',
      price: '180',
      pic: imgSrc('soups', 'miso'),
    },
    {
      name: 'Уха по-фински',
      recipe:
        'Бульон Суимоно, картофель, лосось, сливки, зелень, лук порей, черри',
      price: '470',
      pic: imgSrc('preloader', 'preloader'),
    },

    {
      name: 'Крабовый суп',
      recipe: 'Бульон Суимоно, краб, рис, яйцо куриное, лук порей, нори',
      price: '600',
      pic: imgSrc('soups', 'krab'),
    },

    {
      name: 'Кимчи',
      recipe:
        'Бульон Мисо, яйцо куриное, кунжут, кимчи паста, кунжутное масло, тофу, водоросли вакеме',
      price: '200',
      pic: imgSrc('soups', 'kimchi'),
    },

    {
      name: 'Суп Том Ям',
      recipe:
        'Бульон куриный, паста Том Ям, рис, черри, мидии, шампиньоны, креветка, кальмар, лемонграсс, масло кунжутное, листья лайма, сливки, корень Галангала, кинза, лайм, кунжут',
      price: '480',
      pic: imgSrc('preloader', 'preloader'),
    },

    {
      name: 'Сливочный суп с лососем',
      recipe: 'Бульон Суимоно, рис, лосось, сливки, зелень',
      price: '420',
      pic: imgSrc('soups', 'cs_ell'),
    },

    {
      name: 'Крем-суп грибной',
      recipe: 'Шампиньоны, лук, сливки, кунжутное масло',
      price: '280',
      pic: imgSrc('soups', 'cs_mushrooms'),
    },
  ],
  hot_dishes: [
    {
      name: 'Говядина с тушёнными овощами',
      recipe:
        'Говядина, соус терияки, баклажаны, цукини, шиитаке, ореховый соус, помидоры черри, кунжут',
      price: '530',
      pic: imgSrc('hot_dishes', 'govyad'),
    },
    {
      name: 'Свинина гриль с грибным соусом',
      recipe:
        'Свинина, баклажаны, цукини, шиитаке, айсберг, китайская капуста, сливки, соус тонкацу, кунжут',
      price: '590',
      pic: imgSrc('hot_dishes', 'pig_grill'),
    },
    {
      name: 'Гречневая лапша с говядиной',
      recipe:
        'Греч. лапша, говядина, баклажаны, цукини, шиитаке, соус терияки, соус ланч кинг, кимчи паста, огурец, томаты, кунжут',
      price: '390',
      pic: imgSrc('hot_dishes', 'grech'),
    },
    {
      name: 'Лапша «5 ароматов»',
      recipe:
        'Лапша удон, свинина, айсберг, соус терияки, паста кимчи, томаты, огурец, водоросли, кунжут',
      price: '330',
      pic: imgSrc('hot_dishes', 'lapsha_5'),
    },
    {
      name: 'Лапша Хурасами',
      recipe: 'Рисовая лапша, лосось, шиитаки, соус терияки, лимон, кунжут',
      price: '790',
      pic: imgSrc('hot_dishes', 'hurasami'),
    },
    {
      name: 'Мидии запечённые',
      recipe: 'Мидии, соус масаго, лист салата, лимон, кунжут',
      price: '390',
      pic: imgSrc('hot_dishes', 'midii'),
    },
    {
      name: 'Куриная грудка в сливочном соусе',
      recipe:
        'Куриная грудка, сливки, листья салата, огурец, помидоры черри, кунжут',
      price: '400',
      pic: imgSrc('hot_dishes', 'chicken_sause'),
    },
    {
      name: 'Запечённый лосось с грибами',
      recipe:
        'Лосось, шиитаке, лук порей, соус масаго, лист салата, лимон, кунжут',
      price: '990',
      pic: imgSrc('hot_dishes', 'salmon_mush'),
    },
    {
      name: 'Лапша удон с морепродуктами',
      recipe:
        'Лапша удон, гребешок, креветки, лосось, мидии, цукини, соус терияки, кимчи, лимон, кунжут',
      price: '900',
      pic: imgSrc('hot_dishes', 'udon'),
    },
    {
      name: 'Курица Терияки',
      recipe:
        'Куриное бедро в соусе терияки, рис, лист салата, томаты, огурец, морковь мар., кунжут',
      price: '390',
      pic: imgSrc('hot_dishes', 'chicken_teriyaki'),
    },
    {
      name: 'Лосось Терияки',
      recipe:
        'Лосось в соусе терияки, рис, лист салата, огурец, морковь маар., лимон, кунжут',
      price: '1050',
      pic: imgSrc('hot_dishes', 'salmon_ter'),
    },
    {
      name: 'Рис с курицей и овощами',
      recipe:
        'Куриное бедро, баклажаны, цукини, шиитаке, рис, соус терияки, соус тонкацу, огурец, томаты',
      price: '360',
      pic: imgSrc('hot_dishes', 'rise'),
    },
    {
      name: 'Шницель в соусе тонкацу',
      recipe: 'Свинина в панировке, соус тонкацу, лист салата, огурец, томаты',
      price: '350',
      pic: imgSrc('hot_dishes', 'shnitzel_tonk'),
    },
    {
      name: 'Морской окунь с тушёными овощами в сливочном соусе',
      recipe:
        'Окунь, баклажаны, цукини, шиитаке, сливки, листья салата, огурец, морковь мар., лимон, кунжут',
      price: '600',
      pic: imgSrc('hot_dishes', 'okyn'),
    },
    {
      name: 'Куриная грудка с Филадельфией',
      recipe:
        'Куриная грудка в панировке, слив. сыр, паприка, лист салата, черри, огурец, соус тонкацу',
      price: '450',
      pic: imgSrc('hot_dishes', 'chicken_fila'),
    },
    {
      name: 'Шницеля куриные',
      recipe:
        'Куриная грудка в пан., лист салата, огурец, помидоры черри, соус тонкацу ',
      price: '350',
      pic: imgSrc('hot_dishes', 'chicken_shnitzel'),
    },
    {
      name: 'Тайская лапша с говядиной',
      recipe:
        'Яичная лапша, говядина, цукини, соус терияки, тайский соус, кунжут',
      price: '330',
      pic: imgSrc('hot_dishes', 'lapsha'),
    },
    {
      name: 'Тайская лапша со свининой',
      recipe:
        'Яичная лапша, свинина, цукини, соус терияки, тайский соус, кунжут',
      price: '300',
      pic: imgSrc('hot_dishes', 'lapsha'),
    },
    {
      name: 'Тайская лапша с курицей',
      recipe:
        'Яичная лапша, курица, цукини, соус терияки, тайский соус, кунжут',
      price: '300',
      pic: imgSrc('hot_dishes', 'lapsha'),
    },
    {
      name: 'Японские пельмени с креветками 8 шт',
      price: '680',
      pic: imgSrc('hot_dishes', 'pelmeni'),
    },
    {
      name: 'Креветки Темпура',
      price: '460',
      pic: imgSrc('hot_dishes', 'tempura'),
    },
    {
      name: 'Кольца кальмара Темпура',
      price: '350',
      pic: imgSrc('hot_dishes', 'tempura'),
    },
    {
      name: 'Шашлычки из тигровых креветок',
      recipe: 'Креветки, соус терияки, кунжут',
      price: '530',
      pic: imgSrc('hot_dishes', 'yaki_shrimps'),
    },
    {
      name: 'Шашлычки из лосося «Якитори»',
      recipe: 'Лосось, соус терияки, кунжут',
      price: '1100',
      pic: imgSrc('hot_dishes', 'yaki_salmon'),
    },
    {
      name: 'Куриные шашлычки «Якитори»',
      recipe: 'Куриное бедро, шашлычный соус, кунжут',
      price: '280',
      pic: imgSrc('hot_dishes', 'yaki_chicken'),
    },
  ],
  gruzia: [
    {
      name: 'Хинкали с мясом (1шт.)',
      recipe: 'Тесто, фарш свино-говяжий, перец черный, масло сливочное',
      price: '80',
      pic: imgSrc('gruzia', 'hinkali'),
    },
    {
      name: 'Хинкали с сыром (1шт.)',
      recipe: 'Тесто, сыр сулугуни, перец черный, масло сливочное',
      price: '80',
      pic: imgSrc('gruzia', 'hinkali'),
    },
    {
      name: 'Гранд Равиоли (1шт.)',
      recipe: 'Тесто, красная рыба, сливки, лук, чесночно-сметанный соус',
      price: '150',
      pic: imgSrc('gruzia', 'raviolli'),
    },
    {
      name: 'Солянка по-грузински',
      recipe:
        'Говядина, лук, томат, бульон, кинза, специи, красный лук, чеснок',
      price: '590',
      pic: imgSrc('gruzia', 'soup'),
    },
    {
      name: 'Хачапури по-мегрельски',
      recipe: 'Тесто, сыр сулугуни, масло сливочное',
      price: '450',
      pic: imgSrc('gruzia', 'megel'),
    },
    {
      name: 'Хачапури по-аджарски',
      recipe: 'Тесто, сыр сулугуни, яйцо куриное, масло сливочное',
      price: '430',
      pic: imgSrc('gruzia', 'adja'),
    },

    {
      name: 'Чебурек с сыром',
      recipe: 'Тесто, сыр сулугуни',
      price: '150',
      pic: imgSrc('gruzia', 'chebureki'),
    },
    {
      name: 'Чебурек с мясом',
      recipe: 'Тесто, свинина, говядина',
      price: '150',
      pic: imgSrc('gruzia', 'chebureki'),
    },
  ],
  pizza: [
    {
      name: 'Курица с грибами',
      recipe:
        'Тесто, соус сливочный, шампиньоны, куриная грудка, моцарела, корнишоны',
      price: '580',
      pic: imgSrc('pizza', 'chicken'),
    },
    {
      name: 'Пепперони',
      recipe: 'Тесто, соус для пиццы, моцарела, колбаса пеперони, оливки',
      price: '580',
      pic: imgSrc('pizza', 'pepperoni'),
    },
    {
      name: 'Карбонара',
      recipe:
        'Тесто, соус сливочный, моцарела, черри, пармезан, сливки, куриное яйцо, бекон',
      price: '680',
      pic: imgSrc('pizza', 'karbonara'),
    },
    {
      name: 'Маргарита',
      recipe: 'Тесто, соус для пиццы, моцарелла, помидоры свежие',
      price: '580',
      pic: imgSrc('pizza', 'margarita'),
    },
  ],
  dessert: [
    {
      name: 'Бананы темпура с мороженым',
      price: '360',
      pic: imgSrc('dessert', 'bananas'),
    },
    {
      name: 'Яблоки темпура с мороженым',
      price: '350',
      pic: imgSrc('dessert', 'apples'),
    },
    {
      name: 'Японские пельмени с яблоком и корицей (5 шт.)',
      price: '320',
      pic: imgSrc('dessert', 'pelmeni'),
    },
    {
      name: 'Японские пельмени с персиком и тофу (5 шт.)',
      price: '370',
      pic: imgSrc('dessert', 'pelmeni'),
    },
    {
      name: 'Чизкейк с топпингом',
      price: '260',
      pic: imgSrc('dessert', 'cheese_cake'),
    },
    {
      name: 'Фруктовая тарелка',
      recipe: 'Апельсин, яблоко, груша, банан, киви',
      price: '330',
      pic: imgSrc('dessert', 'fruits'),
    },
    {
      name: 'Японские блинчики с Филадельфией и апельсиновым соусом',
      price: '250',
      pic: imgSrc('dessert', 'j_pancakes'),
    },
    {
      name: 'Блинчики с топпингом/сметаной на выбор',
      price: '120',
      pic: imgSrc('dessert', 'pancakes'),
    },

    {
      name: 'Мороженое в ассортименте',
      price: '90',
      pic: imgSrc('dessert', 'ice'),
    },
  ],
  garnish: [
    {
      name: 'Рис',
      price: '80',
      pic: imgSrc('garnish', 'rise'),
    },
    {
      name: 'Картофель айдахо',
      price: '140',
      pic: imgSrc('garnish', 'aidaho'),
    },
    {
      name: 'Картофель фри',
      price: '120',
      pic: imgSrc('garnish', 'fri'),
    },
    {
      name: '"Булочка"',
      price: '25',
      pic: imgSrc('garnish', 'bread'),
    },
    {
      name: 'Имбирь',
      price: '50',
      pic: imgSrc('garnish', 'imbir'),
    },
    {
      name: 'Чабрец',
      price: '30',
      pic: imgSrc('garnish', 'chabrets'),
    },
    {
      name: 'Мята',
      price: '50',
      pic: imgSrc('garnish', 'mint'),
    },
    {
      name: 'Лимон',
      price: '50',
      pic: imgSrc('garnish', 'lemone'),
    },

    {
      name: 'Сметана',
      price: '30',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Топпинг',
      price: '40',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Томатный соус',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Соус унаги',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Дрессинг салатный',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Чесночно-сметанный соус',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Кисло-сладкий соус',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Соус сацебели',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Аджика',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Сырный соус',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Ореховый соус',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Соус тонкацу',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Соус кимчи',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Острый соус',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Соевый соус',
      price: '60',
      pic: imgSrc('garnish', 'sauce'),
    },
  ],
};

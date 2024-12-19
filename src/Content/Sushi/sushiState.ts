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
  ['snacks', 'Закуски'],
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
      price: '130',
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
      price: '80',
      pic: imgSrc('sushi_items', 'tobiko'),
    },
    {
      name: 'Японский омлет',
      price: '40',
      pic: imgSrc('sushi_items', 'omlet'),
    },
    {
      name: 'Тигровая креветка',
      price: '100',
      pic: imgSrc('sushi_items', 'shrimp'),
    },    
    {
      name: 'Красный окунь (запеченный)',
      price: '80',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Креветка (запеченная)',
      price: '120',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Краб (запеченный)',
      price: '150',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Угорь (запеченный)',
      price: '130',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Тунец (запеченный)',
      price: '100',
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
      price: '150',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Гребешок (острый)',
      price: '120',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Креветки (острые)',
      price: '100',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Угорь (острый)',
      price: '130',
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
      price: '1830',
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
      price: '1200',
      pic: imgSrc('sets', 'japan'),
    },
    {
      name: 'Сет «Макси»',
      recipe:
        'Ролл "Темпура Лайт", ролл "Бансай", ролл "Запечённый Муругай", ролл "Сливочный Кани Маки", ролл "Калифорния с креветкой"',
      price: '1390',
      pic: imgSrc('sets', 'maxi'),
    },
  ],
  brand: [
    {
      name: 'Фуджияма',
      recipe:
        'Рис, нори, острый краб, лосось, огурец, лимон имбирь маринованый, кунжут',
      price: '970',
      pic: imgSrc('brand', 'fuji'),
    },
    {
      name: 'Филадельфия',
      recipe:
        'Рис, нори, огурец, икра тобико, сыр сливочный, лосось, кунжут, лимон',
      price: '770',
      pic: imgSrc('brand', 'fila'),
    },
    {
      name: 'Ассорти',
      recipe:
        'Рис, нори, сыр сливочный, огурец, лосось, кальмар, креветка, угорь, тунец, унаги, окунь',
      price: '570',
      pic: imgSrc('brand', 'assorti'),
    },
    {
      name: 'Дракон',
      recipe: 'Рис, нори, краб, авокадо, огурец, угорь, кунжут, унаги',
      price: '1400',
      pic: imgSrc('brand', 'dragon'),
    },
    {
      name: 'Ночной Токио (без риса)',
      recipe: 'Авокадо, огурец, икра тобико, лосось, краб, лимон',
      price: '1030',
      pic: imgSrc('brand', 'tokyo'),
    },
    {
      name: 'Бостон',
      recipe: 'Рис, нори, острый лосось, огурец, авокадо, краб',
      price: '670',
      pic: imgSrc('brand', 'boston'),
    },

    {
      name: 'Тоттори',
      recipe: 'Рис, нори, сыр сливочный, краб, креветка темпура, кунжут',
      price: '590',
      pic: imgSrc('brand', 'tottori'),
    },
    {
      name: 'Эби',
      recipe: 'Рис, нори, соус масаго, креветка темпура',
      price: '320',
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
      price: '330',
      pic: imgSrc('brand', 'salmon'),
    },
  ],
  hot: [
    {
      name: 'Иватэ (без риса)',
      recipe:
        'Тунец, окунь, краб, лосось, гребешок, соус масаго, кунжут, унаги',
      price: '1000',
      pic: imgSrc('hot', 'ivate'),
    },

    {
      name: 'Запеченный Шиитаке',
      recipe:
        'Рис, нори, шиитаке, сыр сливочный, гребешок, лосось, масаго, кунжут, унаги',
      price: '480',
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
      price: '750',
      pic: imgSrc('hot', 'maks'),
    },
    {
      name: 'Хаус',
      recipe:
        'Рис, нори, лосось, тунец, паприка, острый краб, икра тобико, унаги',
      price: '600',
      pic: imgSrc('hot', 'house'),
    },
    {
      name: 'Аканасу',
      recipe: 'Рис, нори, сыр сливочный, томаты, лосось кунжут, унаги',
      price: '460',
      pic: imgSrc('hot', 'akanasu'),
    },
    {
      name: 'Сегун',
      recipe: 'Рис, нори, сыр сливочный, омлет, лосось, соус масаго',
      price: '600',
      pic: imgSrc('hot', 'segun'),
    },
    {
      name: 'Запечённый Изуми Тай',
      recipe:
        'Рис, нори, сыр сливочный, окунь, соус масаго, соус унаги, кунжут',
      price: '300',
      pic: imgSrc('hot', 'izumi_tai'),
    },
    {
      name: 'Запечённый Каникама',
      recipe: 'Рис, нори, сыр сливочный, снежный краб, соус масаго',
      price: '300',
      pic: imgSrc('hot', 'kanikama'),
    },
    {
      name: 'Запечённый Муругай',
      recipe:
        'Рис, нори, сыр сливочный, икра масаго, японский омлет, соус масаго, мидии, соус унаги, паприка',
      price: '320',
      pic: imgSrc('hot', 'murugai'),
    },

    {
      name: 'Red Hot',
      recipe:
        'Рис, нори, креветка, сыр сливочный, икра тобико, угорь, соус спайси',
      price: '640',
      pic: imgSrc('hot', 'red_hot'),
    },
    {
      name: 'Запечённый лосось',
      recipe:
        'Рис, нори, икра масаго, снежный краб, помидор, лосось, соус спайси',
      price: '490',
      pic: imgSrc('hot', 'salmon'),
    },

    {
      name: 'Датэмаки с окунем',
      recipe:
        'Рис, нори, окунь, соус спайси, сыр сливочный, японский омлет, огурец, кунжут, унаги',
      price: '330',
      pic: imgSrc('hot', 'datemaki'),
    },
    {
      name: 'Запечённый Канраки',
      recipe:
        'Рис, нори, кунжит, сыр сливочный, кинза, окунь, соус масаго, сыр, унаги',
      price: '370',
      pic: imgSrc('hot', 'kanraki'),
    },
    {
      name: 'Запеченный тунец',
      recipe:
        'Рис, нори, сыр сливочный, кунжут, японский омлет, соус спайси, чернила каракатицы, тунец',
      price: '310',
      pic: imgSrc('hot', 'tuna'),
    },
    {
      name: 'Запечённый Майами',
      recipe: 'Соус масаго, сыр сливочный, креветка, кунжут',
      price: '350',
      pic: imgSrc('hot', 'miami'),
    },
  ],
  rolls: [
    {
      name: 'Монако',
      recipe: 'Рис, нори, японский омлет, сыр сливочный, икра масаго',
      price: '240',
      pic: imgSrc('rolls', 'monako'),
    },
    {
      name: 'Темпура Лайт',
      recipe: 'Рис, нори, сыр сливочный, помидоры, соус унаги, тесто темпура',
      price: '200',
      pic: imgSrc('rolls', 'tempura_light'),
    },
    {
      name: 'Фиеста',
      recipe: 'Рис, нори, снежный краб, огурцы, икра масаго, сыр сливочный',
      price: '290',
      pic: imgSrc('rolls', 'fiesta'),
    },

    {
      name: 'Тай',
      recipe: 'Рис, нори, сыр сливочный, окунь красный, соус масаго, кунжут',
      price: '320',
      pic: imgSrc('rolls', 'tai'),
    },
    {
      name: 'Калифорния',
      recipe: 'Рис, нори, краб, соус масаго, огурец, авокадо, кунжут',
      price: '420',
      pic: imgSrc('rolls', 'cali'),
    },
    {
      name: 'Калифорния - тобико',
      recipe: 'Рис, нори, соус масаго, краб, икра тобико, огурец, авокадо',
      price: '470',
      pic: imgSrc('rolls', 'cali_tobiko'),
    },
    {
      name: 'Сливочный Кани Маки',
      recipe:
        'Рис, нори, сыр сливочный, снежный краб, соус масаго, огурец, икра масаго, кунжут',
      price: '290',
      pic: imgSrc('rolls', 'kani_maki'),
    },
    {
      name: 'Теплая Филадельфия',
      recipe: 'Рис, нори, сыр сливочный, икра тобико, лосось, унаги',
      price: '770',
      pic: imgSrc('rolls', 'hot_fila'),
    },
    {
      name: 'Калифорния с креветкой',
      recipe: 'Рис, нори, сыр сливочный, креветка, огурец, кунжут',
      price: '350',
      pic: imgSrc('rolls', 'cali_shrimp'),
    },
    {
      name: 'Бансай',
      recipe: 'Рис, нори, сыр сливочный, огурец, бекон, соус унаги',
      price: '290',
      pic: imgSrc('rolls', 'bansai'),
    },
    {
      name: 'Текка',
      recipe: 'Рис, нори, тунец',
      price: '250',
      pic: imgSrc('rolls', 'tekka'),
    },
    {
      name: 'Ролл с кальмаром',
      recipe: 'Рис, нори, кальмар, унаги, кунжут',
      price: '220',
      pic: imgSrc('rolls', 'squid'),
    },
  ],
  mini: [
    {
      name: 'Филадельфия мини',
      recipe:
        'Рис, нори, огурец, икра тобико, сыр сливочный, лосось, кунжут, лимон',
      price: '460',
      pic: imgSrc('mini', 'fila'),
    },
    {
      name: 'Ассорти мини',
      recipe:
        'Рис, нори, сыр сливочный, огурец, лосось, креветка, тунец, унаги, окунь',
      price: '380',
      pic: imgSrc('mini', 'assorti'),
    },
    {
      name: 'Иватэ мини (без риса)',
      recipe:
        'Тунец, окунь, краб, лосось, гребешок, соус масаго, кунжут, унаги',
      price: '650',
      pic: imgSrc('mini', 'ivate'),
    },
    {
      name: 'Горячий Макс мини',
      recipe: 'Рис, нори, лосось, угорь, краб, соус масаго, кунжут, унаги',
      price: '470',
      pic: imgSrc('mini', 'maks'),
    },
    {
      name: 'Темпура мини',
      recipe:
        'Рис, нори, сыр сливочный, лосось, кинза, тесто темпура, панко, унаги, сливочный соус',
      price: '380',
      pic: imgSrc('mini', 'tempura'),
    },
  ],
  green: [
    {
      name: 'Ролл "Айсберг"',
      price: '250',
      pic: imgSrc('green', 'iceberg'),
    },
    {
      name: 'Ролл с огурцом',
      price: '120',
      pic: imgSrc('green', 'cucumber'),
    },
    {
      name: 'Ролл с авокадо',
      price: '180',
      pic: imgSrc('green', 'avocado'),
    },
    {
      name: '"Темпура Хенд"',
      recipe:
        'Рис, нори, паприка, томаты, сыр сливочный, тесто темпура, панко, унаги',
      price: '250',
      pic: imgSrc('green', 'hend'),
    },
  ],
  colored: [
    {
      name: 'Кавати',
      recipe:
        'Рис, соевый лист, краб, соус масаго, огурец, сыр сливочный, кунжут',
      price: '380',
      pic: imgSrc('colored', 'kavati'),
    },
    {
      name: 'Овари',
      recipe: 'Рис, соевый лист, лосось, сыр сливочный, айсберг, лимон',
      price: '510',
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
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Наггетсы с картофелем фри',
      recipe:
        'Куриная грудка в панировке, огурец, помидоры черри, кетчуп, картофель фри',
      price: '370',
      pic: imgSrc('child', 'naggets'),
    },
    {
      name: 'Супчик куриный',
      recipe: 'Куриный бульон, филе куриное, вермишель яичная, зелень, морковь',
      price: '250',
      pic: imgSrc('child', 'soup'),
    },
    {
      name: 'Овощные палочки',
      recipe: 'Огурец, перец болгарский, морковь, сметана',
      price: '130',
      pic: imgSrc('general', 'hot_dish_general'),
    },
  ],
  salads: [
    {
      name: 'Шеф салат',
      recipe:
        'Говядина, айсберг, томаты, паприка, руккола, кинза, чеснок, оливковое масло, винный уксус',
      price: '570',
      pic: imgSrc('salads', 'chef'),
    },

    {
      name: 'Салат из жаренного авокадо и лосося',
      recipe:
        'Айсберг, руккола, помидоры черри, авокадо, лосось, лимон, соус дресинг, кунжут',
      price: '900',
      pic: imgSrc('salads', 'hot_avocado'),
    },

    {
      name: 'Салат «Цезарь» с курицей',
      recipe:
        'Айсберг, помидоры черри, куриная грудка, сыр пармезан, сухари, соус цезарь',
      price: '420',
      pic: imgSrc('salads', 'cesar_chicken'),
    },

    {
      name: 'Салат «Цезарь» с креветкой',
      recipe:
        'Айсберг, помидоры черри, креветки, сыр пармезан, сухари, соус цезарь',
      price: '530',
      pic: imgSrc('salads', 'cesar_shrimp'),
    },

    {
      name: 'Салат с угрем',
      recipe:
        'Угорь, помидоры свежие, баклажаны,сливочный сыр, соус кисло-сладкий, кинза, кунжут',
      price: '550',
      pic: imgSrc('general', 'salad_general'),
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
      price: '380',
      pic: imgSrc('general', 'salad_general'),
    },
  ],
  soups: [
    {
      name: 'Ясай',
      recipe:
        'Говядина, грибы шиитаке, лук порей, тофу, рисовая лапша, специи тогораши, бульон Суимоно',
      price: '350',
      pic: imgSrc('soups', 'yasai'),
    },
    {
      name: 'Мисо',
      recipe: 'Бульон, лук порей, тофу, водоросли вакеме, кунжут',
      price: '180',
      pic: imgSrc('soups', 'miso'),
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
      price: '570',
      pic: imgSrc('general', 'soup_general'),
    },

    {
      name: 'Сливочный суп с лососем',
      recipe: 'Бульон Суимоно, рис, лосось, сливки, зелень',
      price: '490',
      pic: imgSrc('soups', 'cs_ell'),
    },

    {
      name: 'Крем-суп грибной',
      recipe: 'Шампиньоны, лук, сливки, кунжутное масло',
      price: '310',
      pic: imgSrc('soups', 'cs_mushrooms'),
    },
  ],
  snacks: [
    {
      name: 'Мидии запечённые',
      recipe: 'Мидии, соус масаго, лимон, соус Унаги, кунжут',
      price: '430',
      pic: imgSrc('hot_dishes', 'midii'),
    },
    {
      name: 'Японские пельмени с креветками (8 шт)',
      recipe: 'Тесто Гедза, креветка, соевый соус, кунжут',
      price: '700',
      pic: imgSrc('hot_dishes', 'pelmeni'),
    },
    {
      name: 'Креветки Темпура',
      recipe: 'Тесто темпура, креветка, соус соевый, имбирь',
      price: '500',
      pic: imgSrc('hot_dishes', 'tempura'),
    },
    {
      name: 'Кольца кальмара Темпура',
      recipe: 'Тесто темпура, кальмар, соус соевый, имбирь',
      price: '390',
      pic: imgSrc('hot_dishes', 'tempura'),
    },
    {
      name: 'Шашлычки из тигровых креветок',
      recipe: 'Креветки, соус терияки, кунжут',
      price: '590',
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
      recipe: 'Куриное бедро филе, соус терияки, кунжут',
      price: '300',
      pic: imgSrc('hot_dishes', 'yaki_chicken'),
    },
    {
      name: 'Сырная тарелка',
      recipe:
        'Сыр пармезан, сыр фета, сыр филадельфия, орехи грецкие, сыр косичка копченая, мед',
      price: '550',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Поке с креветкой',
      recipe:
        'Рис, креветка, соус соевый, огурцы свежие, икра масаго, соус дресинг, лимон, кунжутное масло, соус манго-чили, бобы Эдомаме, салат Чука, Дайкон маринованный',
      price: '500',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Поке с тунцом',
      recipe:
        'Рис, тунец, соус ореховый, огурцы свежие, салат Чука, Дайкон маринованный, кунжут, бобы Эдомаме, икра масаго, соус дресинг, лимон, кунжутное масло',
      price: '380',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Поке с лососем',
      recipe:
        'Рис, лосось, соус ореховый, огурцы свежие, соус манго, соус дресинг, лимон, кунжутное масло, кунжут, Дайкон марин., бобы Эдомаме, икра масаго, салат Чука',
      price: '500',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Гренки с сыром и чесноком',
      recipe: 'Гренки, сыр, чеснок',
      price: '200',
      pic: imgSrc('pizza', 'grenki'),
    },
  ],
  hot_dishes: [
    {
      name: 'Пибимпап с говядиной',
      recipe:
        'Говядина, масло кунжутное, соус тереяки, соус ланч кинг, шиитаки, рис, айсберг, яйцо, куриное, морковь маринованная, кунжут, нори',
      price: '640',
      pic: imgSrc('hot_dishes', 'govyad'),
    },
    {
      name: 'Стейк из красной рыбы с овощами гриль',
      recipe:
        'Лосось, баклажаныя, кабачки, перец болгарский, помидоры свежие, шампиньоны, кунжут, лимон',
      price: '1180',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Лапша «5 ароматов»',
      recipe:
        'Лапша удон, свинина, айсберг, перец болгарский, соус терияки, соус ланч кинг,паста кимчи, зелёный лук, морские водоросли, кунжут, кунжутное масло',
      price: '370',
      pic: imgSrc('hot_dishes', 'lapsha_5'),
    },
    {
      name: 'Пибимпап с курицей',
      recipe:
        'Филе куриного бедра, рис, соус тереяки, соус ланч кинг, айсберг, нори, шиитаки, морковь маринованная, яйцо куриное, кунжут, масло кунжутное',
      price: '360',
      pic: imgSrc('hot_dishes', 'rise'),
    },
    {
      name: 'Шницель в соусе тонкацу',
      recipe:
        'Свинина в панировке, соус тонкацу, помидоры черри, картофель бэби',
      price: '370',
      pic: imgSrc('hot_dishes', 'shnitzel_tonk'),
    },
    {
      name: 'Морской окунь на подушке из шпината',
      recipe:
        'Окунь, цукини, шпинат, сыр с плесенью, черри, сливки, лимон, кунжут',
      price: '800',
      pic: imgSrc('hot_dishes', 'okyn'),
    },
    {
      name: 'Куриная грудка в сливочном соусе',
      recipe: 'Куриная грудка, болгарский перец, сливки, черри, кунжут',
      price: '430',
      pic: imgSrc('hot_dishes', 'chicken_sause'),
    },
    {
      name: 'Свинина гриль с грибным соусом',
      recipe:
        'Свинина, баклажаны, цукини, шиитаке, паприка, черри, сливки, соус тонкацу, кунжут',
      price: '670',
      pic: imgSrc('hot_dishes', 'pig_grill'),
    },
    {
      name: 'Шницель куриный',
      recipe:
        'Куриная грудка в панировке, помидоры черри, картофель бэби, соус тонкацу',
      price: '370',
      pic: imgSrc('hot_dishes', 'chicken_shnitzel'),
    },
    {
      name: 'Лапша Хурасами',
      recipe: 'Рисовая лапша, лосось, шиитаки, соус терияки, лимон, кунжут',
      price: '810',
      pic: imgSrc('hot_dishes', 'hurasami'),
    },

    {
      name: 'Тайская лапша с говядиной',
      recipe:
        'Яичная лапша, говядина, цукини, зеленый лук, соус терияки, соус к/с Чили, перец болгарский, кунжут',
      price: '400',
      pic: imgSrc('hot_dishes', 'lapsha'),
    },
    {
      name: 'Тайская лапша со свининой',
      recipe:
        'Яичная лапша, свинина, цукини, зеленый лук, соус терияки, соус к/с Чили, перец болгарский, кунжут',
      price: '350',
      pic: imgSrc('hot_dishes', 'lapsha'),
    },
    {
      name: 'Тайская лапша с курицей',
      recipe:
        'Яичная лапша, курица, цукини, зеленый лук, соус терияки, соус к/с Чили, перец болгарский, кунжут',
      price: '350',
      pic: imgSrc('hot_dishes', 'lapsha'),
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
      name: 'Солянка по-грузински',
      recipe:
        'Говядина, лук, томат, бульон, кинза, специи, красный лук, чеснок',
      price: '650',
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
        'Тесто, соус сливочный, шампиньоны, куриная грудка, моцарела, корнишоны, орегано',
      price: '600',
      pic: imgSrc('pizza', 'chicken'),
    },
    {
      name: 'Пепперони',
      recipe: 'Тесто, соус для пиццы, моцарела, колбаса пеперони, маслины, орегано',
      price: '600',
      pic: imgSrc('pizza', 'pepperoni'),
    },
    {
      name: 'Карбонара',
      recipe:
        'Тесто, соус сливочный, моцарела, черри, пармезан, сливки, куриное яйцо, бекон, орегано',
      price: '690',
      pic: imgSrc('pizza', 'karbonara'),
    },
    {
      name: 'Маргарита',
      recipe: 'Тесто, соус для пиццы, моцарелла, помидоры свежие, орегано',
      price: '600',
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
      price: '390',
      pic: imgSrc('dessert', 'apples'),
    },
    {
      name: 'Японские пельмени с яблоком и корицей (5 шт.)',
      price: '330',
      pic: imgSrc('dessert', 'pelmeni'),
    },
    {
      name: 'Японские пельмени с персиком и тофу (5 шт.)',
      price: '420',
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
      price: '480',
      pic: imgSrc('dessert', 'fruits'),
    },
    {
      name: 'Японские блинчики с Филадельфией и апельсиновым соусом',
      price: '300',
      pic: imgSrc('dessert', 'j_pancakes'),
    },
    {
      name: 'Блинчики',
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
      price: '160',
      pic: imgSrc('garnish', 'aidaho'),
    },
    {
      name: 'Картофель фри',
      price: '130',
      pic: imgSrc('garnish', 'fri'),
    },
    {
      name: '"Булочка"',
      price: '25',
      pic: imgSrc('garnish', 'bread'),
    },
    {
      name: 'Имбирь',
      price: '60',
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
      name: 'Сгущенное молоко',
      price: '50',
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

import { imgSrc } from './sushiHelpers';

export const menuButtons = [
  ['sushi', 'Суши'],
  ['sets', 'Наборы'],
  ['brand', 'Фирменные роллы'],
  ['hot', 'Запеченные роллы'],
  ['rolls', 'Роллы'],
  ['green', 'Овощные роллы'],
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
    pic: string;
    price: string;
    recipe?: string;
  }[];
} = {
  sushi: [
    {
      name: 'Кальмар',
      price: '80',
      pic: imgSrc('sushi_items', 'squid'),
    },
    {
      name: 'Краб',
      price: '150',
      pic: imgSrc('sushi_items', 'krab'),
    },
    {
      name: 'Лосось',
      price: '160',
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
      price: '160',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Краб (запеченный)',
      price: '170',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Угорь (запеченный)',
      price: '150',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Тунец (запеченный)',
      price: '100',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Лосось (запеченный)',
      price: '180',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Гребешок (запеченный)',
      price: '140',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Мидии (запеченный)',
      price: '90',
      pic: imgSrc('sushi_items', 'hot'),
    },
    {
      name: 'Тунец (острый)',
      price: '90',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Лосось (острый)',
      price: '160',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Гребешок (острый)',
      price: '130',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Креветки (острые)',
      price: '140',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Угорь (острый)',
      price: '130',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Кальмар (острый)',
      price: '80',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Мидии (острый)',
      price: '70',
      pic: imgSrc('sushi_items', 'spicy'),
    },
    {
      name: 'Краб (острый)',
      price: '150',
      pic: imgSrc('sushi_items', 'spicy'),
    },
  ],
  sets: [
    {
      name: 'Сет «Запечённые суши»',
      recipe:
        'Запеч. лосось (2 шт.), запеч. краб (2 шт.), запеч. угорь (2 шт.), запеч. креветки (2 шт.), запеч. мидии (2 шт.), ролл "Горячий Макс"',
      price: '2200',
      pic: imgSrc('sets', 'hot'),
    },
    {
      name: 'Сет «Острые суши»',
      recipe:
        'Острый лосось (2 шт.), острый угорь (2 шт.), острый краб (2 шт.), острые крев. (2 шт.), острые мидии (2 шт.), ролл Сяке Карай',
      price: '1790',
      pic: imgSrc('sets', 'spicy'),
    },

    {
      name: 'Сет «Горячая Япония»',
      recipe:
        'Ролл "Каникама", ролл "Майами", ролл "Запечённый Муругай", ролл "Запечённый Изуми тай"',
      price: '1350',
      pic: imgSrc('sets', 'japan'),
    },
    {
      name: 'Сет «Макси»',
      recipe:
        'Ролл "Темпура Лайт", ролл "Хирекацу", ролл "запечённый Муругай", ролл "Калифорния с креветкой", ролл "Тори"',
      price: '1570',
      pic: imgSrc('sets', 'maxi'),
    },
  ],
  brand: [
    {
      name: 'Филадельфия',
      recipe:
        'Рис, нори, огурец, икра тобико, сыр сливочный, лосось, кунжут, лимон',
      price: '780',
      pic: imgSrc('brand', 'fila'),
    },
    {
      name: 'Унаги Филадельфия',
      recipe:
        'Рис, нори, авокадо, сыр сливочный, угорь, кунжут, унаги',
      price: '700',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Теплая Филадельфия',
      recipe: 'Рис, нори, сыр сливочный, икра масаго, лосось, унаги',
      price: '780',
      pic: imgSrc('rolls', 'hot_fila'),
    },
    {
      name: 'Зеленая река',
      recipe: 'Рис, нори, огурец, авокадо, угорь, кунжут, унаги',
      price: '410',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Тоттори',
      recipe: 'Рис, нори, сыр сливочный, краб, угорь, креветка темпура, кунжут',
      price: '650',
      pic: imgSrc('brand', 'tottori'),
    },
    {
      name: 'Эби',
      recipe: 'Рис, нори, соус масаго, креветка темпура, кунжут',
      price: '370',
      pic: imgSrc('brand', 'ebi'),
    },
    {
      name: 'Темпура острый',
      recipe: 'Рис, нори, угорь, острый краб, унаги',
      price: '560',
      pic: imgSrc('brand', 'tempura_spicy'),
    },
    {
      name: 'Ассорти',
      recipe:
        'Рис, нори, сыр слив., огурец, лосось, угорь, кальмар, креветка, тунец, окунь, унаги',
      price: '570',
      pic: imgSrc('brand', 'assorti'),
    },
    {
      name: 'Дракон',
      recipe: 'Рис, нори, краб, авокадо, огурец, угорь, кунжут, соус масаго, унаги',
      price: '1400',
      pic: imgSrc('brand', 'dragon'),
    },
    {
      name: 'Кавати',
      recipe:
        'Рис, соевый лист, краб, соус масаго, огурец, сыр сливочный, кунжут',
      price: '500',
      pic: imgSrc('colored', 'kavati'),
    },
    {
      name: 'Овари',
      recipe: 'Рис, соевый лист, лосось, сыр сливочный, айсберг, лимон',
      price: '560',
      pic: imgSrc('colored', 'ovari'),
    },
  ],
  hot: [
    {
      name: 'Горячий Макс',
      recipe: 'Рис, нори, лосось, угорь, краб, соус масаго, кунжут, унаги',
      price: '770',
      pic: imgSrc('hot', 'maks'),
    },
    {
      name: 'Иватэ (без риса)',
      recipe:
        'Нори, тунец, окунь, краб, лосось, соус масаго, гребешок,  кунжут, унаги',
      price: '1200',
      pic: imgSrc('hot', 'ivate'),
    },
    {
      name: 'Аканасу',
      recipe: 'Рис, нори, сыр сливочный, томаты, лосось, кунжут, унаги, соус масаго',
      price: '520',
      pic: imgSrc('hot', 'akanasu'),
    },
    {
      name: 'Запечённый Изуми Тай',
      recipe:
        'Рис, нори, сыр сливочный, окунь, соус масаго, соус унаги, кунжут',
      price: '330',
      pic: imgSrc('hot', 'izumi_tai'),
    },
    {
      name: 'Запечённый Каникама',
      recipe: 'Рис, нори, сыр сливочный, снежный краб, соус масаго',
      price: '310',
      pic: imgSrc('hot', 'kanikama'),
    },
    {
      name: 'Запечённый Майами',
      recipe: 'Рис, нори, соус масаго, сыр сливочный, креветка, кунжут',
      price: '360',
      pic: imgSrc('hot', 'miami'),
    },
    {
      name: 'Запечённый Муругай',
      recipe:
        'Рис, нори, сыр сливочный, икра масаго, японский омлет, соус масаго, мидии, соус унаги, паприка',
      price: '390',
      pic: imgSrc('hot', 'murugai'),
    },
    {
      name: 'Аматори',
      recipe:
        'Рис, нори, курица копченая, сыр сливочный, помидор, икра масаго, соус Дыхание дракона, унаги',
      price: '350',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Хирекацу',
      recipe:
        'Рис, нори, кунжут, сыр сливочный, японский омлет, бекон, соус спайси, креветка, унаги',
      price: '350',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Игай магуро',
      recipe:
        'Рис, нори, сыр сливочный, мидии, тунец, соус Дыхание дракона, унаги',
      price: '380',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Запеченный Шиитаке',
      recipe:
        'Рис, нори, шиитаке, сыр сливочный, гребешок, лосось, масаго, кунжут, унаги',
      price: '480',
      pic: imgSrc('hot', 'sheetake'),
    },
    {
      name: 'Уминосачи',
      recipe:
        'Рис, нори, кунжут, сыр сливочный, унаги, снежный краб, кальмар, авокадо, креветка, соус спайси, соус Шрирача',
      price: '430',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Запечённый Канраки',
      recipe:
        'Рис, нори, кунжут, сыр сливочный, окунь, соус масаго, моцарелла, кинза, унаги',
      price: '400',
      pic: imgSrc('hot', 'kanraki'),
    },
    {
      name: 'Запечённый лосось',
      recipe:
        'Рис, нори, икра масаго, снежный краб, помидор, лосось, соус спайси',
      price: '540',
      pic: imgSrc('hot', 'salmon'),
    },
    {
      name: 'Шиитаки с угрем',
      recipe:
        'Рис, нори, кунжут, сыр сливочный, шиитаки, угорь, соус масаго, унаги',
      price: '430',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Шиитаки Тори',
      recipe:
        'Рис, нори, сыр сливочный, курица копченая, шиитаки, соус масаго, унаги',
      price: '320',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Хатико с угрём',
      recipe:
        'Рис, нори, кунжут, сыр сливочный, соус Шрирача, угорь, сыр, унаги',
      price: '500',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Бушидо',
      recipe:
        'Рис, нори, кунжут, сыр сливочный, угорь, японский омлет, соус спайси, унаги',
      price: '460',
      pic: imgSrc('general', 'sushi_general'),
    },
  ],
  rolls: [
    {
      name: 'Калифорния с креветкой',
      recipe: 'Рис, нори, сыр сливочный, тигровая креветка, огурец, кунжут',
      price: '400',
      pic: imgSrc('rolls', 'cali_shrimp'),
    },
    {
      name: 'Калифорния-классика',
      recipe: 'Рис, нори, соус масаго, краб, икра масаго, огурец, авокадо',
      price: '550',
      pic: imgSrc('rolls', 'cali_tobiko'),
    },
    {
      name: 'Сяке Карай',
      recipe: 'Рис, нори, сыр сливочный, огурец, лосось, дайкон маринованный, соус спайси, зелень',
      price: '520',
      pic: imgSrc('general', 'sushi_general'),
    },

    {
      name: 'Чукка маки',
      recipe: 'Рис, нори, паприка, помидоры, сыр сливочный, ореховый соус, огурец, морские водоросли, кунжут',
      price: '300',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Тори',
      recipe: 'Рис, нори, курица копченая, огурец, соус спайси, паприка, икра масаго',
      price: '300',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Умами Эби',
      recipe: 'Рис, нори, тигровая креветка, сыр сливочный, соус масаго, унаги',
      price: '480',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Кимбап с креветкой темпура',
      recipe: 'Рис, нори, тигровая крев., огурец, ореховый соус, дайкон маринованный, японский омлет, морские водоросли, снежный краб, морковь маринованная, кунжут, кунжутное масло, тесто темпура, унаги',
      price: '450',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Кимбап с тунцом',
      recipe: 'Рис, нори, тунец, огурец, ореховый соус, дайкон маринованный, японский омлет, морские водоросли, снежный краб, морковь маринованный, кунжут, кунжутное масло, унаги',
      price: '350',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Кимбап с курицей',
      recipe: 'Рис, нори, курица копченая, огурец, паприка, дайкон маринованный, японский омлет, снежный краб, морковь маринованная, кунжут, кунжутное масло, унаги',
      price: '330',
      pic: imgSrc('general', 'sushi_general'),
    },

  ],
  green: [
    {
      name: 'Темпура Хенд',
      recipe:
        'Рис, нори, паприка, томаты, сыр сливочный, тесто темпура, панко, унаги',
      price: '260',
      pic: imgSrc('green', 'hend'),
    },
    {
      name: 'Ролл "Айсберг"',
      recipe: 'Рис, нори, орех. соус, айсберг, шиитаки',
      price: '230',
      pic: imgSrc('green', 'iceberg'),
    },
    {
      name: 'Ролл Темпура Лайт',
      recipe: 'Рис, нори, сыр сливочный, помидоры, соус унаги, тесто темпура',
      price: '200',
      pic: imgSrc('general', 'sushi_general'),
    },
    {
      name: 'Ролл с авокадо',
      recipe: 'Рис, нори, авокадо',
      price: '180',
      pic: imgSrc('green', 'avocado'),
    },
  ],
  child: [
    {
      name: 'Котлетки с картофелем фри',
      recipe: 'Фарш свино-говяжий, огурец, паприка, картофель фри, зелень',
      price: '370',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Наггетсы с картофелем фри',
      recipe:
        'Куриная грудка в панировке, кетчуп, картофель фри',
      price: '370',
      pic: imgSrc('child', 'naggets'),
    },
    {
      name: 'Супчик куриный',
      recipe: 'Куриный бульон, филе куриное, вермишель яичная, зелень, морковь',
      price: '280',
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
        'Айсберг, помидоры черри, куриная грудка, сыр пармезан, сырные палочки, соус цезарь',
      price: '440',
      pic: imgSrc('salads', 'cesar_chicken'),
    },

    {
      name: 'Салат «Цезарь» с креветкой',
      recipe:
        'Айсберг, помидоры черри, креветки, сыр пармезан, сырные палочки, соус цезарь',
      price: '550',
      pic: imgSrc('salads', 'cesar_shrimp'),
    },

    {
      name: 'Салат с угрем',
      recipe:
        'Угорь, помидоры свежие, баклажаны, сливочный сыр, соус кисло-сладкий, кинза, кунжут',
      price: '570',
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
      price: '420',
      pic: imgSrc('general', 'salad_general'),
    },
  ],
  soups: [
    {
      name: 'Ясай',
      recipe:
        'Говядина, грибы шиитаке, лук порей, тофу, рисовая лапша, специи тогораши, бульон Суимоно',
      price: '370',
      pic: imgSrc('soups', 'yasai'),
    },
    {
      name: 'Мисо',
      recipe: 'Бульон, лук порей, тофу, водоросли вакеме, стружка тунца',
      price: '180',
      pic: imgSrc('soups', 'miso'),
    },

    {
      name: 'Кимчи',
      recipe:
        'Бульон Мисо, яйцо куриное, кунжут, кимчи паста, кунжутное масло, тофу, стружка тунца, водоросли вакеме',
      price: '220',
      pic: imgSrc('soups', 'kimchi'),
    },

    {
      name: 'Суп Том Ям',
      recipe:
        'Бульон куриный, паста Том Ям, рис, черри, мидии, шампиньоны, креветка, кальмар, лемонграсс, масло кунжутное, листья лайма, кокосовое молоко, сливки, корень Галангала, кинза, лайм, кунжут',
      price: '630',
      pic: imgSrc('general', 'soup_general'),
    },

    {
      name: 'Сливочный суп с лососем',
      recipe: 'Бульон Суимоно, рис, лосось, сливки, зелень',
      price: '510',
      pic: imgSrc('soups', 'cs_ell'),
    },

    {
      name: 'Крем-суп грибной',
      recipe: 'Шампиньоны, лук, сливки, кунжутное масло, зелень',
      price: '330',
      pic: imgSrc('soups', 'cs_mushrooms'),
    },
  ],
  snacks: [
    {
      name: 'Мидии запечённые',
      recipe: 'Мидии, соус масаго, лимон, соус Унаги, кунжут',
      price: '460',
      pic: imgSrc('hot_dishes', 'midii'),
    },
    {
      name: 'Японские пельмени с креветками (8 шт)',
      recipe: 'Тесто Гедза, креветка, кисло-сладкий соус, кунжут',
      price: '780',
      pic: imgSrc('hot_dishes', 'pelmeni'),
    },
    {
      name: 'Креветки Темпура',
      recipe: 'Тесто темпура, креветка, соус соевый, имбирь',
      price: '570',
      pic: imgSrc('hot_dishes', 'tempura'),
    },
    {
      name: 'Кольца кальмара Темпура',
      recipe: 'Тесто темпура, кальмар, соус соевый, имбирь, васаби',
      price: '460',
      pic: imgSrc('hot_dishes', 'tempura'),
    },
    {
      name: 'Шашлычки из тигровых креветок',
      recipe: 'Креветки, соус терияки, кунжут',
      price: '620',
      pic: imgSrc('hot_dishes', 'yaki_shrimps'),
    },
    {
      name: 'Шашлычки из лосося «Якитори»',
      recipe: 'Лосось, соус терияки, кунжут',
      price: '1150',
      pic: imgSrc('hot_dishes', 'yaki_salmon'),
    },
    {
      name: 'Куриные шашлычки «Якитори»',
      recipe: 'Куриное бедро филе, соус терияки, кунжут',
      price: '310',
      pic: imgSrc('hot_dishes', 'yaki_chicken'),
    },
    {
      name: 'Сырная тарелка',
      recipe:
        'Сыр пармезан, сыр фета, сыр филадельфия, орехи грецкие, сыр косичка копченая, мед, мята',
      price: '570',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Поке с креветкой',
      recipe:
        'Рис, креветка, соус соевый, огурцы свежие, икра масаго, соус дресинг, лимон, кунжутное масло, соус манго-чили, бобы Эдомаме, салат Чука, Дайкон маринованный',
      price: '550',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Поке с тунцом',
      recipe:
        'Рис, тунец, соус ореховый, огурцы свежие, салат Чука, Дайкон маринованный, кунжут, бобы Эдомаме, икра масаго, соус дресинг, лимон, кунжутное масло',
      price: '400',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Поке с лососем',
      recipe:
        'Рис, лосось, огурцы свежие, соус манго, соус дрессинг, лимон, кунжутное масло, кунжут, Дайкон маринованный, бобы Эдомаме, икра масаго, салат Чука',
      price: '550',
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
      price: '660',
      pic: imgSrc('hot_dishes', 'govyad'),
    },
    {
      name: 'Стейк из красной рыбы с овощами гриль',
      recipe:
        'Лосось, баклажаны, кабачки, перец болгарский, помидоры, шампиньоны, кунжут, лимон',
      price: '1200',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Лапша «5 ароматов»',
      recipe:
        'Лапша удон, свинина, айсберг, перец болгарский, соус терияки, соус ланч кинг,паста кимчи, микрозелень, морские водоросли, кунжут, кунжутное масло',
      price: '370',
      pic: imgSrc('hot_dishes', 'lapsha_5'),
    },
    {
      name: 'Пибимпап с курицей',
      recipe:
        'Филе куриного бедра, рис, соус тереяки, соус ланч кинг, айсберг, нори, шиитаки, морковь маринованная, яйцо куриное, кунжут, масло кунжутное',
      price: '460',
      pic: imgSrc('hot_dishes', 'rise'),
    },
    {
      name: 'Шницель в соусе тонкацу',
      recipe:
        'Свинина в панировке, соус тонкацу, маринованный красный лук, черри, картофель бэби',
      price: '460',
      pic: imgSrc('hot_dishes', 'shnitzel_tonk'),
    },
    {
      name: 'Окунь в сливочном соусе с томатами ',
      recipe:
        'Окунь, сыр моцарелла, соус масаго, помидоры черри, сливки, лимон, кунжут',
      price: '720',
      pic: imgSrc('hot_dishes', 'okyn'),
    },
    {
      name: 'Куриная грудка в сливочном соусе',
      recipe: 'Куриная грудка, болгарский перец, сливки, черри, кунжут',
      price: '550',
      pic: imgSrc('hot_dishes', 'chicken_sause'),
    },
    {
      name: 'Свинина гриль с грибным соусом',
      recipe:
        'Свинина, баклажаны, цукини, шиитаке, паприка, черри, сливки, соус тонкацу, кунжут',
      price: '750',
      pic: imgSrc('hot_dishes', 'pig_grill'),
    },
    {
      name: 'Шницель куриный',
      recipe:
        'Куриная грудка в панировке, помидоры черри, картофель бэби, соус тонкацу',
      price: '410',
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
        'Яичная лапша, говядина, цукини, микрозелень, соус терияки, соус к/с Чили, перец болгарский, кунжут',
      price: '450',
      pic: imgSrc('hot_dishes', 'lapsha'),
    },
    {
      name: 'Тайская лапша со свининой',
      recipe:
        'Яичная лапша, свинина, цукини, микрозелень, соус терияки, соус к/с Чили, перец болгарский, кунжут',
      price: '380',
      pic: imgSrc('hot_dishes', 'lapsha'),
    },
    {
      name: 'Тайская лапша с курицей',
      recipe:
        'Яичная лапша, курица, цукини, микрозелень, соус терияки, соус к/с Чили, перец болгарский, кунжут',
      price: '380',
      pic: imgSrc('hot_dishes', 'lapsha'),
    },
    {
      name: 'Лапша удон с лососем в сливочно-томатном соусе ',
      recipe:
        'Лапша удон, лосось, томатный соус, помидоры черри, сливки, сыр пармезан, кальмар, мидии',
      price: '520',
      pic: imgSrc('general', 'hot_dish_general'),
    },
    {
      name: 'Лапша удон с курицей и сливками',
      recipe:
        'Лапша удон, куриное бедро, перец болгарский, кабачки, сливки, морковь, лук, кунжут, соевый соус, зелень',
      price: '360',
      pic: imgSrc('general', 'hot_dish_general'),
    },
  ],
  gruzia: [
    {
      name: 'Хинкали с мясом (1шт.)',
      recipe: 'Тесто, фарш свино-говяжий, перец черный, масло сливочное, зеленое масло',
      price: '90',
      pic: imgSrc('gruzia', 'hinkali'),
    },
    {
      name: 'Хинкали с сыром (1шт.)',
      recipe: 'Тесто, сыр сулугуни, масло сливочное, зеленое масло',
      price: '90',
      pic: imgSrc('gruzia', 'hinkali'),
    },
    {
      name: 'Солянка по-грузински',
      recipe:
        'Говядина, томат, бульон, кинза, специи, красный лук, чеснок',
      price: '760',
      pic: imgSrc('gruzia', 'soup'),
    },
    {
      name: 'Хачапури по-мегрельски',
      recipe: 'Тесто, сыр сулугуни, масло сливочное',
      price: '480',
      pic: imgSrc('gruzia', 'megel'),
    },
    {
      name: 'Хачапури по-аджарски',
      recipe: 'Тесто, сыр сулугуни, яйцо куриное, масло сливочное',
      price: '460',
      pic: imgSrc('gruzia', 'adja'),
    },
    {
      name: 'Чебурек с сыром',
      recipe: 'Тесто, сыр сулугуни',
      price: '200',
      pic: imgSrc('gruzia', 'chebureki'),
    },
    {
      name: 'Чебурек с мясом',
      recipe: 'Тесто, свинина, говядина',
      price: '200',
      pic: imgSrc('gruzia', 'chebureki'),
    },
  ],
  pizza: [
    {
      name: 'Курица с грибами',
      recipe:
        'Тесто, соус сливочный, шампиньоны, куриная грудка, моцарела, корнишоны, орегано',
      price: '690',
      pic: imgSrc('pizza', 'chicken'),
    },
    {
      name: 'Пепперони',
      recipe:
        'Тесто, соус для пиццы, моцарела, колбаса пеперони, маслины, орегано',
      price: '670',
      pic: imgSrc('pizza', 'pepperoni'),
    },
    {
      name: 'Карбонара',
      recipe:
        'Тесто, соус сливочный, моцарела, черри, пармезан, сливки, куриное яйцо, бекон, орегано',
      price: '810',
      pic: imgSrc('pizza', 'karbonara'),
    },
    {
      name: 'Маргарита',
      recipe: 'Тесто, соус для пиццы, моцарелла, помидоры свежие, орегано',
      price: '650',
      pic: imgSrc('pizza', 'margarita'),
    },
  ],
  dessert: [
    {
      name: 'Бананы темпура с мороженым',
      price: '440',
      pic: imgSrc('dessert', 'bananas'),
    },
    {
      name: 'Яблоки темпура с мороженым',
      price: '460',
      pic: imgSrc('dessert', 'apples'),
    },
    {
      name: 'Чизкейк с топпингом',
      price: '320',
      pic: imgSrc('dessert', 'cheese_cake'),
    },
    {
      name: 'Фруктовая тарелка',
      recipe: 'Апельсин, яблоко, груша, банан, киви',
      price: '580',
      pic: imgSrc('dessert', 'fruits'),
    },
    {
      name: 'Японские блинчики с Филадельфией и апельсиновым соусом',
      price: '330',
      pic: imgSrc('dessert', 'j_pancakes'),
    },
    {
      name: 'Блинчики',
      price: '120',
      pic: imgSrc('dessert', 'pancakes'),
    },

    {
      name: 'Мороженое в ассортименте (1 шарик)',
      price: '120',
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
      price: '170',
      pic: imgSrc('garnish', 'aidaho'),
    },
    {
      name: 'Картофель фри',
      price: '140',
      pic: imgSrc('garnish', 'fri'),
    },
    {
      name: '"Булочка"',
      price: '35',
      pic: imgSrc('garnish', 'bread'),
    },
    {
      name: 'Имбирь',
      price: '60',
      pic: imgSrc('garnish', 'imbir'),
    },
    {
      name: 'Мята',
      price: '50',
      pic: imgSrc('garnish', 'mint'),
    },
    {
      name: 'Лимон',
      price: '70',
      pic: imgSrc('garnish', 'lemone'),
    },

    {
      name: 'Сметана',
      price: '30',
      pic: imgSrc('garnish', 'sauce'),
    },
    {
      name: 'Топпинг в ассортименте',
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

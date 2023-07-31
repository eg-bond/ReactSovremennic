export const sushiElems = {
  menuButtons: [
    ['sushi', 'Суши'],
    ['rolls', 'Роллы'],
    ['green_rolls', 'Овощные роллы'],
    ['black_rolls', 'Цветные/черные роллы'],
    ['hot_rolls', 'Запеченные роллы'],
    ['brand_rolls', 'Фирменные роллы'],
    ['mini_rolls', 'Мини-роллы'],
    ['child_menu', 'Детское меню'],
    ['sets', 'Наборы'],
    ['salads', 'Салаты'],
    ['soups', 'Супы'],
    ['hot_dishes', 'Горячие блюда'],
    ['garnish', 'Гарниры'],
    ['dessert', 'Десерты'],
    ['gruzia', 'Грузинская кухня'],
    ['pizza', 'Пицца, закуски'],
  ],
  slidersKeys: {
    rolls: ['rolls1', 'rolls2'],
    hot_dishes: ['hot_dishes1', 'hot_dishes2', 'hot_dishes3', 'hot_dishes4'],
    brand_rolls: ['brand_rolls1', 'brand_rolls2', 'brand_rolls3'],
  } as const,
} as const

export const sushiImgSrc = (key: string) => `./Images/sushi/${key}.webp`

// export const preloadSushiImg = (
//   imgKey: string,
//   imgPreloaded: React.MutableRefObject<boolean>
// ) => {
//   let key: string
//   imgKey in sushiElems.slidersKeys ? (key = imgKey + '1') : (key = imgKey)

//   return new Promise<void>(res => {
//     const img = new window.Image()
//     img.src = sushiImgSrc(key)
//     img.onload = () => {
//       imgPreloaded.current = true
//       res()
//     }
//   })
// }

// animation duration (same as --animationDuration in fade.scss)
export const trDuration = 200

export const sushiNew = {
  sushi: [
    {
      name: 'Кальмар',
      ingridients: '',
      price: '60',
      picture: './Images/sushi/sushi_items/sushi1.webp',
    },
    { name: 'Краб', ingridients: '', price: '110', picture: '' },
    { name: 'Лосось', ingridients: '', price: '110', picture: '' },
    { name: 'Угорь', ingridients: '', price: '110', picture: '' },
    { name: 'Тунец', ingridients: '', price: '80', picture: '' },
    { name: 'Гребешок', ingridients: '', price: '110', picture: '' },
    { name: 'Тобико', ingridients: '', price: '80', picture: '' },
    { name: 'Японский омлет', ingridients: '', price: '40', picture: '' },
    { name: 'Тигровая креветка', ingridients: '', price: '100', picture: '' },
    {
      name: 'Лосось с перепелиным яйцом',
      ingridients: '',
      price: '130',
      picture: '',
    },
    {
      name: 'Красный окунь (запеченный)',
      ingridients: '',
      price: '70',
      picture: '',
    },
    {
      name: 'Креветка (запеченный)',
      ingridients: '',
      price: '90',
      picture: '',
    },
    { name: 'Краб (запеченный)', ingridients: '', price: '120', picture: '' },
    { name: 'Угорь (запеченный)', ingridients: '', price: '120', picture: '' },
    { name: 'Тунец (запеченный)', ingridients: '', price: '90', picture: '' },
    { name: 'Лосось (запеченный)', ingridients: '', price: '120', picture: '' },
    {
      name: 'Гребешок (запеченный)',
      ingridients: '',
      price: '150',
      picture: '',
    },
    { name: 'Тунец (острый)', ingridients: '', price: '80', picture: '' },
    { name: 'Лосось (острый)', ingridients: '', price: '110', picture: '' },
    { name: 'Гребешок (острый)', ingridients: '', price: '110', picture: '' },
    { name: 'Креветки (острый)', ingridients: '', price: '90', picture: '' },
    { name: 'Угорь (острый)', ingridients: '', price: '100', picture: '' },
    { name: 'Кальмар (острый)', ingridients: '', price: '60', picture: '' },
  ],
  green_rolls: [
    { name: 'Ролл "Айсберг"', ingridients: '', price: '220', picture: '' },
    { name: 'Ролл с огурцом', ingridients: '', price: '150', picture: '' },
    { name: 'Ролл с авокадо', ingridients: '', price: '180', picture: '' },
    {
      name: '"Темпура Хенд"',
      ingridients:
        '(Рис, нории, паприка, томаты, сыр сливочный, тесто темпура, панко, унаги, васаби, имбирь маринованный, соевый соус)',
      price: '220',
      picture: '',
    },
  ],
  mini_rolls: [
    {
      name: 'Филадельфия мини',
      ingridients:
        '(Рис, нори, огурец, икра тобико, сыр сливочный, лосось, кунжут, лимон, васаби, имбирь мар., соевый соус)',
      price: '330',
      picture: '',
    },
    {
      name: 'Ассорти мини',
      ingridients:
        '(Рис, нори, сыр сливочный, огурец, лосось, креветка, тунец, унаги, окунь, васаби, имбирь мар., соевый соус)',
      price: '300',
      picture: '',
    },
    {
      name: 'Иватэ мини (без риса)',
      ingridients:
        '(Тунец, окунь, краб, лосось, гребешок, соус масаго, кунжут, унаги, васаби, имбирь мар., соевый соус)',
      price: '480',
      picture: '',
    },
    {
      name: 'Горячий Макс мини',
      ingridients:
        '(Рис, нори, лосось, угорь, краб, соус масаго, кунжут, унаги, васаби, имбирь мар., соевый соус)',
      price: '390',
      picture: '',
    },
    {
      name: 'Темпура мини',
      ingridients:
        '(Рис, нори, сыр сливочный, лосось, кинза, тесто темпура, панко, унаги, васаби, имбирь мар., сливочный соус)',
      price: '300',
      picture: '',
    },
  ],
  sets: [
    {
      name: 'Сет «Острые суши»',
      ingridients:
        '(Острый лосось 2 шт., острый угорь 2 шт., острый краб 2 шт., острые крев. 2 шт., ролл Темпура острый, васаби, имбирь маринованный, соевый соус)',
      price: '1500?',
      picture: '',
    },
    {
      name: 'Сет «Запечённые суши»',
      ingridients:
        '(Запеч. лосось 2 шт., запеч. краб 2 шт., запеч. угорь 2 шт., запеч. креветки 2 шт., ролл Горячий Макс, васаби, кунжут., имбирь маринованный, соевый соус)',
      price: '1700?',
      picture: '',
    },
    {
      name: 'Сет «Макси»',
      ingridients:
        '(Ролл Темпура Лайт, ролл Бансай, ролл запечённый Муругай, ролл сливочный Кани Маки, ролл Калифорния с креветкой)',
      price: '1150',
      picture: '',
    },
    {
      name: 'Сет «Горячая Япония»',
      ingridients:
        '(Ролл Каникама, ролл Майами, ролл запечённый Муругай, ролл запечённый Изуми тай)',
      price: '970',
      picture: '',
    },
  ],
  brand_rolls: [
    {
      name: 'Фуджияма',
      ingridients:
        '(Рис, нори, острый краб, лосось, огурец, лимон, васаби, имбирь маринованый, кунжут, соевый соус)',
      price: '690',
      picture: '',
    },
    {
      name: 'Филадельфия',
      ingridients:
        '(Рис, нори, огурец, икра тобико, сыр сливочный, лосось, кунжут, лимон, васаби, имбирь мар., соевый соус)',
      price: '570',
      picture: '',
    },
    {
      name: 'Ночной Токио (без риса)',
      ingridients:
        '(Авокадо, огурец, икра тобико, лосось, краб, лимон, васаби, имбирь маринованный, соевый соус)',
      price: '790',
      picture: '',
    },
    {
      name: 'Бостон',
      ingridients:
        '(Рис, нори, острый лосось, огурец, авокадо, краб, васаби, имбирь маринованный, соевый соус)',
      price: '550',
      picture: '',
    },
    {
      name: 'Ролл с лососем',
      ingridients:
        '(Рис, нори, лосось, васаби, имбирь маринованный, соевый соус)',
      price: '280',
      picture: '',
    },
    {
      name: 'Тоттори',
      ingridients:
        '(Рис, нори, сыр сливочный, краб, креветка темпура, кунжут, васаби, имбирь маринованный, соевый соус)',
      price: '450',
      picture: '',
    },
    {
      name: 'Эби',
      ingridients:
        '(Рис, нори, соус масаго, креветка темпура, имбирь маринованный, васаби, соевый соус)',
      price: '290',
      picture: '',
    },
    {
      name: 'Темпура острый',
      ingridients:
        '(Рис, нори, угорь, острый краб, унаги, имбирь маринованный, васаби, соевый соус)',
      price: '480',
      picture: '',
    },
    {
      name: 'Дракон',
      ingridients:
        '(Рис, нори, краб, авокадо, огурец, угорь, кунжут, унаги, васаби, имбирь маринованный, соевый соус)',
      price: '1200',
      picture: '',
    },
    {
      name: 'Ассорти',
      ingridients:
        '(Рис, нори, сыр сливочный, огурец, лосось, кальмар, креветка, угорь, тунец, унаги, окунь, васаби, имбирь маринованный, соевый соус)',
      price: '520',
      picture: '',
    },
  ],
  hot_rolls: [
    {
      name: 'Горячий Макс',
      ingridients:
        '(Рис, нори, лосось, угорь, краб, соус масаго, кунжут, унаги, васаби, имбирь маринованный, соевый соус)',
      price: '750',
      picture: '',
    },
    {
      name: 'Хаус',
      ingridients:
        '(Рис, нори, лосось, тунец, паприка, острый краб, икра тобико, унаги, васаби, имбирь маринованный, соевый соус)',
      price: '520',
      picture: '',
    },
    {
      name: 'Иватэ (без риса)',
      ingridients:
        '(Тунец, окунь, краб, лосось, гребешок, соус масаго, кунжут, унаги, васаби, имбирь маринованный, соевый соус)',
      price: '770',
      picture: '',
    },
    {
      name: 'Аканасу',
      ingridients:
        '(Рис, нори, сыр сливочный, томаты, лосось, имбирь маринованный, кунжут, унаги, васаби, соевый соус)',
      price: '330',
      picture: '',
    },
    {
      name: 'Запечённый Изуми Тай',
      ingridients: 'Сыр сливочный, окунь, соус масаго, соус унаги, кунжут)',
      price: '260',
      picture: '',
    },
    {
      name: 'Запечённый Каникама',
      ingridients: '(Рис, сыр сливочный, снежный краб, соус масаго)',
      price: '220',
      picture: '',
    },
    {
      name: 'Запечённый Майами',
      ingridients: '(Соус масаго, сыр сливочный, креветка, кунжут)',
      price: '290',
      picture: '',
    },
    {
      name: 'Запечённый Муругай',
      ingridients:
        '(Сыр сливочный, икра масаго, японский омлет, соус масаго, мидии, соус унаги, паприка)',
      price: '260',
      picture: '',
    },
    {
      name: 'XXL',
      ingridients:
        '(Рис, нори, лосось, икра тобико, острый краб, острый гребешок, унаги, васаби, соевый соус, имбирь маринованный)',
      price: '720',
      picture: '',
    },
    {
      name: 'Red Hot',
      ingridients:
        '(Рис, нори, креветка, сыр сливочный, икра тобико, угорь, соус спайси, васаби, имбирь маринованный, соевый соус)',
      price: '620',
      picture: '',
    },
    {
      name: 'Шиитаке',
      ingridients:
        '(Рис, нори, шиитаке, сыр сливочный, гребешок, лосось, масаго, кунжут, унаги, имбирь маринованный, васаби, соевый соус)',
      price: '390',
      picture: '',
    },
    {
      name: 'Запеченный тунец',
      ingridients:
        '(Рис, нори, сыр сливочный, кунжут, японский омлет, соус спайси, чернила каракатицы, тунец, васаби, имбирь маринованный, соевый соус)',
      price: '260',
      picture: '',
    },
    {
      name: 'Датэмаки с окунем',
      ingridients:
        '(Рис, нори, окунь, соус спайси, сыр сливочный, японский омлет, огурец, кунжут, унаги, васаби, имбирь маринованный, соевый соус)',
      price: '250',
      picture: '',
    },
    {
      name: 'Запечённый Канраки',
      ingridients:
        '(Рис, нори, кунжит, сыр сливочный, кинза, окунь, соус масаго, сыр, унаги, васаби, имбирь маринованный, соевый соус)',
      price: '???',
      picture: '',
    },
  ],
  rolls: [
    {
      name: 'Сливочный Кани Маки',
      ingridients:
        '(Сыр сливочный, снежный краб, соус масаго, огурец, икра масаго, кунжут) ',
      price: '240',
      picture: '',
    },
    {
      name: 'Монако',
      ingridients: '(Японский омлет, сыр сливочный, икра масаго)',
      price: '250',
      picture: '',
    },
    {
      name: 'Темпура Лайт',
      ingridients: '(Сыр сливочный, помидоры, соус унаги, тесто темпура)',
      price: '180',
      picture: '',
    },
    {
      name: 'Фиеста',
      ingridients: '(Снежный краб, огурцы, икра масаго, сыр сливочный)',
      price: '250',
      picture: '',
    },
    {
      name: 'Текка',
      ingridients:
        '(Рис, нори, тунец, васаби, имбирь маринованный, соевый соус)',
      price: '220',
      picture: '',
    },
    {
      name: 'Ролл с кальмаром',
      ingridients:
        '(Рис, нори, кальмар, унаги, кунжут, васаби, имбирь маринованный, соевый соус)',
      price: '200',
      picture: '',
    },
    {
      name: 'Тай',
      ingridients: '(Сыр сливочный, окунь красный, соус масаго, кунжут)',
      price: '220',
      picture: '',
    },
    {
      name: 'Калифорния',
      ingridients:
        '(Рис, нори, краб, масаго, огурец, авокадо, кунжут, васаби, имбирь маринованный, соевый соус)',
      price: '350',
      picture: '',
    },
    {
      name: 'Калифорния - тобико',
      ingridients:
        '(Рис, нори, масаго, краб, тобико, огурец, авокадо, васаби, имбирь маринованный, соевый соус)',
      price: '430',
      picture: '',
    },
    {
      name: 'Теплая Филадельфия',
      ingridients:
        '(Рис, нори, сыр слив., икра тобико, лосось, унаги, васаби, имбирь маринованный, соевый соус)',
      price: '570',
      picture: '',
    },
    {
      name: 'Калифорния с креветкой',
      ingridients: '(Сыр сливочный, креветка, огурец, кунжут)',
      price: '280',
      picture: '',
    },
    {
      name: 'Бансай',
      ingridients: '(Сыр сливочный, огурец, бекон, соус унаги)',
      price: '260',
      picture: '',
    },
  ],
  black_rolls: [
    {
      name: 'Кавати',
      ingridients:
        '(Рис, соевый лист, краб, соус масаго, огурец, сыр сливочный, кунжут, васаби, имбирь маринованный, соевый соус)',
      price: '330',
      picture: '',
    },
    {
      name: 'Овари',
      ingridients:
        '(Рис, соеывй лист, лосось, сыр сливочный, айсберг, лимон, васаби, соевый соус)',
      price: '410',
      picture: '',
    },
    {
      name: 'Хида',
      ingridients:
        '(Рис, соевый лист, тунец, сыр сливочный, авокадо, огурец, кунжут, васаби, имбирь мар., соевый соус)',
      price: '300',
      picture: '',
    },
    {
      name: 'Сегун',
      ingridients:
        '(Рис, нори, сыр сливочный, омлет, лосось, соус масаго, имбирь, соевый соус)',
      price: '???',
      picture: '',
    },
  ],
  salads: [
    {
      name: 'Шеф салат',
      ingridients:
        '(Говядина, айсберг, томаты, паприка, кинза, чеснок, оливковое масло, винный уксус)',
      price: '500',
      picture: '',
    },
    {
      name: 'Салат из жаренного авокадо и лосося',
      ingridients:
        '(Айсберг, китайская капуста, огурец, помидоры черри, авокадо, лосось, лимон, соус дресинг, кунжут)',
      price: '800',
      picture: '',
    },
    {
      name: 'Салат «Цезарь» с курицей',
      ingridients:
        '(Айсберг, помидоры черри, перепелиные яйца, куриная грудка, сыр пармезан, соус цезарь, сухари)',
      price: '590',
      picture: '',
    },
    {
      name: 'Салат «Цезарь» с креветкой',
      ingridients:
        '(Айсберг, помидоры черри, креветки, перепелиные яйца, сыр пармезан, соус цезарь, сухари)',
      price: '870',
      picture: '',
    },
    {
      name: 'Салат с авокадо',
      ingridients:
        '(Айсберг, китайская капуста, огурец, помидоры черри, авокадо, соус дресинг, кунжут)',
      price: '440',
      picture: '',
    },
    {
      name: 'Салат из морских водорослей',
      ingridients: '(Морские водоросли, ореховый соус, кунжут, лимон)',
      price: '200',
      picture: '',
    },
    {
      name: 'Салат с креветкой',
      ingridients:
        '(Авокадо, огурец, креветки, лимон, листья салата, соус дресинг)',
      price: '520',
      picture: '',
    },
  ],
  soups: [
    {
      name: 'Ясай',
      ingridients:
        '(Говядина, грибы шиитаке, лук порей, тофу, рисовая лапша, специи тогораши)',
      price: '280',
      picture: '',
    },
    {
      name: 'Мисо',
      ingridients: '(Бульон, лук порей, тофу, водоросли вакеме)',
      price: '180',
      picture: '',
    },
    {
      name: 'Острый суп с грибами и цукини',
      ingridients: '(Бульон, водоросли вакеми, шиитаке, цукини)',
      price: '170',
      picture: '',
    },
    {
      name: 'Крабовый суп',
      ingridients: '(Бульон, краб, рис, яйцо куриное, лук, нори)',
      price: '600',
      picture: '',
    },
    {
      name: 'Кимчи',
      ingridients:
        '(Бульон, яйцо куриное, кунжут, кимчи паста, кунжутное масло, тофу, водоросли вакеме)',
      price: '180',
      picture: '',
    },
    {
      name: 'Крем-суп с лососем',
      ingridients: '(Бульон, рис, лосось, сливки, зелень)',
      price: '350',
      picture: '',
    },
    {
      name: 'Крем-суп с угрём',
      ingridients: '(Бульон, рис, угорь, сливки, зелень)',
      price: '350',
      picture: '',
    },
    {
      name: 'Крем-суп грибной',
      ingridients: '(Шампиньоны, лук, сливки)',
      price: '250',
      picture: '',
    },
  ],
  hot_dishes: [
    {
      name: 'Говядина с тушёнными овощами',
      ingridients:
        '(Говядина, соус терияки, баклажаны, цукини, шиитаке, ореховый соус, помидоры черри, кунжут)',
      price: '690',
      picture: '',
    },
    {
      name: 'Запечённый лосось с грибами',
      ingridients:
        '(Лосось, шиитаке, лук порей, соус масаго, лист салата, лимон, кунжут)',
      price: '690',
      picture: '',
    },
    {
      name: 'Гречневая лапша с говядиной',
      ingridients:
        '(Греч. лапша, говядина, баклажаны, цукини, шиитаке, соус терияки, соус ланч кинг, кимчи паста, огурец, томаты, кунжут)',
      price: '370',
      picture: '',
    },
    {
      name: 'Лапша Хурасами',
      ingridients:
        '(Рисовая лапша, лосось, шиитаки, соус терияки, лимон, кунжут)',
      price: '750',
      picture: '',
    },
    {
      name: 'Мидии запечённые',
      ingridients: '(Мидии, соус масаго, лист салата, лимон, кунжут)',
      price: '470',
      picture: '',
    },
    {
      name: 'Куриная грудка в сливочном соусе',
      ingridients:
        '(Куриная грудка, сливки, листья салата, огурец, помидоры черри, кунжут)',
      price: '450',
      picture: '',
    },
    {
      name: 'Свинина гриль с грибным соусом',
      ingridients:
        '(Свинина, баклажаны, цукини, шиитаке, айсберг, китайская капуста, сливки, соус тонкацу, кунжут)',
      price: '600',
      picture: '',
    },
    {
      name: 'Курица Терияки',
      ingridients:
        '(Куриное бедро в соусе терияки, рис, лист салата, томаты, огурец, морковь мар., кунжут)',
      price: '390',
      picture: '',
    },
    {
      name: 'Лапша «5 ароматов»',
      ingridients:
        '(Лапша удон, свинина, айсберг, соус терияки, паста кимчи, томаты, огурец, водоросли, кунжут)',
      price: '350',
      picture: '',
    },
    {
      name: 'Лапша удон с морепродуктами',
      ingridients:
        '(Лапша удон, гребешок, креветки, лосось, мидии, цукини, соус терияки, кимчи, лимон, кунжут)',
      price: '750',
      picture: '',
    },
    {
      name: 'Лосось Терияки',
      ingridients:
        '(Лосось в соусе терияки, рис, лист салата, огурец, морковь маар., лимон, кунжут)',
      price: '850',
      picture: '',
    },
    {
      name: 'Рис с курицей и овощами',
      ingridients:
        '(Куриное бедро, баклажаны, цукини, шиитаке, рис, соус терияки, соус тонкацу, огурец, томаты)',
      price: '370',
      picture: '',
    },
    {
      name: 'Шницель в соусе тонкацу',
      ingridients:
        '(Свинина в панировке, соус тонкацу, лист салата, огурец, томаты)',
      price: '360',
      picture: '',
    },
    {
      name: 'Морской окунь с тушёными овощами в сливочном соусе',
      ingridients:
        '(Окунь, баклажаны, цукини, шиитаке, сливки, листья салата, огурец, морковь мар., лимон, кунжут)',
      price: '550',
      picture: '',
    },
    {
      name: 'Японские пельмени с креветками (8 шт)',
      ingridients: '',
      price: '360',
      picture: '',
    },
    { name: 'Креветки Темпура', ingridients: '', price: '480', picture: '' },
    {
      name: 'Кольца кальмара в темпуре',
      ingridients: '',
      price: '380',
      picture: '',
    },
    {
      name: 'Шашлычки из тигровых креветок',
      ingridients: '(Креветки, соус терияки, кунжут)',
      price: '580',
      picture: '',
    },
    {
      name: 'Шашлычки из лосося «Якитори»',
      ingridients: '(Лосось, соус терияки, кунжут)',
      price: '850',
      picture: '',
    },
    {
      name: 'Куриные шашлычки «Якитори»',
      ingridients: '(Куриное бедро, шашлычный соус, кунжут)',
      price: '290',
      picture: '',
    },
    {
      name: 'Шницеля куриные',
      ingridients:
        '(Куриная грудка в пан., лист салата, огурец, помидоры черри, соус тонкацу) ',
      price: '350',
      picture: '',
    },
    {
      name: 'Куриная грудка с Филадельфией',
      ingridients:
        '(Куриная грудка в панировке, слив. сыр, паприка, лист салата, черри, огурец, соус тонкацу)',
      price: '540',
      picture: '',
    },
    {
      name: 'Тайская лапша с говядиной',
      ingridients:
        '(Яичная лапша, говядина, цукини, соус терияки, тайский соус, кунжут)',
      price: '350',
      picture: '',
    },
    {
      name: 'Тайская лапша со свининой',
      ingridients:
        '(Яичная лапша, свинина, цукини, соус терияки, тайский соус, кунжут)',
      price: '280',
      picture: '',
    },
    {
      name: 'Тайская лапша с курицей',
      ingridients:
        '(Яичная лапша, курица, цукини, соус терияки, тайский соус, кунжут)',
      price: '300',
      picture: '',
    },
  ],
  gruzia: [
    {
      name: 'Хинкали (1шт.)',
      ingridients: '(Тесто, свинина, говядина, перец черный, масло сливочное)',
      price: '80',
      picture: '',
    },
    { name: 'Чебуреки с сыром', ingridients: '', price: '130', picture: '' },
    { name: 'Чебуреки с мясом', ingridients: '', price: '130', picture: '' },
    {
      name: '«Гранд Равиоли»',
      ingridients: '(Тесто, филе лосося, сливки, лук, чесночно-сметанный соус)',
      price: '550',
      picture: '',
    },
    {
      name: 'Солянка по-грузински',
      ingridients: '(Говядина, лук, томат, бульон, кинза, специи)',
      price: '500',
      picture: '',
    },
    {
      name: '«Гирос»',
      ingridients:
        '(Тесто, чесночно-сметанный соус, бифштекс свино-говяжий, айсберг, огурцы солёные, лук красный, томаты, картофель фри)',
      price: '480',
      picture: '',
    },
    {
      name: 'Хачапури по-мегрельски',
      ingridients: '(Тесто, сыр сулугуни, масло сливочное)',
      price: '360',
      picture: '',
    },
    {
      name: 'Хачапури по-аджарски',
      ingridients: '(Тесто, сыр сулугуни, яйцо куриное, масло сливочное)',
      price: '360',
      picture: '',
    },
  ],
  dessert: [
    {
      name: 'Бананы темпура с мороженым',
      ingridients: '',
      price: '300',
      picture: '',
    },
    {
      name: 'Яблоки темпура с мороженым',
      ingridients: '',
      price: '300',
      picture: '',
    },
    {
      name: 'Японские пельмени с яблоком и корицей (5 шт.)',
      ingridients: '',
      price: '250',
      picture: '',
    },
    {
      name: 'Японские пельмени с персиком и тофу (5 шт.)',
      ingridients: '',
      price: '330',
      picture: '',
    },
    { name: 'Чизкейк с топпингом', ingridients: '', price: '220', picture: '' },
    { name: 'Фруктовая тарелка', ingridients: '', price: '300', picture: '' },
    {
      name: 'Японские блинчики с Филадельфией и апельсиновым соусом',
      ingridients: '',
      price: '250',
      picture: '',
    },
    {
      name: 'Блинчики с топпингом/сметаной на выбор',
      ingridients: '',
      price: '120',
      picture: '',
    },
    {
      name: 'Мороженое в ассортименте',
      ingridients: '',
      price: '80',
      picture: '',
    },
  ],
  child_menu: [
    {
      name: 'Котлетки с картофелем айдахо',
      ingridients: '(Котлеты свино-говяжьи, огурец, паприка, картофель айдахо)',
      price: '380',
      picture: '',
    },
    {
      name: 'Наггетсы с картофелем фри',
      ingridients:
        '(Куриная грудка в панировке, огурец, помидоры черри, кетчуп, картофель фри)',
      price: '350',
      picture: '',
    },
    {
      name: 'Супчик куриный',
      ingridients:
        '(Куриный бульон, филе куриное, картофель, вермишель, зелень, лук)',
      price: '200',
      picture: '',
    },
  ],
  pizza: [
    {
      name: 'Пепперони',
      ingridients: '',
      price: '500',
      picture: '',
    },
    {
      name: 'Маргарита',
      ingridients: '',
      price: '450',
      picture: '',
    },
    {
      name: 'Курица с грибами',
      ingridients: '',
      price: '500',
      picture: '',
    },
    {
      name: 'Карбонара',
      ingridients: '',
      price: '550',
      picture: '',
    },
    {
      name: 'Гренки с сыром',
      ingridients: '(Хлеб, сыр, чеснок, соль)',
      price: '200',
      picture: '',
    },
  ],
  garnish: [
    { name: 'Рис', ingridients: '', price: '80', picture: '' },
    { name: 'Картофель айдахо', ingridients: '', price: '130', picture: '' },
    { name: 'Картофель фри', ingridients: '', price: '120', picture: '' },
    { name: '"Булочка"', ingridients: '', price: '25', picture: '' },
    { name: 'Имбирь', ingridients: '', price: '50', picture: '' },
    { name: 'Чабрец', ingridients: '', price: '30', picture: '' },
    { name: 'Мята', ingridients: '', price: '50', picture: '' },
    { name: 'Лимон', ingridients: '', price: '50', picture: '' },
    { name: 'Ореховый соус', ingridients: '', price: '60', picture: '' },
    { name: 'Соус тонкацу', ingridients: '', price: '60', picture: '' },
    { name: 'Соус кимчи', ingridients: '', price: '60', picture: '' },
    { name: 'Острый соус', ingridients: '', price: '60', picture: '' },
    { name: 'Соевый соус', ingridients: '', price: '60', picture: '' },
    { name: 'Сметана', ingridients: '', price: '30', picture: '' },
    { name: 'Топпинг', ingridients: '', price: '40', picture: '' },
    { name: 'Томатный соус', ingridients: '', price: '60', picture: '' },
    { name: 'Соус унаги', ingridients: '', price: '60', picture: '' },
    { name: 'Дрессинг салатный', ingridients: '', price: '60', picture: '' },
    {
      name: 'Чесночно-сметанный соус',
      ingridients: '',
      price: '60',
      picture: '',
    },
    { name: 'Кисло-сладкий соус', ingridients: '', price: '60', picture: '' },
    { name: 'Соус сацебели', ingridients: '', price: '60', picture: '' },
    { name: 'Аджика', ingridients: '', price: '60', picture: '' },
  ],
}

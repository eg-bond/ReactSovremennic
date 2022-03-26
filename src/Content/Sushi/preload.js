const sushiElems = {
  default: [
    ['new', 'Новинки меню'],
    ['sushi', 'Суши'],
    ['rolls', 'Роллы'],
    ['black_rolls', 'Цветные/черные роллы'],
    ['hot_rolls', 'Запеченные роллы'],
    ['brand_rolls', 'Фирменные роллы'],
    ['mini_rolls', 'Мини-роллы'],
    ['sets', 'Наборы'],
    ['salads', 'Салаты'],
    ['soups', 'Супы'],
    ['hot_dishes', 'Горячие блюда'],
    ['garnish', 'Гарниры'],
    ['dessert', 'Десерты'],
    ['gruzia', 'Грузинская кухня'],
    ['pizza', 'Пицца'],
  ],
  special: [
    ['sushi', 'Суши'],
    ['rolls', 'Роллы'],
    ['black_rolls', 'Цветные/черные роллы'],
    ['hot_rolls', 'Запеченые роллы'],
    ['brand_rolls1', 'Фирменные роллы 1'],
    ['brand_rolls2', 'Фирменные роллы 2'],
    ['brand_rolls3', 'Фирменные роллы 3'],
    ['mini_rolls', 'Мини-роллы'],
    ['sets', 'Наборы'],
    ['salads', 'Салаты'],
    ['soups', 'Супы'],
    ['hot_dishes1', 'Горячие блюда 1'],
    ['hot_dishes2', 'Горячие блюда 2'],
    ['hot_dishes3', 'Горячие блюда 3'],
    ['hot_dishes4', 'Горячие блюда 4'],
    ['garnish', 'Гарниры'],
    ['dessert', 'Десерты'],
    ['gruzia', 'Грузинская кухня'],
    ['pizza', 'Пицца'],
  ],
  swiperKeys: ['brand_rolls', 'hot_dishes'],
  allPossibleSwiperKeys: [
    'brand_rolls',
    'brand_rolls1',
    'brand_rolls2',
    'brand_rolls3',
    'hot_dishes',
    'hot_dishes1',
    'hot_dishes2',
    'hot_dishes3',
    'hot_dishes4',
  ],
}

export let preloadImg = (imgKey, imgPreloaded) => {
  let key
  sushiElems.swiperKeys.includes(imgKey) ? (key = imgKey + '1') : (key = imgKey)
  return new Promise(res => {
    let img = new window.Image()
    img.src = `./Images/sushi/${key}.gif`
    img.onload = () => {
      imgPreloaded.current = true
      res()
    }
  })
}

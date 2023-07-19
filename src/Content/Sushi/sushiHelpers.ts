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

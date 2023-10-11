import kpDev from '@openmoviedb/kinopoiskdev_client'

const kp = new kpDev.KinopoiskDev('4BBWWAZ-50WM2T4-MNNXSER-3AE4PZC')

const { data } = await kp.movie.getById(4850225)
console.log(data)

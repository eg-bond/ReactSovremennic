import kpDev from '@openmoviedb/kinopoiskdev_client'
import { config } from './config.js'
const kp = new kpDev.KinopoiskDev(config.KP_DEV_TOKEN)

// needed movie ids
const ids = [4489198, 5047464, 5047468]
logAllMovies(ids)
//-----------------------------------------------------------

// log all desired movies data into console
function logAllMovies(ids) {
  const promises = []

  ids.forEach(id => promises.push(getMovieData(id)))

  Promise.all(promises).then(console.log)
}

// return necessary data in a form we need
async function getMovieData(id) {
  const { data } = await kp.movie.getById(id)

  const title = data?.name

  const kind = capitalizeFirstLetter(
    data?.genres?.map(genre => genre.name).join(', ')
  )

  const director = data?.persons
    ?.filter(person => person.enProfession === 'director')
    .map(person => person.name)
    .join(', ')

  const mLength = data?.movieLength
  const duration = `${mLength?.toString()} мин. / ${minutesToHours(mLength)}`

  const age = data?.ageRating ? data.ageRating.toString() + '+' : '-'

  const actors = data?.persons
    ?.filter(person => person.enProfession === 'actor')
    .map(person => person.name)
    .join(', ')

  const description = data?.description

  const finalData = {
    title,
    beginDate: 'с',
    endDate: '',
    kind,
    director,
    duration,
    age,
    actors,
    description,
    playerCode: '',
    link: '',
  }

  return finalData
}

//------------------------------------------------------
function capitalizeFirstLetter(string) {
  if (!string) return '-'
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function minutesToHours(minutes) {
  if (!minutes) return '-'
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return `0${hours}:${remainingMinutes}`
}

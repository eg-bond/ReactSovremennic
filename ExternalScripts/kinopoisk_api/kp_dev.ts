import kpDev from '@openmoviedb/kinopoiskdev_client'
import config from './config.ts'
const kp = new kpDev.KinopoiskDev(config.KP_DEV_TOKEN)

// needed movie ids
const ids = [4850225, 5376192]
logAllMovies(ids)
//-----------------------------------------------------------

// log all desired movies data into console
function logAllMovies(ids: number[]): void {
  const promises: Array<ReturnType<typeof getMovieData>> = []

  ids.forEach(id => promises.push(getMovieData(id)))

  Promise.all(promises).then(console.log)
}

// return necessary data in a form we need
async function getMovieData(id: number) {
  const { data } = await kp.movie.getById(id)

  const title = data?.name

  const kind = capitalizeFirstLetter(
    data?.genres?.map(genre => genre.name).join(', ')
  )

  const director = data?.persons
    ?.filter(person => person.enProfession === 'director')
    .map(person => person.name)
    .join(', ')

  const duration = data?.movieLength?.toString() + ' мин'

  const age = data?.ageRating?.toString() + '+'

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

//-------------------------
function capitalizeFirstLetter(string: string | undefined | null) {
  if (!string) return '-'
  return string.charAt(0).toUpperCase() + string.slice(1)
}

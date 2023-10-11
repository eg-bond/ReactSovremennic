import kpDev from '@openmoviedb/kinopoiskdev_client'
const kp = new kpDev.KinopoiskDev('4BBWWAZ-50WM2T4-MNNXSER-3AE4PZC')

// needed movie ids
const ids = [4850225, 5376192, 5135249, 4903012, 4959134]

ids.forEach(id => getMovieData(id))

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

  console.log(finalData)

  return { title, kind, director, duration, age, actors, description }
}

//-------------------------
function capitalizeFirstLetter(string: string | undefined | null) {
  if (!string) return '-'
  return string.charAt(0).toUpperCase() + string.slice(1)
}

import FilmsSpecial from './FilmsSpecial'
import { useAppSelector } from '../../REDUX/store'

function FilmsSpecialPage() {
  const { siteMode } = useAppSelector(state => state.special)
  return (
    <div className='content__gridLeftItem--3fr'>
      <FilmsSpecial siteMode={siteMode} />
    </div>
  )
}

export default FilmsSpecialPage

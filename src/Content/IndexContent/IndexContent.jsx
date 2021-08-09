import React from 'react'
import IndexAdvXS from '../../Template/IndexAdvXS'
import { Link } from 'react-router-dom'
import FilmsSpecial from '../FilmsSpecial/FilmsSpecial'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

function IndexContent({ siteMode, films, mobileQ, desktopQ }) {
  return (
    <div className='content__gridLeftItem--3fr'>
      {siteMode === 'default' && (
        <div className='trailers'>
          {mobileQ && <h4>Трейлеры</h4>}

          <div className='embed-responsive'>
            <LiteYouTubeEmbed
              id='PLfrc7TOjXulMiQWLR1Jr8ZiZ2b7hWqSZf'
              playlist={true}
              playlistCoverId='J53GH3Oc7uw'
              title='index_trailers_playlist'
              poster='maxresdefault'
            />
          </div>
        </div>
      )}

      <div className='separatorMobile separatorMobile--index' />

      <div className={'news'}>
        <h1 className={siteMode === 'special' ? 'index__h1--special' : ''}>
          Информация
        </h1>
        <p>• Расписание сеансов можно узнать по телефону 2-12-32</p>
        <p>
          • Суши-бар "КИН-НО" работает в полном объеме! Время работы:
          понедельник-четверг с 12:00 до 23:00, пятница-суббота с 12:00 до
          01:00, воскресенье с 12:00 до 23:00. Доставка осуществляется в часы
          работы ресторана, телефон 2-000-8, доставка бесплатная. Меню на
          <Link to='sushi' className='ref'>
            странице
          </Link>
          сайта и в группе
          <a
            href='https://vk.com/album-46510864_166402327'
            className='ref vk_ref'>
            Вконтакте
          </a>
        </p>
      </div>

      {siteMode === 'special' && desktopQ && <FilmsSpecial films={films} />}

      <div className='separatorMobile separatorMobile--index' />

      {mobileQ && <IndexAdvXS />}
    </div>
  )
}

export default IndexContent

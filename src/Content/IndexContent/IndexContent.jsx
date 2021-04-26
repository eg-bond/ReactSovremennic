import React from 'react'
import IndexAdvXS from '../../Template/IndexAdvXS'
import { NavLink } from 'react-router-dom'
import Films from '../Films/Films'

function IndexContent({ siteMode, films, Q }) {
  return (
    <div>
      <div className='separator' />

      <div className='container col-lg-9 col-md-9 col-sm-9 col-xs-12 padding_15xs'>
        {siteMode === 'default' && (
          <div className='trailers'>
            {Q.mobile && <h4>Трейлеры</h4>}

            <div className='embed-responsive embed-responsive-16by9'>
              <iframe
                className='embed-responsive-item'
                title='trailers_desktop'
                src='http://www.youtube.com/embed/PKSxTsuCQ4? ype=playlist&list=PLfrc7TOjXulMiQWLR1Jr8ZiZ2b7hWqSZf'
              />
            </div>
          </div>
        )}

        <div className='separator-xs' />

        <div className={'news'}>
          <h1>Информация</h1>
          <p>
            • Расписание сеансов можно узнать по телефону <b>2-12-32</b>
          </p>
          <p>
            • Суши-бар "КИН-НО" работает в полном объеме! <b>Время работы:</b>{' '}
            понедельник-четверг с 12:00 до 23:00, пятница-суббота с 12:00 до
            01:00, воскресенье с 12:00 до 23:00. Доставка осуществляется в часы
            работы ресторана, телефон 2-000-8, доставка бесплатная. Меню на{' '}
            <NavLink to='sushi' className={'vk_ref'}>
              странице
            </NavLink>{' '}
            сайта и в группе{' '}
            <a
              href='https://vk.com/album-46510864_166402327'
              className={'vk_ref'}>
              Вконтакте
            </a>
          </p>
        </div>

        {siteMode === 'special' && Q.desktop && (
          <Films films={films} page={'index'} />
        )}

        <div className='separator-xs' />
      </div>

      {Q.mobile && <IndexAdvXS />}
    </div>
  )
}

export default IndexContent

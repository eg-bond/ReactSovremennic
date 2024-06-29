import IndexAdvXS from '../../Template/IndexAdvXS';
import { Link } from 'react-router-dom';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import BarSlider from '../../Template/BarSlider';
import { useAppSelector } from '../../REDUX/store';
import { SushiWork } from '../../Template/SushiWork';

function IndexContent({ isMobile }: { isMobile: boolean }) {
  const { siteMode } = useAppSelector(state => state.special);

  return (
    <div className='content__gridLeftItem--3fr contentMT'>
      {siteMode === 'default' && (
        <div className='trailers'>
          {isMobile && <h4>Трейлеры</h4>}

          <div className='embed-responsive'>
            <LiteYouTubeEmbed
              id='RJbl-Sqe7U8'
              title='index_trailer'
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

        <p>• Расписание сеансов можно узнать по телефону: 2-12-32</p>
        <p>
          • Бар "КИН-НО". Время работы: понедельник - четверг с 12:00 до 23:00,
          пятница - суббота с 12:00 до 01:00, воскресенье с 12:00 до 23:00.
          Доставка осуществляется в часы работы ресторана, телефон:{' '}
          <span style={{ display: 'inline-block' }}>+7-992-177-24-11.</span>{' '}
          Меню на
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
        <p>
          • Уважаемые посетители кинотеатра! Показ последнего сеанса
          осуществляется только от трех человек.
        </p>
      </div>

      <div className='separatorMobile separatorMobile--index' />
      {isMobile && <IndexAdvXS />}

      <div className='separatorMobile separatorMobile--index' />
      {isMobile && <SushiWork />}

      <div className='separatorMobile separatorMobile--index' />
      <BarSlider />
    </div>
  );
}

export default IndexContent;

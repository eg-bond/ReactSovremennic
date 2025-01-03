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
            <iframe
              src={`https://vkvideo.ru/video_ext.php?oid=-215783732&id=456240278`}
              width='640'
              height='360'
              allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'></iframe>
          </div>
        </div>
      )}

      <div className='separatorMobile separatorMobile--index' />

      <div className={'news'}>
        <h1 className={siteMode === 'special' ? 'index__h1--special' : ''}>
          Информация
        </h1>

        <p>
          • Уважаемые посетители кинотеатра! На странице{' '}
          <Link to='seance' style={{ textDecoration: 'none' }} className='ref'>
            "Расписание"
          </Link>{' '}
          появилась функция онлайн продаж билетов на сеанс!
        </p>
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

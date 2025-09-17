import { Link } from 'react-router-dom';
import { MobileAdv } from '@/Template/Adv';
import { convertVideoId } from '@/utils/convertVideoId';
import BarSlider from '../../Template/BarSlider';
import { useAppSelector } from '../../REDUX/store';
import { SushiWork } from '../../Template/SushiWork';

function IndexContent({ isMobile }: {
  isMobile: boolean;
}) {
  const { siteMode } = useAppSelector(state => state.special);

  return (
    <div className="content__gridLeftItem--3fr contentMT">
      {siteMode === 'default' && (
        <div className="trailers">
          {isMobile && <h4>Трейлеры</h4>}

          <div className="embed-responsive">
            <iframe
              allow={
                'encrypted-media; fullscreen; ' +
                'picture-in-picture; screen-wake-lock;'
              }
              src={`https://vkvideo.ru/video_ext.php?oid=-${convertVideoId(
                '227596514_456241987',
              )}`}
              height="360"
              width="640"
            >
            </iframe>
          </div>
        </div>
      )}

      <div className="separatorMobile separatorMobile--index" />

      <div className="news">
        <h1 className={siteMode === 'special' ? 'index__h1--special' : ''}>
          Информация
        </h1>
        <p>
          • Уважаемые гости кинотеатра! На странице
          {' '}
          <Link className="ref" style={{ textDecoration: 'none' }} to="seance">
            "Расписание"
          </Link>
          {' '}
          появилась функция онлайн продаж билетов на сеанс!
        </p>
        <p>• Расписание сеансов можно узнать по телефону: 2-12-32</p>
        <p>
          • Бар "КИН-НО". Время работы: понедельник - четверг с 12:00 до 23:00,
          пятница - суббота с 12:00 до 01:00, воскресенье с 12:00 до 23:00.
          Доставка осуществляется в часы работы ресторана, телефон:
          {' '}
          <span style={{ display: 'inline-block' }}>+7-992-177-24-11.</span>
          {' '}
          Меню на
          <Link className="ref" to="sushi">
            странице
          </Link>
          сайта и в группе
          <a
            className="ref vk_ref"
            href="https://vk.com/album-46510864_166402327"
          >
            Вконтакте
          </a>
        </p>
        <p>
          • Уважаемые посетители кинотеатра! Показ последнего сеанса
          осуществляется только от трех человек.
        </p>
      </div>

      <div className="separatorMobile separatorMobile--index" />
      {isMobile && <MobileAdv />}

      <div className="separatorMobile separatorMobile--index" />
      {isMobile && <SushiWork />}

      <div className="separatorMobile separatorMobile--index" />
      <BarSlider />
    </div>
  );
}

export default IndexContent;

import { Link } from 'react-router-dom';
import { MobileAdv } from '@/components/Adv';
import { CINEMA_PHONE } from '@/utils/constants';
import { SushiWork } from '@/components/SushiWork';
import { BarSlider } from '@/components/BarSlider';
import { VkVideoEmbed } from '@/components/VkVideoEmbed';
import { SeparatorMobile } from '@/components/SeparatorMobile';
import * as s from './IndexContent.css.ts';
import type { SpecialStateT } from '@/types/special';

function IndexContent({ isMobile, siteMode }: {
  isMobile: boolean;
  siteMode: SpecialStateT['siteMode'];
}) {
  return (
    <div className="content__gridLeftItem--3fr contentMT">
      {siteMode === 'default' && (
        <div className={s.trailers}>
          {isMobile && <h4>Трейлеры</h4>}
          <VkVideoEmbed videoId="31575153_456245341" />
        </div>
      )}

      <SeparatorMobile variant="index" />

      <div className={s.news}>
        <h1 className={siteMode === 'special' ? s.h1Special : ''}>
          Информация
        </h1>

        <p>
          • Уважаемые гости кинотеатра! На странице
          {' '}
          <Link className={s.ref} style={{ textDecoration: 'none' }} to="seance">
            "Расписание"
          </Link>
          {' '}
          появилась функция онлайн продаж билетов на сеанс!
        </p>
        <p>
          • Расписание сеансов можно узнать по телефону:
          <span style={{ whiteSpace: 'nowrap' }}>{CINEMA_PHONE}</span>
        </p>
        <p>
          • Бар "КИН-НО". Время работы: понедельник - четверг с 12:00 до 23:00,
          пятница - суббота с 12:00 до 01:00, воскресенье с 12:00 до 23:00.
          Доставка осуществляется в часы работы ресторана, телефон:
          {' '}
          <span style={{ display: 'inline-block' }}>+7-992-177-24-11.</span>
          {' '}
          Меню на
          <Link className={s.ref} to="sushi">
            странице
          </Link>
          сайта и в группе
          <a
            className={`${s.ref} ${s.vkRef}`}
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

      <SeparatorMobile variant="index" />
      <BarSlider />

      <SeparatorMobile variant="index" />
      {isMobile && <MobileAdv />}

      <SeparatorMobile variant="index" />
      {isMobile && <SushiWork />}

    </div>
  );
}

export default IndexContent;

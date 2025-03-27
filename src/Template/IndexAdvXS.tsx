import { Link } from 'react-router-dom';
import AdvSlider from './AdvSlider';
import AdvSlider2 from './AdvSlider2';

function IndexAdvXS() {
  return (
    <div className="container" data-testid="mobile_adv">
      <div className="indexAdvXS">
        <div className="indexAdvXS__item1">
          <AdvSlider />
          {/* <div className="indexAdvXS__item1__imgCont skeleton">
            <Link to="/sushi">
              <img alt="sushi" src="Images/sushi_adv.webp" />
            </Link>
          </div> */}
        </div>

        <div className="indexAdvXS__item1_2">
          <AdvSlider2 />
          {/* <a className="linkWrapper" href="https://lotten.ru" tabIndex={2}>
            <div className="indexAdvXS__item1__imgCont skeleton">
              <img
                alt="lotten кадастровые услуги"
                src="Images/lotten_adv.webp"
              />
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default IndexAdvXS;

import AdvSlider from './AdvSlider';
import AdvSlider2 from './AdvSlider2';

function IndexAdvXS() {
  return (
    <div className="container" data-testid="mobile_adv">
      <div className="indexAdvXS">
        <div className="indexAdvXS__item1">
          <AdvSlider />
        </div>

        <div className="indexAdvXS__item1_2">
          <AdvSlider2 />
        </div>
      </div>
    </div>
  );
}

export default IndexAdvXS;

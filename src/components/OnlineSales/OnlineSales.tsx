import jsonSchedule from './schedule.json';

export const OnlineSales = () => {
  console.log(jsonSchedule);

  return (
    <div>
      <button data-action='open-widget' style={{ color: 'black' }}>
        Купить билеты
      </button>
    </div>
  );
};

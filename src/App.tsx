import './SCSS/style.scss';
import { useState, useEffect } from 'react';

const App = () => {
  const [redirectTimer, setRedirectTimer] = useState(10);

  // Redirect countdown timer
  useEffect(() => {
    if (redirectTimer > 0) {
      const timerId = setTimeout(() => {
        setRedirectTimer(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      window.location.href = 'https://sovremenniksbor.ru';
    }
  }, [redirectTimer]);

  return (
    <div>
      {/* Discclaimer banner */}
      <div
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '12px 16px',
          textAlign: 'center',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          lineHeight: '1.4',
          fontWeight: '400',
          fontFamily: '\'Inter\', \'Roboto\', \'Arial\', sans-serif',
          position: 'relative',
          zIndex: '1000',
        }}
      >
        <span style={{ display: 'block', marginBottom: '4px' }}>
          ⚠️ Уважаемые посетители кинотеатра "Современник"!
        </span>
        <span style={{ display: 'block', marginBottom: '4px' }}>
          Сайт кинотеатра переехал на новый домен:
        </span>
        <a
          style={{
            color: '#fff',
            textDecoration: 'underline',
            fontWeight: '600',
            whiteSpace: 'nowrap',
          }}
          href="https://sovremenniksbor.ru"
          rel="noopener noreferrer"
          target="_blank"
        >
          sovremenniksbor.ru
        </a>
      </div>
      <div
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '10px 16px 12px',
          textAlign: 'center',
          width: '100%',
          boxSizing: 'border-box',
          fontSize: 'clamp(13px, 2.2vw, 15px)',
          lineHeight: '1.3',
          fontWeight: '400',
          fontFamily: '\'Inter\', \'Roboto\', \'Arial\', sans-serif',
          position: 'relative',
          zIndex: '999',
          borderTop: '1px solid #333',
        }}
      >
        <span>Вы будете автоматически перенаправлены на </span>
        <a
          style={{
            color: '#fff',
            textDecoration: 'underline',
            fontWeight: '600',
          }}
          href="https://sovremenniksbor.ru"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://sovremenniksbor.ru
        </a>
        <span> через </span>
        <span
          style={{
            display: 'inline-block',
            minWidth: '24px',
            fontWeight: '700',
            fontSize: 'clamp(14px, 2.5vw, 17px)',
            color: '#ff6b6b',
            textAlign: 'center',
          }}
        >
          {redirectTimer}
        </span>
        <span> секунд</span>
      </div>
      <div>
      </div>
    </div>
  );
};

export default App;

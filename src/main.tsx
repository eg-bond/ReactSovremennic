import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './REDUX/store';
import { ModalProvider } from './contexts/ModalContext';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <HashRouter>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </HashRouter>,
);

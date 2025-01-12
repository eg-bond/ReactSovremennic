import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './REDUX/store';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
);

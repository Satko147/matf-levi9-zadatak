import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from "./store/configureStore";
import { ConnectedRouter } from "connected-react-router";
import history from "./utils/history";
import { routes } from "./routes";

const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <App routes={routes.all}/>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);


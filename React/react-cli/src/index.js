import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import createApp from './app/init/createApp';
import createStore from './app/init/createStore';

import 'antd/dist/antd.css';

const { store, history } = createStore(createBrowserHistory(), {});
const application = createApp(store, history);
// initClient(store.dispatch);

ReactDOM.render(application, window.document.getElementById('app'));

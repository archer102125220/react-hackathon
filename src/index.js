import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './index.css';

// 引入 redux 的組件
import { Provider } from 'react-redux';
// 引入 redux 的 store(資料儲存池)
import { createStore } from 'redux';
// 引入自己的 reducers(自己定義的資料名稱及對應方法，詳細看./reducers/index.js)
import rootReducer from './reducers';

//引入自己的i18n萬國語系設定檔案
import './i18n';

import App from './App';
import * as serviceWorker from './serviceWorker';


// 建立 store 儲存區
const store = createStore(
    rootReducer,
    // 用在擴充套件的追蹤檢視
    // https://github.com/zalmoxisus/redux-devtools-extension#usage
    // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

//./components/ShoppingHeader.js內有抓取資料說明


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

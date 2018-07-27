import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './assets/scss/index.scss';

// require('./assets/scss/index.scss');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

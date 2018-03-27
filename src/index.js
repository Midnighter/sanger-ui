import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {configure} from 'mobx';

configure({enforceActions: true, computedRequiresReaction: true});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

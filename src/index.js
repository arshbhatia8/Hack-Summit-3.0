import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="ebfe96c7-5c7f-4121-8f40-359cd8ec0e96" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>, 
    document.getElementById('root')
);
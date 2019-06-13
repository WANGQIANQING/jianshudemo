import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style';
import {GlobalIconFont} from './statics/iconfont/iconfont';
import App from './App';

ReactDOM.render(
    <Fragment>
        <GlobalStyle/>
        <GlobalIconFont/>
        <App/>
    </Fragment>
    , document.getElementById('root'));


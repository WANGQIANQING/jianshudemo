import React from 'react';
import Header from './common/header/index';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Home}/>
                        <Route path='/detail' exact component={Detail}/>
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;

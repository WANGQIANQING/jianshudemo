import React from 'react';
import Header from './common/header/index';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/detail/:id' exact component={Detail}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

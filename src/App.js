import React from 'react';
import Header from './common/header/index';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/write' exact component={Write}/>
                    <Route path='/detail/:id' exact component={Detail}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

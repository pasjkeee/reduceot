import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import {Route} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`, minHeight: '100vh' }} className="app">
            <AppHeader total={50}/>
            <Route path='/' exact component={MainPage}/>
            <Route path='/item/:id' render={
            ()=> <ItemPage/>
            }/>
            <Route path='/cart' exact component={CartPage}/>
        </div>
    )
}

export default App;
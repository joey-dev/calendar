import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calendar from './containers/Calendar/Calendar';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Calendar}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

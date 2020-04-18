import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/layouts/Layout/Layout';
import Calendar from './pages/Calendar/Calendar';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Calendar}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

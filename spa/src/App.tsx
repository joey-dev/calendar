import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Calendar from './pages/Calendar/Calendar';
import Layout from './components/layouts/Layout/Layout';

const App: React.FC = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={Calendar}/>
            </Switch>
        </Layout>
    );
};

export default App;

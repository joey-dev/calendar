import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Calendar from './pages/Calendar/Calendar';
import Layout from './components/layouts/Layout/Layout';
import { connect } from 'react-redux';
import { authCheckState } from './store/auth/Action';

type Props = {
    onTryAutoSignUp: () => void;
}

const App: React.FC<Props> = (props: Props) => {
    const {onTryAutoSignUp} = props;

    useEffect(() => {
        onTryAutoSignUp()
    }, [onTryAutoSignUp])

    return (
        <Layout>
            <Switch>
                <Route path="/login"
                    exact
                    component={Login}
                />
                <Route path="/"
                    exact
                    component={Calendar}
                />
            </Switch>
        </Layout>
    );
};

type DispatchPropsArgs = {
    type: string;
};

const mapDispatchToProps = (dispatch: (arg0: DispatchPropsArgs) => void) => {
    return {
        onTryAutoSignUp: () => dispatch(authCheckState()),
    };
};

export default connect(null, mapDispatchToProps)(App);

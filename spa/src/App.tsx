import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Calendar from './pages/Calendar/Calendar';
import Layout from './components/layouts/Layout/Layout';
import { connect } from 'react-redux';
import { authCheckState } from './store/auth/Action';
import { AuthStoreState } from './store/auth/Index';

type Props = {
    onTryAutoSignUp: () => void;
    isAuthenticated: boolean;
};

const App: React.FC<Props> = (props: Props) => {
    const { onTryAutoSignUp } = props;

    useEffect(() => {
        onTryAutoSignUp();
    }, [onTryAutoSignUp]);

    return (
        <Layout>
            {props.isAuthenticated ? (
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/" exact component={Calendar} />
                </Switch>
            ) : (
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Redirect to="/login" />
                </Switch>
            )}
        </Layout>
    );
};

type StateProps = {
    auth: AuthStoreState;
};

const mapStateToProps = (state: StateProps) => {
    return {
        isAuthenticated: state.auth.userId !== null,
    };
};

type DispatchPropsArgs = {
    type: string;
};

const mapDispatchToProps = (dispatch: (arg0: DispatchPropsArgs) => void) => {
    return {
        onTryAutoSignUp: () => dispatch(authCheckState()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

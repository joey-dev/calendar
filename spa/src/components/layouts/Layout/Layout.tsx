import React from 'react';
import Header from '../../../atomic/templates/layout/Header';
import { connect } from 'react-redux';
import { AuthStoreState } from '../../../store/auth/Index';

type Props = {
    isAuthenticated: boolean;
};

const Layout: React.FC<Props> = props => {
    return (
        <div>
            {props.isAuthenticated ? <Header /> : null}
            {props.children}
        </div>
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

export default connect(mapStateToProps)(Layout);

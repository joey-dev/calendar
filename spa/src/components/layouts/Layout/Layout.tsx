import React from 'react';
import Header from '../../../atomic/templates/layout/Header';

const Layout: React.FC = props => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;

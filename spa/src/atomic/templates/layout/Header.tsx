import React, { Component } from 'react';
import ProfilePicture from '../../atoms/profile/ProfilePicture';

class Header extends Component {
    openProfileHandler = () => {};

    render() {
        return (
            <div>
                <ProfilePicture aligned={'right'} clicked={this.openProfileHandler} />
            </div>
        );
    }
}

export default Header;

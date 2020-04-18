import React, { Component } from 'react';
import ProfilePicture from '../../atoms/profile/ProfilePicture';

class Header extends Component {
    openProfileHandler = () => {

    }

    render() {
        return (
            <div>
                <ProfilePicture
                    clicked={this.openProfileHandler}
                />
            </div>
        );
    }
}

export default Header;

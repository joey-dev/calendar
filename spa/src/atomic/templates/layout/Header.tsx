import React from 'react';
import ProfilePicture from '../../atoms/profile/ProfilePicture';

const Header: React.FC = () => {
    const openProfileHandler = () => {};

    return (
        <div>
            <ProfilePicture aligned={'right'} clicked={openProfileHandler} />
        </div>
    );
};

export default Header;

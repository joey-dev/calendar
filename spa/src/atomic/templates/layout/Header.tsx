import React from 'react';
import ProfilePicture from '../../atoms/profile/ProfilePicture';
import styled from 'styled-components';

const OuterDiv = styled.div`
    width: 100%;
`;

const Header: React.FC = () => {
    const openProfileHandler = () => {};

    return (
        <OuterDiv>
            <h1>Hello, name</h1>
            <ProfilePicture aligned={'right'} clicked={openProfileHandler} />
        </OuterDiv>
    );
};

export default Header;

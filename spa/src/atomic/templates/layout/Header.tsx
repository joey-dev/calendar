import React from 'react';
import ProfilePicture from '../../atoms/profile/ProfilePicture';
import styled from 'styled-components';
import { AuthStoreState } from '../../../store/auth/Index';

const OuterDiv = styled.div`
    width: 100%;
    overflow: hidden;
`;

const StyledH1 = styled.h1`
    display: inline-block; 
`;

const Header: React.FC = () => {
    const openProfileHandler = () => {};

    return (
        <OuterDiv>
            <StyledH1>Hello, name</StyledH1>
            <ProfilePicture aligned={'right'} clicked={openProfileHandler} />
        </OuterDiv>
    );
};

type State = {
    auth: AuthStoreState;
}

const mapStateToProps = (state: State) => {

}

export default Header;

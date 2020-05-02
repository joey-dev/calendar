import React from 'react';
import ProfilePicture from '../../atoms/profile/ProfilePicture';
import styled from 'styled-components';
import { AuthStoreState } from '../../../store/auth/Index';
import { connect } from 'react-redux';

const OuterDiv = styled.div`
    width: 100%;
    overflow: hidden;
`;

const StyledH1 = styled.h1`
    display: inline-block;
`;

type Props = {
    username?: string;
};

const Header: React.FC<Props> = (props: Props) => {
    const openProfileHandler = () => {};

    return (
        <OuterDiv>
            <StyledH1>Hello, {props.username}</StyledH1>
            <ProfilePicture aligned={'right'} clicked={openProfileHandler} />
        </OuterDiv>
    );
};

type State = {
    auth: AuthStoreState;
};

const mapStateToProps = (state: State) => {
    return {
        username: state.auth.user?.username,
    };
};

export default connect(mapStateToProps)(Header);

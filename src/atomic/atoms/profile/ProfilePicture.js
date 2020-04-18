import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    cursor: ${props => props.isClickable ? 'pointer' : 'default'}
    border-radius: 20px;
    overflow: hidden;
`;

const ProfilePicture = (props) => {
    const imageName = props.image ? props.image : 'noPicture.jpeg';
    const images = require.context('../../../assets/images/profilePictures', true)
    const image = images('./' + imageName);

    return (
        <StyledDiv>
            <img
                src={image}
                alt="Your profile"
                onClick={props.clicked}
            />
        </StyledDiv>
    );
};

ProfilePicture.propTypes = {
    isClickable: PropTypes.bool,
    clicked: PropTypes.func,
};

export default ProfilePicture;

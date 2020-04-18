import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const sideToBeAligned = (props) => {
    switch (props.aligned) {
        case 'right':
            return 'right';
        case 'left':
            return  'left';
        case 'center':
            return 'center';
        default:
            return 'inherit'
    }
};

const StyledDiv = styled.div`
    cursor: ${props => props.isClickable ? 'pointer' : 'default'};
    overflow: hidden;
    text-align: ${props => sideToBeAligned(props)};
`;

const StylesImg = styled.img`
    width: 100px;
    border-radius: 20px;
`;

const ProfilePicture = (props) => {
    const imageName = props.image ? props.image : 'noPicture.jpeg';
    const images = require.context('../../../assets/images/profilePictures', true)
    const image = images('./' + imageName);

    return (
        <StyledDiv
            aligned={props.aligned}
        >
            <StylesImg
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

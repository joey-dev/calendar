import React from 'react';
import styled from 'styled-components';

const sideToBeAligned = (aligned: string): string => {
    switch (aligned) {
        case 'right':
            return 'right';
        case 'left':
            return 'left';
        case 'center':
            return 'center';
        default:
            return 'inherit';
    }
};

type StyledDivProps = {
    aligned: string;
    isClickable?: boolean;
};

const StyledDiv = styled.div<StyledDivProps>`
    cursor: ${props => (props.isClickable ? 'pointer' : 'default')};
    overflow: hidden;
    text-align: ${props => sideToBeAligned(props.aligned)};
`;

const StylesImg = styled.img`
    width: 100px;
    border-radius: 20px;
`;

type Props = {
    image?: string;
    aligned: string;
    clicked: (event: React.MouseEvent<HTMLElement>) => void;
};

const ProfilePicture: React.FC<Props> = props => {
    const imageName = props.image ? props.image : 'noPicture.jpeg';
    const images = require.context('../../../assets/images/profilePictures', true);
    const image = images('./' + imageName);

    return (
        <StyledDiv aligned={props.aligned}>
            <StylesImg src={image} alt="Your profile" onClick={props.clicked} />
        </StyledDiv>
    );
};

export default ProfilePicture;

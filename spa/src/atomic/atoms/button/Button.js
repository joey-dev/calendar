import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    width: 50px
`;

const Button = (props) => {

    const buttonType = props.type ? props.type : 'button';

    return (
        <StyledButton
            type={buttonType}
        >
            {props.children}
        </StyledButton>
    );
};

export default Button;

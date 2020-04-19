import React from 'react';
import styled from 'styled-components';


const StyledLabel = styled.label`
    width: 100%;
    text-transform: capitalize;
`;

const Label = (props) => {
    return (
        <StyledLabel htmlFor={props.for}>
            {props.children}
        </StyledLabel>
    );
};

export default Label;

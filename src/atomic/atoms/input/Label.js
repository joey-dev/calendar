import React from 'react';
import styled from 'styled-components';


const StyledLabel = styled.label`
    width: 100%;
`;

const Label = (props) => {
    return (
        <StyledLabel for={props.for}>
            {props.children}
        </StyledLabel>
    );
};

export default Label;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
    width: 100%;
`;

const StyledTextarea = styled.input`
    width: 100%;
`;

const Input = (props) => {

    let inputType;

    switch (props.type) {
        case 'text':
        case 'email':
        case 'password':
            inputType = 'input';
            break;
        case 'textarea':
            inputType = 'textarea';
            break;
        default:
            inputType = 'input';
    }

    return (
        {inputType === 'input' ? (
            <StyledInput

            />
        ) : (
            <StyledTextarea

            />
        )}
    )
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
export default Input;

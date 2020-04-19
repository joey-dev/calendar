import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
    width: 100%;
`;

const StyledTextarea = styled.textarea`
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

    const itemsToAddToInput = {
        name: props.name,
        id: props.name,
        onChange: props.changed,
    }


    const input = (inputType === 'input' ? (
        <StyledInput
            type={props.type}
            {...itemsToAddToInput}
        />
    ) : (
        <StyledTextarea
            {...itemsToAddToInput}
        />
    ))

    return (
        <Fragment>
            {input}
        </Fragment>
    )
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    clicked: PropTypes.func,
};
export default Input;

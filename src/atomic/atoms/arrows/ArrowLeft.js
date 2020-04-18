import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const StyledSpan = styled.span`
    margin: ${(props) => props.spacing ? '0 10px 0 10px' : '0'};
    
    &:hover {
        cursor: pointer;
    }
`;

const ArrowLeft = (props) => {
    return (
        <StyledSpan
            spacing={props.spacing.toString()}
            onClick={props.onClick}
        >            &#60;
        </StyledSpan>
    );
};

ArrowLeft.propTypes = {
    spacing: PropTypes.bool,
};

export default ArrowLeft;

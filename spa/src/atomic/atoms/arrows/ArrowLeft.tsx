import React from 'react';
import styled from 'styled-components';

type Props = {
    spacing: boolean;
    onClick: () => void;
};

type StyledSpanProps = {
    spacing: boolean;
};

const StyledSpan = styled.span<StyledSpanProps>`
    margin: ${props => (props.spacing ? '0 10px 0 10px' : '0')};

    &:hover {
        cursor: pointer;
    }
`;

const ArrowLeft: React.FC<Props> = props => {
    return (
        <StyledSpan spacing={props.spacing} onClick={props.onClick}>
            &#60;
        </StyledSpan>
    );
};

export default ArrowLeft;

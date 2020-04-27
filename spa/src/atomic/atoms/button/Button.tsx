import React from 'react';
import styled from 'styled-components';

type Props = {
    type: string;
};

const StyledButton = styled.button`
    width: 50px;
`;

const Button: React.FC<Props> = props => {
    return <StyledButton type="button">{props.children}</StyledButton>;
};

export default Button;

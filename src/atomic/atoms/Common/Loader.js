import React from 'react';
import styled, { keyframes } from 'styled-components';


const ldsDualRingKeyframe = keyframes`
    0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
`;

const StyledDiv = styled.div`
    position: relative;
    transform: translate(calc(50% - 40px), calc(50% - 40px));
`;

const StyledLoader = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    &:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid black;
      border-color: black transparent black transparent;
      animation: ${ldsDualRingKeyframe} 1.2s linear infinite;
    }
`;

const Loader = () => {
    return (
        <StyledDiv>
            <StyledLoader />
        </StyledDiv>
    );
};

export default Loader;

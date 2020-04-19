import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    text-align: center;
`;

const CalendarWeekDayText = (props) => {
    return (
        <StyledP>
            {props.children}
        </StyledP>
    );
};

export default CalendarWeekDayText;

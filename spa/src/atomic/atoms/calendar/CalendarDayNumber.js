import React from 'react';
import styled from 'styled-components';

const StyledDayNumber = styled.p`
    margin-top: 5px;
    text-align: center;
    color: ${(props) => props.thisMonth ? 'black' : 'grey'}
`;

const CalendarDayNumber = (props) => {
    return (
        <StyledDayNumber thisMonth={props.thisMonth}>
            {props.children}
        </StyledDayNumber>
    );
};

export default CalendarDayNumber;

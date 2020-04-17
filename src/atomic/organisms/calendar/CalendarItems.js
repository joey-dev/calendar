import React from 'react';
import styled from 'styled-components';
import CalendarItem from '../../modecules/calendar/CalendarItem';


const StyledContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr); 
`;

const CalendarItems = (props) => {
    return (
        <StyledContainer>
            {props.dates.map((date, index) => (
                <CalendarItem key={index} day={date.day} thisMonth={date.thisMonth} items={date.items} />
            ))}
        </StyledContainer>
    );
};

export default CalendarItems;

import React from 'react';
import styled from 'styled-components';
import CalendarDateItem from '../../atoms/calendar/CalendarDateItem';

const MyComponent = (props) => {
    const StyledDiv = styled.div`
        border: 1px solid black;
    `;

    const StyledDayNumber = styled.p`
        margin-top: 5px;
        text-align: center;
        color: ${props.thisMonth ? 'black' : 'grey'}
    `;

    const allDateItems = props.items.map((dateItem, index) => (
        <CalendarDateItem key={index} time={dateItem.time} colouredBackground={index % 2 === 0}>
            {dateItem.title}
        </CalendarDateItem>
    ));

    return (
        <StyledDiv>
            <StyledDayNumber>{props.day}</StyledDayNumber>
            {allDateItems}
        </StyledDiv>
    );
};

export default MyComponent;

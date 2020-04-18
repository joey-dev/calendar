import React from 'react';
import styled from 'styled-components';
import CalendarDateItem from '../../atoms/calendar/CalendarDateItem';
import CalendarDayNumber from '../../atoms/calendar/CalendarDayNumber';

const StyledDiv = styled.div`
    border: 1px solid black;
`;

const CalendarItem = (props) => {
    let allDateItems;
    if (props.items && props.items.length > 0) {
        allDateItems = props.items.map((dateItem, index) => (
            <CalendarDateItem
                key={index}
                time={dateItem.time}
                colouredBackground={index % 2 === 0}
            >
                {dateItem.title}
            </CalendarDateItem>
        ));
    }

    return (
        <StyledDiv>
            <CalendarDayNumber thisMonth={props.thisMonth}>{props.day}</CalendarDayNumber>
            {allDateItems}
        </StyledDiv>
    );
};

export default CalendarItem;

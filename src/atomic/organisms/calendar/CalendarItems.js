import React from 'react';
import CalendarRowContainer from '../../atoms/calendar/CalendarRowContainer';
import CalendarItem from '../../modecules/calendar/CalendarItem';


const CalendarItems = (props) => {
    const thisMonth = new Date().getMonth();

    return (
        <CalendarRowContainer>
            {props.dates.map((date, index) => (
                <CalendarItem
                    key={index}
                    day={date.date.day}
                    thisMonth={date.date.month === thisMonth}
                    items={date.items}
                />
            ))}
        </CalendarRowContainer>
    );
};

export default CalendarItems;

import React from 'react';
import CalendarRowContainer from '../../atoms/calendar/CalendarRowContainer';
import CalendarItem from '../../modecules/calendar/CalendarItem';
import { FormattedDate } from '../../../interfaces/Date';

type Props = {
    thisMonth: number;
    dates: FormattedDate[];
};

const CalendarItems: React.FC<Props> = props => {
    return (
        <CalendarRowContainer>
            {props.dates.map((date, index) => (
                <CalendarItem
                    key={index}
                    day={date.day}
                    thisMonth={date.month === props.thisMonth}
                    items={date.items}
                />
            ))}
        </CalendarRowContainer>
    );
};

export default CalendarItems;

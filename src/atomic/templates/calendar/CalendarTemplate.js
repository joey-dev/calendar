import React from 'react';
import CalendarItems from '../../organisms/calendar/CalendarItems';

const CalendarTemplate = (props) => {
    let daysOfThisCalendar = [];
    let daysOfThisWeek = [];

    if (props.dates[props.keyOfSelectedMonth][0].date.weekDay === "Monday") {
        for (let dayKey = 0; dayKey < 7; dayKey++) {
            daysOfThisWeek.push(props.dates[props.keyOfSelectedMonth][dayKey].date);
        }
    } else {
        const datePropOfLastMonth = props.dates[props.keyOfSelectedMonth - 1];
        const totalDaysOfLastMoney = datePropOfLastMonth.length
        let dateOfLatestMonday;

        for (let day = totalDaysOfLastMoney; day > 0; day--) {
            const datePropOfThisDay = datePropOfLastMonth[day - 1].date;
            if (datePropOfThisDay.weekDay === "Monday") {
                dateOfLatestMonday = new Date(datePropOfThisDay.year, datePropOfThisDay.month, datePropOfThisDay.day);
                break;
            }
        }

        for (let day = dateOfLatestMonday.getDate(); day <= totalDaysOfLastMoney; day++) {
            daysOfThisWeek.push(datePropOfLastMonth[day - 1].date);
        }

        const totalDaysAdd = 7 - daysOfThisWeek.length;
        for (let dayKey = 0; dayKey < totalDaysAdd; dayKey++) {
            daysOfThisWeek.push(props.dates[props.keyOfSelectedMonth][dayKey].date);
        }
    }
    daysOfThisCalendar.push(daysOfThisWeek);
    daysOfThisWeek = [];
    console.log(daysOfThisCalendar);
    // Loop through the other days of the weeks, until we have 5 weeks/arrays

    return (
        <div>
            {/*<CalendarItems />*/}
        </div>
    );
};

export default CalendarTemplate;

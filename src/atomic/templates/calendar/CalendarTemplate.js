import React from 'react';
import CalendarItems from '../../organisms/calendar/CalendarItems';
import CalendarMonthRow from '../../organisms/calendar/CalendarMonthRow';
import CalendarWeekDaysText from '../../organisms/calendar/CalendarWeekDaysText';
import styled from 'styled-components';


const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr; 
    grid-gap: 5%;
    margin: 5%;
`;

const CalendarTemplate = (props) => {
    let daysOfThisCalendar = [];
    let daysOfThisWeek = [];
    let keyOfUsedLastDayOFThisMonth = 0;

    const daysOFThisMonth = props.dates[props.keyOfSelectedMonth];
    const firstDayOfThisMonth = daysOFThisMonth[0];

    if (firstDayOfThisMonth.date.weekDay === 'Monday') {
        for (let dayKey = 0; dayKey < 7; dayKey++) {
            daysOfThisWeek.push(daysOFThisMonth[dayKey]);
        }
        keyOfUsedLastDayOFThisMonth = 6;

    } else {
        const datePropOfLastMonth = props.dates[props.keyOfSelectedMonth - 1];
        const totalDaysOfLastMoney = datePropOfLastMonth.length;
        let dateOfLatestMonday;

        for (let day = totalDaysOfLastMoney; day > 0; day--) {
            const datePropOfThisDay = datePropOfLastMonth[day - 1].date;
            if (datePropOfThisDay.weekDay === 'Monday') {
                dateOfLatestMonday = new Date(datePropOfThisDay.year, datePropOfThisDay.month, datePropOfThisDay.day);
                break;
            }
        }

        for (let day = dateOfLatestMonday.getDate(); day <= totalDaysOfLastMoney; day++) {
            daysOfThisWeek.push(datePropOfLastMonth[day - 1]);
        }

        const totalDaysAdd = 7 - daysOfThisWeek.length;

        for (let dayKey = 0; dayKey < totalDaysAdd; dayKey++) {
            daysOfThisWeek.push(daysOFThisMonth[dayKey]);
            keyOfUsedLastDayOFThisMonth = dayKey;
        }
    }
    daysOfThisCalendar.push(daysOfThisWeek);
    daysOfThisWeek = [];

    for (let dayKey = keyOfUsedLastDayOFThisMonth + 1; dayKey < daysOFThisMonth.length; dayKey++) {
        daysOfThisWeek.push(daysOFThisMonth[dayKey]);
        if (daysOfThisWeek.length === 7) {
            daysOfThisCalendar.push(daysOfThisWeek);
            daysOfThisWeek = [];
        }
    }

    let dayKeyOfNextMonth = 0;
    if (daysOfThisWeek.length !== 0) {
        const datePropOfNextMonth = props.dates[props.keyOfSelectedMonth + 1];
        const lengthOFTheDaysOfThisWeek = daysOfThisWeek.length;

        for (let dayOfCalendarKey = lengthOFTheDaysOfThisWeek; dayOfCalendarKey < 7; dayOfCalendarKey++) {
            daysOfThisWeek.push(datePropOfNextMonth[dayKeyOfNextMonth]);
            dayKeyOfNextMonth++;
        }
        daysOfThisCalendar.push(daysOfThisWeek);
    }

    const daysOfThisCalendarLength = daysOfThisCalendar.length
    if (daysOfThisCalendarLength < 6) {
        daysOfThisWeek = [];
        const datePropOfNextMonth = props.dates[props.keyOfSelectedMonth + 1];

        for (let totalWeeksInTheCalendar = daysOfThisCalendarLength; totalWeeksInTheCalendar < 6; totalWeeksInTheCalendar++) {
            for (let dayOfCalendarKey = 0; dayOfCalendarKey < 7; dayOfCalendarKey++) {
                daysOfThisWeek.push(datePropOfNextMonth[dayKeyOfNextMonth]);
                dayKeyOfNextMonth++;
            }
            daysOfThisCalendar.push(daysOfThisWeek);
        }
    }

    const calendarItems = (
        daysOfThisCalendar.map((days, key) => (
            <CalendarItems
                key={key}
                dates={days}
                thisMonth={props.dateToCalculateFrom.getMonth()}
            />
        ))
    );

    return (
        <StyledDiv>
            <CalendarMonthRow
                totalMonths={13}
                thisYear={props.dateToCalculateFrom.getFullYear()}
                thisMonth={props.dateToCalculateFrom.getMonth()}
                itemClicked={props.clickedOnMonth}
            />
            <div>
                <CalendarWeekDaysText/>
                {calendarItems}
            </div>
        </StyledDiv>
    );
};

export default CalendarTemplate;

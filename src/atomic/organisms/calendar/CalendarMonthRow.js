import React from 'react';
import PropTypes from 'prop-types';
import CalendarMonthItem from '../../atoms/calendar/CalendarMonthItem';
import styled from 'styled-components';


const StyledDiv = styled.div`
    width: 100%;
    border: 1px solid black;
    border-radius: 20px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
`;

const CalendarMonthRow = (props) => {

    const totalMonthsOnOneSideOfThisMonth = Math.floor((props.totalMonths - 1) / 2);

    let monthsAndYearAbove = [];
    for (let monthKey = 1; monthKey <= totalMonthsOnOneSideOfThisMonth; monthKey++) {
        let yearToUse = props.thisYear;
        let monthToUse = props.thisMonth + monthKey;

        if (monthToUse > 11) {
            yearToUse++;
            monthToUse = monthToUse - 11;
        }

        const thisDate = new Date(yearToUse, monthToUse);
        monthsAndYearAbove.push({
            month: thisDate.getMonth(),
            year: thisDate.getFullYear(),
        });
    }

    let monthsAndYearBelowThisYear = [];
    let monthsAndYearBelowNextYear = [];

    for (let monthKey = 1; monthKey <= totalMonthsOnOneSideOfThisMonth; monthKey++) {
        let yearToUse = props.thisYear;
        let monthToUse = props.thisMonth - monthKey;

        if (monthToUse < 0) {
            yearToUse--;
            monthToUse = monthToUse + 12;

            const thisDate = new Date(yearToUse, monthToUse);
            monthsAndYearBelowNextYear = [
                {
                    month: thisDate.getMonth(),
                    year: thisDate.getFullYear(),
                },
                ...monthsAndYearBelowNextYear,
            ];
        } else {
            const thisDate = new Date(yearToUse, monthToUse);
            monthsAndYearBelowThisYear = [
                {
                    month: thisDate.getMonth(),
                    year: thisDate.getFullYear(),
                },
                ...monthsAndYearBelowThisYear
            ];
        }
    }

    const monthsAndYearBelow = [...monthsAndYearBelowNextYear, ...monthsAndYearBelowThisYear];

    const calendarMonthsAbove = monthsAndYearAbove.map((monthAndYear, key) => (
        <CalendarMonthItem
            key={+(monthAndYear.month.toString() + monthAndYear.year.toString())}
            month={monthAndYear.month}
            year={monthAndYear.year}
            thisMonth={false}
            alternativeColor={key % 2 === 1}
            clicked={props.itemClicked}
        />
    ));

    const calendarMonthsBelow = monthsAndYearBelow.map((monthAndYear, key) => (
        <CalendarMonthItem
            key={+(monthAndYear.month.toString() + monthAndYear.year.toString())}
            month={monthAndYear.month}
            year={monthAndYear.year}
            thisMonth={false}
            alternativeColor={key % 2 === 0}
            clicked={props.itemClicked}
        />
    ));

    return (
        <StyledDiv>
            {calendarMonthsBelow}
            <CalendarMonthItem
                key={+(props.thisMonth.toString() + props.thisYear.toString())}
                month={props.thisMonth}
                year={props.thisYear}
                thisMonth={true}
            />
            {calendarMonthsAbove}
        </StyledDiv>
    );

};

CalendarMonthRow.propTypes = {
    totalMonths: PropTypes.number.isRequired,
    thisYear: PropTypes.number.isRequired,
    thisMonth: PropTypes.number.isRequired,
};

export default CalendarMonthRow;

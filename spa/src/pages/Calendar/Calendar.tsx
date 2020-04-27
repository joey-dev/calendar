import React, { Component } from 'react';
import Loader from '../../atomic/atoms/Loader/Loader';
import CalendarTemplate from '../../atomic/templates/calendar/CalendarTemplate';
import { FormattedDate, FormattedMonthWithWeeks, FormattedWeek } from '../../interfaces/Date';

class Calendar extends Component {
    state = {
        dates: [],
        keyOfSelectedMonth: 0,
        dateToCalculateFrom: new Date(),
    };

    componentDidMount = (): void => {
        this.setState({ dateToCalculateFrom: new Date() }, this.initCalendar);
    };

    initCalendar = (): void => {
        const dateNow = this.state.dateToCalculateFrom;
        const dateLastMonth = this.getDateOfLastMonth(dateNow);
        const dateNextMonth = this.getDateOfNextMonth(dateNow);

        const monthsToLoad = [dateLastMonth, dateNow, dateNextMonth];

        let allNewDates: FormattedMonthWithWeeks = [];
        monthsToLoad.forEach(dateToLoad => {
            allNewDates.push(this.addNewDateToArray(dateToLoad));
        });

        this.setState({ dates: allNewDates, keyOfSelectedMonth: 1 });
    };

    getDateOfLastMonth = (dateNow: Date): Date => {
        if (dateNow.getMonth() === 0) {
            return new Date(dateNow.getFullYear() - 1, 11, 1);
        } else {
            return new Date(dateNow.getFullYear(), dateNow.getMonth() - 1, 1);
        }
    };

    getDateOfNextMonth = (dateNow: Date): Date => {
        if (dateNow.getMonth() === 11) {
            return new Date(dateNow.getFullYear() + 1, 0, 1);
        } else {
            return new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 1);
        }
    };

    addNewDateToArray = (dateToLoad: Date): FormattedWeek => {
        const month = dateToLoad.getMonth();
        const year = dateToLoad.getFullYear();
        const totalDaysInMonth = this.getTotalDaysInMonth(year, month);
        const allDatesOfThisMonth: FormattedDate[] = [];
        const items = [
            { title: 'going to work', time: { hours: 8, minutes: 30 } },
            { title: 'going back home', time: { hours: 5, minutes: 0 } },
        ];

        for (let day = 1; day < totalDaysInMonth + 1; day++) {
            const dateToLoadForThisDay = new Date(year, month, day);
            const weekDay = dateToLoadForThisDay.toLocaleString('default', { weekday: 'long' });

            allDatesOfThisMonth.push({
                year,
                month,
                day,
                weekDay,
                items,
            });
        }

        return allDatesOfThisMonth;
    };

    getTotalDaysInMonth = (year: number, month: number): number => {
        return new Date(year, month + 1, 0).getDate();
    };

    clickedOnMonthHandler = (year: number, month: number): void => {
        this.changeMonth(year, month);
    };

    onRightMonthArrowClickHandler = (): void => {
        let year = this.state.dateToCalculateFrom.getFullYear();
        let nextMonth = this.state.dateToCalculateFrom.getMonth() + 1;
        if (nextMonth === 12) {
            nextMonth = 0;
            year += 1;
        }

        this.changeMonth(year, nextMonth);
    };

    onLeftMonthArrowClickHandler = (): void => {
        let year = this.state.dateToCalculateFrom.getFullYear();
        let nextMonth = this.state.dateToCalculateFrom.getMonth() - 1;
        if (nextMonth < 0) {
            nextMonth = 11;
            year -= 1;
        }

        this.changeMonth(year, nextMonth);
    };

    changeMonth = (year: number, month: number): void => {
        const newDateToCalculateFrom = new Date(year, month + 1, 0);

        this.setState({ dateToCalculateFrom: newDateToCalculateFrom }, this.initCalendar);
    };

    render() {
        let calendarTemplate = <Loader />;
        if (this.state.dates && this.state.keyOfSelectedMonth) {
            calendarTemplate = (
                <CalendarTemplate
                    dates={this.state.dates}
                    keyOfSelectedMonth={this.state.keyOfSelectedMonth}
                    dateToCalculateFrom={this.state.dateToCalculateFrom}
                    clickedOnMonth={this.clickedOnMonthHandler}
                    rightMonthArrowClick={this.onRightMonthArrowClickHandler}
                    leftMonthArrowClick={this.onLeftMonthArrowClickHandler}
                />
            );
        }

        return <div>{calendarTemplate}</div>;
    }
}

export default Calendar;

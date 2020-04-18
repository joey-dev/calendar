import React, { Component } from 'react';
import CalendarTemplate from '../../atomic/templates/calendar/CalendarTemplate';

class Calendar extends Component {
    state = {
        thisMonth: '',
        dates: [],
        keyOfSelectedMonth: 0,
        dateToCalculateFrom: undefined,
    };

    componentDidMount = () => {
        const date = new Date();
        this.setState(
            {
                thisMonth: date.getMonth(), dateToCalculateFrom: date,
            },
            this.initCalendar,
        );
    };

    initCalendar = () => {
        const dateNow = this.state.dateToCalculateFrom;
        const dateLastMonth = this.getDateOfLastMonth(dateNow);
        const dateNextMonth = this.getDateOfNextMonth(dateNow);

        const monthsToLoad = [dateLastMonth, dateNow, dateNextMonth];

        let allNewDates = [];
        monthsToLoad.forEach(dateToLoad => {
            allNewDates.push(this.addNewDateToArray(dateToLoad));
        });

        this.setState({dates: allNewDates, keyOfSelectedMonth: 1});
    };

    getDateOfLastMonth = (dateNow) => {
        if (dateNow.getMonth() === 0) {
            return new Date(dateNow.getFullYear() - 1, 11, 1);
        } else {
            return new Date(dateNow.getFullYear(), dateNow.getMonth() - 1, 1);
        }
    };

    getDateOfNextMonth = (dateNow) => {
        if (dateNow.getMonth() === 11) {
            return new Date(dateNow.getFullYear() + 1, 0, 1);
        } else {
            return new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 1);
        }
    };

    addNewDateToArray = (dateToLoad) => {
        const month = dateToLoad.getMonth();
        const year = dateToLoad.getFullYear();
        const totalDaysInMonth = this.getTotalDaysInMonth(year, month);
        const allDatesOfThisMonth = [];
        const items = [
            {title: 'going to work', time: {hours: 8, minutes: 30}},
            {title: 'going back home', time: {hours: 5, minutes: 0}},
        ];

        for (let day = 1; day < totalDaysInMonth + 1; day++) {
            const dateToLoadForThisDay = new Date(year, month, day);
            const weekDay = dateToLoadForThisDay.toLocaleString('default', {weekday: 'long'});

            allDatesOfThisMonth.push({
                date: {
                    year, month, day, weekDay,
                },
                items,
            });
        }

        return allDatesOfThisMonth;
    };

    getTotalDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    render() {
        let calendarTemplate;
        if (this.state.thisMonth && this.state.dates && this.state.keyOfSelectedMonth) {
            calendarTemplate = (
                <CalendarTemplate
                    dates={this.state.dates}
                    thisMonth={this.state.thisMonth}
                    keyOfSelectedMonth={this.state.keyOfSelectedMonth}
                />
            );
        }

        return (
            <div>
                <h1>this is the calendar</h1>
                {calendarTemplate}
            </div>
        );
    }
}

export default Calendar;

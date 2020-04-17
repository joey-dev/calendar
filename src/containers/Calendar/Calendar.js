import React, { Component } from 'react';
import CalendarItem from '../../atomic/modecules/calendar/CalendarItem';

class Calendar extends Component {
    render() {
        const date = new Date(1776, 6, 4, 8, 30);
        const time = {
            hours: date.getHours(),
            minutes: date.getMinutes(),
        };
        const secondDate = new Date(1776, 6, 4, 5);
        const secondTime = {
            hours: secondDate.getHours(),
            minutes: secondDate.getMinutes(),
        };

        const items = [
            {
                title:  'going to work',
                time,
            },{
                title:  'going back home',
                time: secondTime,
            },
        ]

        return (
            <div>
                <h1>this is the calendar</h1>
                <div>
                    <CalendarItem day="10" thisMonth={true} items={items} />
                </div>
            </div>
        );
    }
}

export default Calendar;

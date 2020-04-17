import React from 'react';
import styled from 'styled-components';

const CalendarDateItem = (props) => {
    const StyledDiv = styled.div`
        width: 100%;
        text-align: center;
        padding: 5px;
        background-color: ${props.colouredBackground ? 'grey' : 'white'}
    `;

    let title = props.children;
    if (props.children.length > 15) {
        title = props.children.substring(0, 15);
        title += '...';
    }

    const hour = props.time.hours < 10 ? '0' + props.time.hours : props.time.hours;
    const minute = props.time.minutes < 10 ? '0' + props.time.minutes : props.time.minutes;
    const time = hour + ':' + minute;

    return (
        <StyledDiv>
            {time} - {title}
        </StyledDiv>
    );
};

export default CalendarDateItem;

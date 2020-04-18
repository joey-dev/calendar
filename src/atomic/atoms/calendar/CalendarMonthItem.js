import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const backGroundColorOfStyledP = (props) => {
    if (props.thisMonth) {
        return 'darkGrey';
    } else if (props.alternativeColor) {
        return 'grey';
    }
    return 'white';
}

const StyledP = styled.p`
    height: calc(100% / 13 - calc(70% / 13));
    padding: calc(100% / 13);
    margin: 0;
    text-align: center;
    background-color: ${(props) => backGroundColorOfStyledP(props)};
`;

const CalendarMonthItem = (props) => {
    const monthInName = new Date(props.year, props.month + 1, 0).toLocaleString('default', {month: 'long'})

    return (
        <StyledP thisMonth={props.thisMonth} alternativeColor={props.alternativeColor}>
            {monthInName} - {props.year}
        </StyledP>
    );
};

CalendarMonthItem.propTypes = {
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    thisMonth: PropTypes.bool.isRequired,
    alternativeColor: PropTypes.bool,
};

export default CalendarMonthItem;

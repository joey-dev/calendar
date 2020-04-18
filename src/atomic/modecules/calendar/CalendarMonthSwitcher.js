import PropTypes from 'prop-types';
import React from 'react';
import ArrowLeft from '../../atoms/arrows/ArrowLeft';
import ArrowRight from '../../atoms/arrows/ArrowRight';
import styled from 'styled-components';


const StyledDiv = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

const CalendarMonthSwitcher = (props) => {
    return (
        <StyledDiv>
            <ArrowLeft onClick={props.clickedLeftArrow} spacing />
            {props.monthName}
            <ArrowRight onClick={props.clickedRightArrow} spacing />
        </StyledDiv>
    );
};

CalendarMonthSwitcher.propTypes = {
    monthName: PropTypes.string.isRequired,
};

export default CalendarMonthSwitcher;

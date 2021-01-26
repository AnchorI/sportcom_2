import React, { useState } from 'react'
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
export default function DateRangePickerCalendarExample(props) {
    const {Up , Down} = props;
    const [ startDate, setStartDate] = useState();
    const [ endDate, setEndDate] = useState();
    const [focus, setFocus] = useState(START_DATE);

    const handleFocusChange = newFocus => {

        setFocus(newFocus || START_DATE );


    };
    const  handleOnClick= () => {
        Down(startDate);
        Up(endDate);
    };


    return (
        <div>
            <DateRangePickerCalendar
                startDate={startDate}
                endDate={endDate}
                focus={focus}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onFocusChange={handleFocusChange}
                locale={enGB}
            />
            <button onClick={handleOnClick}> Подтвердить дату</button>
        </div>
    )
}
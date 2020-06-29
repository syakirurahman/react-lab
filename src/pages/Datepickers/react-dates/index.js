import React, { useState } from 'react'

import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default function ReactDates() {
  const [basicDate, setBasicDate] = useState(moment());
  const [focused, setFocused] = useState(false);

  const [startDate, setStartDate] = useState(moment(new Date("2020/07/01")));
  const [endDate, setEndDate] = useState(moment(new Date("2020/07/07")));
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div>
      <div className="section">
        <h3 className="section-title">Basic Date Input</h3>
        <div className="section-content">
        <SingleDatePicker
          date={basicDate} // momentPropTypes.momentObj or null
          onDateChange={date => setBasicDate(date)} // PropTypes.func.isRequired
          focused={focused} // PropTypes.bool
          onFocusChange={(focused) => setFocused(focused)} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
        />
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Date Range Input</h3>
        <div className="section-content">
          <DateRangePicker
            startDate={startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {setStartDate(startDate); setEndDate(endDate)}} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
          />
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Date Picker Range Input</h3>
        <div className="section-content">
          <DayPickerRangeController
            startDate={startDate} // momentPropTypes.momentObj or null,
            endDate={endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => {setStartDate(startDate); setEndDate(endDate)}} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput =>  setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
          />
        </div>
      </div>

    </div>
  )
}

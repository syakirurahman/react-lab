import React, { useState } from 'react'

import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default function ReactDates() {
  const [basicDate, setBasicDate] = useState(moment());
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <div className="section">
        <h3 className="section-title">Basic Date Input</h3>
        <div className="section-content">
        <SingleDatePicker
          date={basicDate} // momentPropTypes.momentObj or null
          onDateChange={date => setBasicDate({date})} // PropTypes.func.isRequired
          focused={focused} // PropTypes.bool
          onFocusChange={({ focused }) => setFocused({ focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
        />
        </div>
      </div>


    </div>
  )
}

import React, { useState } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";
import "./style.scss";

export default function ReactDayPicker() {
  const [basicCalendarDate, setBasicCalendarDate] = useState(new Date());

  const [from, setFrom] = useState(undefined);
  const [to, setTo] = useState(undefined);

  const [basicInputDate, setBasicInputDate] = useState(new Date());

  return (
    <div className="react-day-picker">

      <div className="section">
        <h3 className="section-title">Basic Calendar</h3>
        <div className="section-content">
          <DayPicker
            onDayClick={(date) => {setBasicCalendarDate(date)}}
            selectedDays={basicCalendarDate}
          />
          <br />
          <br />
          basicCalendarDate: {basicCalendarDate.toLocaleDateString()}
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Calendar - Date Range Input</h3>
        <div className="section-content">
        <DayPicker
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          onDayClick={(date) => {
            const range = DateUtils.addDayToRange(date, { from, to });
            setFrom(range.from);
            setTo(range.to);
          }}
        />
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Basic Date Input</h3>
        <div className="section-content">
          <DayPickerInput 
            onDayChange={(day) => setBasicInputDate(day)} 
            value={basicInputDate}
          />
        </div>
      </div>

    </div>
  );
}

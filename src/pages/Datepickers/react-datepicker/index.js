import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReactDatepicker() {
  const [basicDate, setBasicDate] = useState(new Date());
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <div>
      <div className="section">
        <h3 className="section-title">Basic Date Input</h3>
        <div className="section-content">
          <DatePicker
            selected={basicDate}
            onChange={(date) => setBasicDate(date)}
          />
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Date time input</h3>
        <div className="section-content">
          <DatePicker
            selected={dateTime}
            onChange={date => setDateTime(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
      </div>


    </div>
  );
}

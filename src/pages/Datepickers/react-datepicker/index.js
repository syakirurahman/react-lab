import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReactDatepicker() {
  const [basicDate, setBasicDate] = useState(new Date());

  const [dateTime, setDateTime] = useState(new Date());

  const [startDate, setStartDate] = useState(new Date("2020/07/01"));
  const [endDate, setEndDate] = useState(new Date("2020/07/07"));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sample postBody request
    const postBody = {
      basicDate: basicDate,
      dateTime: dateTime,
      startDate: startDate,
      endDate: endDate
    }

    console.log(postBody);
    alert("Open your devtools - console tab");
  }

  return (
    <div>
      
      <form method="post" onSubmit={handleSubmit}>
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
        
        <div className="section">
          <h3 className="section-title">Date Range Input</h3>
          <div className="section-content">
            <div className="row">
              <div className="col-md-4">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
              <div className="col-md-4">
                <DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <button className="btn btn-submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
}

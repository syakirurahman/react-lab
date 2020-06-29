import React from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default function ReactDayPicker() {
  return (
    <div>
      <div className="section">
        <h3 className="section-title">Basic Date Input</h3>
        <div className="section-content">
        <DayPicker/>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { label: 'January', sales: 21, leads: 41 },
  { label: 'February', sales: 35, leads: 79 },
  { label: 'March', sales: 75, leads: 57 },
  { label: 'April', sales: 51, leads: 47 },
  { label: 'May', sales: 41, leads: 63 },
  { label: 'June', sales: 47, leads: 71 }
];

export default function Recharts() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Charts with recharts library</h2>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Line Chart</h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <Tooltip />
              <XAxis dataKey="label" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Legend/>
              <Line type="monotone" dataKey="sales" stroke="#FB8833" />
              <Line type="monotone" dataKey="leads" stroke="#17A8F5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <XAxis dataKey="label" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Legend/>
              <Bar dataKey="sales" fill="#FB8833" />
              <Bar dataKey="leads" fill="#17A8F5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}

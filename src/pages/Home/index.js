import React from 'react'
import Header from 'layouts/Header'
import { Link } from 'react-router-dom'

import 'pages/Home/style.scss';

export default function Home() {
  return (
    <div>
      <Header isHome></Header>

      <div className="container experiments">
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <Link to="/datepickers">React Datepicker Examples</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

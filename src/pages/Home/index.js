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
            <div className="box experiment">
              <div className="experiment-thumb">
                <img src={require("assets/images/undraw_date_picker_gorr.png")} alt="React Datepicker Examples"/>
              </div>
              <h2 className="experiment-title"><Link to="/datepickers">React Datepicker Examples</Link></h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

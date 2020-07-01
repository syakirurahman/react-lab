import React from 'react'
import Header from 'layouts/Header'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import 'pages/Home/style.scss';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>React Lab - React UI Component Experiments</title>
        <meta name="description" content="React Lab - React UI Component Experiments, Study case, react library usage & tutorial by Syakir Rahman" />
      </Helmet>
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
          <div className="col-md-4">
            <div className="box experiment">
              <div className="experiment-thumb">
                <img src={require("assets/images/undraw_note_list_etto.png")} alt="React Infinite Scroll"/>
              </div>
              <h2 className="experiment-title"><Link to="/infinite-scroll">React Infinite Scroll</Link></h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

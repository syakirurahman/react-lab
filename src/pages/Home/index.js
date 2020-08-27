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

          {/* React Charts */}
          <div className="col-md-4">
            <div className="box experiment">
              <div className="experiment-thumb">
                <img src={require("assets/images/undraw_visual_data_b1wx.png")} alt="React Charts"/>
              </div>
              <h2 className="experiment-title"><Link to="/charts">React Chart Examples</Link></h2>
            </div>
          </div>

          {/* React Tabs */}
          <div className="col-md-4">
            <div className="box experiment">
              <div className="experiment-thumb">
                <img src={require("assets/images/undraw_tabs_jf82.png")} alt="React Tabs"/>
              </div>
              <h2 className="experiment-title"><Link to="/react-tabs">React Tabs</Link></h2>
            </div>
          </div>

          {/* React Infinite Scroll */}
          <div className="col-md-4">
            <div className="box experiment">
              <div className="experiment-thumb">
                <img src={require("assets/images/undraw_note_list_etto.png")} alt="React Infinite Scroll"/>
              </div>
              <h2 className="experiment-title"><Link to="/infinite-scroll">React Infinite Scroll</Link></h2>
            </div>
          </div>

          {/* React Datepicker */}
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

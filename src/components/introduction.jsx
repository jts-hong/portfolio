import React, { Component } from 'react'
import cov from "./img/cover_1.png"
import "./introduction.css"
import sec_cov from "./img/second_cover_1.png"

export default class Introduction extends Component {
  render() {
    const styles1 = {    
      content: {
        backgroundImage: `url(${cov})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }
    }

    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={styles1.content}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Scott Hong</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1pWfyAL3QE8kgtipIfS9ohiA-GS4kkhhI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: `url(${sec_cov})`,backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Indie<br />Coder <br />Filmmaker <br />Photographer</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/dbarochiya" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'


import '../../assets/css/Article-Dual-Column.css';

export default class Pokemon extends Component {
  render() {
    return (
      <div className="article-dual-column">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="intro">
                <h1 className="text-center">Your Wonderful Article Title</h1>
                <p className="text-center"><span className="by">by</span> <a href="/">Author Name</a><span className="date">Sept 8th,
                2016 </span></p><img className="img-fluid" alt="Una vainaaa" src="assets/img/desk.jpg"/>
          </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 col-lg-3 offset-md-1">
                <div className="toc">
                  <p>Table of Contents</p>
                  <ul>
                    <li><a href="/">Aliquam In Arcu </a> </li>
                    <li><a href="/">Ut vehicula rhoncus</a></li>
                    <li><a href="/">Lorem Ipsum </a> </li>
                    <li><a href="/">Dolor sit amet</a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-10 col-lg-7 offset-md-1 offset-lg-0">
                <div className="text">
                  <p>Sed lobortis mi. Suspendisse vel placerat ligula. 
                    Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis
              tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in
              justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                  <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac lacus. <strong>Ut vehicula
                rhoncus</strong> elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit <em>pulvinar
                dict</em> vel in justo. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                  <h2>Aliquam In Arcu </h2>
                  <p>Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique
                  lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices
              posuere cubilia Curae.</p>
                  <figure className="figure"><img className="figure-img" alt="Una vainaaa" src="assets/img/beach.jpg"/>
                    <figcaption className="figure-caption">Caption</figcaption>
            </figure>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse vel
                    placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam
                    in arcu eget velit
              pulvinar dictum vel in justo.</p>
          </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

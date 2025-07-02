import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>EXPERIENCE</strong>
            </h6>
            <div className="row">
              <div className="col s12 m4 l4 xl4">
                <p className="teal year_exp white-text">
                  August <strong>2023</strong> - June/January
                  <strong>20..</strong>
                </p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>WEB DEVELOPER</strong>
                  </h6>
                  <p>Still Learning</p>
                </blockquote>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4 l4 xl4">
                <p className="teal year_exp white-text">
                  August <strong>2023</strong> - June/January
                  <strong>20..</strong>
                </p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>BUSINESS ANALYSIS</strong>
                  </h6>
                  <p>Still Learning</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

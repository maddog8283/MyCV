import React, { Component } from "react";

export default class Skils extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>PROFESSIONAL SKILS</strong>
            </h6>
            <div className="row mt-top">
              <div className="col s6">
                <p>HTML</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>CSS</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>Java Script</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>Jquery</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>PHP</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>MySQL</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

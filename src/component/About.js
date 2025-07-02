import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-bottom">
              <strong>ABOUT ME</strong>
            </h6>
            <p className="grey-text">Give Up On Your Dreams And Die</p>
          </div>
          <div className="card-action">
            <h6>
              <strong>PERSONAL INFO</strong>
            </h6>
            <div className="row mt">
              <div className="col s12 m6 l5 xl6">
                <p>
                  <strong>Address:</strong> Cendrawasih street, Mimika Baru
                  District, Mimika Regency,Timika, Central Papua
                </p>
                <p>
                  <strong>Email:</strong> daniel@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> 081240516866
                </p>
                <p>
                  <strong>City:</strong> Timika,Central Papua,Indonesia
                </p>
              </div>
              <div className="col s12 m6 l6 xl6">
                <p>
                  <strong>Main Language:</strong> Indonesia
                </p>
                <p>
                  <strong>Second Language:</strong> English
                </p>
                <p>
                  <strong>Third Language:</strong> Japan (Still Learning)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

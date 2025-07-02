import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skils";
import Profile from "./Profile";
import About from "./About";
import Hobby from "./Hobby";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="container mt-4">
          <div className="row">
            {/* Sidebar kiri */}
            <div className="col-md-4">
              <Profile />
              <About />
            </div>

            {/* Konten kanan */}
            <div className="col-md-8">
              <Skills />
              <Experience />
              <Education />
              <Hobby />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

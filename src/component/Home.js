// import React, { Component } from "react";
// import Education from "./Education";
// import Portofolios from "./Portofolios";
// import Experience from "./Experience";
// import Skils from "./Skils";
// import Profile from "./Profile";
// import Navbar from "./Navbar";
// import About from "./About";

// export default class Home extends Component {
//   render() {
//     return (
//       <section>
//         <Navbar />
//         <div className="container">
//           <div className="row">
//             <div classname="col s12 m4 l3">
//               <Profile />
//               <About />
//             </div>
//             <div className="col s12 m8 l9">
//               <Skils />
//               <Experience />
//               <Education />
//               <Portofolios />
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skils";
import Profile from "./Profile";
import Navbar from "./Navbar";
import About from "./About";
import Hobby from "./Hobby";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Navbar />
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

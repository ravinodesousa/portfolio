import React from "react";
import "../styles/AboutMe.scss";
import Avatar from "../assets/avatar.jpg";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="container p-5 ">
        <div className="row">
          <div className="col-3 d-flex flex-column justify-content-center align-items-center">
            <img src={Avatar} alt="avatar" className="avatar" />
          </div>
          <div className="col-9 d-flex flex-column">
            <div>
              <h2>About Me</h2>
              <p>
                sfvsivjfissijsijsibfsibietbiebejbeb
                ebeobiibebiebjiebeijbe\ebebpetbjoeijew wrwg
                ;egojp[g5jo[j[5jgotjeiknbebe \ohtjhohjtohtohtjhtjtoho]]]
              </p>
            </div>
            <div className="row">
              <div className="col-4 d-flex flex-column">
                <h2>Contact Details</h2>
                <span>Ravino deouxa</span>
                <span>Ravino deouxa</span>
                <span>Ravino deouxa</span>
                <span>Ravino deouxa</span>
                <span>Ravino deouxa</span>
              </div>
              <div className="col-8 d-flex flex-column justify-content-center align-items-start">
                <button>Download Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

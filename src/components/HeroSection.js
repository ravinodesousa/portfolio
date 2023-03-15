import React from "react";
import "../styles/HeroSection.scss";

export default function HeroSection() {
  return (
    <div className="hero-section">
      {/* <div class="blob-wrap x">
        <div class="blob y"></div>
      </div> */}

      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center vh-100">
            <div class="card hero-info-section">
              <div class="card-body">
                <span>Ravino De Souza</span>
                <br />
                <span>
                  <code>build android & ios apps</code>
                </span>
                <br />
                <span>
                  <code>build fullstack applications</code>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

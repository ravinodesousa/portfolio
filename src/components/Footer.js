import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icons">
        <li>
          <a>Github</a>
        </li>
        <li>
          <a>Facebook</a>
        </li>
        <li>
          <a>Twitter</a>
        </li>
        <li>
          <a>Bitbucket</a>
        </li>
      </ul>
    </footer>
  );
}

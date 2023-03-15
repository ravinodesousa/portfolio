import React from "react";
import "../styles/ContactMe.scss";
import Programmer from "../assets/programmer.jpg";

export default function ContactMe() {
  return (
    <div className="contact-me">
      <div className="container p-5 ">
        <div className="row">
          <div className="col-12">
            <h2>Get in touch</h2>
          </div>
          <div className="col-12 d-flex flex-row justify-content-evenly align-items-center my-3">
            <h2>Address</h2>
            <h2>Contact No</h2>
            <h2>Email</h2>
          </div>
          <div className="col-7 d-flex flex-column justify-content-center align-items-center">
            <img
              src={Programmer}
              alt="Contact me image"
              className="contact-me-img"
            />
          </div>
          <div className="col-5 d-flex flex-column justify-content-center align-items-center">
            <input
              class="form-control form-control-md mb-3"
              type="text"
              placeholder="Name"
            />
            <input
              class="form-control form-control-md mb-3"
              type="text"
              placeholder="Email"
            />
            <textarea
              class="form-control form-control-md mb-3"
              type="text"
              placeholder="Message"
              rows="4"
            ></textarea>

            <button type="button" class="btn btn-outline-primary btn-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

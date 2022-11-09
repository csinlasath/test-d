import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://user-images.githubusercontent.com/98043070/200177211-b058ed0e-01cb-4a99-892e-e28db1e0396c.png"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Derek Kilgore"
          />
          <p style={{ fontSize: "24px" }}>
          I have over 25 years of experience in the sports broadcast, news and entertainment industry. 
          My skills include illustration, animation, motion design, 3D modeling and rendering. 
          I am a creative director with strong leadership skills who has worked on projects ranging from 
          short commercials to feature length movies. My work has been featured on ESPN, FOX, CBS Sports Network and more.  
          </p>
          <p style={{ fontSize: "24px" }}>
          I graduated from Avila University in 2001 with a Bachelors in Communications/Media Production and Design. 

          I recently graduated a Full Stack Web Developer program at the University of Kansas and received certificate of completion. 
          My skills include HTML5, CSS, JavaScript, MySQL, Bootstrap, React, Photoshop , After Effects , Premiere Pro , Illustrator.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;

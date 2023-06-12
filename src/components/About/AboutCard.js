import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ishan Patni </span>
            from <span className="purple"> Bangalore, India.</span>
            <br /> I am a Fresh Graduate Engineer( 2023 ) from Sir M. Visvesvaraya Institute of Technology, Bangalore
            <br />
            Additionally, I am currently employed as a Student Intern at
            Nokia.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball🏀
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling ✈
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Games 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ishan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

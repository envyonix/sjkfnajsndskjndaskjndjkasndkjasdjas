import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am known as <span className="purple">Envyonix/ALI  </span>
             <span className="purple"> </span>
            <br />
            I am currently studying for Computer Science at GCSE level.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Working with minecraft servers
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every little counts!!!!"{" "}
          </p>
          <footer className="blockquote-footer">Envyonix</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

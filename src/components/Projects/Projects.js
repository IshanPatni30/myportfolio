import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ticket Support Desk"
              description="Developed a Full Stack App that manages tickets raised by users for products of a particular organization .Contains authentication and features for creating, reading, updating and closing a ticket. A user can also write remaíks for each ticket"
              ghLink="https://github.com/IshanPatni30/ticketsupport"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Fitlance"
              description="Created a Web based Fitness Application using React.js and Material UI.Implemented functionalities such as search, connection to Youtube API, and integration with Rapid API to fetch relevant data"
              ghLink="https://github.com/IshanPatni30/Fitlance"
              demoLink="https://fitlance.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Netflix Clone"
              description=" Created the exact clone for Netflix using TMDB Movies API. Implemented Authentication and registration using Firebase.Used React.js and Tailwind CSS Library for Design."
              ghLink="https://github.com/IshanPatni30/NetFlix-Clone"
              demoLink="https://netflix-react-4da94.web.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Self"
              description="Built an Android APp using Java, it is basically a personal Journal where images can be extracted via the phone.Learnt workflow of Android Devvelopment using Java."
              ghLink="https://github.com/IshanPatni30/Self"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chaddict"
              description="Created a realtime chat Application using Socket.IO library along with HTML,CSS and JavaScript."
              ghLink="https://github.com/IshanPatni30/MyChatApp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

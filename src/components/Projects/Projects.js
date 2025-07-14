import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder image (replace with actual images if available)
import void1 from "../../Assets/Projects/voidbot.png";
import kryode from "../../Assets/Projects/KN1.png";
import stride from "../../Assets/Projects/stride.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've built or managed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kryode}
              isBlog={false}
              title="Kryode Network"
              description="A Lifesteal-based Minecraft server focused on community, PvP, and progression. Custom plugins, land claiming, economy system, and powerful events make it one of the most engaging survival experiences."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={void1}
              isBlog={false}
              title="Void BOT"
              description="A multi-purpose Discord bot with a focus on music, moderation, and utility. Built using Discord.js and Lavalink. Supports YouTube/Spotify, advanced queue control, filters, and 24/7 mode."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stride}
              isBlog={false}
              title="Stride SMP"
              description="A Minecraft SMP server with a tight-knit community, seasonal resets, events, and lore-based storytelling. Managed server infrastructure and plugin development for performance and balance."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

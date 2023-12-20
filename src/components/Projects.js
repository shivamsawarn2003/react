import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.webp";
import memeGenerator from "../assets/img/memeGenerator.jpg";
import tictactoe from "../assets/img/tictactoe.jpeg";
import snakegame from "../assets/img/snakegame.jpg";
import namingart from "../assets/img/naming art.png";
import fractals from "../assets/img/fractals.png";
import screentimer from "../assets/img/screentimer.jpg";
import carparking from "../assets/img/carparking.jpeg";
import react from "../assets/img/react.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "URL Shortener",
      description: "It will short your long URL into shorter ones.",
      imgUrl: projImg1,
    },
    {
      title: "React Portfolio",
      description: "React Personal portfolio that you are seeing right now.",
      imgUrl: react,
    },
    {
      title: "fractals",
      description: "Designed fractals were produced and you can change the color intensity of it",
      imgUrl: fractals,
    },

    {
      title: "Weather report",
      description: "Provides whole week weather report of your town. ",
      imgUrl: projImg2,
    },
    {
      title: "Naming art design",
      description: "Design and development",
      imgUrl: namingart,
    },
    {
      title: "Snake Game",
      description: "A childhood phone game that everyone plays in their Nokia phone surely",
      imgUrl: snakegame,
    },
    {
      title: "Tic Tac Toe",
      description: "just a game",
      imgUrl: tictactoe,
    },
    {
      title: "Meme Generator",
      description: "It can generate random memes by just clicking a button",
      imgUrl: memeGenerator,
    },
    {
      title:"ScreenTimer",
      description:"Case study on screen timer app",
      imgUrl:screentimer,
    },
    {
      title:"Car Parking",
      description:"Case study on Car Parking app",
      imgUrl:carparking,
    },

  ];
  const uiUxProjects=[
    {
      title:"ScreenTimer",
      description:"Case study on screen timer app",
      imgUrl:screentimer,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>With a focus on responsive web design, I developed and optimized these projects to ensure an exceptional user experience across various devices and screen sizes</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">DSA</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      {webProjects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        );
                      })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    <Row>
                      {uiUxProjects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        );
                      })}
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I have not yet started uploading my work on this domain .wait a while</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I have not yet started uploading my work on this domain .wait a while</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
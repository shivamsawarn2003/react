import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
           <a href="https://www.linkedin.com/in/shivam-kumar-b87290263"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/shivamsawarn2003"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/_shivamsawarn_"><img src={navIcon3} alt="" /></a>
            </div>
            <p className="text-slate-600">All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

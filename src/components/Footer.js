import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

import github from '../assets/img/github.png';
import pillow from '../assets/img/pillow.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer" >
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100085960984573"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/yumenome/"><img src={github} alt="Icon" /></a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <p>waiyan2015.wy65@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
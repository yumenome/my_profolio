import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

import github from '../assets/img/github.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer" >
      <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100085960984573"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/yumenome/"><img src={github} alt="Icon" /></a>
            </div>
          <div size={12} sm={6} >
            <h6 style={{background: '#6200ff21',padding: '5px'}} >waiyan2015.wy65@gmail.com</h6>
          </div>
      </Container>
    </footer>
  )
}
export default Footer
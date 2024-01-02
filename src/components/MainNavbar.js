import React from 'react'
import { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router} from "react-router-dom";

import pillow from '../assets/img/pillow.png';

const MainNavbar = () => {

    const[acitveLink, setActiveLink] = useState('home');

return (
<Router>
    <Navbar>
        <Container >
            <Navbar.Brand href="/">
                <img src={pillow} alt='logo' style={{width: '65px'}}/>
            </Navbar.Brand>

            <Navbar.Collapse id='basic-navbar-nav' >
                <Nav className='ms-auto'>
                    <Nav.Link href='#home' className={acitveLink === 'home' ? 'active navbar-link' : 'navbar-link' }
                        onClick={()=> (setActiveLink('home'))} > INTRO </Nav.Link>
                    <Nav.Link href='#skill' className={acitveLink === 'skill' ? 'active navbar-link' : 'navbar-link' }
                        onClick={()=> (setActiveLink('skill'))} > SKILLS </Nav.Link>
                    <Nav.Link href='#project' className={acitveLink === 'project' ? 'active navbar-link'
                        : 'navbar-link' } onClick={()=> (setActiveLink('project'))} > PROJECTS </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</Router>
)
}

export default MainNavbar

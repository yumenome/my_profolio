import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import laravel_project1 from '../assets/projects/idea.png'
import laravel_project2 from '../assets/projects/ig be.png'
import laravel_project3 from '../assets/projects/lec be.png'

import react_project1 from '../assets/projects/gim.png'
import react_project2 from '../assets/projects/ig fe.png'
import react_project3 from '../assets/projects/letmecheck fe.png'

import ProjectCard from "./ProjectCard";

const Projects = () => {

    const larvel_projects = [

        {
            title: "IDEAS",
            description: "SSR project",
            imgUrl: laravel_project1,
        },
        {
          title: "INSTRAGRAM CLONE",
          description: "RESTful api project",
          imgUrl: laravel_project2,
        },
        {
          title: "let_meCheck",
          description: "filament project",
          imgUrl: laravel_project3,
        }
      ];
      
      const react_projects = [
          {
            title: "GiM",
            description: "rapid api project",
            imgUrl: react_project1,
          },
          {
            title: "INSTRAGRAM CLONE",
            description: "laravel api project",
            imgUrl: react_project2,
          },
          {
            title: "let_meCheck",
            description: "CSR project",
            imgUrl: react_project3,
          }
        ];

  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col size={12}>
                    <div >
                        <h2 style={{marginBottom: '20px',color: '#fff'}}>recent__projects 
                        </h2>
                        <Tab.Container  id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey='first'  > REACT </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    
                                    <Nav.Link eventKey='third'> LARAVEL </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp"  >
                                <Tab.Pane eventKey='third'>
                                    <Row>
                                        {
                                            larvel_projects.map((project, i) =>{
                                                return (
                                                    <ProjectCard key = {i} {...project} />
                                                    )
                                                })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            react_projects.map((project, i) =>{
                                                return (
                                                    <ProjectCard key = {i} {...project} />
                                                    )
                                                })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects
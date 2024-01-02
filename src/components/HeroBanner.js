import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerIMG from '../assets/img/header-img.svg';
import { useState, useEffect } from 'react';

import cv from '../assets/my_cv.pdf'

const HeroBanner = () => {
    
    const titles = ['backend with LARAVEL..', 'frontend with REACT...'];
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [time, setTime] = useState(300);

    const start = () => {
        let i = index % titles.length;
        let fullText = titles[i]; // livewire
        console.log(fullText);
                                            //laravel to larave             : l to la
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        console.log(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setTime(300 - Math.random() * 100);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setIndex(index+1);
            setTime(300 - Math.random() * 100);
        }
        setText(updatedText);

    }

    useEffect(() => {
        let to_start =  setInterval(() => {
            start();
        }, time)

        return () => {clearInterval(to_start)}
    },[text]);
 
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>welcome to my spacE!</span>
                    <h1>i enjoy web-dev &</h1>
                    <h3>loading {text}</h3>

                    <p style={{color: '#fff'}}>
                        hello, I started studying web-dev at 2nd of 2023. i studied fontend & backend, i also did alot of projects by myself to study the whole fullstack processes. Although I prefer laravel for backend more than frontend, I self-studied react-js as javascript framework. Now i feel like I'm ready to start my junior web-dev and I deeply need the real-world experiences, skillful seniors to guide me. <br/> So if you're searching someone like me, <br /> 
                        <span style={{fontWeight: 500}}>
                        please let me have a chance....
                        </span>
                    </p>
                    
                    <button  >
                        <a href={cv} download={true} style={{textDecoration: 'none',fontSize: '22px',fontWeight: 500,color: '#fff'}} >RESUME<ArrowRightCircle size={25}/></a>
                    </button>
                </Col>
                <Col xs={12} md={6} xl={5} >
                    <img src={headerIMG} alt='header' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroBanner
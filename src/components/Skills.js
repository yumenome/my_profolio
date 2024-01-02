import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';

import laravel_logo from '../assets/skills/laravel.min.svg'
import livewire_logo from '../assets/skills/underwater_jelly.svg'
import filament_log from '../assets/skills/rocket-0d392ed0.webp'
import react_logo from '../assets/skills/react.png'
import chakra_logo from '../assets/skills/chakrajpg.jpg'
import flowbite_logo from '../assets/skills/flowbite.svg'



const Skills = () => {

  return (
    <section className='skill' id='skill'>
        <Container>
            <div className='row'>
                <div className='col-12'>
                    <div className='skill-bx'>
                        <h2>SKILLS</h2>
                        <p>
                            Started with html, css, javascript, php & mySQL &
                            <br/>
                            Now react, laravel, livewire, filament, psgreSQL are loading...
                        </p>
                        <div className='scroll_menu'  >
                            <div className='item'>
                                <img src={laravel_logo} alt='1'/>
                                <h5>LARAVEL</h5>
                            </div>
                            <div className='item'>
                                <img src={livewire_logo} alt='1'/>
                                <h5>LIVEWIRE</h5>
                            </div>
                            <div className='item'>
                                <img src={filament_log} alt='1'/>
                                <h5>FILAMNET</h5>
                            </div>
                            <div className='item'>
                                <img src={react_logo} alt='1'/>
                                <h5>REACT</h5>
                            </div>
                            <div className='item'>
                                <img src={chakra_logo} style={{borderRadius: '50%',width: '133px',height: '95px',marginBottom: '25px'}} alt='1'/>
                                <h5>CHAKRA</h5>
                            </div>
                            <div className='item'>
                                <img src={flowbite_logo} style={{height: '100px',marginBottom: '20px'}} alt='1'/>
                                <h5>FLOWBITE</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Skills
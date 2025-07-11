//import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../..//assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import '../../assets/styles/global.css'
import './styles.css'

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                <img src={logoImg}  alt="Proffy-logo" />
                <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg} 
                alt="Proffy landing logo" 
                className="hero-image" 
                />
                <div className="buttons-container">
                    <a href={studyIcon} className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </a>
                    <a href={giveClasses} className='give-classes'>
                        <img src={giveClasses} alt="Dar aulas"/>
                        Dar aulas
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>

    )

}

export default Landing
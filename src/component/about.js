import React from 'react';

import gabriel   from '../images/aboutUs/Gabriel_Giri.jpg'; 
import carla     from '../images/aboutUs/Liana.Carla_Passaro.jpg'; 
import gisela    from '../images/aboutUs/Gisela_Vivas.jpg'; 
import fernando  from '../images/aboutUs/Fernando_Uranga.jpg'; 
import mauri     from '../images/aboutUs/Mauricio_Gullotto.jpg'; 
import cintia    from '../images/aboutUs/Cintia_Hetzer.jpg'; 
import lucia     from '../images/aboutUs/Lucia_Giancrisostomo.jpg'; 
import andrea    from '../images/aboutUs/Andrea_Sabella.jpg'; 
import alejandra from '../images/aboutUs/Maria.Alejandra_Usart.jpg'; 
import evelin    from '../images/aboutUs/Evelin_Mena.jpg'; 
import martin    from '../images/aboutUs/Martin_Zapata.jpg'; 

const AboutUs = (props) => (
    <div className="container mt-5">
        <main className="page-content" aria-label="Content">
            <div className="wrapper">
                <div className="home">
                    <div className="typewriter rounded">
                        <h2>{props.title}</h2>
                        <div className="animate title">
				
                            <span>w</span>
                            <span>h</span>
                            <span>o</span>&nbsp;
                            <span>w</span>
                            <span>e</span>&nbsp;
                            <span>a</span>
                            <span>r</span>
                            <span>e</span>
                            <span>?</span>&nbsp;
                            <span>w</span>
                            <span>h</span>
                            <span>a</span>
                            <span>t</span>&nbsp;
                            <span>w</span>
                            <span>e</span>&nbsp;
                            <span>d</span>
                            <span>o</span>
                            <span>?</span>
                        </div>
                    </div>

                    <p>Welcome, and first of all let us thank you for taking the time and showing interest in getting to know us!</p>
                    <p>We are just a bunch of testers working in the Management Testing Community who enjoy learning in a fun and practical way. That's kind of what we aim to do here.</p>
                    <p>The original idea where this website came from was and still is, helping each other to improve our technical (and why not also social) skills. We just wanted to have a taste of that developer stuff we so often see but never lay hands on.</p>
                    <p>We strongly believe that by doing this we will be able to know each other much better and build stronger relations among developers and testers and nurish eath other with the mutual knowledge. Who doesn't like just sharing perspectives and dimishing the lines that separate us? Did you know these lines are tending to be thiner and thiner in time?</p>
                    <p>Developers are gaining and also required of get deeper within the clients' business, understanding their rules, their environments, the users' needs.</p>
                    <p>On the one hand, the human connection with systems are one of the specialties of QAs/Testers</p>
                    <p>On the other hand, we testers are expected to develop or technical skills up to a point not ever seen before in time. And guess who can help us in that matter...</p>
                    <p>You're right, developers!</p>
                    <p>So this is just a sneak peak of what will be a much larger project we will all benefit from.</p>
                    <p>It was a pleasure to have you around and we hope that if you're interested in sharing, learning or taking part by any means, please do. We like to think we are a quite warm and friendly team, and hopefully so will you.</p>
                    <p><strong>Have a nice day! :)</strong></p>
                   
                </div>

                </div>

                <div class="prof-images-container">
                <div class="prof-tester">
                    <img src={gabriel} class="prof-image" alt="person" />
                    <p>Gabriel Giri</p>
                </div>
                <div class="prof-tester">
                    <img src={fernando} class="prof-image" alt="person"/>
                    <p>Fernando Uranga</p>
                </div>
                <div class="prof-tester">
                    <img src={lucia} class="prof-image" alt="person"/>
                    <p>Lucía G</p>
                </div>  
                <div class="prof-tester">
                    <img src={evelin} class="prof-image" alt="person"/>
                    <p>Evelin Mena</p>
                </div>
                <div class="prof-tester">
                    <img src={carla} class="prof-image" alt="person"/>
                    <p>Carla Passaro</p>
                </div>
                <div class="prof-tester">
                    <img src={cintia} class="prof-image" alt="person"/>
                    <p>Cintia Hetzer</p>
                </div>
                <div class="prof-tester">
                    <img src={andrea} class="prof-image" alt="person"/>
                    <p>Andrea Sabella</p>
                </div> 
                <div class="prof-tester">
                    <img src={martin} class="prof-image" alt="person"/>
                    <p>Martín Zapata</p>
                </div>  
                <div class="prof-tester">
                    <img src={gisela} class="prof-image" alt="person"/>
                    <p>Gisela Vivas</p>
                </div> 
                <div class="prof-tester">
                    <img src={mauri} class="prof-image" alt="person"/>
                    <p>Mauricio Gullotto</p>
                </div>  
               <div class="prof-tester">
                    <img src={alejandra} class="prof-image" alt="person"/>
                    <p>Alejandra Usart</p>
                </div>  
                                    
            </div>

        </main>

    </div>

);

export default AboutUs;
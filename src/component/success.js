import React from 'react';
import ernesto from '../images/aboutUs/Ernesto_Bordenave.jpg'; 
import gisela from '../images/aboutUs/Gisela_Vivas.jpg'; 
import giri from '../images/aboutUs/Gabriel_Giri.jpg';
import fernando from '../images/aboutUs/Fernando_Uranga.jpg'; 
import ezequiel from '../images/aboutUs/Ezequiel_Gomez.jpg'; 

const Success = (props) => (
    <div className="container mt-5">
        <main className="page-content" aria-label="Content">
            <div className="wrapper">
                <div className="home">
                    <div className="typewriter rounded">
                        <h2>{props.title}</h2>
                        <div className="animate title">
                            <span>s</span>
                            <span>u</span>
                            <span>c</span>
                            <span>c</span>
                            <span>e</span>
                            <span>s</span>
                            <span>s</span>&nbsp;
                            <span>s</span>
                            <span>t</span>
                            <span>o</span>
                            <span>r</span>
                            <span>i</span>
                            <span>e</span>
                            <span>s</span>&nbsp;
                        </div>
                    </div>
                    <br/>
                    <div class="prof-images-container-success">
                        <div class="prof-tester-success">
                            <h4>Gisela Vivas</h4>
                            <img src={gisela} class="prof-image" alt="gise"/>
                            <p>Gise now knows how to start to develop an application from scratch. She also improves her acknowledges about teaching testing in general.</p>
                        </div>
                    </div>
                    <hr />
                    <div class="prof-images-container-success">
                        <div class="prof-tester-success">
                            <h4>Ernesto Bordenave</h4>
                            <img src={ernesto} class="prof-image" alt="tito"/>
                            <p>Ernest knows to play with components with react and works in quality because now I know that the whole team is responsible for testing.</p>
                        </div>
                    </div>
                    
                    <hr />
                    <div class="prof-images-container-success">
                        <div class="prof-tester-success">
                            <h4>Gabriel Giri</h4>
                            <img src={giri} class="prof-image" alt="tito"/>
                            <p>Gaby now knows how to become a TESTER and he also improves his skills on React component.</p>
                        </div>
                    </div>
                    

                    <hr />
                    <div class="prof-images-container-success">
                        <div class="prof-tester-success">
                            <h4>Fernando Uranga</h4>
                            <img src={fernando} class="prof-image" alt="tito"/>
                            <p>Fer now feels more comfortable working on web-based applications and has begun to understand react involving technologies.</p>
                        </div>
                    </div>
                    
                    
                    <hr />
                    <div class="prof-images-container-success">
                        <div class="prof-tester-success">
                            <h4>Ezequiel Gomez</h4>
                            <img src={ezequiel} class="prof-image" alt="tito"/>
                            <p>Eze now knows how works in a platform developed in React component and also he learns a lot of testing in agile.</p>
                        </div>
                    </div>                 
                </div>
            </div>
        </main>
    </div>
);

export default Success;
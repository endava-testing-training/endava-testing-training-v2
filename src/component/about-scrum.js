import React from 'react';

const AboutScrum = (props) => (

    <div className="container mt-5">

        <main className="page-content" aria-label="Content">
            <div className="wrapper">
                <div className="typewriter rounded">
                    <h2>{props.title}</h2>
                   
                    <div class="animate title">
				
                        <span>a</span>
                        <span>b</span>
                        <span>o</span>
                        <span>u</span>
                        <span>t</span>&nbsp;
                        <span>s</span>
                        <span>c</span>
                        <span>r</span>
                        <span>u</span>
                        <span>m</span>
 
                     </div>

                </div>
                <iframe src="https://www.youtube.com/embed/YhGaUh8R7II" width="100%" height="415" frameborder="0"
                    allowfullscreen></iframe>
            </div>

        </main>

    </div>

);

export default AboutScrum;
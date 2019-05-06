import React from 'react';

const AboutScrum = (props) => (

    <div class="container">

        <main class="page-content" aria-label="Content">
            <div class="wrapper">
                <div class="typewriter rounded">
                    <h2>Usefull links</h2>
                    <h1>{props.title}</h1>
                </div>
                <iframe src="https://www.youtube.com/embed/YhGaUh8R7II" width="100%" height="415" frameborder="0"
                    allowfullscreen></iframe>
            </div>

        </main>

    </div>

);

export default AboutScrum;
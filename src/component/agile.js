import React from 'react';

const Agile = (props) => (

    <div class="container">

        <main class="page-content" aria-label="Content">
            <div class="wrapper">
                <div class="typewriter rounded">
                    <h2>{props.title}</h2>
                 
                    <div class="animate title">
				
                        <span>a</span>
                        <span>b</span>
                        <span>o</span>
                        <span>u</span>
                        <span>t</span>&nbsp;
                        <span>a</span>
                        <span>g</span>
                        <span>i</span>
                        <span>l</span>
                        <span>e</span>
 
                     </div>


                </div>
                <iframe src="https://www.youtube.com/embed/V5LaKpjcgKQ"
                    width="100%" height="415" frameborder="0" allowfullscreen></iframe>
            </div>

        </main>

    </div>

);

export default Agile;
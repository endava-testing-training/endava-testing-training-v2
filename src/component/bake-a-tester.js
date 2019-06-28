import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BakeTester = (props) => (

    <div className="container mt-5">

        <main className="page-content" aria-label="Content">
                                          
                    <div className="typewriter rounded">
                        <h2>{props.title}</h2>
        
                        <div className="animate title">
				
                            <span>b</span>
                            <span>a</span>
                            <span>k</span>
                            <span>e</span>&nbsp;
                            <span>a</span>&nbsp;
                            <span>t</span>
                            <span>e</span>
                            <span>s</span>
                            <span>t</span>
                            <span>e</span>
                            <span>r</span>
                    
                        </div>

                    </div>
                    <h2>Main Content for Bake a Tester</h2>
                    The idea

Develop a place where anyone can learn how to be a tester.

In that place you could find all definitions and tips to do the best testing.

Technical and exercises in a same place to familiarize the audience with the terminology used in the testing work.

Extensible a ser utililzado por distintas comunidades

Develop an interdisciplinary application for helping young professionals becoming testers through some kind of introductory lab
                       
                 
                
              
                   

            </main>

        </div>


);

export default BakeTester;
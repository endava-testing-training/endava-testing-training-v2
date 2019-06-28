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

            The idea is develop a place where anyone can learn how to become a tester.

            In that place you could find all definitions and tips to do the best testing.

            Technical and exercises in a same place to familiarize the audience with the terminology used in the testing work.

            Our purpose is to extend it to be used by different communities

            Develop an interdisciplinary application for helping young professionals becoming testers through some kind of introductory lab

            <hr />
            <h2>Topics to cover</h2>
                        <ul>
                           <li>
                              <strong>
                                  <Link to={"topics"}>View all topics</Link>
                              </strong>
                           </li>
                        </ul>
            <hr />
            <h2>Our goals</h2>
                   <ul>
                      <li>Our purpose of this training is share and impart knowledge.</li>
                      <li>To familiarize the audience with the terminology used in the testing work.</li>
                      <li>To arrive at a common understanding of the scope of testing activity.</li>
                      <li>Execute a program with the intent of finding errors to:</li>
                                <ul>
                                    <li>Determine whether system meets specifications</li>
                                    <li>Determine whether system meets user’s needs</li>
                                </ul>
                       <li>Understand about techniques for planning tests.</li>
                       <li>Apply techniques of software testing in projects.</li>
                       <li>Select the appropriate testing techniques and objectives.</li>
                       <li>Continuously improve the testing process.</li>
                    </ul>



       </main>


              
       </div>



);

export default BakeTester;
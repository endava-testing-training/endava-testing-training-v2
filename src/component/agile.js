import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bookBob   from '../images/Books/Agile Testing book Bob.jpg';
import books   from '../images/Books/Agile Testing book.jpg';


const Agile = (props) => (

    <div className="container mt-5">

        <main className="page-content" aria-label="Content">
                                          
                    <div className="typewriter rounded">
                        <h2>{props.title}</h2>
        
                        <div className="animate title">
				
                            <span>a</span>
                            <span>g</span>
                            <span>i</span>
                            <span>l</span>
                            <span>e</span>&nbsp;
                            <span>f</span>
                            <span>u</span>
                            <span>n</span>
                            <span>d</span>
                            <span>a</span>
                            <span>m</span>
                            <span>e</span>
                            <span>n</span>
                            <span>t</span>
                            <span>a</span>
                            <span>l</span>
                            <span>s</span>


                    
                        </div>

                    </div>

                    <h2>Interesting Videos</h2>
                        <ul>
                          <li>
                            <strong>
                            <a href="about-scrum">About Scrum</a>
                            </strong>
                          </li>
                           <li>
                            <strong>
                            <a href="video-agile">12 agile principles</a>
                            </strong>
                          </li>
                          <li>
                           <strong>
                           <a href="agile-testing">Agile Software Testing with James Bach</a>
                           </strong>
                          </li>
                    <hr />
                        </ul>
                          <h2>Useful Links</h2>
                          <ul>
                              <li>
                                  <strong>
                                      <a href="https://www.testingexcellence.com/tag/agile-testing/">Agile Testing</a>
                                   </strong>
                               </li>
                          </ul>
                    <hr />
                    <h2>Material to download</h2>
                    <ul>
                        <li>
                            <strong>
                                <div onClick={ () => window.open(require('../assets/RSD-Scrum basics.pptx'), '_none')}>
                                    <p class="downloadable">Scrum basics <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                </div>   
                            </strong>
                        </li>
                        <li>
                            <strong>
                                 <div onClick={ () => window.open(require('../assets/RSD- Agile Estimations.pptx'), '_none')}>
                                        <p class="downloadable">Agile Estimations <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                  </div>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                 <div onClick={ () => window.open(require('../assets/Jira Training.pptx'), '_none')}>
                                      <p class="downloadable">Jira Training <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                 </div>
                            </strong>
                        </li>
                    </ul>


                    <hr />

                         <h2>Books that every agile tester should read</h2>
                            <ul class="books">
                                 <li>

                                 <img src={books}></img>
                                 <strong>
                                 <div onClick={ () => window.open(require('../assets/AGILE_TESTING_-_A_PRACTICAL_GUIDE_FOR_TESTERS_AND_AGILE_TEAMS.pdf'), '_none')}>
                                 <p class="downloadable">Agile Testing: a practical guide for testers and agile teams<FontAwesomeIcon icon={['fa', 'download']} /></p>
                                 </div>
                                 </strong>
                                 </li>
                                 <li>
                                <img src={bookBob}></img>
                                 <strong>
                                    <div onClick={ () => window.open(require('../assets/The 3 Pillars of Agile Quality and Testing (Bob Galen).pdf'), '_none')}>
                                    <p class="downloadable">The 3 Pillars of Agile Quality and Testing (Bob Galen)<FontAwesomeIcon icon={['fa', 'download']} /></p>
                                    </div>
                                 </strong>
                                 </li>


                     </ul>

                  

                   </main>

        </div>


);

export default Agile;
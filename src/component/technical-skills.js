import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TechnicalSkills = (props) => (

    <div className="container mt-5">

    <main className="page-content" aria-label="Content">
                                      
                <div className="typewriter rounded">
                    <h2>{props.title}</h2>
    
                    <div className="animate title">

                        <span>t</span>
                        <span>e</span>
                        <span>c</span>
                        <span>h</span>
                        <span>n</span>
                        <span>i</span>
                        <span>c</span>
                        <span>a</span>
                        <span>l</span>&nbsp;
                        <span>s</span>
                        <span>k</span>
                        <span>i</span>
                        <span>l</span>
                        <span>l</span>
                        <span>s</span>
                
                    </div>

                </div>
                <h2>Data base</h2>
                <ul>
                   <li>
                       <strong>
                          <Link to={"introduction-erd"}>Introduction to Entity Relationship Diagram</Link>
                       </strong>
                   </li>
                   <li>
                      <strong>
                          <Link to={"introduction-sql"}>Introduction to SQL</Link>
                      </strong>
                   </li>
                </ul>
                       <hr />
                       <h2>Performance Testing </h2>
                       <ul>
                           <li>
                               <strong>
                                 <div onClick={ () => window.open(require('../assets/01- JMeter- Building your First Script.pptx'), '_none')}>
                                   <p class="downloadable">01-JMeter- Building your First Script<FontAwesomeIcon icon={['fa', 'download']} /></p>
                                 </div>
                               </strong>
                           </li>

                           <li>
                               <strong>
                                 <div onClick={ () => window.open(require('../assets/02- Profilers and Client Side Performance Tools.pptx'), '_none')}>
                                 <p class="downloadable">02-Profilers and Client Side Performance Tools <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                 </div>
                               </strong>

                           </li>
                          </ul>

                <hr />
                <h2>Additional knowledge</h2>
                <ul>
                    <li>
                        <strong>
                            <a href="http://cgosorio.es/DW/comedor-css/" target="_blank">Selectors practice </a>
                        </strong>
                    </li>
                    <li>
                        <strong>
                          <div onClick={ () => window.open(require('../assets/Git Fundamentals.pptx'), '_none')}>
                              <p class="downloadable">Git Fundamentals <FontAwesomeIcon icon={['fa', 'download']} /></p>
                          </div>
                        </strong>
                    </li>
                   </ul>

                <hr />
                <h2>Automation local training </h2>
                    <ul>
                    <li>
                        <strong>
                            <div onClick={ () => window.open(require('../assets/01-HTML for testing.pptx'), '_none')}>
                               <p class="downloadable">01-HTML for testing <FontAwesomeIcon icon={['fa', 'download']} /></p>
                            </div>   
                        </strong>
                    </li>

                    <li>
                        <strong>
                            <div onClick={ () => window.open(require('../assets/02-CSS IN AUTOMATION TESTING.pptx'), '_none')}>
                                <p class="downloadable">02-CSS in automation testing <FontAwesomeIcon icon={['fa', 'download']} /></p>
                            </div>   
                        </strong>

                    </li>
                    <li>
                        <strong>
                            <div onClick={ () => window.open(require('../assets/03- XPATH IN AUTOMATION TESTING.pptx'), '_none')}>
                                <p class="downloadable">03-XPATH in automation testing <FontAwesomeIcon icon={['fa', 'download']} /></p>
                            </div>   
                        </strong>
                    </li>
                    <li>
                        <strong>
                            <div onClick={ () => window.open(require('../assets/04- Introduction to Selenium.pptx'), '_none')}>
                                <p class="downloadable">04-Introduction to Selenium <FontAwesomeIcon icon={['fa', 'download']} /></p>
                            </div>   
                        </strong>
                    </li>
                    <li>
                             <strong>
                                 <div onClick={ () => window.open(require('../assets/05- Introduction to Object Oriented Programming .pptx'), '_none')}>
                                     <p class="downloadable">05-Introduction to Object Oriented Programming <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                 </div>
                             </strong>
                      </li>
                      <li>
                              <strong>
                                  <div onClick={ () => window.open(require('../assets/06- Ruby Training.pptx'), '_none')}>
                                      <p class="downloadable">06-Ruby Training <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                  </div>
                              </strong>
                      </li>
                      <li>
                              <strong>
                                  <div onClick={ () => window.open(require('../assets/07-POM & Page Factory Pattern Java.pptx'), '_none')}>
                                             <p class="downloadable">07-POM & Page Factory Pattern Java <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                  </div>
                              </strong>
                      </li>
                      <li>
                              <strong>
                                  <div onClick={ () => window.open(require('../assets/08 -POM & Page Factory Pattern C#.pptx'), '_none')}>
                                             <p class="downloadable">08-POM & Page Factory Pattern C# <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                  </div>
                               </strong>
                      </li>

                </ul>




        </main>

    </div>


);

export default TechnicalSkills;
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            <span>e</span>
                    
                        </div>

                    </div>
                    <h2>Main Content for Agile</h2>
                   
                       
                    <hr />
                    <h2>Topics to cover</h2>
                    <ul>
                        <li>Scrum basics (PPT)</li>
                        <li>Useful links > about scrum</li>
                        <li>Useful links > 12 agile principles</li>  

                    </ul>
                    <hr />
                    <h2>Material to download</h2>
                    <ul>
                        <li>
                            <strong>
                                <div onClick={ () => window.open(require('../assets/RSD- Endava initial testing Training.pptx'), '_none')}>
                                   <p class="downloadable">Main reading about initial testing <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                </div>   
                            </strong>
                        </li>

                        <li>
                            <strong>
                                <div onClick={ () => window.open(require('../assets/RSD-Endava test cases structure.pptx'), '_none')}>
                                    <p class="downloadable">Test cases structure <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                </div>   
                            </strong>

                        </li>
                        <li>
                            <strong>
                                <div onClick={ () => window.open(require('../assets/RSD- Endava - Web Accessibility Testing.pptx'), '_none')}>
                                    <p class="downloadable">Web Accessibility Testing <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                </div>   
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <div onClick={ () => window.open(require('../assets/RSD-Scrum basics.pptx'), '_none')}>
                                    <p class="downloadable">Scrum basics <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                </div>   
                            </strong>
                        </li>
                    </ul>
                    <hr />
                        <h2>Material to Read</h2>
                        <ul>
                            <li>
                            <strong>
                                <a href="test-guide">Testing Checklists</a>
                            </strong>

                        </li>
                        <li>
                            <strong>
                                <a href="ui-elements">Elements of User Interface</a>
                            </strong>

                        </li>
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
                  
                 

                    <h2>Tools to track test cases</h2>

                    <ul>
                        <li>
                        <strong>
                                <div onClick={ () => window.open(require('../assets/RSD- Generic template to report  Bugs.docx'), '_none')}>
                                    <p class="downloadable">Generic template to report Bugs <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                </div>   
                            </strong>
                        </li>
                        <li>
                        <strong>
                                <div onClick={ () => window.open(require('../assets/RSD-Template-TestCases.xlsx'), '_none')}>
                                    <p class="downloadable">Test cases - generic template <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                </div>   
                            </strong>
                        </li>

                        <li>
                            <strong>
                                <a href="https://jira.endava.com/" target="_blank">Jira tracking </a>
                            </strong>
                        </li>
                        </ul>
                   

            </main>

        </div>


);

export default Agile;
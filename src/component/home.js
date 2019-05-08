import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = (props) => (

    <div className="container">

        <main className="page-content" aria-label="Content">
            <div className="wrapper">
                                 
                    <div className="typewriter rounded">
                        <h2>{props.title}</h2>
        
                        <div className="animate title">
				
                            <span>b</span>
                            <span>a</span>
                            <span>s</span>
                            <span>i</span>
                            <span>c</span>&nbsp;
                            <span>t</span>
                            <span>e</span>
                            <span>s</span>
                            <span>t</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>&nbsp;
                            <span>t</span>
                            <span>r</span>
                            <span>a</span>
                            <span>i</span>
                            <span>n</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>
                    
                        </div>

                    </div>
                    <h2>Main Goals</h2>
                   
                    <ul>
                        <li>Our purpose of this training is share and impart knowledge.</li>
                        <li>To familiarize the audience with the terminology used in the testing work.</li>
                        <li>To arrive at a common understanding of the scope of testing activity.</li>
                        <li>Execute a program with the intent of finding errors to:</li>
                        <ul>
                            <li>Determine whether system meets specifications</li>
                            <li>Determine whether system meets user’s needs</li>
                        </ul>
                        <ul>
                        <li>Understand about techniques for planning tests.</li>
                        <li>Apply techniques of software testing in projects.</li>
                        <li>Select the appropriate testing techniques and objectives.</li>
                        <li>Continuously improve the testing process.</li>

                    </ul>
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
                    <h2>Material to download</h2>
                    <ul>
                        <li>
                            <strong>
                                <a href="RSD- Endava initial testing Training.pptx" download>Main reading <FontAwesomeIcon icon={['fa', 'download']}  /></a>
                            </strong>
                        </li>

                        <li>
                            <strong>
                                <a href="RSD-Endava test cases structure.pptx" download>Test cases structure <FontAwesomeIcon icon={['fa', 'download']} /></a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="RSD-Scrum basics.pptx" download>Scrum basics <FontAwesomeIcon icon={['fa', 'download']} /></a>
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
                    <h2>Exercises</h2>

                    <ul>
                        <li>
                            <strong>Temperature Converter: </strong>

                            <a href="https://endava-testing-training.github.io/Celfar/specifications.html">Requirements</a>

                            <span>. Versions: </span>
                            <a href="https://endava-testing-training.github.io/Celfar/?v=1">Version 1</a>,
                            <a href="https://endava-testing-training.github.io/Celfar/?v=2">Version 2</a>,
                            <a href="https://endava-testing-training.github.io/Celfar/?v=3">Version 3</a>,
                            <a href="https://endava-testing-training.github.io/Celfar/?v=4">Version 4</a><span> and </span>
                            <a href="https://endava-testing-training.github.io/Celfar">Version Final</a>
                        </li>

                        <li>
                            <strong>Argentina Provinces: </strong>Data searcher about Argentina Provinces.

                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/specifications.html">Requeriments</a>.

                            <span>Versions: </span>
                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_1.html">Version 1</a>,
                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_2.html">Version 2</a>,
                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_3.html">Version 3</a><span> and </span>
                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_4.html">Version 4</a>
                        </li>

                        <li>
                            <strong>Contacts: </strong>
                          
                            <a href="https://jira.endava.com/secure/RapidBoard.jspa?rapidView=2930&projectKey=RSDTS001&view=planning.nodetail">Contacts Board</a><span>. </span> 
                            <a href="https://endava-testing-training.github.io/Contacts/specifications.html">Requirements</a>.

                            <span>Versions: </span>
                            <a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=1">Version 1</a>,
                            <a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=2">Version 2</a>,
                            <a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=3">Version 3</a>,
                            <a href="https://endava-testing-training.github.io/Contacts/contacts.html">Version final</a><span> and </span> 
                            <a href="https://endava-testing-training.github.io/Contacts/contacts_improvements.html">Version improvements</a> 
                        </li>

                    </ul>

                    <hr />

                    <h2>Tools to track test cases</h2>

                    <ul>
                        <li>
                            <strong>
                                <a href="RSD- Generic template to report  Bugs.docx" download>Generic template to report Bugs <FontAwesomeIcon icon={['fa', 'download']} /></a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="RSD-Template-TestCases.xlsx" download>Test cases - generic template <FontAwesomeIcon icon={['fa', 'download']} /> </a>
                            </strong>
                        </li>

                        <li>
                            <strong>
                                <a href="https://jira.endava.com/" target="_blank">Jira tracking </a>
                            </strong>
                        </li>
                        </ul>
                    </ul>

                </div>

            </main>

        </div>


);

export default Home;
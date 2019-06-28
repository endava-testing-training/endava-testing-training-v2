import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Practice = (props) => (

    <div className="container mt-5">

        <main className="page-content" aria-label="Content">
                                          
                    <div className="typewriter rounded">
                        <h2>{props.title}</h2>
        
                        <div className="animate title">
				
                            <span>p</span>
                            <span>r</span>
                            <span>a</span>
                            <span>c</span>
                            <span>t</span>
                            <span>i</span>
                            <span>c</span>
                            <span>e</span>
                    
                        </div>

                    </div>
                 
        
                    <h2>Exercises</h2>

                    <ul>
                        <li>
                            <strong>Temperature Converter: </strong>

                            <a href="https://endava-testing-training.github.io/Celfar/specifications.html">Requirements</a>
                            <span>. Versions: </span>
                            <a href="https://endava-testing-training.github.io/Celfar/?v=1">Version 1</a>,&nbsp;
                            <a href="https://endava-testing-training.github.io/Celfar/?v=2">Version 2</a>,&nbsp;
                            <a href="https://endava-testing-training.github.io/Celfar/?v=3">Version 3</a>,&nbsp;
                            <a href="https://endava-testing-training.github.io/Celfar/?v=4">Version 4</a><span> and </span>
                            <a href="https://endava-testing-training.github.io/Celfar">Version Final</a>
                        </li>

                        <li>
                            <strong>Argentina Provinces: </strong>Data searcher about Argentina Provinces.&nbsp;

                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/specifications.html">Requeriments</a>.&nbsp;

                            <span>Versions: </span>
                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_1.html">Version 1</a>,
                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_2.html">Version 2</a>,
                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_3.html">Version 3</a><span> and </span>
                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_4.html">Version 4</a>
                        </li>

                        <li>
                            <strong>Contacts: </strong>
                          
                            <a href="https://jira.endava.com/secure/RapidBoard.jspa?rapidView=2930&projectKey=RSDTS001&view=planning.nodetail">Contacts Board</a><span>. </span> 
                            <a href="https://endava-testing-training.github.io/Contacts/specifications.html">Requirements</a>.&nbsp;

                            <span>Versions: </span>
                            <a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=1">Version 1</a>,&nbsp;
                            <a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=2">Version 2</a>,&nbsp;
                            <a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=3">Version 3</a>,&nbsp;
                            <a href="https://endava-testing-training.github.io/Contacts/contacts.html">Version final</a><span> and </span> 
                            <a href="https://endava-testing-training.github.io/Contacts/contacts_improvements.html">Version improvements</a> 
                        </li>

                    </ul>

                 

           

            </main>

        </div>


);

export default Practice;
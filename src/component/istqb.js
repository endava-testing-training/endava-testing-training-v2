import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Success = (props) => (

    <div className="container">

        <main className="page-content" aria-label="Content">
            <div className="wrapper">
                <div className="home">

                    <div className="typewriter rounded">
                        <h2>{props.title}</h2>
                        <div className="animate title">
				
                            <span>I</span>
                            <span>S</span>
                            <span>T</span>
                            <span>Q</span>
                            <span>B</span>&nbsp;
                            <span>C</span>
                            <span>e</span>
                            <span>r</span>
                            <span>t</span>
                            <span>i</span>
                            <span>f</span>
                            <span>i</span>
                            <span>c</span>
                            <span>a</span>
                            <span>t</span>
                            <span>i</span>
                            <span>o</span>
                            <span>n</span>
                            <span>s</span>
      
                        </div>
                    </div>
                    <hr />
                    <h2>Our first steps - Material to download</h2>

                    <hr />
                     
                        <ul>
                      
                                                <li> <strong>                 
                                <a href="CTFL-2018-Syllabus_ES.pdf" download>ISTQB in Spanish <FontAwesomeIcon icon={['fa', 'download']}  /></a>
                                </strong></li>
                            <li><strong>
                                <a href="CTFL-Syllabus-2018 _EN.pdf" download>ISTQB in English <FontAwesomeIcon icon={['fa', 'download']}  /></a>
                                </strong></li>
                            <li><strong>
                                <a href="CTFL-2018-Syllabus-2018-Overview.pdf" download>ISTQB Overview 2018 <FontAwesomeIcon icon={['fa', 'download']}  /></a>
                                </strong></li>
                            <li><strong>
                                <a href="CTFL-2018-Release-Notes 2 Traceability from 2011 to 2018 on LO level.pdf" download >Release notes from 2011 to 2018 <FontAwesomeIcon icon={['fa', 'download']}  /></a>
                                </strong></li>
                        </ul>
 

                </div>
            </div>

        </main>

    </div>

);

export default Success;
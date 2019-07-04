import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FunctionalTesting = (props) => (

    <div className="container mt-5">

        <main className="page-content" aria-label="Content">

            <div className="typewriter rounded">
                <h2>{props.title}</h2>

                <div className="animate title">

                    <span>f</span>
                    <span>u</span>
                    <span>n</span>
                    <span>c</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>
                    <span>a</span>
                    <span>l</span>&nbsp;
                    <span>t</span>
                    <span>e</span>
                    <span>s</span>
                    <span>t</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>

                </div>
            </div>
            <h2>Good to know</h2>
            <ul>
                <li>
                    <strong>
                        <a href="ui-elements">Elements of User Interface</a>
                    </strong>
                </li>
                <li>
                    <strong>
                        <a href="test-guide">Testing Checklists</a>
                    </strong>

                </li>

            </ul>

            <hr />
            <h2>Certifications</h2>
            <ul>
                <li>
                    <strong>
                        <a href="istqb">ISTQB</a>
                    </strong>
                </li>
            </ul>

            <hr />
            <h2>Material to download</h2>
            <ul>
                <li>
                    <strong>
                        <div onClick={() => window.open(require('../assets/RSD- Endava initial testing Training.pptx'), '_none')}>
                            <p className="downloadable">Main reading about initial testing <FontAwesomeIcon icon={['fa', 'download']} /></p>
                        </div>
                    </strong>
                </li>

                <li>
                    <strong>
                        <div onClick={() => window.open(require('../assets/RSD-Endava test cases structure.pptx'), '_none')}>
                            <p className="downloadable">Test cases structure <FontAwesomeIcon icon={['fa', 'download']} /></p>
                        </div>
                    </strong>

                </li>
                <li>
                    <strong>
                        <div onClick={() => window.open(require('../assets/Mobile testing.pdf'), '_none')}>
                            <p className="downloadable">Mobile Testing <FontAwesomeIcon icon={['fa', 'download']} /></p>
                        </div>
                    </strong>
                </li>
                <li>
                    <strong>
                        <div onClick={() => window.open(require('../assets/RSD- Endava - Web Accessibility Testing.pptx'), '_none')}>
                            <p className="downloadable">Web Accessibility Testing <FontAwesomeIcon icon={['fa', 'download']} /></p>
                        </div>
                    </strong>
                </li>

            </ul>
            <hr />
            <h2>Tools to track test cases</h2>

            <ul>
                <li>
                    <strong>
                        <div onClick={() => window.open(require('../assets/RSD- Generic template to report  Bugs.docx'), '_none')}>
                            <p className="downloadable">Generic template to report Bugs <FontAwesomeIcon icon={['fa', 'download']} /></p>
                        </div>
                    </strong>
                </li>
                <li>
                    <strong>
                        <div onClick={() => window.open(require('../assets/RSD-Template-TestCases.xlsx'), '_none')}>
                            <p className="downloadable">Test cases - generic template <FontAwesomeIcon icon={['fa', 'download']} /></p>
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

export default FunctionalTesting;
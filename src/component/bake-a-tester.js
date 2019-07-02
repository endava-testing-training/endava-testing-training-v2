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


            <p> Our  idea is develop a place where anyone can learn how to become a tester.

            In that place you could find all definitions and tips to do the best testing.</p>

            <p>Technical and exercises in a same place to familiarize the audience with the terminology used in the testing work.</p>

            <p> Our purpose is to extend it to be used by different communities.

             Develop an interdisciplinary application for helping young professionals becoming testers through some kind of introductory lab. </p>


            <hr />
                   </main>
                            <div className="typewriter rounded">

                                    <div className="animate title">

                                        <span>o</span>
                                        <span>u</span>
                                        <span>r</span>&nbsp;
                                        <span>g</span>
                                        <span>o</span>
                                        <span>a</span>
                                        <span>l</span>
                                        <span>s</span>
                                      </div>

                                </div>
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


                <div className="typewriter rounded">

                        <div className="animate title">

                            <span>t</span>
                            <span>o</span>
                            <span>p</span>
                            <span>i</span>
                            <span>c</span>
                            <span>s</span>&nbsp;
                            <span>a</span>
                            <span>b</span>
                            <span>o</span>
                            <span>u</span>
                            <span>t</span>&nbsp;
                            <span>t</span>
                            <span>h</span>
                            <span>i</span>
                            <span>s</span>&nbsp;
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

        <div class="accordion-option">

            <a href="javascript:void(0)" class="toggle-accordion active" accordion-id="#accordion"></a>
        </div>
        <div class="clearfix"></div>
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-1" aria-expanded="false" aria-controls="collapseOne">
                Concepts
                </a>
            </h4>
        </div>
        <div id="collapse-1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        <div class="panel-body">
          <ul>
            <li>Quality Assurance and Quality Control</li>
            <li>Birth of a Project</li>
            <li>SDLC - Software Development Life Cycle</li>
            <li>Explanation of the V-Model (Verification and Validation model)</li>
            <li>Agile Testing</li>
            <li>BRD - Business Requirement Document</li>
            <li>FRD - Functional Requirement Documents</li>
            <li>System Design Specification</li>
          </ul>
        </div>
        </div>
        </div>
        <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingTwo">
         <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-2" aria-expanded="false" aria-controls="collapseTwo">
        Testing Strategy
        </a>
       </h4>
       </div>
       <div id="collapse-2" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
        <div class="panel-body">
          <ul>
            <li>Understanding Test Scenarios</li>
            <li>Software Testing Life Cycle (STLC)</li>
            <li>Traceability Matrix (Relationship between requirement/stories and test cases)</li>
            <li>Types of Testing </li>
            <li>VP Testing Standards</li>
          </ul>
         </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-3" aria-expanded="false" aria-controls="collapseThree">
        Testing Techniques
        </a>
      </h4>
      </div>
      <div id="collapse-3" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div class="panel-body">
          <ul>
            <li>Black Box Testing</li>
            <li>White Box Testing</li>
            <li>Path Testing (Execute everything at lease once)</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-4" aria-expanded="false" aria-controls="collapseThree">
        Testing Types
        </a>
      </h4>
      </div>
      <div id="collapse-4" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div class="panel-body">
          <ul>
            <li>Unit Test</li>
            <li>Integration Test</li>
            <li>System Test</li>
            <li>Regression Test</li>
            <li>Functionality Test</li>
            <li>Load / Performance Test</li>
            <li>Stress Test</li>
            <li>Compatibility Test</li>
            <li>User Acceptance Test</li>
            <li>Smoke Test</li>
            <li>Sanity Test</li>
            <li>Backend Test</li>
            <li>Security Test</li>
            <li>Browser Compatibility Test</li>
            <li>Automated Testing and Automated Testing Tools</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-5" aria-expanded="false" aria-controls="collapseThree">
          Bug and Defect Reporting Process
        </a>
      </h4>
      </div>
      <div id="collapse-5" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div class="panel-body">
          <ul>
            <li>DLC - Defect Life Cycle</li>
            <li>Defect Management</li>
            <li>Defect Tracking</li>
            <li>Understanding Priority and Severity</li>
            <li>Defect Report </li>
            <li>Impact Analysis for fixing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </div>

);

export default BakeTester;
import React from 'react';
import bake from '../images/bakeAtester.png';

const BakeTester = (props) => (
  <div className="container mt-5">
    <main className="page-content" aria-label="Content">
      <div className="typewriter rounded mb-2">
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
      <img src={bake} className="mb-5 fullwidth" alt="bake a tester"></img>
      <p><strong>Bake A Tester 3.0</strong> is a website developed by a team both of testers and developers from Rosario Endava Delivery Unit. The main idea behind this project is to provide a place from where newcomers and people outside the testing environment can learn how to become testers.</p>
      <p>But just between us, it's much more than that.</p>
      <p>It's intended to be an internal DU's project to be maintained by testers and developers with the objective of sharing their experiences and dive deeper in each others' areas of expertise, in a way that will enlight testers with developers' knowledge and viceversa.</p>
      <p>The platform serves as a point of contact cross-roles and cross-disciplines, where anyone can find information related to Management Discipline, Automation Discipline, Performance Discipline, among many others. </p>
      <p>You will find useful links, definitions and tips on how to become a better tester, certifications information, and so on. Furthermore, technical excercises are offered so you familiarize with testing terminology.</p>
      <p>As members of interdisciplinary teams it is within our strongest beliefs that all as a whole are responsible for ensuring the highest quality-standards of the products we deliver. Come on board. Be more!</p>
      <p>When you hear the bell you'll know your Tester is fully baked and ready to come out the oven!</p>
      <p className="mb-2"><strong>We wish you a good baking! ;)</strong></p>
      <hr />
    </main>
    <h2 class="mt-1 mb-3">Topics Cover</h2>

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
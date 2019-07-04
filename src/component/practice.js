import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToolTipPractice from './components/ToolTipPractice';
import AccordionBT from './components/AccordionBT';
import { Link } from 'react-router-dom';


const Practice = (props) => (

    <div className="container mt-5" id="practice">

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
                 

<div class="flex-grid-thirds mb-3">
  <div class="col"><h3>Temperature Converter</h3>



      <FontAwesomeIcon icon={['fa', 'thermometer-half']} class="icons"/>
      <h5 className="text-center font-weight-bold">Celsius to Fahrenheit converter</h5>

      <div className="accordion-option">
          <a href="javascript:void(0)" className="toggle-accordion active" accordion-id="#accordion"></a>
        </div>
        <div className="clearfix"></div>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-1" aria-expanded="false" aria-controls="collapseOne">
                What will I learn with this practice?</a>
              </h4>
            </div>
            <div id="collapse-1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
               
              
              <ul>
                    <li>Know about limit values</li>
                    <li>Structure test cases</li>
                    <li>Structure Bug report </li>
                    <li>Learn the main concepts to detect and report bugs </li>
                    <li>Execute test cases</li>
                    <li>Write Test Cases</li>
                </ul>

              </div>
            </div>
          </div>

        </div>


<hr />
<a href="https://endava-testing-training.github.io/Celfar/specifications.html">Acceptance Criteria <FontAwesomeIcon icon={['fa', 'downloadTemplate']} /></a>
<hr />
<p class="mt-2">Versions</p>
<ul>
    <li><a href="https://endava-testing-training.github.io/Celfar/?v=1">Version 1</a></li>
    <li><a href="https://endava-testing-training.github.io/Celfar/?v=2">Version 2</a></li>
    <li><a href="https://endava-testing-training.github.io/Celfar/?v=3">Version 3</a></li>
    <li><a href="https://endava-testing-training.github.io/Celfar/?v=4">Version 4</a></li>
    <li><a href="https://endava-testing-training.github.io/Celfar">Version Final</a></li>
</ul>
<hr />
<p class="mt-2">Templates useful</p>

            <ul>
                       
                        <li>
                            <strong>
                                 <div onClick={ () => window.open(require('../assets/RSD-Template-TestCases.xlsx'), '_none')}>
                                      <p class="downloadablepractice">Test cases template <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                 </div>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <div onClick={ () => window.open(require('../assets/RSD- Generic template to report  Bugs.docx'), '_none')}>
                                    <p class="downloadablepractice">Template to report Bugs <FontAwesomeIcon icon={['fa', 'download']} /></p>
                                </div>   
                            </strong>
                        </li>

                    </ul>
</div>
  <div class="col"><h3>Argentina Provinces</h3>

  <FontAwesomeIcon icon={['fa', 'map-marked']} class="icons"/>



  <h5 className="text-center font-weight-bold">Data searcher about Provinces</h5>


  <div className="accordion-option">
          <a href="javascript:void(0)" className="toggle-accordion active" accordion-id="#accordion"></a>
        </div>
        <div className="clearfix"></div>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-2" aria-expanded="false" aria-controls="collapseTwo">
                What will I learn with this practice?</a>
              </h4>
            </div>
            <div id="collapse-2" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
                      
                <ul>
                    <li>Learn about filters and sorting </li>
                    <li>Enforce knowledge about Structure test cases</li>
                    <li>Execute test cases </li>
                    <li>Write Test Cases</li>
                </ul>

              </div>
            </div>
          </div>

        </div>

  <hr />
                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/specifications.html">Acceptance Criteria</a>
                            <hr />
                            <p class="mt-2">Versions</p>
                            <ul>
                            <li><a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_1.html">Version 1</a></li>
                            <li><a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_2.html">Version 2</a></li>
                            <li><a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_3.html">Version 3</a></li>
                            <li><a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_4.html">Version 4</a></li>
                            <li class="invisible"><a href="#" ></a></li>

                            </ul>
                            <hr />
 <p class="mt-2">Templates useful</p>
             <ul>
             <li>
                 <strong>
                    <div onClick={ () => window.open(require('../assets/RSD-Template-TestCases.xlsx'), '_none')}>
                      <p class="downloadablepractice">Test cases template <FontAwesomeIcon icon={['fa', 'download']} /></p>
                    </div>
                 </strong>
             </li>
             <li>
                 <strong>
                    <div onClick={ () => window.open(require('../assets/RSD- Generic template to report  Bugs.docx'), '_none')}>
                      <p class="downloadablepractice">Template to report Bugs <FontAwesomeIcon icon={['fa', 'download']} /></p>
                    </div>
                 </strong>
             </li>

             </ul>
  </div>
  <div class="col"><h3>Contacts In Agile </h3>
  <FontAwesomeIcon icon={['fa', 'address-book']} class="icons"/>

  <h5 className="text-center font-weight-bold">Contacts</h5>
  
                 
                      
                  
                  
                
  <div className="accordion-option">
          <a href="javascript:void(0)" className="toggle-accordion active" accordion-id="#accordion3"></a>
        </div>
        <div className="clearfix"></div>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-3" aria-expanded="false" aria-controls="collapseThree">
                What will I learn with this practice?</a>
              </h4>
            </div>
            <div id="collapse-3" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
               
             
              <ul>
              <li>Learning about CRUD –  To enforce see  <strong>
                          <Link to={"test-guide"}>Testing Checklists guide</Link>
                       </strong></li>
                <li>Learning about persistence</li>
                <li>Learning about data base- To enforce see <strong>
                          <Link to={"introduction-erd"}>Data base section</Link>
                       </strong></li>
                <li>Show non- functional requirements</li>
                <li>Show blockers bugs</li>
                <li>Continue enforcing write test cases</li>
                </ul>

              </div>
            </div>
          </div>

        </div>


  <hr />
                            <a href="https://endava-testing-training.github.io/Contacts/specifications.html">Acceptance Criteria</a>
                            <hr />
                            <p class="mt-2">Versions</p>
                            <ul>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=1">Version 1</a></li>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=2">Version 2</a></li>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=3">Version 3</a></li>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts.html">Version final</a></li>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts_improvements.html">Version improvements</a></li> 
                            </ul>
<hr />
<p class="mt-2">Jira Board</p>
 <li>
 <strong>
       <a href="https://jira.endava.com/secure/RapidBoard.jspa?rapidView=2930&projectKey=RSDTS001&view=planning.nodetail">Contacts Board </a>
 </strong>
 </li>

  </div>
</div>


            </main>

        </div>


);

export default Practice;
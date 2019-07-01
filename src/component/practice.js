import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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


<div class="flex-grid-thirds">
  <div class="col"><h3>Temperature Converter</h3>

      <FontAwesomeIcon icon={['fa', 'thermometer-half']} class="icons"/>

<a href="https://endava-testing-training.github.io/Celfar/specifications.html">Requirements</a>
<p class="mt-2">Versions</p>
<ul>
    <li><a href="https://endava-testing-training.github.io/Celfar/?v=1">Version 1</a></li>
    <li><a href="https://endava-testing-training.github.io/Celfar/?v=2">Version 2</a></li>
    <li><a href="https://endava-testing-training.github.io/Celfar/?v=3">Version 3</a></li>
    <li><a href="https://endava-testing-training.github.io/Celfar/?v=4">Version 4</a></li>
    <li><a href="https://endava-testing-training.github.io/Celfar">Version Final</a></li>
</ul>

</div>
  <div class="col"><h3>Argentina Provinces</h3>

  <FontAwesomeIcon icon={['fa', 'map-marked']} class="icons"/>



  <h5>Data searcher about Argentina Provinces</h5>

                            <a href="https://endava-testing-training.github.io/ProvinceSearcher/specifications.html">Requeriments</a>

                            <p class="mt-2">Versions</p>
                            <ul>
                            <li><a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_1.html">Version 1</a></li>
                            <li><a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_2.html">Version 2</a></li>
                            <li><a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_3.html">Version 3</a></li>
                            <li><a href="https://endava-testing-training.github.io/ProvinceSearcher/province_searcher_4.html">Version 4</a></li>
                            </ul>
  
  </div>
  <div class="col"><h3>Contacts</h3>
  <FontAwesomeIcon icon={['fa', 'address-book']} class="icons"/>



  <h5>Contacts Board</h5> 
                            <a href="https://endava-testing-training.github.io/Contacts/specifications.html">Requirements</a>

                            <p class="mt-2">Versions</p>
                            <ul>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=1">Version 1</a></li>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=2">Version 2</a></li>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts.html?v=3">Version 3</a></li>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts.html">Version final</a></li>
                            <li><a href="https://endava-testing-training.github.io/Contacts/contacts_improvements.html">Version improvements</a></li> 
                            </ul>
  </div>
</div>


            </main>

        </div>


);

export default Practice;
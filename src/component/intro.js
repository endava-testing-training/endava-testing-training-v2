import React from 'react';
import { Link } from 'react-router-dom';

const Intro = (props) => (

    <div className="container-fluid p-0 clearfix">

      <main className="page-content intro" aria-label="Content">
                                          
        <div><Link to={"agile"}><p>1.AGILE</p></Link></div>
        <div><Link to={"functional-testing"}><p>2.FUNCTIONAL TESTING</p></Link></div>
        <div><Link to={"practice"}><p>3.PRACTICE</p></Link></div>
        <div><Link to={"technical-skills"}><p>4.TECHNICAL SKILLS</p></Link></div>
        
                   
       </main>

        <div class="action">
          <a href="#">About Bake a Tester 3.0</a>
      </div>

    </div>
    
);

export default Intro;
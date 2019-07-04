import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (

    <div className="container-fluid p-0 clearfix">

    <main className="page-content intro" aria-label="Content">
        <div><Link to={"functional-testing"}><p>1.FUNCTIONAL TESTING</p></Link></div>                                 
        <div><Link to={"practice"}><p>2.PRACTICE</p></Link></div>
        <div><Link to={"technical-skills"}><p>3.TECHNICAL SKILLS</p></Link></div>
        <div><Link to={"agile"}><p>4.AGILE</p></Link></div>
    </main>

        <div class="action">
            <Link to={"bake-a-tester"}>About Bake a Tester 3.0</Link>
        </div>

    </div>
    
);

export default Home;
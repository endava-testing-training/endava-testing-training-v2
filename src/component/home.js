import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (

    <div className="container-fluid p-0 clearfix">
        <main className="page-content intro" aria-label="Content">
            <div><Link to={"functional-testing"}></Link><span>1.FUNCTIONAL TESTING</span></div>                                 
            <div><Link to={"practice"}></Link><span>2.PRACTICE</span></div>
            <div><Link to={"technical-skills"}></Link><span>3.TECHNICAL SKILLS</span></div>
            <div><Link to={"agile"}></Link><span>4.AGILE</span></div>
        </main>
        <div className="action">
            <Link to={"bake-a-tester"}>About Bake a Tester 3.0</Link>
        </div>
    </div>
);

export default Home;
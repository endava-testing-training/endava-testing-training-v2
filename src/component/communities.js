import React from 'react';

 const Communities = (props) => (

                   <div className="container mt-5">

                       <main className="page-content" aria-label="Content">
                           <div className="wrapper">
                               <div className="home">

                                   <div className="typewriter rounded">
                                       <h2>{props.title}</h2>
                                       <div className="animate title">

                                           <span>c</span>
                                           <span>o</span>
                                           <span>m</span>
                                           <span>m</span>
                                           <span>u</span>
                                           <span>n</span>
                                           <span>i</span>
                                           <span>t</span>
                                           <span>i</span>
                                           <span>e</span>
                                           <span>s</span>

                                       </div>
                                   </div>
                                   <h2>Management</h2>

                                   <hr />
                                   <h2>Performance</h2>

                                   <hr />
                                   <h2>Automation</h2>


                               </div>
                           </div>

                       </main>

                   </div>

               );

 export default Communities;
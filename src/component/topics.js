import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
  } from 'react-accessible-accordion';

    const Topics = (props) => (

        <div class="container">

            <main class="page-content" aria-label="Content">
                <div class="wrapper">
                    <div class="typewriter rounded">
                        <h2>Endava</h2>
                        <h1>{props.title}</h1>
                    </div>
        <Accordion allowZeroExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Concepts
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        <Accordion allowZeroExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Testing Strategy
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <ul>
                        <li>Understanding Test Scenarios</li>
                        <li>Software Testing Life Cycle (STLC)</li>
                        <li>Traceability Matrix (Relationship between requirement/stories and test cases)</li>
                        <li>Types of Testing </li>
                        <li>VP Testing Standards</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        <Accordion allowZeroExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Testing Techniques
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <ul>
                        <li>Black Box Testing</li>
                        <li>White Box Testing</li>
                        <li>Path Testing (Execute everything at lease once)</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        <Accordion allowZeroExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Testing Types
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        <Accordion allowZeroExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Bug and Defect Reporting Process
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <ul>
                        <li>DLC - Defect Life Cycle</li>
                        <li>Defect Management</li>
                        <li>Defect Tracking</li>
                        <li>Understanding Priority and Severity</li>
                        <li>Defect Report </li>
                        <li>Impact Analysis for fixing</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

                </div>

            </main>

        </div>

    );

export default Topics;
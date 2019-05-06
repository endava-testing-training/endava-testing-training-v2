import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';

import ErdAttibutes        from '../images/IntroERD/Attributes.png'; 
import ErdDiagram1         from '../images/IntroERD/ERD_Diagrams1.png'; 
import ErdDiagram2         from '../images/IntroERD/ERD_Diagrams2.png'; 
import ErdEntity1          from '../images/IntroERD/Entity1.png'; 
import ErdEntity2          from '../images/IntroERD/Entity2.png'; 


const IntroductionErd = (props) => (

  <div class="container">

    <main class="page-content" aria-label="Content">
      <div class="wrapper">
        <div class="typewriter rounded">
          <h2>Endava</h2>
          <h1>{props.title}</h1>
        </div>

        <h4 class="mb-3 font-italic">An entity relationship diagram (ERD), also known as an entity relationship model, is a graphical representation of an information system that depicts the relationships among people, objects, places, concepts or events within that system. An ERD is a data modeling echnique that can help define business processes and be used as the foundation for a relational database.</h4>
        <hr />
    
        <Accordion allowZeroExpanded >
          <AccordionItem>  
            <AccordionItemHeading>
              <AccordionItemButton>
                Data modeling
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
										
            Data modeling is a technique to document a software system using diagrams and symbols. It is used to represent communication of data. 
The highest level of abstraction for the data model is called the Entity Relationship Diagram (ERD). It is a graphical representation of data requirements for a database.
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                    Entity relationship diagram
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <h2>What is an ER diagram?</h2>
            An Entity Relationship (ER) Diagram is a type of flowchart that illustrates how “entities” such as people, objects or concepts relate to each other within a system. ER Diagrams are most often used to design or debug relational databases in the fields of software engineering, business information systems, education and research. Also known as ERDs or ER Models, they use a defined set of symbols such as rectangles, diamonds, ovals and connecting lines to depict the interconnectedness of entities, relationships and their attributes. They mirror grammatical structure, with entities as nouns and relationships as verbs.
            <img src={ErdDiagram1} class="d-block my-4"></img>
            ER diagrams are related to data structure diagrams (DSDs), which focus on the relationships of elements within entities instead of relationships between entities themselves. ER diagrams also are often used in conjunction with data flow diagrams (DFDs), which map out the flow of information for processes or systems.
            <img src={ErdDiagram2} class="d-block my-4"></img>
            The main value of carefully constructing an ERD is that it can readily be converted into a database structure. 
There are three components in ERD.
<ul>
<li>Entities: Number of tables you need for your database.</li>
<li>Attributes: Information such as property, facts you need to describe each table.</li>
<li>Relationships: How tables are linked together.</li>

</ul>

            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Entity
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            A definable thing—such as a person, object, concept or event—that can have data stored about it. Think of entities as nouns. Examples: a customer, student, car or product. Typically shown as a rectangle.
            <img src={ErdEntity1} class="d-block my-4"></img>
            <p><b>Entity type: </b>A group of definable things, such as students or athletes, whereas the entity would be the specific student or athlete. Other examples: customers, cars or products. 
            </p>
            <p><b>Entity set: </b>Same as an entity type, but defined at a particular point in time, such as students enrolled in a class on the first day. Other examples: Customers who purchased last month, cars currently registered in Florida. A related term is instance, in which the specific person or car would be an instance of the entity set. 
            </p>
            <p><b>Entity categories:</b> Entities are categorized as strong, weak or associative. A strong entity can be defined solely by its own attributes, while a weak entity cannot. An associative entity associates entities (or elements) within an entity set.
           </p>
            <img src={ErdEntity2} class="d-block my-4"></img>
            <p><b>Entity keys:</b>Refers to an attribute that uniquely defines an entity in an entity set. Entity keys can be super, candidate or primary. Super key: A set of attributes (one or more) that together define an entity in an entity set. Candidate key: A minimal super key, meaning it has the least possible number of attributes to still be a super key. An entity set may have more than one candidate key. Primary key: A candidate key chosen by the database designer to uniquely identify the entity set. Foreign key: Identifies the relationship between entities.
</p>
<h4>Primary Key</h4>
<p>Primary Key* or identifier is an attribute or a set of attributes that uniquely identifies an instance of the entity. For example, for a student entity, student number is the primary key since no two students have the same student number. We can have only one primary key in a table. It identify uniquely every row and it cannot be null.
</p>
<h4>Foreign key</h4>
<p>A foreign key+ (sometimes called a referencing key) is a key used to link two tables together. Typically you take the primary key field from one table and insert it into the other table where it becomes a foreign key (it remains a primary key in the original table). We can have more than one foreign key in a table.
</p>
           </AccordionItemPanel>
          </AccordionItem>


          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Relationships
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
     
   
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Attributes
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
      
	
					
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Cardinality
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
        
        
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Uses of entity relationship diagrams
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
							
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              An example
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
     

            </AccordionItemPanel>
          </AccordionItem>

        </Accordion>

      </div>

    </main>

  </div>

);

export default IntroductionErd;
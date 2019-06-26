import React from 'react';

import ErdDiagram1 from '../images/IntroERD/ERD_Diagrams1.png';
import ErdDiagram2 from '../images/IntroERD/ERD_Diagrams2.png';
import ErdEntity1 from '../images/IntroERD/Entity1.png';
import ErdEntity2 from '../images/IntroERD/Entity2.png';
import ErdRelationships from '../images/IntroERD/Relationships1.png';
import ErdAttributes from '../images/IntroERD/Attributes.png';
import ErdAttributes1 from '../images/IntroERD/Attributes1.png';
import ErdAttributes2 from '../images/IntroERD/Attributes2.png';
import ErdCardinality from '../images/IntroERD/Cardinality.png';
import ErdModelExample from '../images/IntroERD/modelExample.png';


const IntroductionErd = (props) => (

  <div className="container mt-5">

    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <div className="typewriter rounded">
          <h2>{props.title}</h2>
          <div className="animate title">

            <span>i</span>
            <span>n</span>
            <span>t</span>
            <span>r</span>
            <span>o</span>
            <span>d</span>
            <span>u</span>
            <span>c</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>&nbsp;
            <span>t</span>
            <span>o</span>&nbsp;
            <span>e</span>
            <span>r</span>
            <span>d</span>

          </div>
        </div>

        <h4 className="mb-3 font-italic">An entity relationship diagram (ERD), also known as an entity relationship model, is a graphical representation of an information system that depicts the relationships among people, objects, places, concepts or events within that system. An ERD is a data modeling echnique that can help define business processes and be used as the foundation for a relational database.</h4>
        <hr />

        

        <div class="accordion-option">
  
    <a href="javascript:void(0)" class="toggle-accordion active" accordion-id="#accordion"></a>
  </div>
  <div class="clearfix"></div>
  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingOne">
        <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-1" aria-expanded="false" aria-controls="collapseOne">
        Data modeling
        </a>
      </h4>
      </div>
      <div id="collapse-1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        <div class="panel-body">
        <p>Data modeling is a technique to document a software system using diagrams and symbols. It is used to represent communication of data. </p>
              <p>The highest level of abstraction for the data model is called the <span>Entity Relationship Diagram (ERD)</span>. It is a graphical representation of data requirements for a database.</p>
            
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingTwo">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-2" aria-expanded="false" aria-controls="collapseTwo">
          Entity relationship diagram
        </a>
      </h4>
      </div>
      <div id="collapse-2" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
        <div class="panel-body">
        <h2>What is an ER diagram?</h2>
              An Entity Relationship (ER) Diagram is a type of flowchart that illustrates how “entities” such as people, objects or concepts relate to each other within a system. ER Diagrams are most often used to design or debug relational databases in the fields of software engineering, business information systems, education and research. Also known as ERDs or ER Models, they use a defined set of symbols such as rectangles, diamonds, ovals and connecting lines to depict the interconnectedness of entities, relationships and their attributes. They mirror grammatical structure, with entities as nouns and relationships as verbs.
            <img src={ErdDiagram1} className="d-block my-4"></img>
              ER diagrams are related to data structure diagrams (DSDs), which focus on the relationships of elements within entities instead of relationships between entities themselves. ER diagrams also are often used in conjunction with data flow diagrams (DFDs), which map out the flow of information for processes or systems.
            <img src={ErdDiagram2} className="d-block my-4"></img>
              The main value of carefully constructing an ERD is that it can readily be converted into a database structure.
  There are three components in ERD.
<ul>
                <li>Entities: Number of tables you need for your database.</li>
                <li>Attributes: Information such as property, facts you need to describe each table.</li>
                <li>Relationships: How tables are linked together.</li>

              </ul>
         </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-3" aria-expanded="false" aria-controls="collapseThree">
          Entity
        </a>
      </h4>
      </div>
      <div id="collapse-3" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div class="panel-body">
        A definable thing—such as a person, object, concept or event—that can have data stored about it. Think of entities as nouns. Examples: a customer, student, car or product. Typically shown as a rectangle.
            <img src={ErdEntity1} className="d-block my-4"></img>
              <p><b>Entity type: </b>A group of definable things, such as students or athletes, whereas the entity would be the specific student or athlete. Other examples: customers, cars or products.
            </p>
              <p><b>Entity set: </b>Same as an entity type, but defined at a particular point in time, such as students enrolled in a class on the first day. Other examples: Customers who purchased last month, cars currently registered in Florida. A related term is instance, in which the specific person or car would be an instance of the entity set.
            </p>
              <p><b>Entity categories:</b> Entities are categorized as strong, weak or associative. A strong entity can be defined solely by its own attributes, while a weak entity cannot. An associative entity associates entities (or elements) within an entity set.
           </p>
              <img src={ErdEntity2} className="d-block my-4"></img>
              <p><span>Entity keys</span>: Refers to an attribute that uniquely defines an entity in an entity set. Entity keys can be super, candidate or primary. <span>Super key</span>: A set of attributes (one or more) that together define an entity in an entity set. <span>Candidate key</span>: A minimal super key, meaning it has the least possible number of attributes to still be a super key. An entity set may have more than one candidate key. <span>Primary key</span>: A candidate key chosen by the database designer to uniquely identify the entity set. <span>Foreign key</span>: Identifies the relationship between entities.</p>
              <h4>Primary Key</h4>
              <p>Primary Key* or identifier is an attribute or a set of attributes that uniquely identifies an instance of the entity. For example, for a student entity, student number is the primary key since no two students have the same student number. We can have only one primary key in a table. It identify uniquely every row and it cannot be null.</p>
              <h4>Foreign key</h4>
              <p>A foreign key+ (sometimes called a referencing key) is a key used to link two tables together. Typically you take the primary key field from one table and insert it into the other table where it becomes a foreign key (it remains a primary key in the original table). We can have more than one foreign key in a table.</p>


        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-4" aria-expanded="false" aria-controls="collapseThree">
        Relationships
        </a>
      </h4>
      </div>
      <div id="collapse-4" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div class="panel-body">
        <p>How entities act upon each other or are associated with each other. Think of relationships as verbs. For example, the named student might register for a course. The two entities would be the student and the course, and the relationship depicted is the act of enrolling, connecting the two entities in that way. Relationships are typically shown as diamonds or labels directly on the connecting lines.</p>
              <p><span>Relationships</span> are the associations between the entities. Verbs often describe relationships between entities.</p>
              <img src={ErdRelationships} className="d-block my-4"></img>
              <p><b>Recursive relationship:</b> The same entity participates more than once in the relationship.</p>

        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-5" aria-expanded="false" aria-controls="collapseThree">
        Attributes
        </a>
      </h4>
      </div>
      <div id="collapse-5" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div class="panel-body">
        <p>A property or characteristic of an entity. Often shown as an oval or circle.</p>

        
        <img src={ErdAttributes} className="d-block my-4"></img>
        <p>Attributes are facts or description of entities. They are also often nouns and become the columns of the table. For example, for entity student, the attributes can be first name, last name, email, address and phone numbers.</p>
              <p><b>Descriptive attribute: </b>A property or characteristic of a relationship (versus of an entity.)</p>
              <p><b>Attribute categories: </b>Attributes are categorized as simple, composite, derived, as well as single-value or multi-value. <span>Simple</span>: Means the attribute value is atomic and can’t be further divided, such as a phone number. <span>Composite</span>: Sub-attributes spring from an attribute. <span>Derived</span>: Attributed is calculated or otherwise derived from another attribute, such as age from a birthdate.</p>
              <img src={ErdAttributes1} className="d-block my-4"></img>
              <p>
                <b>Multi-value: </b>More than one attribute value is denoted, such as multiple phone numbers for a person.
            </p>
              <img src={ErdAttributes2} className="d-block my-4"></img>

              <p>
                <b>Single-value: </b>Just one attribute value. The types can be combined, such as: simple single-value attributes or composite multi-value attributes.
            </p>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-6" aria-expanded="false" aria-controls="collapseThree">
        Cardinality
        </a>
      </h4>
      </div>
      <div id="collapse-6" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div class="panel-body">
        <p>Defines the numerical attributes of the relationship between two entities or entity sets. The three main cardinal relationships are one-to-one, one-to-many, and many-many. A <span>one-to-one example</span> would be one student associated with one mailing address. A <span>one-to-many example (or many-to-one, depending on the relationship direction):</span> One student registers for multiple courses, but all those courses have a single line back to that one student. <span>Many-to-many example: </span>Students as a group are associated with multiple faculty members, and faculty members in turn are associated with multiple students.
            </p>
              <img src={ErdCardinality} className="d-block my-4"></img>

              <h4>One to One Relationship (1:1)</h4>

              <p>A single entity instance in one entity class is related to a single entity instance in another entity class. For example:</p>
              <ul>
                <li>Each student fills one seat and one seat is assigned to only one student.</li>
                <li>Each professor has one office space.</li>
              </ul>

              <h4 className="mt-2">One to Many Relationship (1:M)</h4>

              <p>A single entity instance in one entity class (parent) is related to multiple entity instances in another entity class (child). For example:</p>
              <ul>
                <li>One instructor can teach many courses, but one course can only be taught by one instructor.</li>
                <li>One instructor may teach many students in one class, but all the students have one instructor for that class.</li>
              </ul>


              <h4 className="mt-2">Many to Many Relationship (M:M)</h4>

              <p>Each entity instance in one entity class is related to multiple entity instances in another entity class; and vice versa. For example:</p>

              <ul className="mb-3">
                <li>Each student can take many classes, and each class can be taken by many students.</li>
                <li>Each consumer can buy many products, and each product can be bought by many consumers.</li>
              </ul>

              <p><b>Cardinality views: </b>Cardinality can be shown as look-across or same-side, depending on where the symbols are shown.
              
              
</p>
              <p><b>Cardinality constraints: </b>The minimum or maximum numbers that apply to a relationship.</p>

        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-7" aria-expanded="false" aria-controls="collapseThree">
        Uses of entity relationship diagrams
        </a>
      </h4>
      </div>
      <div id="collapse-7" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div class="panel-body">
        <ul>
                <li><b>Database design: </b>ER diagrams are used to model and design relational databases, in terms of logic and business rules (in a logical data model) and in terms of the specific technology to be implemented (in a physical data model.) In software engineering, an ER diagram is often an initial step in determining requirements for an information systems project. It’s also later used to model a particular database or databases. A relational database has an equivalent relational table and can potentially be expressed that way as needed.</li>
                <li><b>Database troubleshooting: </b>ER diagrams are used to analyze existing databases to find and resolve problems in logic or deployment. Drawing the diagram should reveal where it’s going wrong.</li>
                <li><b>Business information systems: </b>The diagrams are used to design or analyze relational databases used in business processes. Any business process that uses fielded data involving entities, actions and interplay can potentially benefit from a relational database. It can streamline processes, uncover information more easily and improve results.</li>
                <li><b>Business process re-engineering (BPR): </b>ER diagrams help in analyzing databases used in business process re-engineering and in modeling a new database setup.</li>
                <li><b>Education: </b>Databases are today’s method of storing relational information for educational purposes and later retrieval, so ER Diagrams can be valuable in planning those data structures.</li>
                <li><b>Research: </b>Since so much research focuses on structured data, ER diagrams can play a key role in setting up useful databases to analyze the data.</li>
              </ul>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-8" aria-expanded="false" aria-controls="collapseThree">
        An example
        </a>
      </h4>
      </div>
      <div id="collapse-8" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
        <div class="panel-body">
        <p>The following document is a quick guide for the Crow's foot ERD symbol guide.</p>
              <img src={ErdModelExample} className="d-block my-4"></img>
        </div>
      </div>
    </div>
  </div>

       </div>

    </main>

  </div>

);

export default IntroductionErd;
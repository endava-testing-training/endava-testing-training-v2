import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';

import SqlSyntax        from '../images/IntroSQL/table1_SQL.png'; 
import SqlSelect        from '../images/IntroSQL/SelectColumn_SQL.png'; 
import SqlWhere1        from '../images/IntroSQL/selectCondition_SQL.png'; 
import SqlWhere2        from '../images/IntroSQL/selectCondition1_SQL.png'; 
import SqlWhere3        from '../images/IntroSQL/operators_SQL.png'; 
import SqlDelete        from '../images/IntroSQL/delete_SQL.png'; 
import SqlAvg           from '../images/IntroSQL/Count_AVG_SQL.png'; 
import SqlCount         from '../images/IntroSQL/Count_AVG_SQL.png'; 
import SqlSum           from '../images/IntroSQL/SUM_SQL.png'; 
import SqlLike1         from '../images/IntroSQL/like_SQL.png'; 
import SqlLike2         from '../images/IntroSQL/likeTable_SQL.png'; 
import SqlBetween       from '../images/IntroSQL/between_SQL.png'; 
import SqlBetweenTables from '../images/IntroSQL/betweenDates_SQL.png';
import SqlJoin1         from '../images/IntroSQL/join_SQL.png'; 
import SqlJoin2         from '../images/IntroSQL/join1_SQL.png'; 
import SqlJoin3         from '../images/IntroSQL/join2_SQL.png'; 
import SqlJoin4         from '../images/IntroSQL/join3_SQL.png'; 
import SqlInnerJoin1    from '../images/IntroSQL/inner_join_SQL.png'; 
import SqlInnerJoin2    from '../images/IntroSQL/inner_join1_SQL.png'; 
import SqlInnerJoin3    from '../images/IntroSQL/inner_join2_SQL.png'; 
import SqlLeftJoin1     from '../images/IntroSQL/left_join_SQL.png'; 
import SqlLeftJoin2     from '../images/IntroSQL/left_join1_SQL.png'; 
import SqlLeftJoin3     from '../images/IntroSQL/left_join2_SQL.png'; 
import SqlRightJoin1    from '../images/IntroSQL/right_join_SQL.png'; 
import SqlRightJoin2    from '../images/IntroSQL/left_join2_SQL.png'; 
import SqlRightJoin3    from '../images/IntroSQL/right_join1_SQL.png'; 
import SqlFullJoin1     from '../images/IntroSQL/full_join_SQL.png';
import SqlFullJoin2     from '../images/IntroSQL/inner_join2_SQL.png';
import SqlFullJoin3     from '../images/IntroSQL/left_join2_SQL.png';
import SqlFullJoin4     from '../images/IntroSQL/full_join1_SQL.png';


const IntroductionSql = (props) => (

  <div class="container">

    <main class="page-content" aria-label="Content">
      <div class="wrapper">
        <div class="typewriter rounded">
          <h2>Endava</h2>
          <h1>{props.title}</h1>
        </div>

        <h4 class="mb-3 font-italic">SQL is a standard language for storing, manipulating and retrieving data in databases.</h4>
        <hr />
    
        <Accordion allowZeroExpanded >
          <AccordionItem>  
            <AccordionItemHeading>
              <AccordionItemButton>
                SQL Intro
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
						<h4>What is SQL?</h4>
							<ul>
								<li>SQL stands for Structured Query Language.</li>
								<li>SQL lets you access and manipulate databases.</li>
								<li>SQL became a standard of the American National Standards Institute (ANSI) in 1986,
									and of the
									International Organization for Standardization (ISO) in 1987.</li>
							</ul>
					
							<h4 class="mt-3">What Can SQL do?</h4>

							<ul>
								<li>SQL can execute queries against a database</li>
								<li>SQL can retrieve data from a database</li>
								<li>SQL can insert records in a database</li>
								<li>SQL can update records in a database</li>
								<li>SQL can delete records from a database</li>
								<li>SQL can create new databases</li>
								<li>SQL can create new tables in a database</li>
								<li>SQL can create stored procedures in a database</li>
								<li>SQL can create views in a database</li>
								<li>SQL can set permissions on tables, procedures, and views</li>
							</ul>
					
							<h4 class="mt-3">RDBMS</h4>
							<p>RDBMS stands for Relational Database Management System.</p>
							<p>RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server,
								IBM DB2, Oracle,
								MySQL, and Microsoft Access.</p>
							<p>The data in RDBMS is stored in database objects called tables. A table is a collection of
								related data	entries and it consists of columns and rows.</p>
							<p>Look at the "Customers" table:</p>

							<h5>Example</h5>
							<code><span>SELECT</span> * <span>FROM</span> Customers;</code>
						
							<p>Every table is broken up into smaller entities called fields. For example, the fields in the Customers table consist of CustomerID, CustomerName, ContactName, Address, City, PostalCode and Country. A field is a column in a table that is designed to	maintain specific information about every record in the table.</p>
							<p>A record, also called a row, is each individual entry that exists in a table. A record is a horizontal entity in a table.</p>
							<p>A column is a vertical entity in a table that contains all information associated with a specific field in a table.</p>
					
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Syntax
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
       
            <h4>Database Tables</h4>
							<p>A database most often contains one or more tables. Each table is identified by a name (e.g. "Customers" or "Orders"). Tables contain records (rows) with data.</p>
							<p>In this tutorial we will use the well-known Northwind sample database (included in MS Access and MS SQL Server).</p>
							<p>Below is a selection from the "Customers" table:</p>
							<img src={SqlSyntax}></img>

							<p>The table above contains five records (one for each customer) and seven columns (CustomerID, CustomerName, ContactName, Address, City, PostalCode, and Country).</p>
				
							<h4>Keep in Mind That...</h4>
							<ul>
								<li>SQL keywords are NOT case sensitive: select is the same as SELECT</li>
							</ul>

							<p>In this tutorial we will write all SQL keywords in upper-case.</p>
		
							<h4>Semicolon after SQL Statements?</h4>
							<p>Some database systems require a semicolon at the end of each SQL statement.</p>
							<p>Semicolon is the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.</p>
							<p>In this tutorial, we will use semicolon at the end of each SQL statement.</p>
		
							<h4>Some of The Most Important SQL Commands</h4>
							<ul>
								<li><b>SELECT</b> - extracts data from a database</li>
								<li><b>UPDATE</b> - updates data in a database</li>
								<li><b>DELETE</b> - deletes data from a database</li>
								<li><b>INSERT INTO</b> - inserts new data into a database</li>
								<li><b>CREATE DATABASE</b> - creates a new database</li>
								<li><b>ALTER DATABASE</b> - modifies a database</li>
								<li><b>CREATE TABLE</b> - creates a new table</li>
								<li><b>ALTER TABLE</b> - modifies a table</li>
								<li><b>DROP TABLE</b> - deletes a table</li>
								<li><b>CREATE INDEX</b> - creates an index (search key)</li>
								<li><b>DROP INDEX</b> - deletes an index
								</li>
							</ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Select
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
      
            <h4>The SQL SELECT Statement</h4>
							<p>The SELECT statement is used to select data from a database.</p>
							<p>The data returned is stored in a result table, called the result-set.</p>
						<h4>SELECT Syntax</h4>
							<code>
						SELECT column1, column2, ...<br/>
						FROM table_name
					</code>
		
							<p>Here, column1, column2, ... are the field names of the table you want to select data from. If you want to select all the fields available in the table, use the following syntax:</p>
							<code>SELECT * FROM table_name;</code>
		
							<h4>SELECT Column Example</h4>
							<p>The following SQL statement selects the "CustomerName" and "City" columns
								from the "Customers" table:</p>
							<h5>Example</h5>
							<code>SELECT CustomerName, City<br/>
							FROM Customers;</code>
	
							<img src={SqlSelect} class="my-3"></img>
							<h4>SELECT * Example</h4>
							<p>The following SQL statement selects all the columns from the "Customers" table:</p>
							<h5>Example</h5>
							<code>SELECT * FROM Customers;</code>
                        
                  </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Where
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
     
   
            <h4>The SQL WHERE Clause</h4>
							<p>The <span>WHERE</span> clause is used to filter records.</p>
							<p>The <span>WHERE</span> clause is used to extract only those records that fulfill a specified condition.</p>
							<h4>WHERE Syntax</h4>
							<code>SELECT column1, column2, ...<br/>
					FROM table_name<br/>
					WHERE condition; </code>
					
							<p><i><strong>Note:</strong> The WHERE clause is not only used in SELECT statement, it is also used in UPDATE, DELETE statement, etc.!</i></p>
						
							<h4>WHERE Clause Example</h4>
							<p>The following SQL statement selects all the customers from the country "Mexico", in the "Customers" table:</p>
							<h5>Example</h5>
							<code>SELECT * FROM Customers	WHERE Country='Mexico';</code>
									
							<img src={SqlWhere1} class="my-3"></img>
					
							<h4>Text Fields vs. Numeric Fields</h4>
							<p>SQL requires single quotes around text values (most database systems will also allow double quotes).</p>
							<p>However, numeric fields should not be enclosed in quotes:</p>
							<h5>Example</h5>
							<code>SELECT * FROM Customers<br/>
                        	WHERE CustomerID=1;
												</code>
				                <img src={SqlWhere2} class="my-3"></img>
				
							<h4>Operators in The WHERE Clause</h4>
							<p>The following operators can be used in the WHERE clause:</p>
					
							<img src={SqlWhere3}></img>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL And, Or, Not
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
      
	
							<h4>The SQL AND, OR and NOT Operators</h4>
							<p>The WHERE clause can be combined with AND, OR, and NOT operators.</p>
							<p>The AND and OR operators are used to filter records based on more than one condition:</p>
							<ul>
								<li>The AND operator displays a record if all the conditions separated by AND are TRUE.</li>
								<li>The OR operator displays a record if any of the conditions separated by OR is TRUE.</li>
							</ul>
							<p>The NOT operator displays a record if the condition(s) is NOT TRUE.</p>

							<h5>AND Syntax</h5>
				  <code>
            SELECT column1, column2, ...<br/>
            FROM table_name<br/>
            WHERE condition1 AND condition2<br/>
            AND condition3 ...
          </code>

							<h5>OR Syntax</h5>
					<code>
						SELECT column1, column2, ...<br/>
						FROM table_name<br/>
						WHERE condition1 OR condition2<br/>
						OR condition3 ...
					</code>
          
					<code>
							SELECT column1, column2, ...<br/>
							FROM table_name<br/>
							WHERE condition1 AND condition2<br/>
							AND condition3 ...;
					</code>

							<h5>OR Syntax</h5>
							<code><span >SELECT</span> <em>column1</em>,<em> column2, ...</em>
					<span >FROM</span> <em>table_name</em>
					<span >WHERE</span> <em>condition1</em> <span>OR</span> <em>condition2</em>
          <span>OR</span> <em>condition3 ...</em>;</code>

							<h5>NOT Syntax</h5>
							<code><span>SELECT</span> <em>column1</em>,<em> column2, ...</em>
					<span>FROM</span> <em>table_name</em>
					<span>WHERE</span> <span >NOT</span> <em>condition</em>;</code>
							<hr></hr>

							<h4>AND Example</h4>
							<p>The following SQL statement selects all fields from "Customers" where country is "Germany" AND city is "Berlin":</p>
							<h5>Example</h5>
							<code>
                SELECT* FROM Customers WHERE Country='Germany'<br/>
              AND City='Berlin';</code>
							<h4>OR Example</h4>

							<p>The following SQL statement selects all fields from "Customers" where city is "Berlin" OR "München":</p>

							<h5>Example</h5>

							<code>
                SELECT * FROM Customers WHERE City='Berlin'<br/>
              OR City=>'München';</code>
		
							<p>The following SQL statement selects all fields from "Customers" where country is "Germany" OR "Spain":</p>
              <h5>Example</h5>

<code>SELECT * FROM Customers WHERE Country='Germany' OR Country='Spain';</code>

<h4>NOT Example</h4>
<p>The following SQL statement selects all fields from "Customers" where country is NOT "Germany":</p>
				
  <h5>Example</h5>

<code>SELECT * FROM Customer WHERE NOT Country='Germany';</code>
<h4>Combining AND, OR and NOT</h4>
<p>You can also combine the AND, OR and NOT operators.</p>

<p>The following SQL statement selects all fields from "Customers" where country is "Germany" AND city  must be "Berlin"  OR "München" (use parenthesis to form complex expressions):</p>

<h5>Example</h5>
<code>
SELECT * FROM Customers WHERE Country= 'Germany'<br/>
AND (City='Berlin' OR City='München');<br/>
</code>

<p>The following SQL statement selects all fields from "Customers" where country is NOT "Germany" and NOT "USA":</p>

<h5>Example</h5>

<code>
  SELECT * FROM Customers WHERE<br/>
NOT Country='Germany' AND NOT Country='USA';
</code>

				
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Order By
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
               
       
							<h4>The SQL ORDER BY Keyword</h4>
							<p>The ORDER BY keyword is used to sort the result-set in ascending or descending order.</p>
							<p>The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.</p>

							<h5>ORDER BY Syntax</h5>
							<code>
                SELECT column1, column2, ...<br/>
					FROM table_name<br/>
					ORDER BY column1, column2, ... ASC | DESC;</code>
							
							<h2>ORDER BY Example</h2>
							<p>The following SQL statement selects all customers from the "Customers" table,	sorted by the "Country" column:</p>
							<h5>Example</h5>
							<code><span>SELECT</span> * <span>FROM</span> Customers
					<span>ORDER</span> <span>BY</span> Country;</code>
							<h2>ORDER BY DESC Example</h2>
							<p>The following SQL statement selects all customers from the "Customers" table,	sorted DESCENDING by the "Country" column:</p>
							<h5>Example</h5>
							<code><span>SELECT</span> * <span>FROM</span> Customers<span>ORDER</span> <span>BY</span> Country <span>DESC</span>; </code>

							<h4>ORDER BY Several Columns Example</h4>
							<p>The following SQL statement selects all customers from the "Customers" table,sorted by the "Country" and the "CustomerName" column. This means that it orders
								by Country, but if some rows have the same Country, it orders them by	CustomerName:</p>
							<h3>Example</h3>
							<code>
                <span>SELECT</span> * <span>FROM</span> Customers <span>ORDER</span> <span>BY</span> Country, CustomerName;
                </code>
							

							<h4>ORDER BY Several Columns Example 2</h4>
							<p>The following SQL statement selects all customers from the "Customers" table, sorted ascending by the "Country" and descending by the "CustomerName" column:</p>
							<h5>Example</h5>
							<code><span>SELECT</span> * <span>FROM</span> Customers<br/><span>ORDER</span>
              <span>BY</span> Country <span>ASC</span>, CustomerName <span>DESC</span>; </code>
						
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL NullValues
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
         

							<h4>What is a NULL Value?</h4>
							<p>A field with a NULL value is a field with no value.</p>
							<p>If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value.</p>

							<p><i><strong>Note:</strong> A NULL value is different from a zero value or a field that contains spaces. A field with a NULL value is one that has been left blank
									during record creation!</i></p>
							<hr />

							<h2>How to Test for NULL Values?</h2>
							<p>It is not possible to test for NULL values with comparison operators, such as =, &lt;, or &lt;&gt;.</p>
							<p>We will have to use the IS NULL and IS NOT NULL operators instead.</p>

							<h3>IS NULL Syntax</h3>

							<code>
              <span>SELECT</span> <em>column_names<br /></em><span>FROM</span> <em>table_name</em><br />
              <span>WHERE</span> <em>column_name</em> <span>IS</span> <span>NULL</span>;
              </code>

							<h4>IS NOT NULL Syntax</h4>

							<code><span>SELECT</span> <em>column_names<br /></em><span>FROM</span> <em>table_name</em><br />
              <span>WHERE</span> <em>column_name</em> <span>IS</span> <span>NOT</span> <span>NULL</span>; </code>

							<hr />

							<h4>The IS NULL Operator</h4>
							<p>The IS NULL operator is used to test for empty values (NULL values).</p>
							<p>The following SQL lists all customers with a NULL value in the "Address" field:</p>
							<h3>Example</h3>
							<code><span>SELECT</span> CustomerName, ContactName, Address<br /><span>FROM</span> Customers<br /><span>WHERE</span> Address <span>IS</span> <span>NULL</span>;</code>
							<br />
							<br />
							<p><i><b>Tip:</b> Always use IS NULL to look for NULL values.</i></p>

							<hr />

							<h4>The IS NOT NULL Operator</h4>
							<p>The IS NOT NULL operator is used to test for non-empty values (NOT NULL values).</p>

							<p>The following SQL lists all customers with a value in the "Address" field:</p>
							<h5>Example</h5>
							<code>
								SELECT CustomerName, ContactName, Address<br /><span>FROM</span> Customers<br /><span>WHERE</span> Address <span>IS</span> <span>NOT</span> <span>NULL</span>;</code>
					
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Delete
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
     

            <h4>The SQL DELETE Statement</h4>
							<p>The DELETE statement is used to delete existing records in a table.</p>

							<h5>DELETE Syntax</h5>
							<code>
								DELETE FROM table_name WHERE condition;
								</code>
							<br />
							<br />
							<p><i><strong>Note:</strong> Be careful when deleting records in a table! Notice the WHERE clause in the
									DELETE statement.	The WHERE clause specifies which record(s) should be deleted. If
									you omit the WHERE clause, all records in the table will be deleted!</i></p>
							<hr />

							<h4>SQL DELETE Example</h4>

							<p>The following SQL statement deletes the customer "Alfreds Futterkiste" from	the "Customers" table:</p>

							<h5>Example</h5>
							<code>
								DELETE FROM Customers<br/>
					WHERE CustomerName='Alfreds Futterkiste';
					</code>
							<br />
							<br />
							<p>The "Customers" table will now look like this:</p>
							<img src={SqlDelete}></img>
							<hr />

							<h4>Delete All Records</h4>
							<p>It is possible to delete all rows in a table without deleting the table. This means that the table structure, attributes, and indexes will be intact:</p>

							<code>DELETE FROM table_name;</code>
							<br />
							<br />
							<p>The following SQL statement deletes all rows in the "Customers" table, without deleting the table:</p>
							<h3>Example</h3>
							<code>DELETE FROM Customers;</code>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Count, Avg, Sum
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
       
				
							<h4>The SQL COUNT(), AVG() and SUM() Functions</h4>
							<p>The COUNT() function returns the number of rows that matches a specified criteria.</p>
							<p>The AVG() function returns the average value of a numeric column.</p>
							<p>The SUM() function returns the total sum of a numeric column.</p>

							<h5>COUNT() Syntax</h5>

							<code><span>SELECT</span> <span>COUNT</span>(<em>column_name</em>)<br />
					<span>FROM</span> <em>table_name</em><br />
					<span>WHERE</span> <em>condition</em>; </code>

							<h5>AVG() Syntax</h5>
							<code><span>SELECT</span> <span>AVG</span>(<em>column_name</em>)<br />
					<span>FROM</span> <em>table_name</em><br />
					<span>WHERE</span> <em>condition</em>; </code>

							<h5>SUM() Syntax</h5>
							<code><span>SELECT</span> <span>SUM</span>(<em>column_name</em>)<br />
					<span>FROM</span> <em>table_name</em><br />
					<span>WHERE</span> <em>condition</em>; </code>
							<br />
							<br />
							<p><i><strong>Note:</strong> NULL values are ignored.</i></p>

							<hr />

							<h4>COUNT() Example</h4>
							<p>The following SQL statement finds the number of products:</p>
							<h5>Example</h5>

							<code> <span>SELECT</span> <span>COUNT</span>(ProductID)<br /><span>FROM</span> Products;</code>
							<br />
							<br />
							<p>Table (example):</p>
							<img src={SqlAvg}></img>
							<hr />

							<h4>AVG() Example</h4>
							<p>The following SQL statement finds the average price of all products:</p>

							<h5>Example</h5>

							<code>
								SELECT AVG (Price)<br />
								FROM Products;
								</code>
							<br />
							<br />
							<p>Table (example):</p>
							<img src={SqlCount}></img>

							<hr />

							<h4>SUM() Example</h4>
							<p>The following SQL statement finds the sum of the "Quantity" fields
								in the "OrderDetails" table:</p>

							<h5>Example</h5>

							<code>
                SELECT SUM (Quantity) FROM OrderDetails;
								</code>
							<br />
							<br />
							<p>Table (example):</p>
              <img src={SqlSum}></img>
					

            </AccordionItemPanel>
          </AccordionItem>


          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Like
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
      
            <h4>The SQL LIKE Operator</h4>
							<p>The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.</p>
							<p>There are two wildcards used in conjunction with the LIKE operator:</p>
							<ul>
								<li>% - The percent sign represents zero, one, or multiple characters</li>
								<li>_ - The underscore represents a single character</li>
							</ul>

							<p><i><strong>Note:</strong> MS Access uses a question mark (?) instead of the underscore (_).</i></p>

							<p>The percent sign and the underscore can also be used in combinations!</p>

							<h5>LIKE Syntax</h5>

							<code><span>SELECT</span> <em>column1, column2, ...</em><br />
					<span>FROM</span> <em>table_name</em><br />
					<span>WHERE</span> <em>columnN</em> <span>LIKE</span> <em>pattern</em>; </code>
							<br />
							<br />
							<p><i><strong>Tip:</strong> You can also combine any number of conditions using AND or OR operators.</i>
							</p>

							<p>Here are some examples showing different LIKE operators with '%' and '_' wildcards:</p>
							<img src={SqlLike1}></img>
							<hr />

							<h4>SQL LIKE Examples</h4>
							<img src={SqlLike2}></img>
							<br />
							<br />
							<p>The following SQL statement selects all customers with a CustomerName starting with "a":</p>

							<h5>Example</h5>

							<code><span>SELECT</span> * <span>FROM</span> Customers<br /><span>WHERE</span> CustomerName
              <span>LIKE</span> <span>'a%'</span>;
              </code>
							<br />
							<br />
							<p>The following SQL statement selects all customers with a CustomerName ending with "a":</p>

							<h3>Example</h3>
							<code>
                <span>SELECT</span> * <span>FROM</span> Customers<br /><span>WHERE</span> CustomerName
                <span>LIKE</span> <span>'%a'</span>;
                </code>
							<br />
							<br />
							<p>The following SQL statement selects all customers with a CustomerName that	have "or" in any position:</p>

							<h3>Example</h3>

							<code> <span>SELECT</span> * <span>FROM</span> Customers<br /><span>WHERE</span> CustomerName <span>LIKE</span> <span>'%or%'</span>;</code>
							<br />
							<br />
							<p>The following SQL statement selects all customers with a CustomerName that	have "r" in the second position:</p>

							<h3>Example</h3>
							<code> <span>SELECT</span> * <span>FROM</span> Customers<br /><span>WHERE</span> CustomerName <span>LIKE</span> <span>'_r%'</span>;</code>
							<br />
							<br />
							<p>The following SQL statement selects all customers with a CustomerName that	starts with "a" and are at least 3 characters in length:</p>
							<h3>Example</h3>
							<code> <span>SELECT</span> * <span>FROM</span> Customers<br /><span>WHERE</span> CustomerName <span>LIKE</span> <span>'a_%_%'</span>; </code>
							<br />
							<br />
							<p>The following SQL statement selects all customers with a ContactName that starts with "a" and ends with "o":</p>
							<h3>Example</h3>

							<code> <span>SELECT</span> * <span>FROM</span> Customers<br /><span>WHERE</span> ContactName <span>LIKE</span> <span>'a%o'</span>; </code>

							<br />
							<br />
							<p>The following SQL statement selects all customers with a CustomerName that	does NOT start with "a":</p>

							<h3>Example</h3>

							<code>
                <span>SELECT</span> * <span>FROM</span> Customers<br /><span>WHERE</span> CustomerName <span>NOT</span> <span>LIKE</span> <span>'a%'</span>;
					</code>
            </AccordionItemPanel>
          </AccordionItem>
        
                
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL In
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

					
            <h2>The SQL IN Operator</h2>
							<p>The IN operator allows you to specify multiple values in a WHERE clause.</p>
							<p>The IN operator is a shorthand for multiple OR conditions.</p>

							<h3>IN Syntax</h3>

							<code><span>SELECT</span> <em>column_name(s)</em><br />
					<span>FROM</span> <em>table_name</em><br />
					<span>WHERE</span> <em>column_name</em> <span>IN</span> (<em>value1</em>,<em> value2</em>, ...); </code>
							<br />
							<br />
							<p>OR:</p>
							<code><span>SELECT</span> <em>column_name(s)</em><br />
					<span>FROM</span> <em>table_name</em><br />
					<span>WHERE</span> <em>column_name</em> <span>IN</span> (<em><span>SELECT</span> STATEMENT</em>); </code>
							<hr />

							<h2>IN Operator Examples</h2>
							<p>The following SQL statement selects all customers that are located in "Germany", "France"
								and "UK":</p>

							<h3>Example</h3>

							<code> <span>SELECT</span> * <span>FROM</span> Customers<br /><span>WHERE</span> Country <span>IN</span> (<span>'Germany'</span>, <span>'France'</span>, <span>'UK'</span>);
					</code>
							<br />
							<br />
							<p>The following SQL statement selects all customers that are NOT located in "Germany",
								"France" or "UK":
							</p>

							<h3>Example</h3>

							<code><span>SELECT</span> * <span>FROM</span> Customers<br />
					<span>WHERE</span> Country <span>NOT</span> <span>IN</span> (<span>'Germany'</span>, <span>'France'</span>, <span>'UK'</span>);
					</code>
							<br />
							<br />
							<p>The following SQL statement selects all customers that are from the same
								countries as the suppliers:</p>

							<h3>Example</h3>

							<code>
                <span>SELECT</span> * <span>FROM</span> Customers<br /><span>WHERE</span> Country <span>IN</span>
                (<span>SELECT</span> Country <span>FROM</span> Suppliers);
					</code>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Between
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
        
							<h2>The SQL BETWEEN Operator</h2>
							<p>The BETWEEN operator selects values within a given range. The values can be numbers,	text, or dates.
							</p>
							<p>The BETWEEN operator is inclusive: begin and end values are included.&nbsp;</p>
							<h3>BETWEEN Syntax</h3>

							<code><span>SELECT</span> <em>column_name(s)</em><br />
					<span>FROM</span> <em>table_name</em><br />
					<span>WHERE</span> <em>column_name </em><span>BETWEEN</span> <em>value1</em> <span>AND</span> <em>value2;</em></code>

							<hr />
							<h3>Sample Table</h3>
							<img src={SqlBetween}></img>
							<h2>BETWEEN Example</h2>
							<p>The following SQL statement selects all products with a price BETWEEN 10 and 20:</p>
							<h3>Example</h3>

							<code> <span>SELECT</span> * <span>FROM</span> Products<br /><span>WHERE</span> Price <span>BETWEEN</span> 10 <span>AND</span> 20;
					 </code>
							<hr />

							<h2>NOT BETWEEN Example</h2>
							<p>To display the products outside the range of the previous example, use NOT BETWEEN:</p>
							<h3>Example</h3>

							<code><span>SELECT</span> * <span>FROM</span> Products<br /><span>WHERE</span> Price <span>NOT</span> <span>BETWEEN</span> 10 <span>AND</span> 20;
					</code>

							<hr />

							<h2>BETWEEN with IN Example</h2>
							<p>The following SQL statement selects all products with a price BETWEEN 10 and	20. In addition; do not show products with a CategoryID of 1,2, or 3:</p>

							<h3>Example</h3>

							<code><span>SELECT</span> * <span>FROM</span> Products<br /><span>WHERE</span> (Price <span>BETWEEN</span> 10 <span>AND</span> 20)<br /><span>AND</span> <span>NOT</span> CategoryID <span>IN</span> (1,2,3);</code>

							<hr />

							<h2>BETWEEN Text Values Example</h2>
							<p>The following SQL statement selects all products with a ProductName BETWEEN 'Carnarvon	Tigers' and 'Mozzarella di Giovanni':</p>

							<h3>Example</h3>

							<code><span>SELECT</span> * <span>FROM</span> Products<br /><span>WHERE</span> ProductName <span>BETWEEN</span> <span>'Carnarvon Tigers'</span> <span>AND</span> <span>'Mozzarella 
					  di Giovanni'</span><br /><span>ORDER</span> <span>BY</span> ProductName;</code>

							<hr />

							<h2>NOT BETWEEN Text Values Example</h2>
							<p>The following SQL statement selects all products with a ProductName NOT BETWEEN 'Carnarvon Tigers' and 'Mozzarella di Giovanni':</p>

							<h3>Example</h3>

							<code>
                <span>SELECT</span> * <span>FROM</span> Products<br /><span>WHERE</span> ProductName <span>NOT</span>
                <span>BETWEEN</span> <span>'Carnarvon Tigers'</span> <span>AND</span> <span>'Mozzarella 
					  di Giovanni'</span><br /><span>ORDER</span> <span>BY</span> ProductName;
            </code>

							<hr />

							<h3>Other Sample Table</h3>
							<img src={SqlBetweenTables}></img>

							<h2>BETWEEN Dates Example</h2>
							<p>The following SQL statement selects all orders with an OrderDate BETWEEN '01-July-1996' and '31-July-1996':</p>

							<h3>Example</h3>

							<code>
                <span>SELECT</span> * <span>FROM</span> Orders<br />
                <span>WHERE</span> OrderDate <span>BETWEEN</span> #01/07/1996# <span>AND</span> #31/>07/1996#;
					</code>
							<br />
							<br />
							<p>OR:</p>

							<h3>Example</h3>

							<code>
                <span>SELECT</span> * <span>FROM</span> Orders<br />
                <span>WHERE</span> OrderDate <span>BETWEEN</span>
              <span>'1996-07-01'</span> <span>AND</span> <span>'1996-07-31'</span>;
              </code>
					
             </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL JOIN
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>


							<h2>SQL JOIN</h2>
							<p>A JOIN clause is used to combine rows from two or more tables, based on a related column between them.</p>
							<p>Let's look at a selection from the "Orders" table:</p>

							<img src={SqlJoin1}></img>
							<br />
							<br />
							<p>Then, look at a selection from the "Customers" table:</p>

              <img src={SqlJoin2}></img>
							<br />
							<br />
							<p>Notice that the "CustomerID" column in the "Orders" table refers to the "CustomerID" in the "Customers" table. The relationship between the two tables above
								is the "CustomerID" column.</p>
							<p>Then, we can create the following SQL statement (that contains an INNER JOIN),	that selects records that have matching values in both tables:</p>
							<h3>Example</h3>

							<code><span>SELECT</span> Orders.OrderID, Customers.CustomerName, Orders.OrderDate<br /><span>FROM</span> Orders<br /><span>INNER</span> <span>JOIN</span> Customers <span>ON</span> Orders.CustomerID=Customers.CustomerID;</code>
							<br />
							<br />
							<p>and it will produce something like this:</p>
              <img src={SqlJoin3}></img>
							<hr />

							<h2>Different Types of SQL JOINs</h2>
							<p>Here are the different types of the JOINs in SQL:</p>
							<ul>
								<li><b>(INNER) JOIN</b>: Returns records that have matching values in both tables</li>
								<li><b>LEFT (OUTER) JOIN</b>: Return all records from the left table, and the matched records from the right table</li>
								<li><b>RIGHT (OUTER) JOIN</b>: Return all records from the right table, and the matched records from the left table</li>
								<li><b>FULL (OUTER) JOIN</b>: Return all records when there is a match in either left or right table</li>
							</ul>
							<img src={SqlJoin4}></img>
				
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Inner Join
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <h2>SQL INNER JOIN Keyword</h2>
							<p>The INNER JOIN keyword selects records that have matching values in both tables.</p>

							<h3>INNER JOIN Syntax</h3>

							<code>
                <span>SELECT</span> <em>column_name(s)</em><br />
				<span>FROM</span> <em>table1</em><br />
				<span>INNER</span>
        <span>JOIN</span> <em>table2<br /> </em><span>ON</span> <em>table1.column_name </em>=<em> table2.column_name</em>;
				</code>
							<br />
							<br />
							<img src={SqlInnerJoin1}></img>
							<hr />

							<h2>SQL INNER JOIN Example</h2>

							<p>Below is a selection from the "Orders" table:</p>
              <img src={SqlInnerJoin2}></img>
							<br />
							<br />
							<p>And a selection from the "Customers" table:</p>
              <img src={SqlInnerJoin3}></img>
							<br />
							<br />
							<p>The following SQL statement selects all orders with customer information:</p>

							<code> <span>SELECT</span> Orders.OrderID, Customers.CustomerName<br /><span>FROM</span> Orders<br /><span>INNER</span> <span>JOIN</span> Customers <span>ON</span> Orders.CustomerID = Customers.CustomerID; </code>
							<br />
							<br />
							<p><i><strong>Note:</strong> The INNER JOIN keyword selects all rows from both tables as long as there is a match between the columns. If there are records in the
									"Orders" table that do not have matches in "Customers", these orders will not be shown!</i></p>
							<hr />

							<h2>&nbsp;JOIN Three Tables</h2>
							<p>The following SQL statement selects all orders with customer and shipper information:</p>

							<h3>Example</h3>

							<code><span>SELECT</span> Orders.OrderID, Customers.CustomerName, Shippers.ShipperName<br /><span>FROM</span>((Orders<br /><span>INNER</span> <span>JOIN</span> Customers <span>ON</span> Orders.CustomerID = Customers.CustomerID)<br /><span>INNER</span> <span>JOIN</span> Shippers <span>ON</span> Orders.ShipperID = Shippers.ShipperID); </code>
					
				
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Left Join
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
       						
				
            <h2>SQL LEFT JOIN Keyword</h2>
							<p>The LEFT JOIN keyword returns all records from the left table (table1), and the
								matched records from the right table (table2). The result is NULL from the right side,
								if there is no match.</p>

							<h3>LEFT JOIN Syntax</h3>

							<code><span>SELECT</span> <em>column_name(s)</em><br />
				<span>FROM</span> <em>table1</em><br />
				<span>LEFT</span> <span>JOIN</span> <em>table2<br /> </em><span>ON</span> <em>table1.column_name </em>=<em> table2.column_name</em>;</code>
							<br />
							<br />
							<p><i><b>Note:</b> In some databases LEFT JOIN is called LEFT OUTER JOIN.</i></p>
							<img src={SqlLeftJoin1}></img>
							<hr />

							<h2>SQL LEFT JOIN Example</h2>

							<p>Below is a selection from the "Customers" table:</p>
							<img src={SqlLeftJoin2}></img>
							<br />
							<br />
							<p>And a selection from the "Orders" table:</p>
							<img src={SqlLeftJoin3}></img>
							<br />
							<br />
							<p>The following SQL statement will select all customers, and any orders they might have:</p>

							<code> <span>SELECT</span> Customers.CustomerName, Orders.OrderID<br />
              <span>FROM</span> Customers<br /><span>LEFT</span>
              <span>JOIN</span> Orders
				 <span>ON</span> Customers.CustomerID = Orders.CustomerID<br /><span>ORDER</span>
         <span>BY</span> Customers.CustomerName;</code>
							<br />
							<br />
							<p><i><strong>Note:</strong> The LEFT JOIN keyword returns all records from the 	left table (Customers), even if there are no matches in the right table	(Orders).</i></p>
		
				   </AccordionItemPanel>
          </AccordionItem>
                  
         
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Right Join
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <h2>SQL RIGHT JOIN Keyword</h2>
							<p>The RIGHT JOIN keyword returns all records from the right table (table2), and the matched
								records from
								the left table (table1). The result is NULL from the left side, when there is no match.
							</p>

							<h3>Right JOIN Syntax</h3>

							<code><span>SELECT</span> <em>column_name(s)</em><br />
				<span>FROM</span> <em>table1</em><br />
				<span>RIGHT</span> <span>JOIN</span> <em>table2<br /> </em><span>ON</span> <em>table1.column_name </em>=<em> table2.column_name</em>; </code>
							<br />
							<br />
							<p><i><b>Note:</b> In some databases RIGHT JOIN is called RIGHT OUTER JOIN.</i></p>
							<img src={SqlRightJoin1}></img>
							<hr />

							<h2>SQL RIGHT JOIN Example</h2>

							<p>Below is a selection from the "Orders" table:</p>
							<img src={SqlRightJoin2}></img>
							<br />
							<br />
							<p>And a selection from the "Employees" table:</p>
							<img src={SqlRightJoin3}></img>
							<br />
							<br />
							<p>The following SQL statement will return all employees, and any orders they might have
								placed:</p>

							<code><span>SELECT</span> Orders.OrderID, Employees.LastName, Employees.FirstName<br /><span>FROM</span> Orders<br /><span>RIGHT</span> <span>JOIN</span> Employees
				 <span>ON</span> Orders.EmployeeID = Employees.EmployeeID<br /><span>ORDER</span> <span>BY</span> Orders.OrderID;</code>
							<br />
							<br />
							<p><i><strong>Note:</strong> The RIGHT JOIN keyword returns all records from the right table (Employees),	even if there are no matches in the left table (Orders).</i></p>
													
				            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Full Join
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <h2>SQL FULL OUTER JOIN Keyword</h2>
							<p>The FULL OUTER JOIN keyword return all records when there is a match in either left (table1) or right (table2) table records.</p>
							<p><i><strong>Note:</strong> FULL OUTER JOIN can potentially return very large result-sets!</i></p>

							<h3>FULL OUTER JOIN Syntax</h3>
							<code>
                <span>SELECT</span> <em>column_name(s)</em><br /><span>FROM</span>
                <em>table1</em><br /><span>FULL</span> <span>OUTER</span> <span>JOIN</span> <em>table2<br /> </em><span>ON</span>
                <em>table1.column_name </em>=<em> table2.column_name</em>; </code>
							<br />
							<br />
							<img src={SqlFullJoin1}></img>
							<hr />

							<h2>SQL FULL OUTER JOIN Example</h2>

							<p>Below is a selection from the "Customers" table:</p>
							<img src={SqlFullJoin2}></img>
							<br />
							<br />
							<p>And a selection from the "Orders" table:</p>
							<img src={SqlFullJoin3}></img>
							<br />
							<br />
							<p>The following SQL statement selects all customers, and all orders:</p>

							<code><span>SELECT</span> Customers.CustomerName, Orders.OrderID<br />
				<span>FROM</span> Customers<br />
				<span>FULL</span> <span>OUTER</span> <span>JOIN</span> Orders
				<span>ON</span> Customers.CustomerID=Orders.CustomerID<br />
				ORDER <span>BY</span> Customers.CustomerName;
        </code>
							<br />
							<br />
							<p>A selection from the result set may look like this:</p>
							<img src={SqlFullJoin4}></img>
					
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              SQL Comments
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <h2>SQL Comments</h2>
							<p>Comments are used to explain sections of SQL statements, or to prevent execution of SQL statements.</p>
							<br />

							<p><i><strong>Note: The examples in this chapter will not work in Firefox and Microsoft Edge!</strong></i></p>
							<p><i>Comments are not supported in Microsoft Access databases. Firefox and Microsoft Edge are using Microsoft Access database in our examples.</i></p>


							<hr />
							<h2>Single Line Comments</h2>
							<p>Single line comments start with --.</p>
							<p>Any text between -- and the end of the line will be ignored (will not be executed).</p>
							<h3>Examples:</h3>
							<p>The following example uses a single-line comment as an explanation:</p>

							<code><span>--Select all:<br /></span>
				<span>SELECT</span> * <span>FROM</span> Customers;</code>
							<br />
							<br />
							<p>The following example uses a single-line comment to ignore the end of a line:</p>

							<code><span>SELECT</span> * <span>FROM</span> Customers <span>-- WHERE City='Berlin';
				 </span></code>
							<br />
							<br />
							<p>The following example uses a single-line comment to ignore a statement:</p>

							<code><span>--SELECT * FROM Customers;<br /></span>
				<span>SELECT</span> * <span>FROM</span> Products;</code>
							<hr />

							<h2>Multi-line Comments</h2>
							<p>Multi-line comments start with /* and end with */.</p>
							<p>Any text between /* and */ will be ignored.</p>

							<h3>Examples:</h3>
							<p>The following example uses a multi-line comment as an explanation:</p>
							<span>/*Select all the columns<br />
								of all the records<br />
								in the Customers table:*/</span><br />
							<code><span>SELECT</span> * <span>FROM</span> Customers;</code>
							<br />
							<br />
							<p>The following example uses a multi-line comment to ignore many statements:</p>

							<code>
                <span>/*SELECT * FROM Customers;<br />
				SELECT * FROM Products;<br />
				SELECT * FROM Orders;<br />
				SELECT * FROM Categories;*/</span><br />
				<span>SELECT</span> * <span>FROM</span> Suppliers;
        </code>
							<br />
							<br />
							<p>To ignore just a part of a statement, also use the /* */ comment.</p>
							<p>The following example uses a comment to ignore part of a line:</p>

							<code><span>SELECT</span> CustomerName, <span>/*City,*/</span> Country <span>FROM</span> Customers;</code>
							<br />
							<br />
							<p>The following example uses a comment to ignore part of a statement:</p>
							<code>
                <span>SELECT</span> * <span>FROM</span> Customers <span>WHERE</span> (CustomerName <span>LIKE</span>
                <span>'L%'</span><br />
				<span>OR</span> CustomerName <span>LIKE</span> <span>'R%'</span> <span>/*OR CustomerName LIKE 'S%'<br />
				OR CustomerName LIKE 'T%'*/</span> <span>OR</span> CustomerName <span>LIKE</span> <span>'W%'</span>)<br />
				<span>AND</span> Country=<span>'USA'</span><br />
				<span>ORDER</span> <span>BY</span> CustomerName;
        </code>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

      </div>

    </main>

  </div>

);

export default IntroductionSql;
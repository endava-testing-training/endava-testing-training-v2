import React from 'react';

const TestGuide = (props) => (

  <div className="container mt-5">

    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <div className="typewriter rounded">
          <h2>{props.title}</h2>

          <div className="animate title">


            <span>t</span>
            <span>e</span>
            <span>s</span>
            <span>t</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>&nbsp;
            <span>c</span>
            <span>h</span>
            <span>e</span>
            <span>c</span>
            <span>k</span>
            <span>l</span>
            <span>i</span>
            <span>s</span>
            <span>t</span>

          </div>

        </div>
<h4 className="mb-3 font-italic">List of all the essential tips that a Tester must know to ensure the best quality of the software.</h4>

        <div class="accordion-option">
  
  <a href="javascript:void(0)" class="toggle-accordion active" accordion-id="#accordion"></a>
</div>
<div class="clearfix"></div>
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-1" aria-expanded="false" aria-controls="collapseOne">
      Functional
      </a>
    </h4>
    </div>
    <div id="collapse-1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
      <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-3">Functionality</div>
                <div className="col-9">Specifications</div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">General</div>

              </div>


              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-12">For web applications, these scenarios should be tested on multiple browsers like IE, FF, Chrome, Safari, Brave,etc, with versions approved by the client.</div>

              </div>



              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">User Login / Permissions</div>

              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">User and password incorrect.</div>
                <div className="col-9">
                  <ul>
                    <li>Login in the application with unexisting user and password.</li>
                    <li>Login in the application with not matching user and password.</li>
                    <li>Login in the application with existing user and wrong password.</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">User and password invalid.</div>
                <div className="col-9">
                  <ul>
                    <li>Login in the application without differentiating between uppercase and lowercase.</li>
                    <li>Login in the application with invalid,blank characters.</li>
                    <li>Login in the application with very short or large users and passwords.</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">User and password correct without permissions.</div>
                <div className="col-9">
                  <ul>
                    <li>Login in the application with existing user name and password but without permissions to access to the sections to test. (Log in with different user roles e.g. admin
    user, guest user etc.)</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">User and password correct with permissions.</div>
                <div className="col-9">
                  <ul>
                    <li>Login in the application with existing user name and password with permissions to access to the sections to test. (Log in with different user roles e.g. admin user,
    guest user etc.)</li>
                  </ul>
                </div>
              </div>





              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Screens</div>

              </div>


              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Content of the screen (Mockups)</div>
                <div className="col-9">
                  <ul>
                    <li>Verify that all information shown on screen matches with the one shown on the mockup. All fields should located exactly as in the mockup.</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Ortography and sintax.</div>
                <div className="col-9">
                  <ul>
                    <li>Verify that all words written on the screen are correct. Also verify sintax.</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Elements on the screen.</div>
                <div className="col-9">
                  <ul>
                    <li>All mandatory fields should be validated and indicated by an asterisk (*) symbol.</li>
                    <li>Text boxes: Data type, maximum or minimun amount of characters./ Check for negative numbers if allowed for numeric fields./ Check amount fields with decimal number
      values.</li>
                    <li>Combo boxes: Options shown are the same as the specified/ Combo boxes fields should  have the first entry as blank or text like ‘Select’.</li>
                    <li>Check boxes: Selection and unslection.</li>
                    <li>Suggest box: Options shown are the same as the specified.</li>
                    <li>Element availability: available or grayed out.</li>
                  </ul>
                </div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Create</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Create with incorrect information or format.</div>
                <div className="col-9">
                  <ul>
                    <li>Insert incorrect format data.</li>
                    <li>Insert more or less characters allowed.</li>
                    <li>Verify Save format or message (Grayed out or error message)</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Create with missing required fields.</div>
                <div className="col-9">
                  <ul>
                    <li>Complete information without completing all required fields.</li>
                    <li>Verify Save format or message (Grayed out or error message)</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Create with all required fields.</div>
                <div className="col-9">
                  <ul>
                    <li>Complete information with correct format and amount.</li>
                    <li>Complete Required fields.</li>
                    <li>Verify Save format (Available)</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Create with all fields.</div>
                <div className="col-9">
                  <ul>
                    <li>Complete information with correct format and amount.</li>
                    <li>Complete Required and No Required fields.</li>
                    <li>Verify Save format (Available)</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Create and Cancel.</div>
                <div className="col-9">
                  <ul>
                    <li>Record should not be displayed on the screen or saved on database.</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Create and Save.</div>
                <div className="col-9">
                  <ul>
                    <li>Record should be displayed on the screen with the information entered.</li>
                    <li>The user should not be able to submit page twice by pressing submit button in quick succession.</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Create and Save. Verify database (If permissions exists).</div>
                <div className="col-9">
                  <ul>
                    <li>Record should be stored on database with the information entered.</li>
                  </ul>
                </div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Modify</div>

              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Editable fields</div>
                <div className="col-9">
                  <ul>
                    <li>Control which fields are avaialable to change and which ones should not.</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Edit with incorrect information or format.</div>
                <div className="col-9">
                  <ul>
                    <li>Insert incorrect format data.</li>
                    <li>Insert more or less characters allowed.</li>
                    <li>Verify Save format or message (Grayed out or error message)</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Edit with missing required fields.</div>
                <div className="col-9">
                  <ul>
                    <li>Delete information from a required field.</li>
                    <li>Verify Save format or message (Grayed out or error message)</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Edit with all required fields.</div>
                <div className="col-9">
                  <ul>
                    <li>Edit information with correct format and amount.</li>
                    <li>Edit any Required field.</li>
                    <li>Verify Save format (Available)</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Edit and Cancel.</div>
                <div className="col-9">
                  <ul>
                    <li>Record should not be modified on the screen or saved on database.</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Edit and Save.</div>
                <div className="col-9">
                  <ul>
                    <li>Record should be displayed on the screen with the information modified.</li>
                    <li>The user should not be able to submit page twice by pressing submit button in  quick  succession.</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Create and Save. Verify database (If permissions exists)</div>
                <div className="col-9">
                  <ul>
                    <li> Record should be modified on database with the information entered.</li>
                  </ul>
                </div>
              </div>


              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Delete</div>

              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-12">Delete functionality’ for any record on a page should ask for a confirmation.</div>

              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Delete with confirmation message.</div>
                <div className="col-8">
                  <ul>
                    <li>Message to confirm deletion is displayed on the screen.</li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Delete with confimation message and Cancel.</div>
                <div className="col-8">
                  <ul>
                    <li>Record should still be shown on screen.</li>
                    <li>Record should still be stored on database.</li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Delete with confimation message and Confirm</div>
                <div className="col-8">
                  <ul>
                    <li>Record is not displayed on the screen.</li>
                    <li>If Delete is logic, the record should be marked on database as True.</li>
                    <li>If Delete is physical, record should not be stored on database anymore.</li>
                  </ul>
                </div>
              </div>



              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">ComboBoxes</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Default ComboBox option.</div>
                <div className="col-8">
                  <ul>
                    <li>Verify dedefault option (Particular option, All, Select One, Select Multiple, Etc.)</li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">ComboBoxe content.</div>
                <div className="col-8">
                  <ul>
                    <li>All options shown on combobox must be the same as the requirement.</li>
                    <li>Verify ortography of the options.</li>
                  </ul>
                </div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Scroll</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Scroll</div>
                <div className="col-8">
                  <ul>
                    <li>Shown when needed.</li>
                    <li>Correct scrolling.</li>
                  </ul>
                </div>
              </div>


              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Calendar and Date Validations</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Actual Date selection and other dates.</div>
                <div className="col-8">
                  <ul>
                    <li>Select actual date. Verify if it is correctly shown on calendar.</li>
                    <li>Select past date. Verify if it is correctly shown on calendar.</li>
                    <li>Select future date. Verify if it is correctly shown on calendar.</li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Date Format validation</div>
                <div className="col-8">
                  <ul>
                    <li>Control the format of the date if date picker allows it.</li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Start Date and End Date validations</div>
                <div className="col-8">
                  <ul>
                    <li>Validate when enter a start date bigger than the end date.</li>
                    <li>Validate when any of the dates is empty.</li>
                    <li>Validate when enter a start date smaller that the end date.</li>
                  </ul>
                </div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Search</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Search with empty criteria</div>
                <div className="col-8">
                  <ul>
                    <li>If blank is All, verify all records are displayed (requirement).</li>
                    <li>If blank is Nothing, verify no records are displayed (requirement).</li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Search without matching results.</div>
                <div className="col-8">
                  <ul>
                    <li>Insert search criteria that do not have any result.</li>
                    <li>Verify message or behavior of the search list.</li>
                    <li>The total number of results should be displayed in the result grid.</li>
                    <li>Search criteria used for searching should be displayed in the result grid.</li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Search with matching result.</div>
                <div className="col-8">
                  <ul>
                    <li>Insert search criteria that has results.</li>
                    <li>Verify information received from search that match with selected criteria.</li>
                    <li>Verify search when requirement is content.</li>
                    <li>Verify search when requirement is exact match.</li>
                    <li>The total number of results should be displayed in the result grid.</li>
                    <li>Search criteria used for searching should be displayed in the result grid.</li>
                    <li>Result grid values should be sorted by default column.</li>
                    <li>Sorted columns should be displayed with a sort icon.</li>
                    <li>Ascending and descending sorting functionality should work for columns supported by data sorting</li>
                    <li>Pagination should be enabled when there are more results than the default result count per page.</li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Control sort of the received results.</div>
                <div className="col-8">
                  <ul>
                    <li>Control the sort of results matches with the sort of the original list.</li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Control list when criteria entered is deleted.</div>
                <div className="col-8">
                  <ul>
                    <li>Mantain filtered list (if required)</li>
                    <li>Shown all records (if required)</li>
                  </ul>
                </div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Pagination</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Pagination options</div>
                <div className="col-8">
                  <ul>
                    <li>Pagination options from default.</li>
                    <li>Control when the grid has less rows that the minimum of the pagination.</li>
                    <li>Control when the grid has more rows that the minimun of the pagination.</li>
                    <li>Check for Next, Previous, First and Last page pagination functionality.</li>
                  </ul>
                </div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Sort columns</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Sort columns</div>
                <div className="col-8">
                  <ul>
                    <li>Check page sorting functionality after add/edit/delete operations on any record.</li>
                    <li>Test with each column that allows sorting.</li>
                    <li>Verify type of sort when clicking for a second time on the sort.</li>
                  </ul>
                </div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Print</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-4">Print option</div>
                <div className="col-8">
                  <ul>
                    <li>Control preview of print.</li>
                    <li>Control button funcitonality.</li>
                  </ul>
                </div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Image upload</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Also applicable for other file upload functionality</div>
                <div className="col-9">
                  <ul>
                    <li>Check for uploaded image path.</li>
                    <li>Check image upload and change functionality.</li>
                    <li>Check image upload functionality with image files of different extensions (e.g. JPEG, PNG, BMP etc.)</li>
                    <li>Check image upload functionality with images having space or any other allowed special character in the file name.</li>
                    <li>Check duplicate name image upload.</li>
                    <li>Check image upload with image size greater than the max allowed size. The Proper error message should be displayed.</li>
                    <li>Check image upload functionality with file types other than images (e.g. txt, doc, pdf, exe etc.). A proper error message should be displayed.</li>
                    <li>Check if images of specified height and width (if defined) are accepted otherwise rejected.</li>
                    <li>The image upload progress bar should appear for large size images.</li>
                    <li>Check if cancel button functionality is working in between upload process.</li>
                    <li>Check if file selection dialog shows only supported files listed.</li>
                    <li>Check multiple images upload functionality.</li>
                    <li>Check image quality after upload. Image quality should not be changed after upload.</li>
                    <li>Check if the user is able to use/view the uploaded images.</li>
                  </ul>
                </div>
              </div>

              <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                <div className="col-12">Specific test cases</div>
              </div>

              <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-1 mb-1">
                <div className="col-3">Requirement</div>
                <div className="col-9">
                  <ul>
                    <li>Write one test case per validation from requierement.</li>
                    <li>Write one test case per calculation from requirement.</li>
                    <li>Write one test case per functionality from requirement.</li>
                  </ul>
                </div>
              </div>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-2" aria-expanded="false" aria-controls="collapseTwo">
      GUI and Usability
      </a>
    </h4>
    </div>
    <div id="collapse-2" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        <ul>
          <li>All fields on a page (e.g. text box, radio options, drop-down lists) should be aligned properly.</li>
          <li>Numeric values should be justified correctly unless specified otherwise.</li>
          <li>Enough space should be provided between field labels, columns, rows, error messages etc.</li>
          <li>The scrollbar should be enabled only when necessary.</li>
          <li>Font size, style, and color for headline, description text, labels, infield data, and grid info
          should be standard as specified in SRS.</li>
          <li>Description text box should be multi-lined.</li>
          <li>Disabled fields should be greyed out and users should not be able to set focus on these fields.</li>
          <li>Upon click of an input text field, mouse arrow pointer should get changed to the cursor.</li>
          <li>The user should not be able to type in drop down select lists.</li>
          <li>Information filled by users should remain intact when there is an error message on page submit. The user should be able to submit the form again by correcting the errors.</li>
          <li>Check if proper field labels are used in error messages.</li>
          <li>Drop-down field values should be displayed in a defined sort order.</li>
          <li>Tab and Shift+Tab order should work properly.</li>
          <li>Default radio options should be pre-selected on the page load.</li>
          <li>Field-specific and page level help messages should be available.</li>
          <li>Check if the correct fields are highlighted in case of errors.</li>
          <li>Check if the drop-down list options are readable and not truncated due to field size limit.</li>
          <li>All buttons on a page should be accessible by keyboard shortcuts and the user should be able to perform all operations using a keyboard.</li>
          <li>Check all pages for broken images.</li>
          <li>Check all pages for broken links.</li>
          <li>All pages should have a title.</li>
          <li>Confirmation messages should be displayed before performing any update or delete operation.</li>
          <li>Hourglass should be displayed when the application is busy.</li>
          <li>Page text should be left justified.</li>
          <li>The user should be able to select only one radio option and any combination for checkboxes.</li>
        </ul>
       </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-3" aria-expanded="false" aria-controls="collapseThree">
        Database Testing
      </a>
    </h4>
    </div>
    <div id="collapse-3" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        <ul>
          <li>Check if correct data is getting saved in the database upon successful page submit.</li>
          <li>Check values for columns which are not accepting null values.</li>
          <li>Check for data integrity. Data should be stored in single or multiple tables based on the design.</li>
          <li>Index names should be given as per the standards e.g.</li>
          <li>Tables should have a primary key column.</li>
          <li>Table columns should have description information available (except for audit columns like created date, created by etc.)</li>
          <li>For every database add/update operation log should be added.</li>
          <li>Required table indexes should be created.</li>
          <li>Check if data is committed to the database only when the operation is successfully completed.</li>
          <li>Data should be rolled back in case of failed transactions.</li>
          <li>Database name should be given as per the application type i.e. test, UAT, sandbox, live (though this is not a standard it is helpful for database maintenance)</li>
          <li>Database logical names should be given according to the database name (again this is not standard but helpful for DB maintenance).</li>
          <li>Stored procedures should not be named with a prefix “sp_”</li>
          <li>Check if values for table audit columns (like created date, created by, updated, updated by, is deleted, deleted data, deleted by etc.) are populated properly.</li>
          <li>Check if input data is not truncated while saving. Field length shown to the user on the page and in database schema should be the same.</li>
          <li>Check numeric fields with minimum, maximum, and float values.</li>
          <li>Check numeric fields with negative values (for both acceptance and non-acceptance).</li>
          <li>Check if radio button and drop-down list options are saved correctly in the database.</li>
          <li>Check if the database fields are designed with the correct data type and data length.</li>
          <li>Check if all the table constraints like a Primary key, Foreign key etc. are implemented correctly.</li>
          <li>Test stored procedures and triggers with sample input data.</li>
          <li>Input field leading and trailing spaces should be truncated before committing data to the database.</li>
          <li>Null values should not be allowed for the Primary key column.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-4" aria-expanded="false" aria-controls="collapseThree">
        Sending Emails
      </a>
    </h4>
    </div>
    <div id="collapse-4" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        <ul>
          <li>Email template should use standard CSS for all emails.</li>
          <li>Email addresses should be validated before sending emails.</li>
          <li>Special characters in the email body template should be handled properly.</li>
          <li>Language specific characters (e.g. Russian, Chinese or German language characters) should be handled properly in the email body template.</li>
          <li>Email subject should not be blank.</li>
          <li>Placeholder fields used in the email template should be replaced with actual values e.g. {'{'}Firstname{'} {'}Lastname{'}'} should be replaced with individuals first and last name properly for all the recipients.</li>
          <li>If reports with dynamic values are included in the email body and report data should be calculated correctly.</li>
          <li>Email sender name should not be blank.</li>
          <li>Emails should be checked in different email clients like Outlook, Gmail, Hotmail, Yahoo! mail etc.</li>
          <li>Check to send email functionality using TO, CC and BCC fields.</li>
          <li>Check plain text emails.</li>
          <li>Check HTML format emails.</li>
          <li>Check email header and footer for company logo, privacy policy and other links.</li>
          <li>Check emails with attachments.</li>
          <li>Check to send email functionality to single, multiple or distribution list recipients.</li>
          <li>Check if a reply to email address is correct.</li>
          <li>Check to send the high volume of emails.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-5" aria-expanded="false" aria-controls="collapseThree">
        Performance
      </a>
    </h4>
    </div>
    <div id="collapse-5" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
      <ul>
                <li>Check if the page load time is within the acceptable range.</li>
                <li>Check the page load on slow connections.</li>
                <li>Check the response time for any action under a light, normal, moderate, and heavy load conditions.</li>
                <li>Check performance of database stored procedures and triggers.</li>
                <li>Check the database query execution time.</li>
                <li>Check for load testing of the application.</li>
                <li>Check for stress testing of the application.</li>
                <li>Check CPU and memory usage under peak load condition.</li>
              </ul>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-6" aria-expanded="false" aria-controls="collapseThree">
        Security
      </a>
    </h4>
    </div>
    <div id="collapse-6" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
      <ul>
                <li>Check for SQL injection attacks.</li>
                <li>Secure pages should use the HTTPS protocol.</li>
                <li>Page crash should not reveal application or server info. Error page should be displayed for this.</li>
                <li>Escape special characters in the input.</li>
                <li>Error messages should not reveal any sensitive information.</li>
                <li>All credentials should be transferred over an encrypted channel.</li>
                <li>Test password security and password policy enforcement.</li>
                <li>Check application logout functionality.</li>
                <li>Check for Brute Force Attacks.</li>
                <li>Cookie information should be stored in encrypted format only.</li>
                <li>Check session cookie duration and session termination after timeout or logout.</li>
                <li>Session tokens should be transmitted over a secured channel.</li>
                <li>The password should not be stored in cookies.</li>
                <li>Test for Denial of Service attacks.</li>
                <li>Test for memory leakage.</li>
                <li>Test unauthorized application access by manipulating variable values in the browser address bar.</li>
                <li>Test file extension handing so that exe files are not uploaded and executed on the server.</li>
                <li>Sensitive fields like passwords and credit card information should not have to autocomplete enabled.</li>
                <li>File upload functionality should use file type restrictions and also anti-virus for scanning uploaded files.</li>
                <li>Check if directory listing is prohibited.</li>
                <li>Password and other sensitive fields should be masked while typing.</li>
                <li>Check if forgot password functionality is secured with features like temporary password expiry after specified hours and security question is asked before changing or requesting a new password.</li>
                <li>Verify CAPTCHA functionality.</li>
                <li>Check if important events are logged in log files.</li>
                <li>Check if access privileges are implemented correctly.</li>
              </ul>
      </div>
    </div>
  </div>
</div>











      </div>

    </main>

  </div>

);

export default TestGuide;
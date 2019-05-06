import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
  } from 'react-accessible-accordion';

    const UiElements = (props) => (

        <div class="container">

            <main class="page-content" aria-label="Content">
                <div class="wrapper">
                    <div class="typewriter rounded">
                        <h2>Endava</h2>
                        <h1>{props.title}</h1>
                    </div>
                    <h5>Elements of User Interface</h5>
                    <hr/>
                    <ul>
                      <li><b>Input Controls:</b> checkboxes, radio buttons, dropdown lists, list boxes, buttons, toggles, text fields, date field.</li>
                      <li><b>Navigational Components:</b> breadcrumb, slider, search field, pagination, slider, tags, icons.</li>
                      <li><b>Informational Components:</b> tooltips, icons, progress bar, notifications, message boxes, modal windows.</li>
                      <li><b>Containers:</b> accordion.</li>
                    </ul>
        <hr/>
        <Accordion allowZeroExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Input Controls
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
             
                    <div class="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                        <div class="col-2">Element</div>
                        <div class="col-6">Description</div>
                        <div class="col-4">Examples</div>
                    </div>

<div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
  <div class="col-2">Checkboxes</div>
  <div class="col-6">Checkboxes allow the user to select one or more options from a set. It is usually best to present checkboxes in a vertical list. More than one column is acceptable as well if the list is long enough that it might require scrolling or if comparison of terms might be necessary.</div>
  <div class="col-4"><form>
            <label>Radio Button: <input type="checkbox" name="name" /></label><br/>
            <label>Dropdown list: <input type="checkbox" name="name" checked /></label>
          </form></div>
</div>
             						
<div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
  <div class="col-2">Radio buttons</div>
  <div class="col-6">Radio buttons are used to allow users to select one item at a time.</div>
  <div class="col-4">        <form>
        <div className="radio">
          <label><input type="radio" value="radio" checked={true} />Radio Button</label>
        </div>
        <div className="radio">
          <label><input type="radio" value="dropdown" />Dropdown</label>
        </div>
        <div className="radio">
          <label><input type="radio" value="other" />Other</label>
        </div>
      </form></div>
</div>

<div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
    <div class="col-2">Dropdown lists</div>
    <div class="col-6">Dropdown lists allow users to select one item at a time, similarly to radio buttons, but are more compact allowing you to save space. Consider adding text to the field, such as ‘Select one’ to help the user recognize the necessary action.</div>
    <div class="col-4">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown list
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
    </div>
</div>

<div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
    <div class="col-2">List boxes</div>
    <div class="col-6">List boxes, like checkboxes, allow users to select a multiple items at a time,but are more compact and can support a longer list of options if needed.</div>
    <div class="col-4">
    <input list="encodings" value="" class="col-sm-6 custom-select custom-select-sm" />
    <datalist id="encodings">
            <option value="ISO-8859-1">ISO-8859-1</option>
            <option value="cp1252">ANSI</option>
            <option value="utf8">UTF-8</option>
    </datalist>
    </div>
</div>

<div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
    <div class="col-2">Buttons</div>
    <div class="col-6">A button indicates an action upon touch and is typically labeled using text, an icon, or both.</div>
    <div class="col-4">
        <button type="button" class="btn btn-default m-1 border">Default</button>
        <button type="button" class="btn btn-primary m-1">Primary</button>
        <button type="button" class="btn btn-success m-1">Success</button>
        <button type="button" class="btn btn-info m-1">Info</button>
        <button type="button" class="btn btn-warning m-1">Warning</button>
        <button type="button" class="btn btn-danger m-1">Danger</button>
        <button type="button" class="btn btn-link m-1">Link</button>
    </div>
</div>

<div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
    <div class="col-2">Dropdown Button</div>
    <div class="col-6">The dropdown button consists of a button that when clicked displays a drop-down list of mutually exclusive items.</div>
    <div class="col-4">
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown Button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
    </div>
</div>

<div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
    <div class="col-2">Toggles</div>
    <div class="col-6">A toggle button allows the user to change a setting between two states. They are most effective when the on/off states are visually distinct.</div>
    <div class="col-4">

    </div>
</div>

<div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
    <div class="col-2">Text fields</div>
    <div class="col-6">Text fields allow users to enter text. It can allow either a single line or multiple lines of text.</div>
    <div class="col-4">

    </div>
</div>

<div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
    <div class="col-2">Date and time pickers</div>
    <div class="col-6">A date picker allows users to select a date and/or time. By using the picker, the information is consistently formatted and input into the system.</div>
    <div class="col-4">

    </div>
</div>


                           
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        <Accordion allowZeroExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Navigational Components
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div class="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                        <div class="col-2">Element</div>
                        <div class="col-6">Description</div>
                        <div class="col-4">Examples</div>
                    </div>

            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Search Field</div>
                <div class="col-6">A search box allows users to enter a keyword or phrase (query) and submit it to search the index with the intention of getting back the most relevant results. Typically search fields are single-line text boxes and are often accompanied by a search button.</div>
                <div class="col-4">

                </div>
            </div>

            
            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Breadcrumb</div>
                <div class="col-6">Breadcrumbs allow users to identify their current location within the system by providing a clickable trail of proceeding pages to navigate by.</div>
                <div class="col-4">

                </div>
            </div>

            
            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Pagination</div>
                <div class="col-6">Pagination divides content up between pages, and allows users to skip between pages or go in order through the content.</div>
                <div class="col-4">

                </div>
            </div>

            
            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Sliders</div>
                <div class="col-6">A slider, also known as a track bar, allows users to set or adjust a value. When the user changes the value, it does not change the format of the interface or other info on the screen.</div>
                <div class="col-4">

                </div>
            </div>

            
            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Icons</div>
                <div class="col-6">An icon is a simplified image serving as an intuitive symbol that is used to help users to navigate the system. Typically, icons are hyperlinked.</div>
                <div class="col-4">

                </div>
            </div>

            
            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Image Carousel</div>
                <div class="col-6">Image carousels allow users to browse through a set of items and make a selection of one if they so choose. Typically, the images are hyperlinked.</div>
                <div class="col-4">

                </div>
            </div>

                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        <Accordion allowZeroExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Informational Components
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div class="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                        <div class="col-2">Element</div>
                        <div class="col-6">Description</div>
                        <div class="col-4">Examples</div>
                    </div>

                    <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Notifications</div>
                <div class="col-6">A notification is an update message that announces something new for the user to see. Notifications are typically used to indicate items such as, the successful completion of a task, or an error or warning message.</div>
                <div class="col-4">

                </div>
            </div>

            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Progress Bars</div>
                <div class="col-6">A progress bar indicates where a user is as they advance through a series of steps in a process. Typically, progress bars are not clickable.</div>
                <div class="col-4">

                </div>
            </div>

            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">ToolTips</div>
                <div class="col-6">A tooltip allows a user to see hints when they hover over an item indicating the name or purpose of the item</div>
                <div class="col-4">

                </div>
            </div>

            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Message Boxes</div>
                <div class="col-6">A message box is a small window that provides information to users and requires them to take an action before they can move forward.</div>
                <div class="col-4">

                </div>
            </div>

            <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Modal Window (pop-up)</div>
                <div class="col-6">A modal window requires users to interact with it in some way before they can return to the system.</div>
                <div class="col-4">

                </div>
            </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        <Accordion allowZeroExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Containers
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div class="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                        <div class="col-2">Element</div>
                        <div class="col-6">Description</div>
                        <div class="col-4">Examples</div>
                    </div>

                    <div class="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                <div class="col-2">Accordion</div>
                <div class="col-6">An accordion is a vertically stacked list of items that utilizes show/ hide functionality. When a label is clicked, it expands the section showing the content within. There can have one or more items showing at a time and may have default states that reveal one or more sections without the user clicking</div>
                <div class="col-4">

                </div>
            </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

                </div>

            </main>

        </div>

    );

export default UiElements;
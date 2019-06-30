import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownMenuBT from './components/DropdownMenuBT';
import ToogleBT from './components/ToogleBT';
import InputTextBT from './components/InputTextBT';
import DatePickerBT from './components/DatePickerBT';
import CheckBoxesBT from './components/CheckBoxesBT';
import RadioButtonsBT from './components/RadioButtonsBT';
import ToogleReactBT from './components/ToogleReactBT';
import SearchBarBT from './components/SearchBarBT';
import CarouselBT from './components/CarouselBT';
import SlidersBT from './components/SlidersBT';
import PaginationPageBT from './components/PaginationPageBT';
import NotificationBT from './components/NotificationBT';
import ProgressBarBT from './components/ProgressBarBT';
import ToolTipBT from './components/ToolTipBT';
import ModalInteractBT from './components/ModalInteractBT';
import ListBoxesBT from './components/ListBoxesBT';
import TabsBT from './components/TabsBT';
import AccordionBT from './components/AccordionBT';
import MessageBoxBT from './components/MessageBoxBT';


import { Pagination, PaginationItem, PaginationLink, Breadcrumb, BreadcrumbItem } from 'reactstrap';

const UiElements = (props) => (

  <div className="container mt-5">

    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <div className="typewriter rounded">
          <h2>{props.title}</h2>

          <div className="animate title">
            <span>e</span>
            <span>l</span>
            <span>e</span>
            <span>m</span>
            <span>e</span>
            <span>n</span>
            <span>t</span>
            <span>s</span>&nbsp;
            <span>o</span>
            <span>f</span>&nbsp;
            <span>u</span>
            <span>s</span>
            <span>e</span>
            <span>r</span>&nbsp;
            <span>i</span>
            <span>n</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
            <span>f</span>
            <span>a</span>
            <span>c</span>
            <span>e</span>
          </div>

        </div>

        <hr />
        <ul>
          <li><b>Input Controls:</b> checkboxes, radio buttons, dropdown lists, list boxes, buttons, toggles, text fields, date field.</li>
          <li><b>Navigational Components:</b> breadcrumb, slider, search field, pagination, slider, tags, icons.</li>
          <li><b>Informational Components:</b> tooltips, icons, progress bar, notifications, message boxes, modal windows.</li>
          <li><b>Containers:</b> accordion.</li>
        </ul>
        <hr />

        <div className="accordion-option">
          <a href="javascript:void(0)" className="toggle-accordion active" accordion-id="#accordion"></a>
        </div>
        <div className="clearfix"></div>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-1" aria-expanded="false" aria-controls="collapseOne">
                  Input Controls</a>
              </h4>
            </div>
            <div id="collapse-1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
                <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                  <div className="col-2">Element</div>
                  <div className="col-6">Description</div>
                  <div className="col-4">Examples</div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Checkboxes</div>
                  <div className="col-6">Checkboxes allow the user to select one or more options from a set. It is usually best to present checkboxes in a vertical list. More than one column is acceptable as well if the list is long enough that it might require scrolling or if comparison of terms might be necessary.</div>
                  <div className="col-4">
                    <CheckBoxesBT></CheckBoxesBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Radio buttons</div>
                  <div className="col-6">Radio buttons are used to allow users to select one item at a time.</div>
                  <div className="col-4">
                    <RadioButtonsBT></RadioButtonsBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Dropdown lists</div>
                  <div className="col-6">Dropdown lists allow users to select one item at a time, similarly to radio buttons, but are more compact allowing you to save space. Consider adding text to the field, such as ‘Select one’ to help the user recognize the necessary action.</div>
                  <div className="col-4 button-drop-example">
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown list
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">List boxes</div>
                  <div className="col-6">List boxes, like checkboxes, allow users to select a multiple items at a time,but are more compact and can support a longer list of options if needed.</div>
                  <div className="col-4">
                    <ListBoxesBT></ListBoxesBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Buttons</div>
                  <div className="col-6">A button indicates an action upon touch and is typically labeled using text, an icon, or both.</div>
                  <div className="col-4">
                    <button type="button" className="btn btn-default m-1 border">Default</button>
                    <button type="button" className="btn btn-primary m-1">Primary</button>
                    <button type="button" className="btn btn-success m-1">Success</button>
                    <button type="button" className="btn btn-info m-1">Info</button>
                    <button type="button" className="btn btn-warning m-1">Warning</button>
                    <button type="button" className="btn btn-danger m-1">Danger</button>
                    <button type="button" className="btn btn-link m-1">Link</button>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Dropdown Button</div>
                  <div className="col-6">The dropdown button consists of a button that when clicked displays a drop-down list of mutually exclusive items.</div>
                  <div className="col-4 button-drop-example">
                    <DropdownMenuBT></DropdownMenuBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Toggles</div>
                  <div className="col-6">A toggle button allows the user to change a setting between two states. They are most effective when the on/off states are visually distinct.</div>
                  <div className="col-4">
                    <ToogleReactBT></ToogleReactBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Text fields</div>
                  <div className="col-6">Text fields allow users to enter text. It can allow either a single line or multiple lines of text.</div>
                  <div className="col-4">
                    <InputTextBT></InputTextBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Date and time pickers</div>
                  <div className="col-6">A date picker allows users to select a date and/or time. By using the picker, the information is consistently formatted and input into the system.</div>
                  <div className="col-4">
                    <DatePickerBT></DatePickerBT>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-2" aria-expanded="false" aria-controls="collapseTwo">
                  Navigational Components</a>
              </h4>
            </div>
            <div id="collapse-2" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body">
                <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                  <div className="col-2">Element</div>
                  <div className="col-6">Description</div>
                  <div className="col-4">Examples</div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Search Field</div>
                  <div className="col-6">A search box allows users to enter a keyword or phrase (query) and submit it to search the index with the intention of getting back the most relevant results. Typically search fields are single-line text boxes and are often accompanied by a search button.</div>
                  <div className="col-4">
                    <SearchBarBT></SearchBarBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Breadcrumb</div>
                  <div className="col-6">Breadcrumbs allow users to identify their current location within the system by providing a clickable trail of proceeding pages to navigate by.</div>
                  <div className="col-4">
                    <div>
                      <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                      </Breadcrumb>
                      <Breadcrumb>
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Library</BreadcrumbItem>
                      </Breadcrumb>
                      <Breadcrumb>
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                        <BreadcrumbItem active>Data</BreadcrumbItem>
                      </Breadcrumb>
                    </div>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Pagination</div>
                  <div className="col-6">Pagination divides content up between pages, and allows users to skip between pages or go in order through the content.</div>
                  <div className="col-4">
                    <PaginationPageBT></PaginationPageBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Sliders</div>
                  <div className="col-6">A slider, also known as a track bar, allows users to set or adjust a value. When the user changes the value, it does not change the format of the interface or other info on the screen.</div>
                  <div className="col-4">
                    <SlidersBT></SlidersBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Icons</div>
                  <div className="col-6">An icon is a simplified image serving as an intuitive symbol that is used to help users to navigate the system. Typically, icons are hyperlinked.</div>
                  <div className="col-4 icons-example">

                    <a href="https://www.facebook.com/endava" rel="me" itemprop="sameAs" aria-label="visit us on " target="_blank" title="facebook"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                    <a href="https://twitter.com/endava" rel="me" itemprop="sameAs" aria-label="visit us on " target="_blank" title="twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    <a href="https://www.linkedin.com/company/endava" rel="me" itemprop="sameAs" aria-label="visit us on " target="_blank" title="linkedin"> <FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a href="https://www.instagram.com/endava/" rel="me" itemprop="sameAs" aria-label="visit us on " target="_blank" title="instagram"> <FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Image Carousel</div>
                  <div className="col-6">Image carousels allow users to browse through a set of items and make a selection of one if they so choose. Typically, the images are hyperlinked.</div>
                  <div className="col-4">
                    <CarouselBT></CarouselBT>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-3" aria-expanded="false" aria-controls="collapseThree">
                  Informational Components
                </a>
              </h4>
            </div>
            <div id="collapse-3" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
              <div className="panel-body">
                <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                  <div className="col-2">Element</div>
                  <div className="col-6">Description</div>
                  <div className="col-4">Examples</div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Notifications</div>
                  <div className="col-6">A notification is an update message that announces something new for the user to see. Notifications are typically used to indicate items such as, the successful completion of a task, or an error or warning message.</div>
                  <div className="col-4 notification-example">
                    <NotificationBT></NotificationBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Progress Bars</div>
                  <div className="col-6">A progress bar indicates where a user is as they advance through a series of steps in a process. Typically, progress bars are not clickable.</div>
                  <div className="col-4">
                    <ProgressBarBT></ProgressBarBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">ToolTips</div>
                  <div className="col-6">A tooltip allows a user to see hints when they hover over an item indicating the name or purpose of the item</div>
                  <div className="col-4">
                    <ToolTipBT></ToolTipBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Message Boxes</div>
                  <div className="col-6">A message box is a small window that provides information to users and requires them to take an action before they can move forward.</div>
                  <div className="col-4">
                    <MessageBoxBT></MessageBoxBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Modal Window (pop-up)</div>
                  <div className="col-6">A modal window requires users to interact with it in some way before they can return to the system.</div>
                  <div className="col-4">
                    <ModalInteractBT></ModalInteractBT>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-4" aria-expanded="false" aria-controls="collapseThree">
                  Containers
                </a>
              </h4>
            </div>
            <div id="collapse-4" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
              <div className="panel-body">
                <div className="row font-weight-bolder border-bottom border-secondary p-2 ml-3 mr-3 mt-3 mb-1">
                  <div className="col-2">Element</div>
                  <div className="col-6">Description</div>
                  <div className="col-4">Examples</div>
                </div>
                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Accordion</div>
                  <div className="col-6">An accordion is a vertically stacked list of items that utilizes show/ hide functionality. When a label is clicked, it expands the section showing the content within. There can have one or more items showing at a time and may have default states that reveal one or more sections without the user clicking</div>
                  <div className="col-4">
                    <AccordionBT></AccordionBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Toggles</div>
                  <div className="col-6">A toggle button allows the user to change a setting between two states. They are most effective when the on/off states are visually distinct.</div>
                  <div className="col-4">
                    <ToogleBT></ToogleBT>
                  </div>
                </div>

                <div className="row border-bottom border-secondary p-2 ml-3 mr-3 mt-2 pb-3 mb-1">
                  <div className="col-2">Tabs</div>
                  <div className="col-6">Description.</div>
                  <div className="col-4">
                    <TabsBT></TabsBT>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  </div>
);

export default UiElements;
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/style.css';
import EndavaNavbar   from './component/navbar';
import Home            from './component/home';
import AboutScrum      from './component/about-scrum';
import Agile           from './component/agile';
import Success         from './component/success';
import AboutUs         from './component/about';
import Topics          from './component/topics';
import TestGuide       from './component/test-guide';
import UiElements      from './component/ui-elements';
import IntroductionErd from './component/introduction-erd';
import IntroductionSql from './component/introduction-sql';

import EndavaFooter from './component/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram,  faLinkedin, faTwitter   } from '@fortawesome/free-brands-svg-icons';

library.add( faDownload, faFacebook, faInstagram,  faLinkedin, faTwitter )

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <EndavaNavbar />
          <Route exact path="/home"             render={() => <Home title="Basic Testing Training" />} />
          <Route exact path="/about-scrum"      render={() => <AboutScrum title="About Scrum" />} />
          <Route exact path="/agile"            render={() => <Agile title="12 Agile Principles" />} />
          <Route exact path="/success"          render={() => <Success title="Success stories go here" />} />
          <Route exact path="/about"            render={() => <AboutUs title="Who we are? What we do?" />} />
          <Route exact path="/test-guide"       render={() => <TestGuide title="Basic testing checklist" />} />
          <Route exact path="/ui-elements"      render={() => <UiElements title="User interface elements" />} />
          <Route exact path="/topics"           render={() => <Topics title="Topics about this training" />} />
          <Route exact path="/introduction-erd" render={() => <IntroductionErd title="Introduction to ERD" />} />
          <Route exact path="/introduction-sql" render={() => <IntroductionSql title="Introduction to SQL" />} />
          <EndavaFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

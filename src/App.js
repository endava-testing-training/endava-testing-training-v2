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
          <Route exact path="/home"             render={() => <Home title="Home" />} />
          <Route exact path="/about-scrum"      render={() => <AboutScrum title="Usefull links" />} />
          <Route exact path="/agile"            render={() => <Agile title="Usefull links" />} />
          <Route exact path="/success"          render={() => <Success title="Endava" />} />
          <Route exact path="/about"            render={() => <AboutUs title="About us" />} />
          <Route exact path="/test-guide"       render={() => <TestGuide title="Endava" />} />
          <Route exact path="/ui-elements"      render={() => <UiElements title="Endava" />} />
          <Route exact path="/topics"           render={() => <Topics title="Topics about this training" />} />
          <Route exact path="/introduction-erd" render={() => <IntroductionErd title="Endava" />} />
          <Route exact path="/introduction-sql" render={() => <IntroductionSql title="Endava" />} />
          <EndavaFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

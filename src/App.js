import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/style.css';
import AboutScrum         from './component/about-scrum';
import AboutUs            from './component/about';
import Agile              from './component/agile';
import BakeTester         from './component/bake-a-tester';
import EndavaNavbar       from './component/navbar';
import FunctionalTesting  from './component/functional-testing';
import Home               from './component/home';
import IntroductionErd    from './component/introduction-erd';
import IntroductionSql    from './component/introduction-sql';
import Istqb              from './component/istqb';
import Practice           from './component/practice';
import Success            from './component/success';
import TestGuide          from './component/test-guide';
import TechnicalSkills    from './component/technical-skills';
import Topics             from './component/topics';
import UiElements         from './component/ui-elements';
import VideoAgile         from './component/video-agile';

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
            <Route exact path="/"                   render={() => <Home title="Home" />} />
            <Route exact path="/agile"              render={() => <Agile title="Agile" />} />
            <Route exact path="/functional-testing" render={() => <FunctionalTesting title="Functional Testing" />} />
            <Route exact path="/bake-a-tester"      render={() => <BakeTester title="Bake a Tester" />} />
            <Route exact path="/practice"           render={() => <Practice title="Agile" />} />
            <Route exact path="/home"               render={() => <Home title="Home" />} />
            <Route exact path="/about-scrum"        render={() => <AboutScrum title="Usefull links" />} />
            <Route exact path="/video-agile"        render={() => <VideoAgile title="Usefull links" />} />
            <Route exact path="/success"            render={() => <Success title="Endava" />} />
            <Route exact path="/about"              render={() => <AboutUs title="About us" />} />
            <Route exact path="/test-guide"         render={() => <TestGuide title="Endava" />} />
            <Route exact path="/istqb"              render={() => <Istqb title="Recommended sites" />} />
            <Route exact path="/ui-elements"        render={() => <UiElements title="Endava" />} />
            <Route exact path="/technical-skills"   render={() => <TechnicalSkills title="Technical Skills" />} />
             <Route exact path="/topics"            render={() => <Topics title="Topics about this training" />} /><Route exact path="/topics"           render={() => <Topics title="Topics about this training" />} />
            <Route exact path="/introduction-erd"   render={() => <IntroductionErd title="Endava" />} />
            <Route exact path="/introduction-sql"   render={() => <IntroductionSql title="Endava" />} />
          <EndavaFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

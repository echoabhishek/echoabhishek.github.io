import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Milestone from '../components/Milestone';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Blog from '../components/Blog';

class Content extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />

            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/skills' component={Skills} />
            <Route path='/projects' component={Projects} />
            <Route path='/milestone' component={Milestone} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
            <Route path='/blog' component={Blog} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Content;
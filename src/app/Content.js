import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Router>
                <div>
                    <Navbar />

                    <Route exact path='/' component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/skills' component={Skills}/>
                </div>
                </Router>
            </div>
        );
    }
}

export default Content;
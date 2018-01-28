import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { WrappedLink as Link } from '../components/WrappedLink';
import Button from 'material-ui/Button';
import HomeIcon from '../static/icons/HomeIcon';
import AboutIcon from '../static/icons/AboutIcon';
import SkillsIcon from '../static/icons/SkillsIcon';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import '../www/main.css';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Router>
                <div>
                    <ul className='navbar'>
                        <Link className='navlink' to='/home'>
                            <Button className='navbutton'>
                                <HomeIcon />
                            </Button>
                            Home
                        </Link>
                        <Link className='navlink' to='/about'>
                            <Button className='navbutton'>
                                <AboutIcon />
                            </Button>
                            About
                        </Link>
                        <Link className='navlink' to='/skills'>
                            <Button className='navbutton'>
                                <SkillsIcon />
                            </Button>
                            Skills
                        </Link>
                    </ul>

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
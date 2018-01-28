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

class Content extends React.Component {
    render() {
        return (
            <div> {/* style={styles.container}> */}
                <Router>
                <div>
                    <ul>
                        <Button>
                            <HomeIcon />
                            <Link to='/home' />
                            Home
                        </Button>
                        <Button>
                            <AboutIcon />
                            <Link to='/about' />
                            About
                        </Button>
                        <Button>
                            <SkillsIcon />
                            <Link to='/skills' />
                            Skills
                        </Button>
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
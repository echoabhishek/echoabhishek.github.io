import React from 'react';
import NavButton from './NavButton';
import HomeIcon from '../static/icons/HomeIcon';
import AboutIcon from '../static/icons/AboutIcon';
import SkillsIcon from '../static/icons/SkillsIcon';
import withStyles from 'material-ui/styles/withStyles';

const styles = {
    navbar: {
        textAlign: 'center',
        margin: '80px 0px 20px'
    }
}

const Navbar = (props) => {
    const { classes } = props;
        return (
        <ul className={classes.navbar}>
            <NavButton
                title='HOME'
                to='/home'>
                <HomeIcon />
            </NavButton>
            <NavButton
                title='ABOUT'
                to='/about'>
                <AboutIcon />
            </NavButton>
            <NavButton
                title='SKILLS'
                to='/skills'>
                <SkillsIcon />
            </NavButton>
        </ul>
    );
}

export default withStyles(styles)(Navbar);
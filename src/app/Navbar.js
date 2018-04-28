import React from 'react';
import NavButton from './NavButton';
import withStyles from 'material-ui/styles/withStyles';

const Navbar = (props) => {
  const { classes } = props;
  return (
    <ul className={classes.navBar}>
      <NavButton
        title='HOME'
        to='/home'>
        <i class='material-icons md-dark'>home</i>
      </NavButton>
      <NavButton
        title='ABOUT'
        to='/about'>
        <i class='material-icons md-dark'>person</i>
      </NavButton>
      <NavButton
        title='SKILLS'
        to='/skills'>
        <i class='material-icons md-dark'>build</i>
      </NavButton>
      <NavButton
        title='PROJECTS'
        to='/projects'>
        <i class='material-icons md-dark'>gavel</i>
      </NavButton>
      <NavButton
        title='MILESTONE'
        to='/milestone'>
        <i class='material-icons md-dark'>donut_large</i>
      </NavButton>
      <NavButton
        title='RESUME'
        to='/resume'>
        <i class='material-icons md-dark'>insert_drive_file</i>
      </NavButton>
      <NavButton
        title='CONTACT'
        to='/contact'>
        <i class='material-icons md-dark'>chat_bubble</i>
      </NavButton>
      <NavButton
        title='BLOG'
        to='/blog'>
        <i class='material-icons md-dark'>face</i>
      </NavButton>
    </ul>
  );
}

const styles = {
  navBar: {
    textAlign: 'center',
    margin: '80px 0px 20px'
  }
}

export default withStyles(styles)(Navbar);
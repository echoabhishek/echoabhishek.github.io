import React from 'react';
import NavButton from './NavButton';
import { MdHome, MdPerson, MdBuild, MdGavel, MdDonutLarge, MdInsertDriveFile, MdChatBubble, MdFace } from 'react-icons/lib/md';
import withStyles from 'material-ui/styles/withStyles';

const Navbar = (props) => {
  const { classes } = props;
  return (
    <ul className={classes.navBar}>
      <NavButton
        title='HOME'
        to='/home'>
        <MdHome size={24} />
      </NavButton>
      <NavButton
        title='ABOUT'
        to='/about'>
        <MdPerson size={24} />
      </NavButton>
      <NavButton
        title='SKILLS'
        to='/skills'>
        <MdBuild size={24} />
      </NavButton>
      <NavButton
        title='PROJECTS'
        to='/projects'>
        <MdGavel size={24} />
      </NavButton>
      <NavButton
        title='MILESTONE'
        to='/milestone'>
        <MdDonutLarge size={24} />
      </NavButton>
      <NavButton
        title='RESUME'
        to='/resume'>
        <MdInsertDriveFile size={24} />
      </NavButton>
      <NavButton
        title='CONTACT'
        to='/contact'>
        <MdChatBubble size={24} />
      </NavButton>
      <NavButton
        title='BLOG'
        to='/blog'>
        <MdFace size={24} />
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
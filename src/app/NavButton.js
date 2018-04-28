import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import withStyles from 'material-ui/styles/withStyles';

const NavButton = (props) => {
  const { classes } = props;
  return (
    <Tooltip title={props.title} placement='bottom'>
      <Link
        to={props.to}
        className={classes.navLink}
        activeClassName='nav-selected'>
        <Button classes={{root: classes.navButton}}>
          {props.children}
        </Button>
      </Link>
    </Tooltip>
  );
}

const styles = {
  navLink: {
    display: 'inline-block',
    color: '#444',
    textAlign: 'center',
    width: '80px',
    textDecoration: 'none',
    '&.nav-selected': {
      backgroundColor: '#32c8de'
    }
  },
  navButton: {
    display: 'block',
    width: '50px',
    height: '50px',
    lineHeight: 'initial',
    borderRadius: '100%',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.1)',
    textAlign: 'center',
    padding: 'inherit',
    minWidth: '50px',
    margin: '0px auto',
    marginBottom: '5px',
    fontSize: '18px',
    color: '#aaa',
    background: '#fff',
    WebkitTransition: 'all 0.5s ease',
    MozTransition: 'all 0.5s ease',
    OTransition: 'all 0.5s ease',
    transition: 'all 0.5s ease',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#32c8de'
    }
  }
}

export default withStyles(styles)(NavButton);
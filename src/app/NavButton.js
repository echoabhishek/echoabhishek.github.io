import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import withStyles from 'material-ui/styles/withStyles';

const styles = {
    navlink: {
        display: 'inline-block',
        color: '#444',
        textAlign: 'center',
        width: '80px',
        textDecoration: 'none'
    },
    navbutton: {
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
        transition: 'all 0.5s ease'
    }
}

const NavButton = (props) => {
    const { classes } = props;
    return (
        <Tooltip title={props.title} placement='bottom'>
            <Link className={classes.navlink} to={props.to}>
                <Button className={classes.navbutton}>
                    {props.children}
                </Button>
            </Link>
        </Tooltip>
    );
}

export default withStyles(styles)(NavButton);
import React from 'react';
import withStyles from 'material-ui/styles/withStyles';

const styles = {
  divStyle: {
    maxWidth: '650px',
    margin: '30px auto',
    padding: '15px 20px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '2px 2px 0px 1px rgba(0,0,0,0.06)'
  },
  heading: {
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: '400'
  },
  divider: {
    margin: '10px 0px',
    padding: '0px',
    borderTop: '0px',
    borderBottom: '1px solid #eee'
  }
}

const ContentWrapper = (props) => {
  const { classes } = props;
  return (
    <div className={classes.divStyle}>
      <h3 className={classes.heading}><b>{props.title}</b></h3>
      <hr className={classes.divider} />
      {props.children}
    </div>
  );
}

export default withStyles(styles)(ContentWrapper);

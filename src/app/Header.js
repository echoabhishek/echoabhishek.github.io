import React from 'react';
import '../static/css/HeaderStyle.css';
import profilePicture from '../static/TwinkleKaAvi.jpg';
// import { withStyles } from 'material-ui/styles';

const headingStyle = {
  h3: {
    color: '#fff',
    fontSize: '40px',
    lineHeight: '60px',
    fontWeight: '300',
    // WebkitMarginBefore: '0em',
    // WebkitMarginAfter: '0em'
  },
  h4: {
    color: '#fff',
    fontSize: '18px',
    lineHeight: '38px',
    fontWeight: '400'
  }
};

const divStyle = {
  headerContainer: {
    color: 'white',
    textAlign: 'center',
    padding: '30px 0px',
    position: 'relative',
    borderBottom: '2px solid #fff',
    backgroundColor: '#32c8de',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.1)'
  },
  detailsContainer: {
    margin: '0px 0px 74px'
  },
  profileContainer: {
    width: '100%',
    position: 'absolute',
    bottom: '-67px',
    zIndex: '10'
  },
  profileImage: {
    width: '190px',
    borderRadius: '100%',
    margin: '-20px auto',
    border: '4px solid #fff',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.1)'
  }
};

const Header = (props) => (
  <div style={divStyle.headerContainer}>
    <div style={divStyle.detailsContainer}>
      <h3 style={headingStyle.h3}><b>Abhishek Arora</b></h3>
      <h4 style={headingStyle.h4}>Give wings to your #DREAMS</h4>
    </div>
    <div style={divStyle.profileContainer}>
      <img src={profilePicture} alt='ABHISHEK_ARORA' style={divStyle.profileImage} />
    </div>
  </div>
);

export default Header;

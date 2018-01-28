import React from 'react';

const divStyle = {
    maxWidth: '650px',
    margin: '30px auto',
    padding: '15px 20px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '2px 2px 0px 1px rgba(0,0,0,0.06)'
}

const ContentWrapper = (props) => (
    <div style={divStyle}>
        <h3>{props.title}</h3>
        <hr />
        {props.children}
    </div>
);

export default ContentWrapper;

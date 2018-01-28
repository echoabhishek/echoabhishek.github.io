import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import IconLabelButtons from './IconLabelButtons';

export const WrappedLink = (props) => (
    <IconLabelButtons>
        <Link to={props.to} style={{display: 'block', height: '100%'}} />
    </IconLabelButtons>
);

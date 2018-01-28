import React from 'react';
import Header from './Header';
import Content from './Content';
import withRoot from '../withRoot';

const App = () => (
    <div>
        <Header />
        <Content />
    </div>
);
  
export default withRoot(App);
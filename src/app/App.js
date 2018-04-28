import React from 'react';
import Header from './Header';
import Content from './Content';
import withRoot from '../withRoot';
import '../www/main.css';

const App = () => (
  <div>
    <Header />
    <Content />
  </div>
);

export default withRoot(App);
import React from 'react';
import PropTypes from 'prop-types';

import '../assets/stylesheets/base.scss';

import { Button, Rotate, Input } from 'component-lib';
// const App = ({ name }) => {\
class App extends React.Component{
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <Button bgColor="orange">click me112</Button>
        <Rotate>&lt; 💅 ">">">">">&gt;</Rotate>
        <Input type="textarea" />
      </div>
    );
  }
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;

import React from 'react';
import MyAppBar from './components/header/MyAppBar';
import MyStepper from './components/content/MyStepper';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyAppBar/>
        <MyStepper/>
      </div>
    );
  }
}

export default App;

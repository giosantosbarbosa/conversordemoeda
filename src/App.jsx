import React from 'react';
import './assets/styles/App.css';
import { Navbar } from './assets/components/Navbar/Navbar';
import Conversor from './assets/components/Conversor/Conversor';


class App extends React.Component {
  render () {    
  return (
    
    <div>
        <Navbar />
        <Conversor />
    </div>

  );
};
}


export default App;

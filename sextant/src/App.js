
import './App.css';
import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';


function App() {
  return (
    <div className="App">
        <Banner />
        <Exhibit >
            <p>Sample Content</p>
        </Exhibit>
    </div>
  );
}

export default App;


import './App.css';
import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPAddress from './components/IPaddress';
import LatencyMeter from './components/LatencyMeter';
import {render} from "react-dom";

function App() {

  return (
      <div className="App">
          <Banner/>
          <Exhibit>
            <br/>
            <IPAddress/>
            <br/>
            <LatencyMeter/>
          </Exhibit>
      </div>
  );
}

export default App;

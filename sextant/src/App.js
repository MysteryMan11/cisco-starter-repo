
import './App.css';
import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPAddress from './components/IPaddress';
import LatencyMeter from './components/LatencyMeter';

function App() {

  return (
      <div className="App">
          <Banner/>
          <Exhibit/>
          <IPAddress/>
          <LatencyMeter/>
      </div>
  );
}

export default App;

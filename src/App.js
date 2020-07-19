import React from 'react';

import Header from './components/Header'
import Banner from './components/Banner'
import Bar from './components/Bar'
import Wrapper from './components/Wrapper'

import './global.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Bar />
      <Wrapper />
    </div>
  );
}

export default App;

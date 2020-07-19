import React from 'react';
import './styles.css'

import Profile from '../Profile'
import Timeline from '../Timeline'
import Widgets from '../Widgets'

function Wrapper() {
  return (
    <div className="Wrapper-content content">
      <Profile />
      <Timeline />
      <Widgets />
    </div>

  );
}

export default Wrapper;
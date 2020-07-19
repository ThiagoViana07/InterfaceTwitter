import React from 'react';
import './styles.css'

import More from '../../images/more.svg'

function Bar() {
  return (
    <div className="Container-Bar">
      <div className="content">
        <ul>
          <li className="active">
            <span>Tweets</span>
            <strong>1234</strong>
          </li>
          <li>
            <span>Followinfs</span>
            <strong>654</strong>
          </li>
          <li>
            <span>Followers</span>
            <strong>84</strong>
          </li>
          <li>
            <span>Favorites</span>
            <strong>98</strong>
          </li>
        </ul>

        <div className="actions">
          <button>Follow</button>
          <img src={More} alt="More" />
        </div>

      </div>
    </div>

  );
}

export default Bar;
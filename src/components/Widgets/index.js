import React from 'react';
import './styles.css'

import Avatar from '../../images/avatar.png'


function Widgets() {
  return (
    <aside className="widgets">
      <div className="widget follow">
        <div className="title">
          <strong>Who to follow</strong>
          <a href="">Refresh</a>
          <a href="">View all</a>

        </div>

        <ul>
          <li>
            <div className="profile">
              <img src={Avatar} alt="Avatar" />
              <div className="info">
                <strong>Spade <span>@aspade_be</span></strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="">x</a>
          </li>
          <li>
            <div className="profile">
              <img src={Avatar} alt="Avatar" />
              <div className="info">
                <strong>Spade <span>@aspade_be</span></strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="">x</a>
          </li>
          <li>
            <div className="profile">
              <img src={Avatar} alt="Avatar" />
              <div className="info">
                <strong>Spade <span>@aspade_be</span></strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="">x</a>
          </li>
        </ul>

      </div>
    </aside>

  );
}

export default Widgets;
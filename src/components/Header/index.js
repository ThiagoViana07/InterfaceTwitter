import React from 'react';

import imgHome from "../../images/home.svg"
import imgNotification from "../../images/notification.svg"
import imgMessage from "../../images/message.svg"
import imgLogo from "../../images/logo.svg"
import imgAvatar from '../../images/avatar.png'

import './styles.css'

function Header() {
  return (
    <div className="Container">
      <header id="main-header">
        <div className="content">
          <nav>
            <ul>
              <li><img src={imgHome} alt />Home</li>
              <li><img src={imgNotification} alt="Notification" />Notifications</li>
              <li><img src={imgMessage} alt="Message" />Messages</li>
            </ul>
          </nav>
          <img src={imgLogo} alt="Logo Twitter" />
          <div className="side">
            <input type="text" placeholder="Seach on Twitter" />
            <img src={imgAvatar} alt="" />
            <button>Tweet</button>
          </div>
        </div>
      </header>
    </div>

  );
}

export default Header;
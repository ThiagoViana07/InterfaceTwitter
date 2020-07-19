import React from 'react';
import './styles.css'

import Avatar from '../../images/avatar.png'

import Place from '../../images/place.svg'
import URL from '../../images/url.svg'
import Joined from '../../images/joined.svg'
import Born from '../../images/born.svg'

import Followers from '../../images/followers.svg'
import Images from '../../images/images.svg'


function Profile() {
  return (
    <aside className="profile">
      <img className="avatar" src={Avatar} alt="Avatar" />
      <h1>Thiago Viana</h1>
      <span>@Exibit</span>
      <p>Web, Design e Rock 'n roll Partner/UI Designer @spade_be Musician in @dashboxmusic</p>
      <ul className="list">
        <li><img src={Place} alt="Place" /> Namur, Belgium</li>
        <li><img src={URL} alt="URL" /> exibit.be</li>
        <li><img src={Joined} alt="Joined" /> Joined June 2007</li>
        <li><img src={Born} alt="Born" /> Born the 20th of June 1978</li>
      </ul>

      <div className="widget followers">
        <strong><img src={Followers} alt="Followers" /> 73 followers taht you know</strong>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="widget images">
        <strong><img src={Images} alt="Images" /> 266 Photos and videos</strong>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>
      </div>
    </aside>

  );
}

export default Profile;
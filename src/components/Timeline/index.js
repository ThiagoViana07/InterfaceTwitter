import React from 'react';
import './styles.css'

import Avatar from '../../images/avatar.png'
import Comments from '../../images/comments.svg'
import Retweet from '../../images/retweet.svg'
import Like from '../../images/like.svg'


function Timeline() {
  return (
    <section className="timeline">
      <nav>
        <a className="active" href="">Tweets</a>
        <a href="">Tweets and replies</a>
        <a href="">Medias</a>
      </nav>

      <ul className='tweets'>
        <li>
          <img src={Avatar} alt="" />
          <div className="info">
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>Como pode um peixe vivo viver fora da água fria, como pode um peixe vivo viver fora da água fria</p>
            <div className="actions">
              <a href=""><img src={Comments} alt="Comments" />3</a>
              <a href=""><img src={Retweet} alt="Retweet" />5</a>
              <a href=""><img src={Like} alt="Like" />4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={Avatar} alt="" />
          <div className="info">
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>Como pode um peixe vivo viver fora da água fria, como pode um peixe vivo viver fora da água fria</p>
            <div className="actions">
              <a href=""><img src={Comments} alt="Comments" />3</a>
              <a href=""><img src={Retweet} alt="Retweet" />5</a>
              <a href=""><img src={Like} alt="Like" />4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={Avatar} alt="" />
          <div className="info">
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>Como pode um peixe vivo viver fora da água fria, como pode um peixe vivo viver fora da água fria</p>
            <div className="actions">
              <a href=""><img src={Comments} alt="Comments" />3</a>
              <a href=""><img src={Retweet} alt="Retweet" />5</a>
              <a href=""><img src={Like} alt="Like" />4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={Avatar} alt="" />
          <div className="info">
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>Como pode um peixe vivo viver fora da água fria, como pode um peixe vivo viver fora da água fria</p>
            <div className="actions">
              <a href=""><img src={Comments} alt="Comments" />3</a>
              <a href=""><img src={Retweet} alt="Retweet" />5</a>
              <a href=""><img src={Like} alt="Like" />4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={Avatar} alt="" />
          <div className="info">
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>Como pode um peixe vivo viver fora da água fria, como pode um peixe vivo viver fora da água fria</p>
            <div className="actions">
              <a href=""><img src={Comments} alt="Comments" />3</a>
              <a href=""><img src={Retweet} alt="Retweet" />5</a>
              <a href=""><img src={Like} alt="Like" />4</a>
            </div>
          </div>
        </li>
        <li>
          <img src={Avatar} alt="" />
          <div className="info">
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>Como pode um peixe vivo viver fora da água fria, como pode um peixe vivo viver fora da água fria</p>
            <div className="actions">
              <a href=""><img src={Comments} alt="Comments" />3</a>
              <a href=""><img src={Retweet} alt="Retweet" />5</a>
              <a href=""><img src={Like} alt="Like" />4</a>
            </div>
          </div>
        </li>
      </ul>
    </section>

  );
}

export default Timeline;
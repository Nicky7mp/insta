// import React, {Component} from 'react';
import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
      <div className="card">

        <div className="cardHeader">
          <div id="profileButton">
              <div>
                <img id="profileIcon" src={props.profileIcon} alt="Profile Icon"/>
              </div>
              <div id="profileName">
                <h5>{props.profileName}</h5>
              </div>
          </div>

          <div id="icon">
            <button><i className="fas fa-ellipsis-h"></i></button>
          </div>
        </div>


        <div>
          <img id="mainImage" src={props.mainImage} alt="mainImage" />
        </div>


        <div id="likecommentshare">
            <div id="likeicon">
            <button><i className="far fa-heart"></i></button>
            </div>
            <div id="commenticon">
            <button><i className="far fa-comment"></i></button>
            </div>
            <div id="shareicon">
            <button><i className="fas fa-share-square"></i></button>
            </div>
            <div id="bookmark">
            <button><i className="far fa-bookmark"></i></button>
            </div>
        </div>

        <div id="numlikes">
          <h5>{props.likes} likes</h5>
        </div>

        <div id="comments">
          <p> <span>Liverpool FC </span>BOSS immy!!!</p>
        </div>

        <div id="commentbox">
          <div id="typeSection">
            <input type = "text" placeholder="Add a comment..."/>
          </div>
          <div id="postButton">
            <button><h3>Post</h3></button>
          </div>
        </div>

      </div>
    )
}

export default Card;


import React from 'react';
import Logo from "./images/Liverpool_FC.png"

// function Card() {
//   return (
//     <div className="App">
//     <Feed/>
//     </div>
//   );
// }
class Card extends React.Component{
  render(){
    return(
      <div className="card1">
        <div className="profilename" id="userid">
            <h1><img src={Logo} height="30px" width="30px"/> Liverpool FC</h1>
              <div id="icon">
              <button><i class="fas fa-ellipsis-h"></i></button>
              </div>
        </div>

        <div>
          <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/190809204036-liverpool-win-large-169.jpg" width="410px"/>
        </div>

        <div id="likecommentshare">
            <div id="likeicon">
            <button><i class="far fa-heart"></i></button>
            </div>
            <div id="commenticon">
            <button><i class="far fa-comment"></i></button>
            </div>
            <div id="shareicon">
            <button><i class="fas fa-share-square"></i></button>
            </div>
            <div id="bookmark">
            <button><i class="far fa-bookmark"></i></button>
            </div>
        </div>

        <div id="numlikes">
          <h5>214,356 likes</h5>
        </div>
        <div id="caption">
          <p> <span>Liverpool FC </span>BOSS immy!!!</p>
        </div>
        <div>
          <input id="commentbox" type = "text" placeholder="Add a comment..."/>
        </div>

      </div>
    )
  }
}
export default Card;
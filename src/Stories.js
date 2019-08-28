import React, {Component} from 'react';
import Profile from './Profiles';
import './Stories.css'


class Stories extends Component {
    render() {
      return (
        <div className="storiesBox">
            <div id="storiesBoxHeader">
                <div id="storiesHead">
                    <h3>Stories</h3>
                </div>
                <div>
                    <button id="watchAllButton"><h3>Watch All</h3></button>
                </div>
            </div>
            <div id="profileList">
                <div>
                    <button>
                    <Profile profilePic="https://www.trickscity.com/wp-content/uploads/2017/09/cute-profile-pics-for-whatsapp-images.png" profileName="xxx_panda_girl_xxx" timeStamp="1 day ago"/>
                    </button>
                </div>
                <div>
                    <button>
                    <Profile profilePic="https://recipes.timesofindia.com/thumb/61589069.cms?imgsize=788682&width=800&height=800" profileName="the.colonel" timeStamp="1 day ago"/>
                    </button>
                </div>
                <div>
                    <button>
                    <Profile profilePic="https://sophosnews.files.wordpress.com/2014/04/anonymous-250.jpg?w=250" profileName="anonymous" timeStamp="2 days ago"/>
                    </button>
                </div>
                <div>
                    <button>
                    <Profile profilePic="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg" profileName="lucky" timeStamp="3 days ago"/>
                    </button>
                </div>
            </div>
        </div>
      )
    }
}


export default Stories;
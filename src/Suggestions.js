import React, {Component} from 'react';
import Profile from './Profiles';
import './Suggestions.css'

class Suggestions extends Component {
    render() {
      return (
        <div className="storiesBox">
            <div id="storiesBoxHeader">
                <div id="storiesHead">
                    <h3>Suggestions For You</h3>
                </div>
                <div>
                    <button id="watchAllButton"><h3>See All</h3></button>
                </div>
            </div>
            <div id="profileList">
                <div>
                    <button>
                    <Profile profilePic="https://i.pinimg.com/originals/d8/cc/b2/d8ccb2805d33a59e05142ae1bd53d657.jpg" profileName="a_better_team" timeStamp="Popular"/>
                    </button>
                </div>
                <div>
                    <button>
                    <Profile profilePic="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3949/s200/code-20nation-20logo.png" profileName="code_nation" timeStamp="Popular"/>
                    </button>
                </div>
                <div>
                    <button>
                    <Profile profilePic="https://www.thesun.co.uk/wp-content/uploads/2018/11/cat-2.png" profileName="wilfred" timeStamp="Popular"/>
                    </button>
                </div>
                <div>
                    <button>
                    <Profile profilePic="https://d2ykdu8745rm9t.cloudfront.net/cover/i/000/987/292/66785.original-9293.jpg?rect=0,87,555,555&q=98&fm=jpg&fit=max" profileName="renaissance_memes" timeStamp="Popular"/>
                    </button>
                </div>
            </div>
        </div>
      )
    }
}

export default Suggestions;
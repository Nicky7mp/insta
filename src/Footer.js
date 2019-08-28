import React from 'react';
import './Footer.css';

class Footer extends React.Component {

   render(){
       return(
       <div className = "footerButtons">
           <div className="childDiv">



               <button id = "about">About us</button>

               <button id = "support"><i>Support</i></button>

               <button id = "press"><i>Press</i></button>

               <button id = "API"><i>API</i></button>

               <button id = "jobs"><i>Jobs</i></button>

               <button id = "privacy"><i>Privacy</i></button>

               <button id = "terms"><i>Terms</i></button>

               <button id = "directory"><i>Directory</i></button>

               <button id = "profiles"><i>Profiles</i></button>

               <button id = "hashtags"><i>Hashtags</i></button>

               <button id = "language"><i>LANGUAGE</i></button>
           </div>
      </div>

   );
}
}
export default Footer;
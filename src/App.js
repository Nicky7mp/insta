import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Stories from './Stories';
import Feed from './Feed';
import Footer from './Footer';
import Suggestions from './Suggestions';


function App() {
  return (
    <div className="entirePage">
      <div className="topNav">
          <Navbar />
      </div>
      <div className="mainBody">
        <div className="feed">
          <Feed />
        </div>
        <div className="sideBar">
          <div>
            <Stories />
          </div>
          <div>
            <Suggestions />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}


export default App;

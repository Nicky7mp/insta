import React, {Component} from 'react';
import Card from './Card';
import './Card.css'


class Feed extends Component {
  render () {
    return (
      <div className="feedScroll">
          <Card profileIcon="https://cdn.shopify.com/s/files/1/1888/7339/files/Liverpool_07_grande.jpg?v=1498035804" profileName="liverpool_fc"
            mainImage="https://cdn.cnn.com/cnnnext/dam/assets/190809204036-liverpool-win-large-169.jpg"
            likes="214,356"/>
          <Card profileIcon="https://i.pinimg.com/originals/6a/fc/72/6afc727564ba3b8f178c6bba88b40a6a.jpg" profileName="fluffiest_dogs"
            mainImage="https://static.boredpanda.com/blog/wp-content/uploads/2018/04/Meet-Goma-the-rat-eared-dog-that-is-conquering-the-internet-5ac5d203c9f51__700.jpg"
            likes="1,474,264"/>
          <Card profileIcon="https://pbs.twimg.com/profile_images/1112813227535187970/JGVoKp7n_400x400.png" profileName="whatisabritneyspears"
            mainImage="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-gettyimages-76095549-1515165427.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*"
            likes="12,456"
          />
      </div>
    )
  }
}

export default Feed;

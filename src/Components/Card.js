import React, { Component } from 'react';
import '../css/styles.scss';


class Card extends Component {
    render() {




        return (

            <div className="github-profile">
                <img className="avatar" src="" alt="userImage" />
                <div className="info">
                    <div className="name">Name:</div>
                    <div className="company">Company:</div>
                    <div className="location">Country:</div>
                </div>
            </div>

        )



    }
}

export default Card;
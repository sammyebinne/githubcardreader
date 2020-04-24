import React, { Component } from 'react';
import '../css/styles.scss';


class Card extends Component {
    render() {

        const profile = this.props;

        return (

            <div className="github-profile">
                <img className="avatar" src={profile.avatar_url} alt="" />
                <div className="info">
                    <div className="name">
                        <strong>
                            Name:
                        </strong>{profile.name}
                    </div>
                    <div className="company">
                        <strong>
                            Company:
                        </strong>{profile.company}
                    </div>
                    <div className="location">
                        <strong>
                            Location: 
                        </strong>{profile.location}
                    </div>
                </div>
            </div>

        )



    }
}

export default Card;
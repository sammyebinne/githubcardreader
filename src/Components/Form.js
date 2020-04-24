import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = async (event) => {

        event.preventDefault();

        const resp = await axios.get(
            `https://api.github.com/users/${this.state.userName}`
        );

        this.props.onFetchInfo(resp.data);
        this.setState({ userName: '' });
    }

    render() {

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="enter username"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    required
                />
                <button>ADD</button>
            </form>
        )
    }

}

export default Form;
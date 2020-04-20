import React, { Component } from 'react';

class Form extends Component {

    render() {

        return (
            <form className="form">
                <input type="text"
                    placeholder="enter username"
                    required
                />
                <button>ADD</button>
            </form>
        )
    }

}

export default Form;
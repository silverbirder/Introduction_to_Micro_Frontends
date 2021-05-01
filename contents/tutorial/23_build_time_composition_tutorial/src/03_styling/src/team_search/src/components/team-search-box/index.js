import React, { Component } from 'react';
import './index.css';

export default class TeamSearchBox extends Component {
    render() {
        return (
            <div>
                <input placeholder="Please enter keywords ..."></input><button>🔍</button>
            </div>
        );
    }
}

import React, { Component } from 'react';
import './index.css';

export default class TeamSearchBox extends Component {
    render() {
        return (
            <div>
                <input class="team-search-box-input" placeholder="Please enter keywords ..."></input><button class="team-search-box-button">🔍</button>
            </div>
        );
    }
}

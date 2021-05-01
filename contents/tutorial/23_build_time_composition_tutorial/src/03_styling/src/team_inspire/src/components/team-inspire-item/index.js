import React, { Component } from 'react';
import './index.css';

export default class TeamInspireItem extends Component {
    render() {
        return (
            <div class="team-inspire-item">
                {this.props.name}
            </div>
        );
    }
}

import React, { Component } from 'react';
import './index.css';

export default class TeamProductItem extends Component {
    render() {
        return (
            <div class="item">
                {this.props.name}
            </div>
        );
    }
}

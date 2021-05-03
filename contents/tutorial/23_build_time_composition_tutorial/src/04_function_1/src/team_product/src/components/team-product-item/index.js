import React, { Component } from 'react';
import './index.css';

export default class TeamProductItem extends Component {
    render() {
        return (
            <div class="team-product-item">
                {this.props.name}
            </div>
        );
    }
}

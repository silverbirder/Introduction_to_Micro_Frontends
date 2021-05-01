import React, { Component } from 'react';
import TeamProductItem from '../team-product-item/index';

export default class TeamProductList extends Component {
    render() {
        return (
            <div>
                {this.props.items.map((item) => {
                    return <TeamProductItem name={item} class="item"></TeamProductItem>;
                })}
            </div>
        );
    }
}

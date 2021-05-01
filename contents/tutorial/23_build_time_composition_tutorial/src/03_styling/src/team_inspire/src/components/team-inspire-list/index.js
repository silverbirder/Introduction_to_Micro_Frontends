import React, { Component } from 'react';
import TeamInspireItem from '../team-inspire-item/index';

export default class TeamInspireList extends Component {
    render() {
        return (
            <div>
            {this.props.items.map((item) => {
                return <TeamInspireItem name={item} class="item"></TeamInspireItem>;
            })}
        </div>
        );
    }
}

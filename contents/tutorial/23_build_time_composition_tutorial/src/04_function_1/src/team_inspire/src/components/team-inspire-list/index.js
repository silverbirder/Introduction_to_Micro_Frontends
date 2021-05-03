import React, { Component } from 'react';
import TeamInspireItem from '../team-inspire-item/index';

const recommendItems = {
    apple: ['apple pie'], 
    banana: ['banana juice'], 
    grapes: ['grape mousse'], 
    mango: ['mango ice'], 
    orange: ['orange cake']
}
export default class TeamInspireList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items.map((item) => recommendItems[item]).flat()
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.items.join('') === prevProps.items.join('')) {
            return;
        }
        this.setState({
            items: this.props.items.map((item) => recommendItems[item]).flat()
        })
    }
    render() {
        return (
            <div>
            {this.state.items.map((item) => {
                return <TeamInspireItem key={item} name={item} className="item"></TeamInspireItem>;
            })}
        </div>
        );
    }
}

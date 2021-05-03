import React, { Component } from 'react';
import './index.css';

const items = ['apple', 'banana', 'grapes', 'mango', 'orange'];
export default class TeamSearchBox extends Component {
    constructor(props) {
        super(props);
        this.inputValue = '';
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const filterItems = (arr, query) => {
            return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        }
        document.querySelector('.team-search-box-button').dispatchEvent(
            new CustomEvent('submit', {
                detail: {
                    items: filterItems(items, this.inputValue) 
                }
            })
        )
    }
    render() {
        return (
            <div>
                <input onChange={(e) => this.inputValue = e.target.value} className="team-search-box-input" placeholder="Please enter keywords ..."></input>
                <button className="team-search-box-button" onClick={this.handleClick}>
                    <span role="img" aria-label="search button">🔍</span>
                </button>
            </div>
        );
    }
}

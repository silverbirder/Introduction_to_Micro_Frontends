import TeamSearchBox from '@bit/silver-birder.micro-frontends-sample-collections.team-search-box'
import TeamInspireLabel from '@bit/silver-birder.micro-frontends-sample-collections.team-inspire-label'
import TeamInspireList from '@bit/silver-birder.micro-frontends-sample-collections.team-inspire-list'
import TeamProductList from '@bit/silver-birder.micro-frontends-sample-collections.team-product-list'
import './App.css'
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productItems: ['apple', 'banana', 'grapes', 'mango', 'orange'],
      inspireItems: ['apple', 'banana', 'grapes', 'mango', 'orange']
    }
  }
  componentDidMount() {
    document.querySelector('.team-search-box-button').addEventListener('submit', this.handleSubmit.bind(this))
  }
  handleSubmit(e) {
    this.setState({
      productItems: e.detail.items, 
      inspireItems: e.detail.items,
    });
  }
  render() {
    return (
      <div className="wrapper">
          <div className="team-search-box">
            <TeamSearchBox/>
          </div>
          <div className="team-product-list">
            <TeamProductList items={this.state.productItems}/>
          </div>
          <div className="team-inspire-list">
            <TeamInspireLabel/>
            <TeamInspireList items={this.state.inspireItems}/>
          </div>
      </div>
    );
  }
}
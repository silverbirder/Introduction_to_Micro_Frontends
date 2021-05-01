import TeamSearchBox from '@bit/silver-birder.micro-frontends-sample-collections.team-search-box'
import TeamInspireLabel from '@bit/silver-birder.micro-frontends-sample-collections.team-inspire-label'
import TeamInspireList from '@bit/silver-birder.micro-frontends-sample-collections.team-inspire-list'
import TeamProductList from '@bit/silver-birder.micro-frontends-sample-collections.team-product-list'
import './App.css'

function App() {
  return (
    <div class="wrapper">
        <div class="team-search-box">
          <TeamSearchBox/>
        </div>
        <div class="team-product-list">
          <TeamProductList items={["Product 1", "Product 2", "Product 3"]}/>
        </div>
        <div class="team-inspire-list">
          <TeamInspireLabel/>
          <TeamInspireList items={["Product 4", "Product 5", "Product 6"]}/>
        </div>
    </div>
  );
}

export default App;

import React from 'react';
import TeamProductText from './components/team-product-text/index'
import TeamProductList from './components/team-product-list/index'

function App() {
  return (
    <>
      <TeamProductText/>
      <TeamProductList items={["Product 1", "Product 2", "Product 3"]}/>
    </>
  );
}

export default App;

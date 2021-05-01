import React from 'react';
import TeamInspireText from './components/team-inspire-text/index'
import TeamInspireList from './components/team-inspire-list/index'
import TeamInspireLabel from './components/team-inspire-label/index'

function App() {
  return (
    <>
      <TeamInspireText/>
      <TeamInspireLabel/>
      <TeamInspireList items={["Product 1", "Product 2", "Product 3"]}/>
    </>
  );
}

export default App;

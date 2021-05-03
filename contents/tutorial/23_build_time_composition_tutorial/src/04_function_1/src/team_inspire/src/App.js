import React from 'react';
import TeamInspireText from './components/team-inspire-text/index'
import TeamInspireList from './components/team-inspire-list/index'
import TeamInspireLabel from './components/team-inspire-label/index'

function App() {
  return (
    <>
      <TeamInspireText/>
      <TeamInspireLabel/>
      <TeamInspireList items={['apple', 'banana', 'grapes', 'mango', 'orange']}/>
    </>
  );
}

export default App;

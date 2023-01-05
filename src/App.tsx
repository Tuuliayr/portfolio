import React from 'react';
import './App.css';
import MyIntroduction from './components/myIntroduction/MyIntroduction';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <MyIntroduction/>
      <Projects/>
    </div>
  );
}

export default App;

import React from 'react';
import {Hello} from './components/Hello'
import {Counter}from './components/Counter'


function App() {
    return (
    <div className="App">
      <h1>Frontend My Activies Space</h1>
      <Hello name="Luiz"/>
      <Hello name="joaovitor"/>
      <Counter />
      <Counter />
      
      

      </div>
    );
}

export default App;

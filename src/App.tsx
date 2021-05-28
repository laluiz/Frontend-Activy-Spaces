import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import {Hello} from './components/Hello';
import {Counter}from './components/Counter';
import {Teste} from './pages/Teste';
import  GlobalStyle  from './styles/global';
import Routes from './routes';

function App() {
    return (
    <Router>
      <Routes />
      <Hello name="Luiz"/>
      <Hello name="joaovitor"/>
      <Counter />
      <Counter />
      <Teste />
      <GlobalStyle />
      
    
      </Router>
    );
}

export default App;

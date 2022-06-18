import React from 'react';
import { HeaderApp } from './HeaderApp'  
import { ContentApp } from './ContentApp' 
import { FooterApp } from './FooterApp' 
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <HeaderApp/>
      </header>
      <section>
        <ContentApp/>
      </section>
      <footer>
        <FooterApp/>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Menu from './Menu';
import Formulaire from './Formulaire';
import Footer from './Footer'

function App() {
    const myStyle={
      width:400,
      heigth:600,

    }

  return (
    <div className="App">
        <Menu />
        <div className='header'>
          <h2 className='photo-header'
            style={myStyle}
          >
            <span className='intro'>Nous sommes à votre disposition pour vous éclairer sur nos projets et nos services.</span>
          </h2>
        </div>
        <div>
          <Formulaire />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;

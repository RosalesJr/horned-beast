import React from 'react';
import '../CSS/App.css';
import Header from '../Components/Header';
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
        
      </div>
    );
  }

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './App.css';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import Acasa from '../Pages/Acasa/Acasa';
import Despre from '../Pages/Despre/Despre';
import Produse from '../Pages/Produse/Produse';
import Contact from '../Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Acasa}/>
          <Route path='/Despre' component={Despre}/>
          <Route path='/Produse' component={Produse}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

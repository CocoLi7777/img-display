import React from 'react';
import { GlobalStyle } from './components/styles/Globalstyle';
import Header from './components/elements/Header';
import Home from './Home';

import './App.css';

const App = () => (
  <div>
    <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;

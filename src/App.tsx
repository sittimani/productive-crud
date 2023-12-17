import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FooterComponent, HeaderComponent, RouterComponent } from './core/components';


function App() {
  return (
    <div className='productive-crud'>
      <RouterComponent></RouterComponent>
      <FooterComponent />
    </div>

  );
}

export default App;

import React from 'react';
import './App.css';
import { Form } from './components/Form/Form';

import image from './assets/images/illustration-sign-up-desktop.svg'
function App() {
  return (
    <div className='flex items-center justify-center h-svh'>
      <div className="flex items-center justify-center bg-white rounded-3xl p-6">
        <Form/>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default App;

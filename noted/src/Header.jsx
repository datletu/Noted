import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppName = 'Noted';
export default function Header() {
    return (
      <>
        <h1 className='welcome'>Welcome to {AppName}</h1>
      </>
    );
  }
  
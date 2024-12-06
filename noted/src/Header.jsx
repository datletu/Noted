import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppName = 'Noted';
export default function Header() {
    return (
      <>
          <h1 className='welcome'>Welcome to {AppName}</h1>
          <div className="badge bg-primary text-wrap" style={{width: "6rem"}}>
              this is an app for taking notes
          </div>
      </>
    );
  }
  
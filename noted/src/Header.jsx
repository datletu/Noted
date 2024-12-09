import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppName = 'Noted';
export default function Header() {
    return (
      <>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid ">
          <a className="navbar-brand d-flex flex-row align-items-center" href="#">
            <img src="/icon.png" style={{ width: '100px', height: '100px' }}/>
              <h1 className='AppName'>{AppName}</h1>
          </a>
          </div>
        </nav>
      </>
    );
  }
  
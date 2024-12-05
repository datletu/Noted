import { createRoot } from 'react-dom/client';
import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.querySelector('#root'));

function Header() {
  return (
    <>
        <h1 className='welcome'>Welcome to Noted</h1>
        <div className="badge bg-primary text-wrap" style={{width: "6rem"}}>
            this is an app for taking notes
        </div>
    </>
  );
}

root.render(<Header />);
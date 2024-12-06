import { createRoot } from 'react-dom/client';
import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const root = createRoot(document.querySelector('#root'));


root.render(<Header />);
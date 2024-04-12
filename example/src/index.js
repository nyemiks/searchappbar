import './index.css'

import React from 'react'
//import ReactDOM from 'react-dom'
import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

// After react 18
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
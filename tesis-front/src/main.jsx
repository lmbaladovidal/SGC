import React from 'react'
import ReactDOM from 'react-dom/client'
import SGC from './SGC'
import './index.css'
import { BrowserRouter as Router }  from 'react-router-dom';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <SGC />
    </React.StrictMode>
  </Router>
)

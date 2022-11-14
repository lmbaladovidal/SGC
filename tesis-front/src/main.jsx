import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClientProvider, QueryClient} from "react-query";
import SGC from './SGC'
import { VisualizadorGeo } from './components/Coordinador'
import './index.css'
import { BrowserRouter as Router }  from 'react-router-dom'; 
const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <SGC />
    </QueryClientProvider>
  </Router>
)

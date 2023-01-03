/**
 * @author: Marek Klofera
 */

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import Navbar from './src/components/shared/Navbar';

//Pages
import Index from "./src/pages/Index"


export default function App(){
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
    </Router>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"));

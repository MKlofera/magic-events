/**
 * @author: Marek Klofera
 */

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import Navbar from './src/components/shared/Navbar';
import Footer from './src/components/shared/Footer';

//Pages
import Index from "./src/pages/Index"
import CoctailBar from './src/pages/CoctailBar';
import EquipmentRent from './src/pages/EquipmentRent';
import NotFound from './src/pages/NotFound';


export default function App(){
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/koktejlovy-bar' element={<CoctailBar/>}/>
        {/* <Route path='/pronajem-vybaveni' element={<EquipmentRent/>}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"));

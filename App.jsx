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
      <h1>funguje to?</h1>
    // <Router>
    //   <Navbar/>
    //   <Routes>
    //       <Route path='/' element={<h1>funguje to?</h1>}/>
    //
    //
    //     {/* <Route path='/pronajem-vybaveni' element={<EquipmentRent/>}/> */}
    //     {/* <Route path='*' element={<NotFound/>}/> */}
    //   </Routes>
    //   <Footer/>
    // </Router>
  )
}
ReactDOM.render(
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>,
    // </BrowserRouter>,
    document.getElementById("root")
);

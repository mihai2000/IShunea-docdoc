import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./main/components/Header";
import Navbar from "./main/pages/home-page/NavbarComponent/Navbar";
import HomePage from "./main/pages/home-page/HomePage";
import AboutPage from "./main/pages/About-page/AboutPage";
import TermeniSiConditii from "./main/pages/TermeniSiConditii/TermeniSiConditii";
import FAQ from "./main/pages/FAQ/FAQ";
import Rating from "./main/pages/Rating/Rating";
import Publicitate from "./main/pages/Publicitate/Publicitate";
import Contacte from "./main/pages/Contacte/Contacte";
import Boli from "./main/pages/Boli/Boli";
import Biblioteca from "./main/pages/Biblioteca/Biblioteca";
import Inregistrare from "./main/pages/Inregistrare/Inregistrare";
import ContulMeu from "./main/pages/ContulMeu/ContulMeu";
import Recovery from "./main/pages/ContulMeu/Recovery";
import Footer from "./main/components/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Routes>
                {/*Routes*/}
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/Despre" element={ <AboutPage/> }/>
                <Route path="/TermeniSiCoditii" element={<TermeniSiConditii/>}/>
                <Route path="/FAQ" element={<FAQ/>}/>
                <Route path="/Rating" element={<Rating/>}/>
                <Route path="/Publicitate" element={<Publicitate/>}/>
                <Route path="/Contacte" element={<Contacte/>}/>
                <Route path="/Boli" element={<Boli/>}/>
                <Route path="/Biblioteca" element={<Biblioteca/>}/>
                <Route path="/ContulMeu" element={<ContulMeu/>}/>
                <Route path="/Inregistrare" element={<Inregistrare/>}/>
                <Route path="/Recovery" element={<Recovery/>}/>
            </Routes>
            <Footer></Footer>
        </div>
  );
}

export default App;

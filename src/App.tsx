import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// header
import Header from "./main/components/Header";
//home page
import HomePage from "./main/pages/home-page/HomePage";
import Navbar from "./main/pages/home-page/NavbarComponent/Navbar";
//footer
import Footer from "./main/components/Footer";
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
import Institutions from "./main/pages/Institutions/Institutions";
// Institutions
import CentreMedicale from "./main/pages/Institutions/CentreMedicale/CentreMedicale";
import CentreDiagnostic from "./main/pages/Institutions/CentreDiagnostic/CentreDiagnostic";
import Laborator from "./main/pages/Institutions/Laborator/Laborator";
import PropsLabs from "./main/pages/Institutions/Laborator/PropsLabs";
import Stomatologii from "./main/pages/Institutions/Stomatologii/Stomatologii";
import MedicinaEstetica from "./main/pages/Institutions/MedicinaEstetica/MedicinaEstetica";
//Doctors
import Doctors from "./main/pages/Doctors/Doctors";
import {Routes, Route, Router} from "react-router-dom";
function App() {
    
  return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {/*<Router location={history.location} navigator={history}>*/}
                <Routes>
                {/*Routes*/}
                <Route path="/" element={ <HomePage/> }/>
                <Route path="Despre" element={ <AboutPage/> }/>
                <Route path="TermeniSiCoditii" element={<TermeniSiConditii/>}/>
                <Route path="FAQ" element={<FAQ/>}/>
                <Route path="Rating" element={<Rating/>}/>
                <Route path="Publicitate" element={<Publicitate/>}/>
                <Route path="Contacte" element={<Contacte/>}/>
                <Route path="Boli" element={<Boli/>}/>
                <Route path="Biblioteca" element={<Biblioteca/>}/>
                <Route path="ContulMeu" element={<ContulMeu/>}/>
                <Route path="Inregistrare" element={<Inregistrare/>}/>
                <Route path="Recovery" element={<Recovery/>}/>
                <Route path="Institutii" element={<Institutions/>}>
                    <Route path=":Center" element={<CentreMedicale/>}/>
                    <Route path=":Diagnostic" element={<CentreDiagnostic/>}/>
                    <Route path=":Laborator" element={<PropsLabs/>}/>
                    <Route path=":Stomatologie" element={<Stomatologii/>}/>
                    <Route path=":Cosmetologie" element={<MedicinaEstetica/>}/>
]                </Route>
                    <Route path="Doctors" element={<Doctors/>}/>
            </Routes>
            {/*</Router>*/}
            <Footer></Footer>
        </div>
  );
}

export default App;

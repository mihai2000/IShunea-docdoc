import React from "react";
import SearchComponent from "./SearchComponent/SearchComponent";
import ProgramareDoctor from "./ProgramareDoctor/ProgramareDoctor";
import Contact from "./Contact/Contact";
import ProgramareServicii from "./ProgramareServicii/ProgramareServicii";
import DocInfo from "./DocInfo/DocInfo";
export default function HomePage(){
    return(
        <div>
            <SearchComponent/>
            <ProgramareDoctor/>
            <Contact/>
            <ProgramareServicii/>
            <DocInfo/>
        </div>
    );
}

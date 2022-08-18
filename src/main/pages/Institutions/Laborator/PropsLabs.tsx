import React from "react";
import Laborator from "./Laborator";
export default function PropsLabs() {
    const obiect =
         [
        {
            title:"AMC Centrul Medical American, Sectorul Botanica",
            address:'Chișinău, str. Independenței, 54',
            text:'American Medical Center este o clinică multidisciplinară, axată pe medicina\n' +
                'personalizată, ce asigură cele mai moderne metode de diagnostic și\n' +
                'tratament. Clinica AMC vine în întâmpinarea pacienților\n' +
                'cu soluții eficiente, adaptate individual pentru orice problemă de sănătate.'
        },
        {
            title:"AMC Centrul Medical American, Sectorul Centru",
            address: 'Chișinău, str. Puskin, 47/1',
            text:'American Medical Center este o clinică multidisciplinară, axată pe medicina\n' +
                'personalizată, ce asigură cele mai moderne metode de diagnostic ș}\n' +
                'tratament. Clinica AMC vine în întâmpinarea pacienților\n' +
                'cu soluții eficiente, adaptate individual pentru orice problemă de sănătate.',
        }
        ];
    return(
        <div>
            {obiect.map(value => (<Laborator title={value.title} address={value.address} text={value.text} ></Laborator>))}
        </div>
    );
}

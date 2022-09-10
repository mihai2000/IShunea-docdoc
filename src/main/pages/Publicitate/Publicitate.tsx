import React from "react";
import './Publicitate.css';
import one from '../../../images/1.png';
import two from '../../../images/2.jpg';
import three from '../../../images/3.jpg';
import 'bootstrap/dist/css/bootstrap.css';


export default function Publicitate() {
    return (
        <div className="Main">
            <div className="container ">
                <div className="row">
                    <div className="header">
                        <h1 className="title">Publicitate online</h1>
                        <h1 className="title">
                            Alege publicitatea directă pe portalul www.docdoc.md
                        </h1>
                    </div>
                    <div className="body">
                        <div className="first-b">
                            <table className="table1">
                                <thead>
                                <tr>
                                    <td> Nr. banner</td>
                                    <td> Denumire banner</td>
                                    <td>Mărime banner</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> 1</td>
                                    <td>Banner branding pepagina principală (pe c&acirc;mpurile din st&acirc;nga și
                                        dreapta)
                                    </td>
                                    <td>300 x 1000 px</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Banner pe pagina principală(fullscreen)</td>
                                    <td>500 x 500 px</td>
                                </tr>
                                </tbody>
                            </table>
                            <img className="ImageRight img1" src={one} alt="banner pe site12"/>
                        </div>
                        <div className="second-b">
                            <div className="two-table">
                                <table className="table2">
                                    <tbody>
                                    <tr>
                                        <td>Denumire bannere
                                        </td>
                                        <td>Mărime bannere
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Banner rubrica "Promoții" pe pagina principală</td>
                                        <td>250 x 250 px</td>
                                    </tr>
                                    <tr>
                                        <td>Banner rubrica "Produse farmaceutice"pe pagina principală</td>
                                        <td>250 x 250 px</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table className="table3">
                                    <thead>
                                    <tr>
                                        <td>Nr. banner
                                        </td>
                                        <td>Denumire banner
                                        </td>
                                        <td>Mărime banner
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td> 3
                                        </td>
                                        <td>Banner vertical pe pagina principală (st&acirc;nga / dreapta)
                                        </td>
                                        <td>530 x 150 px
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4
                                        </td>
                                        <td>Banner pe pagina principală(fullscreen)
                                        </td>
                                        <td>1090 x 200 px
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5
                                        </td>
                                        <td>Banner pe toate paginile (st&acirc;nga, jos)
                                        </td>
                                        <td>300 x 400 px
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <img className="ImageRight img2" src={two} alt="banner pe site123"/>
                        </div>
                        <div className="third-b">
                            <table className="table4">
                                <tbody>
                                <tr>
                                    <td>Nr. banner</td>
                                    <td>Denumire banner
                                    </td>
                                    <td>Mărime banner
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Banner pe pagina "caut doctor" (orizontală)
                                    </td>
                                    <td>780 x 300 px</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Banner pe pagina "caut doctor" (verticală)
                                    </td>
                                    <td>300 x 400 px</td>
                                </tr>
                                </tbody>
                            </table>
                            <img className="ImageRight img3" src={three} alt="banner pe site1234"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

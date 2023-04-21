import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SectionFive from "./Components/SectionFive/SectionFive";
import Options from "./ParceirosComponents/MoreOptions/Options";

import ProductInfo from "./ParceirosComponents/ProductInfo/ProductInfo";

export default function Parceiros(){
   
    return <>
        <Navbar></Navbar>
        <ProductInfo></ProductInfo>
        <SectionFive></SectionFive>
        <Options></Options>
        <Footer></Footer>
    </>
}
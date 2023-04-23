import { useRouter } from "next/router";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SectionFive from "./Components/SectionFive/SectionFive";
import Options from "./ParceirosComponents/MoreOptions/Options";

import ProductInfo from "./ParceirosComponents/ProductInfo/ProductInfo";
import { useAuth } from "@/hooks/AuthProvider";

export default function Parceiros(){   
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    return <>
        <Navbar></Navbar>
        <ProductInfo></ProductInfo>
        <SectionFive></SectionFive>
        <Options></Options>
        <Footer></Footer>
    </>
}
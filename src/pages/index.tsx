import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Newsletter from './Components/Newsletter/Newsletter'
import Parceiros from './Components/Parceiros/Parceiros'
import SectionFive from './Components/SectionFive/SectionFive'
import SectionFour from './Components/SectionFour/SectionFour'
import SectionOne from './Components/SectionOne/SectionOne'
import SectionSeven from './Components/SectionSeven/SectionSeven'
import SectionSix from './Components/SectionSix/SectionSix'
import SectionThree from './Components/SectionThree/SectionThree'
import SectionTwo from './Components/SectionTwo/SectionTwo'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <SectionFive></SectionFive>
      <SectionSix></SectionSix>
      <SectionSeven></SectionSeven>
      <Newsletter></Newsletter>
      <Parceiros></Parceiros>
      <Footer></Footer>
    </>
  )
}

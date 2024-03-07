import Banner from "./Components/Banner/Banner"
import CoffeeMenu from "./Components/CoffeeMenu/CoffeeMenu"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import NewRecipe from "./Components/NewRecipe/NewRecipe"
import Schedule from "./Components/Schedule/Schedule"
import ShowCase from "./Components/ShowCase/ShowCase"
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Schedule></Schedule>
      <WhyChooseUs></WhyChooseUs>
      <CoffeeMenu></CoffeeMenu>
      <NewRecipe></NewRecipe>
      <ShowCase></ShowCase>
      <Footer></Footer>
    </>
  )
}

export default App

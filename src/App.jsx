import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Offer from './components/Offer'
import Pricing from './components/Pricing'
import Services from './components/Services'

const App = () => {
  return (
    <>
    <Header/>
    <AboutUs/>
    <Services/>
    <Offer img={`frenchfriesbg.png`}/>
    <Pricing/>
    </>
  )
}

export default App

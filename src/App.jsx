import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Offer from './components/Offer'
import Services from './components/Services'

const App = () => {
  return (
    <>
    <Header/>
    <AboutUs/>
    <Services/>
    <Offer img={`frenchfriesbg.png`}/>
    </>
  )
}

export default App

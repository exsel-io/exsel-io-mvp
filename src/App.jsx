import './App.css'
import Hero from './components/Hero'
import WaitList from './components/WaitList'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import RoadMap from './components/RoadMap'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <RoadMap/>
      <WaitList/>
      <Footer/>
    </>
  )
}

export default App

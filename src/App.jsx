import './styles/css/reset.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Index from "./pages"
import Explore from "./pages/explore"
import SavedPlan from "./pages/saved-plan"
import Footer from './components/footer'
import SelectSeat from './pages/select-seat'
import Details from './pages/details'
import Settings from './pages/settings'
import Checkout from './pages/checkout'

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="explore" element={<Explore />} />
        <Route path="saved-plan" element={<SavedPlan />} />
        <Route path='select-seat' element={<SelectSeat/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Routes>
    </main>
    <Footer className='footer'/>
    </BrowserRouter>
  )
}

export default App

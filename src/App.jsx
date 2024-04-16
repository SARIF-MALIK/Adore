import './App.css'
import Dashboard from './screens/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inventory from './screens/Inventory'
import ProductDetails from './screens/ProductDetails'

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/inventory/productdetails/' element={<ProductDetails/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

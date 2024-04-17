import './App.css'
import Dashboard from './screens/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inventory from './screens/Inventory'
import ProductDetails from './screens/ProductDetails'
import Reports from './screens/Reports'
import Suppliers from './screens/Suppliers'


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/inventory/productdetails' element={<ProductDetails/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/suppliers' element={<Suppliers/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

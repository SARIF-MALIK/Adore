import './App.css'
import Dashboard from './screens/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inventory from './screens/Inventory'
import ProductDetails from './screens/ProductDetails'
import Reports from './screens/Reports'
import Suppliers from './screens/Suppliers'
import Orders from './screens/Orders'
import ManageBranch from './screens/ManageBranch'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Landing from './screens/Landing'


function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/inventory/productdetails' element={<ProductDetails/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/suppliers' element={<Suppliers/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/branch' element={<ManageBranch/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

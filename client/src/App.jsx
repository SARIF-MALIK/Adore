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
import CategorySeeAll from './screens/components/CategorySeeAll'
import ProductSeeAll from './screens/components/ProductSeeAll'
import SupplierDetails from './screens/components/SupplierDetails'
import Consumers from './screens/Consumers'
import Product from './screens/Product'
import Category from './screens/Category'
import Setting from './screens/Setting'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/product' element={<Product />} />
          <Route exact path='/category' element={<Category />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/consumers' element={<Consumers />} />
          <Route path='/inventory/productdetails' element={<ProductDetails />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/reports/categoryseeall' element={<CategorySeeAll />} />
          <Route path='/reports/productseeall' element={<ProductSeeAll />} />
          <Route path='/suppliers' element={<Suppliers />} />
          <Route path='/supplierDetails/:id' element={<SupplierDetails />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/branch' element={<ManageBranch />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/settings' element={<Setting />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

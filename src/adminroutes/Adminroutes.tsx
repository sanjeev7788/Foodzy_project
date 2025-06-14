import { BrowserRouter,Routes, Route } from "react-router-dom"
import React, { Suspense } from "react"
import { Box } from "@mui/system"

const RestaurantManagement=React.lazy(()=>import('../adminflow/RestaurantManagement'))
const OrderManagement=React.lazy(()=>import('../adminflow/OrderManagement'))
const UserManagement=React.lazy(()=>import('../adminflow/UserManagement'))
const DiscountandPromo=React.lazy(()=>import('../adminflow/DiscountandPromo'))
const ConfigurationSettings=React.lazy(()=>import('../adminflow/ConfigurationSettings'))
const AdminLayout=React.lazy(()=>import('../adminflow/AdminLayout'))
const Dashboard=React.lazy(()=>import('../adminflow/Dashboard'))
const RestuarentDetails=React.lazy(()=>import('../adminflow/RestuarentDetails'))
const OrderandBills=React.lazy(()=>import('../adminflow/OrderandBills'))

const Adminroutes = () => {
  return (
  <BrowserRouter>
  <Suspense fallback={<Box>Loading...</Box>}>
  <Routes>
    <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />}/>
    <Route path="dashboard" element={<Dashboard />}/>
    <Route path="restaurant-management" element={<RestaurantManagement />}/>
    <Route path="restaurant-management/pending-request" element={<RestaurantManagement/>}/>
    <Route path="restaurant-management/suspend-account" element={<RestaurantManagement/>}/>
    <Route path="restaurant-management/restaurant-details" element={<RestuarentDetails/>}/> 
    <Route path="order-management" element={<OrderManagement />}/>
    <Route path="order-management/order-bills" element={<OrderandBills />}/>
    <Route path="user-management" element={<UserManagement />}/>
    <Route path="discount" element={<DiscountandPromo />}/>
    <Route path="configsetting" element={<ConfigurationSettings />}/>
 </Route>
</Routes>
</Suspense>
  </BrowserRouter>
  )
}

export default Adminroutes

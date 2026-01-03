import { BrowserRouter,Routes } from 'react-router-dom';
import Login  from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard"
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import UpdateRestaurant from "./pages/admin/UpdateRestaurant";
import AuthProvider from "./auth/AuthContext";
import ProtectedRoute from './auth/ProtectedRoute'; 



function App() {
   return(
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/admin/dashboard' element={
        <ProtectedRoute role="admin">
          <AdminDashboard/>
        </ProtectedRoute>
      }/>
      <Route path='/admin/restaurants/update/:id' element={
        <ProtectedRoute role="admin">
          <UpdateRestaurant/>
        </ProtectedRoute>
      }/>
      <Route path='/customer/dashboard' element={
        <ProtectedRoute role="customer">
          <CustomerDashboard/>
        </ProtectedRoute>
      }/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
   );
}
export default App;
import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';

import Footer from './Shared/Footer';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import Test from './Pages/Home/Test';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import SignUp from './SignUp/SignUp';
function App() {
  return (
    <div className="">
     <Navbar></Navbar>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            {/* <Route path='/purchase/:id' element={<RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>}></Route> */}
            <Route path="/buyNow/:id" element={<RequireAuth>
             <Purchase></Purchase>
            </RequireAuth>}>

            </Route>
            <Route path="/dashboard" element={<RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>}>
              <Route index element={<MyOrder></MyOrder>}></Route>
              <Route path='/dashboard/myProfile' element={<MyProfile></MyProfile>}></Route>
              <Route path='/dashboard/addReview' element={<AddReview></AddReview>}></Route>
            </Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

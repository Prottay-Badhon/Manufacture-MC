import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';

import Footer from './Shared/Footer';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Purchase from './Pages/Purchase/Purchase';
function App() {
  return (
    <div className="">
     <Navbar></Navbar>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/purchase' element={<Purchase></Purchase>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

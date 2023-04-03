import React from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import {Link, useNavigate} from 'react-router-dom'
import auth from '../firebase.init';
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, loading1, error1] = useSignOut(auth);
  const navigate = useNavigate();

  const signOutHandler=async()=>{
    const success = await signOut(auth);
      if(success){
          navigate("/")
      }
  }
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          {
          user?.email || user?.displayName? <li><Link onClick={signOutHandler}>logout</Link></li>:<li><Link to="/login">Login</Link></li>

          }
          {
           ( user?.email) &&  <li><Link to="/dashboard">Dashboard</Link></li>
          }
          {
            !user?.email && <li><Link to="/signUp">SignUp</Link></li>
          }
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl" href='/'>Manufacture Mind</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          {
          user?.email || user?.displayName? <li><Link onClick={signOutHandler}>logout</Link></li>:<li><Link to="/login">Login</Link></li>

          }
          
          {
            user?.email &&  <li><Link to="/profile">{user?.displayName}</Link></li>
          }
         
          {
           ( user?.email || user?.displayName) &&  <li><Link to="/dashboard">Dashboard</Link></li>
          }
          {
            !user?.email && <li><Link to="/signUp">SignUp</Link></li>
          }

      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn" href='/'>Get started</a>
    </div>
  </div>
  )
}

export default Navbar

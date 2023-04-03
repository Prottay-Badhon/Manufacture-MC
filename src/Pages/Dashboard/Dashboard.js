import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center ">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      <li><Link to="/dashboard">My Order</Link></li>
      <li><Link to="/dashboard/myProfile">My Profile</Link></li>
      <li><Link to="/dashboard/addReview">Add Review</Link></li>

    </ul>
  
  </div>
</div>
  )
}

export default Dashboard

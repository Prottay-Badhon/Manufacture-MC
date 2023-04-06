import React, { useEffect, useState } from 'react'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
const MyOrder = () => {
  const [orders,setOrders]=useState([])
  const [user, loading, error] = useAuthState(auth);
  
  const deleteHandler=(order)=>{
    console.log(order);
    const {_id,product_id,available_quantity,quantity}=order
    const url = `http://localhost:5000/order/${_id}`;
    const cancelProduct={
      product_id,
      quantity,
      available_quantity
    }
    axios.delete(url)
    .then(response=>{
      console.log(response)
      if(response.status===200){
          const url = `http://localhost:5000/updateQuantity/${_id}`
          axios.post(url,cancelProduct)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    })
    .catch(error=>console.log(error))
     
  }
  useEffect(()=>{
    const url = `http://localhost:5000/order/${user?.email}`
    fetch(url)
    .then(res => res.json())
    .then(data => setOrders(data))
  },[orders])
  return (
    <div className='w-full'>
      <div className="overflow-x-auto">
  {
    orders.length >0 && <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Single Price</th>
        <th>Shipping Cost</th>
        <th>Total</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {orders.map((order,index) => <tr>
        <th>{index+1}</th>
        <td>{order.product}</td>
        <td>{order.quantity}</td>
        <td>{order.singlePrice}</td>
        <td>{order.shippingCost}</td>
        <td>{order.total}</td>
        <td>{order.shipping}</td>
        <td>{order.phone}</td>
        <td>
            <label htmlFor="my-modal-3" className="btn"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></label>
            <button className='btn btn-primary ml-1'>Pay</button>
        </td>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Are you sure want to delete?</h3>
    <p className="py-4">If you click yes this item it will be permanently deleted from your order list.</p>
    <div className="modal-action">
      <label htmlFor="my-modal-3" className="btn text-white-500 bg-red-500" onClick={()=>deleteHandler(order)} >Yes</label>
    </div>
  </div>
</div>
      </tr>)}
     
    </tbody>
  </table>
  }      
  

  
</div>
    </div>
  )
}

export default MyOrder

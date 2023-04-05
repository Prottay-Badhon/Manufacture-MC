import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useParams } from "react-router-dom";
import useTools from "../../Hooks/useTools";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const [product,setProduct]= useState({})
  const [minq,setMinq]=useState(0)
  const [tools,setTools]=useTools();
  const {id}=useParams();
  const initialValues={
    quantity:minq,
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({ defaultValues: initialValues });
 const submitHandler=async(data)=>{
    console.log(data);
    reset();
 }
  useEffect(()=>{
    const url = `http://localhost:5000/purchase/${id}`
    fetch(url)
    .then(res=> res.json())
    .then(data =>{
      setProduct(data)
      setMinq(data.min_order_quantity)
      
    })
  },[reset])
 
  
  return (
    <div className="py-5 w-100">
      <form action="" onSubmit={handleSubmit(submitHandler)} className="flex flex-col items-center">
        <div className="form-control lg:w-[800px] w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          
          </label>
          <input
            type="text"
            value={product?.name}
            disabled
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Single Price</span>
           
          </label>
          <input
            type="text"
            placeholder="Type here"
            value={product?.price}
            disabled
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available quantity</span>
           
          </label>
          <input
            type="text"
            placeholder="Type here"
            value={product?.available_quantity}
            disabled
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum order quantity</span>
          </label>
          <input
            type="text"
            placeholder="Type order quantity"
            defaultValue={product?.min_order_quantity}
            className="input input-bordered w-full max-w-xs"
            disabled
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Order quantity</span>
            {errors.quantity?.type === "required" && (
                <span className="text-red-500">{errors.quantity.message}</span>
              )}
              {errors.quantity?.type === "min" && (
                <span className="text-red-500">{errors.quantity.message}</span>
              )}
              {errors.quantity?.type === "max" && (
                <span className="text-red-500">{errors.quantity.message}</span>
              )}
          </label>
          <input
            type="number"
            placeholder="Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
                message: "Quantity is required",
              },
              min:{
                value: product?.min_order_quantity,
                message: "Order the minimum quantity"

              },
              max:{
                value: product?.available_quantity,
                message: "Order less available quantity"

              }
             
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          
          </label>
          <input
            type="email"
            value={user?.email}
            className="input input-bordered w-full max-w-xs"
            placeholder="Type email"
           
            disabled

          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone</span>
            {errors.phone?.type === "required" && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            {errors.phone?.type === "pattern" && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            placeholder="Type phone number"
            {...register("phone", {
              required: {
                value: true,
                message: "Phone number is required",
              },
              pattern: {
                value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                message: "Provide a valid phone number",
              },
             
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs my-4">
        {errors.shippingAddress?.type === "required" && (
                <span className="text-red-500">{errors.shippingAddress.message}</span>
              )}
         <textarea name="" id=""  rows="7" placeholder="Shipping address" className="textarea textarea-bordered"
          {...register("shippingAddress", {
            required: {
              value: true,
              message: "Shipping address is required",
            },
           
          })}
         ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="submit"
            value="confirm"
            className="btn btn-primary w-full max-w-xs"
            disabled={errors?.quantity?.message|| errors?.shippingAddress?.message || errors?.phone?.message}
          />
        </div>

      </form>
    </div>
  );
};

export default Purchase;

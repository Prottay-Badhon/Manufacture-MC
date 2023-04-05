import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../firebase.init";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
const ForgetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
            auth
            );
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();
      const onSubmit =async (data)=>{
       const success = await sendPasswordResetEmail(data.email);
       if(success){
        toast("Password reset link sent to your email.Please check.")
        reset();
        console.log(data);
       }
      }
  
  return (
    <div className="flex flex-col items-center my-28 py-6">
        <ToastContainer></ToastContainer>
     <div className="">
         <h2 className="text-left ml-2 mb-1">Password reset email</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Type email"
              className="input input-bordered focus:outline-none"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please put a valid email",
                },
              })}
            />
            <button className="btn btn-square text-white-500" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>

  );
};

export default ForgetPassword;

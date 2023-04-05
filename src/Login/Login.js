import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useForm } from "react-hook-form";
const Login = () => {
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const [
      signInWithEmailAndPassword,
      userE,
      loadingE,
      errorE,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      signInWithEmailAndPassword(data.email,data.password)
      reset();
    };
    const from = location.state?.from?.pathname || "/"
        if(userG || userGit || userE ){      
                navigate(from,{replace: true})        
    }
  return (
   <div className="flex flex-col items-center my-8">
     <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-center mx-auto text-2xl">Login</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="form-control w-full max-w-xs">
            <label className="label p-0">
              <span className="label-text">Email</span>
              {errors.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
            </label>
            <input
              type="text"
              placeholder="Type email"
              className="px-1 input focus:outline-none border-0 rounded-none border-b-2 border-indigo-500 w-full max-w-xs"
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
          </div>
          <div className="form-control w-full max-w-xs mt-4">
            <label className="label p-0">
              <span className="label-text">Password</span>
              {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
            </label>
            <input
              type="password"
              placeholder="Type password"
              className="px-1 input focus:outline-none border-0 rounded-none border-b-2 border-indigo-500 w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Password will be minimum 8 character",
                },
              })}
            />
          </div>
          <p className="text-right text-blue-500 mt-1"><Link to="/forgetPassword">Forgot password?</Link></p>
          <div className="flex justify-center w-full">
            <p className="mt-1">Not registered?</p>
            <p className="text-blue-500 mt-1 text-right"><Link to="/signUp">Create an account</Link></p>
          </div>
          <div className="form-control w-full max-w-xs mt-4">
            <button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 py-2 text-white  uppercase">
              Login
            </button>
          </div>
        </form>
        {
        loadingG || loadingGit || loadingE? <Loading></Loading> : ""
        }
        <div className="text-center flex flex-col items-center mt-4">
          {         
          (errorE || errorG || errorGit) && <p className="text-red-500">{errorE?.message || errorG?.message || errorGit.message}</p>
          }
          <p> Or login using</p>
          <div className="flex text-2xl mt-4">
            <button className="h-10 w-10 btn-circle bg-blue-600 text-white">
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </button>
            <button className="h-10 w-10 btn-circle mx-2 bg-red-500 text-white" onClick={()=>signInWithGoogle()}>
              <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
            </button>
            <button className="h-10 w-10 btn-circle bg-slate-300" onClick={()=>signInWithGithub()}>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;

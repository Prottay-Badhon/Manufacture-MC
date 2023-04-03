import {
  faFacebookF,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const SignUp = () => {
    const navigate= useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email,data.password);
    reset();
    navigate("/");
  };
  if(loading){
    <Loading></Loading>
  }
  return (
    <div className="flex flex-col items-center my-8">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center mx-auto text-2xl">Sign Up</h2>
          <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="form-control w-full max-w-xs">
              <label className="label p-0">
                <span className="label-text">Username</span>
                {errors.username?.type === "required" && (
                  <span className="text-red-500">
                    {errors.username.message}
                  </span>
                )}
                {errors.username?.type === "minLength" && (
                  <span className="text-red-500">
                    {errors.username.message}
                  </span>
                )}
                {errors.username?.type === "maxLength" && (
                  <span className="text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </label>
              <input
                type="text"
                placeholder="Type username"
                className="px-1 input focus:outline-none border-0 rounded-none border-b-2 border-indigo-500 w-full max-w-xs"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimum length 2",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum length 20",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-4">
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
                type="email"
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
            <div className="flex">
              <p className="mt-1">Already have an account?</p>
              <p className="text-blue-500 mt-1">
                <Link to="/login">Please login</Link>
              </p>
            </div>
            {
                error && <p className="text-red-500">{error.message}</p>
            }
            <div className="form-control w-full max-w-xs mt-4">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 py-2 text-white  uppercase"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

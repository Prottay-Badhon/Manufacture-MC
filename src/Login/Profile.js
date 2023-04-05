import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser
} from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  if(!user.photoURL){
    return <div className="text-6xl flex flex-col items-center my-36">
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    </div>
  }
  else
  return (
    <div className="flex flex-col items-center my-36">
      <div className="avatar">
        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user.photoURL} alt="userPhoto" />
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Suggestion = ({suggest}) => {
  const {name,image,des,icon,titleColor,desColor}=suggest;
  return (
    <div className="card overflow-hidden cursor-pointer rounded-none h-[320px]  ">
      <div className="lg:hover:scale-150 transition duration-700 delay-0 h-full" style={{backgroundImage: `url(${image})`,backgroundPosition: "center",backgroundRepeat: "none",backgroundSize: "cover"}}>

      <div className="card-body text-center mt-4">
        <div className="flex justify-center text-5xl">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="flex flex-col items-center">
          <p className={`card-title text-2xl capitalize ${titleColor}  ${name.length>20 && 'text-lg text'} ${name.length>30 && 'text-sm'}`}>
            {name}
          </p>
          <div className="divider w-16 mx-auto"></div> 
        </div>

          <p className={`mt-4 ${desColor}`}>{des}</p>
      </div>
    </div>
    </div>

  );
};

export default Suggestion;

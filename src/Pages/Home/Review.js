import React from "react";
import person1 from "../../images/person/person1.jpg";
const Review = (props) => {
  const { name, image, ratings, review } = props.review;
  const check = [];
    for(let i=0;i<=ratings;i++){
    check.push(1)
  }
  const myRating = check.map((r) => {
    return (
     
        <input
          type="radio"
          name="rating-6"
          disabled
          className="mask mask-star-2 bg-orange-400"
        />
  
    );
  });

  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={image} alt="" />
        </div>
      </div>
      <p className="text-primary font-bold">{name}</p>
      <div className="rating rating-sm">
        {myRating}
      </div>
      <p className="text-secondary font-bold">Really Fantastic journey</p>
    </div>
  );
};

export default Review;

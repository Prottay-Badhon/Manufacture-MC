import React from "react";
import Review from "./Review";
import person1 from "../../images/person/person1.jpg";
import person2 from "../../images/person/person2.jpg";
import person3 from "../../images/person/person3.jpg";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Larry Isabela",
      image: person1,
      review: "Really Fantastic Journey",
      ratings: 5,
    },
    {
      _id: 2,
      name: "Prince Harry",
      image: person2,
      review: "Really Fantastic Journey",
      ratings: 4,
    },

    {
      _id: 3,
      name: "Mariam",
      image: person3,
      review: "Really Fantastic Journey",
      ratings: 3,
    },
  ];

  return (
    <div className="flex justify-center my-5">   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-x-28">
        {reviews.map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

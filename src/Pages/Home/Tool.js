import React from "react";
import {Link} from "react-router-dom"
const Tool = ({ tool }) => {
  const {
    name,
    image,
    price,
    description,
    min_order_quantity,
    available_quantity,
  } = tool;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <p>
          Minimum order quantity:
          <span className="text-primary font-bold ml-2">
            {min_order_quantity}
          </span>
        </p>
        <p>
          Available order quantity:
          <span className="text-primary font-bold ml-2">{available_quantity}</span>
        </p>
        <p>
          Price: $<span className="text-primary font-bold">{price}</span>
        </p>
        <div className="card-actions justify-start">
          <Link to="/purchase"><button className="btn btn-primary">Buy Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;

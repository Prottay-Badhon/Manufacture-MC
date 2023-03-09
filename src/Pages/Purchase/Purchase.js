import React from "react";

const Purchase = () => {
  return (
    <div className="py-5 w-100">
      <form action="" className="flex flex-col items-center">
        <div className="form-control lg:w-[800px] w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            value="Product"
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
            value={99}
            disabled
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Order quantity</span>
          </label>
          <input
            type="text"
            placeholder="Quantity"
            defaultValue={150}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            value="prottayBadhon@gmail.com"
            className="input input-bordered w-full max-w-xs"
            disabled
          />
        </div>
        <div className="form-control w-full max-w-xs my-4">
         <textarea name="" id=""  rows="7" placeholder="Shipping address" className="textarea textarea-bordered"></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="submit"
            value="confirm"
            className="btn btn-primary w-full max-w-xs"
          />
        </div>

      </form>
    </div>
  );
};

export default Purchase;

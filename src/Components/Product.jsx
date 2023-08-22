import React from "react";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card w-40 h-60 text-center bg-slate-200 hover:bg-slate-400 rounded m-2">
      <img className="card-img-top w-[100%] h-[50%] self-center" src={props.image} alt={props.productName} />
      <div className="card-body">
        <h5 className="card-title">{props.productName.slice(0,10)}</h5>
        <p className="card-text">Rs. {props.price}/-</p>
        <button
          onClick={(e) =>
            dispatch(addItem({ name: props.productName, price: props.price }))
          }
          className="bg-yellow-300 hover:bg-yellow-400 text-black text-sm py-2 px-3 rounded"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

import { useEffect, useState } from "react";
import React from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  // const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const handleAddToCart=async ()=>{
    await dispatch({type:"ADD", id: props.Items._id , name: props.Items.name, price:finalPrice, qty:qty})
    console.log(data);
  }
  let finalPrice = qty*100;
  //  useEffect(()=>{
  //   setQty(priceRef.current.value);
  //  },[])
  return (
    <>
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "600px", objectFit:"contain" }}>
        <img className="card-img-top" src={props.Items.img} alt="Card image cap" style={{height:"120px",objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title">{props.Items.name}</h5>
          {/* <p className="card-text">{props.descr}</p> */}
          <div className="container w-100">
            <p>Quantity</p>
            <select className="m-2 h-100 w-30 bg-success rounded d-flex"   onChange={(e)=>{setQty(e.target.value)}}>
              {Array.from(Array(5), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <div>Price : {finalPrice}</div>
          </div>
          <hr />
          <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart} >Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;

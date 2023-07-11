import React from "react";

function Card(props) {
  return (
    <>
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "600px", objectFit:"contain" }}>
        <img className="card-img-top" src={props.imgSrc} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.itemName}</h5>
          <p className="card-text">{props.descr}</p>
          <div className="container w-100">
            <p>Quantity</p>
            <select className="m-2 h-100 w-30 bg-success rounded">
              {Array.from(Array(5), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <div>Price : </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;

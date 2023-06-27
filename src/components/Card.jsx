import React from "react";

function Card() {
  return (
    <>
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img className="card-img-top" src="https://thumbs.dreamstime.com/b/forging-hot-iron-detail-shot-hammer-anvil-45372327.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example</p>
          <div className="container w-100">
            <select className="m-2 h-100 w-50 bg-light rounded">
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

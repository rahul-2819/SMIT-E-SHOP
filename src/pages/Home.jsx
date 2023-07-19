import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";


function Home() {
  const [search, setsearch] = useState('')
  const [itemCat, setitemCat] = useState([]);
  const [smithItem, setsmithItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/smithItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setsmithItem(response[0]);
    setitemCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div>
        <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div
              className="carousel-inner"
              id='carousel'
              style={{ maxHeight: "500px"}}
            >
               <div className="carousel-caption" style={{ zIndex: "10" }}>
                  <div class="d-flex justify-content-center">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={search}
                      onChange={(e)=>{setsearch(e.target.value)}}
                    />
                  </div>
                </div>
              <div className="carousel-item active">
                <img
                  src="https://www.mesinc.net/wp-content/uploads/2020/01/forging.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{filter:"brightness(30%)"}}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveYizsPzOvQ7PY4lUnLYTT4opUSrPRDg96FL-h7ryfSdZm9EsKTCYCKo-x8cQ4hgjpQ8&usqp=CAU"
                  className="d-block w-100"
                  alt="..."
                  style={{filter:"brightness(30%)"}}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://thumbs.dreamstime.com/b/blacksmith-forging-molten-metal-anvil-smithy-78566730.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{filter:"brightness(30%)"}}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="container">
          {itemCat !== []
            ? itemCat.map((data) => {
                return (
                  <div className="row mb-3">
                    <div key={data._id} className="fs-3 m-3">
                      {data.CategoryName}
                    </div>
                    <hr />
                    {smithItem !== [] ? (
                      smithItem
                        .filter(
                          (item) => (item.CategoryName === data.CategoryName)
                          && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Card
                                Items={filterItems}
                                // itemName={filterItems.name}
                                // imgSrc={filterItems.img}
                                // descr={filterItems.description}
                              />
                            </div>
                          );
                        })
                    ) : (
                      <div> No data Found</div>
                    )}
                  </div>
                );
              })
            : ""}
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;

import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
// import { Link } from "react-router-dom";

function Home() {

  const [itemCat, setitemCat] = useState([]);
  const [smithItem, setsmithItem] = useState([]);

  const loadData=async()=>{
    let response = await fetch("http://localhost:5000/api/smithItems",{
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      }
    });

    response = await response.json();

    setsmithItem(response[0]);
    setitemCat(response[1]);


  }

  useEffect(()=>{
    loadData()
  },[])




  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div><Carousel/></div>

        <div className="container">
          {
            itemCat!==[]
            ? itemCat.map((data)=>{
              return(<div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                  </div>
                  <hr />
                  {smithItem !==[]? 
                  smithItem.filter((item)=> item.CategoryName === data.CategoryName)
                  .map(filterItems=>{
                    return (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                      <Card itemName ={filterItems.name}
                      imgSrc={filterItems.img}
                      descr = {filterItems.description}
                      />
                    </div>
                    )
                  }
                  ) : <div> No data Found</div> }
                  </div>

              )
            })
            :""
          }
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;

import React from 'react'

function Carousel() {
  return (
    <div>
       <div id="carouselExampleCaptions"  className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{ maxHeight:"500px" , objectFit:"contain"}}>
    <div className="carousel-item active">
      <img src="https://www.mesinc.net/wp-content/uploads/2020/01/forging.jpg" className="d-block w-100"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveYizsPzOvQ7PY4lUnLYTT4opUSrPRDg96FL-h7ryfSdZm9EsKTCYCKo-x8cQ4hgjpQ8&usqp=CAU" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/blacksmith-forging-molten-metal-anvil-smithy-78566730.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
    </div>
  )
}

export default Carousel
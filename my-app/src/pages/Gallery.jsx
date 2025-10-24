import "../style/gallery.css";
import img2 from "../assets/2.jpg";
import img3 from "../assets/4.jpg";
import img4 from "../assets/img6.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img7.jpg";
import img7 from "../assets/img8.jpg";
import img8 from "../assets/img9.jpg";

const Gallery = () => {
  return (
    <>
      <div className="container myGallery" id="gallery">
        <h1 className="text-center pt-5 ">Gallery</h1>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-3 ">
                  <div className="img-box">
                    <img src={img2} className="d-block  " alt="..." />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="img-box">
                    <img src={img3} className="d-block  " alt="..." />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="img-box">
                    <img src={img4} className="d-block  " alt="..." />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="img-box">
                    <img src={img5} className="d-block  " alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-3">
                  <div className="img-box">
                    <img src={img6} className="d-block " alt="..." />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="img-box">
                    <img src={img7} className="d-block " alt="..." />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="img-box">
                    <img src={img8} className="d-block " alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            style={{ color: "black" }}
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
            data-bs-target="#carouselExampleControls"
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
    </>
  );
};

export default Gallery;

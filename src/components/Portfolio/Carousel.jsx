import Slider from "react-slick";
import "./Carousel.css";

const ImageCarousel = ({ imageMetadata, clickClose, initialSlide }) => {
  var settings = {
    accessibility: true,
    centerMode: true,
    infinite: true,
    initialSlide: initialSlide,
  };
  return (
    <div className="fixed w-screen p-2 h-screen z-10 bg-opacity-90 bg-slate-800 ">
      <button
        className="w-full border-2 border-slate-800 my-2 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300"
        onClick={clickClose}
      >
        Close
      </button>
      <div className="flex justify-center">
        <Slider {...settings} className="carousel">
          {imageMetadata.map((entry, index) => (
            <div key={index} className="text-center">
              <div className="md:mx-20 h-screen flex flex-col items-center justify-center">
                <img
                  src={`Images/search/${entry.name}`}
                  alt={entry.description}
                  className="carousel-image"
                />
                <p className="text-zinc-50">{entry.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;

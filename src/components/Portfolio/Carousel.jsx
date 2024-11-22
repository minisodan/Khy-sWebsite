import Slider from "react-slick";
import "./Carousel.css";

const ImageCarousel = ({ imageMetadata, clickClose, initialSlide }) => {
  var settings = {
    accessibility: true,
    centerMode: true,
    infinite: true,
    initialSlide: initialSlide,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div
      className="fixed w-screen h-screen p-2 z-10 bg-opacity-90 bg-slate-800 flex items-center justify-center"
      onClick={clickClose}
    >
      <div className="flex justify-center items-center h-full w-full">
        <Slider
          {...settings}
          className="carousel"
          onClick={(e) => e.stopPropagation()}
        >
          {imageMetadata.map((entry, index) => (
            <div key={index} className="text-center">
              <div className="md:mx-20 md:mt-0 h-full flex flex-col items-center justify-center">
                <img
                  src={`Images/search/${entry.name}`}
                  alt={entry.description}
                  className="carousel-image border-2 border-zinc-50 p-1"
                />
                <div className="bg-white p-6 mt-3 flex flex-col justify-between w-full max-w-lg border-2 border-zinc-50">
                  <p className="text-gray-700 text-xl text-center">
                    Description of image: {entry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;

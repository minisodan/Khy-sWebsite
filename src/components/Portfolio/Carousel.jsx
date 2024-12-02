import Slider from "react-slick";
import "./Carousel.css";

const ImageCarousel = ({ imageMetadata, clickClose, initialSlide }) => {
  var settings = {
    accessibility: true,
    centerMode: false, // Disable to avoid partial slides
    infinite: true,
    initialSlide: initialSlide,
    slidesToShow: 1, // Show only one slide at a time on mobile
    slidesToScroll: 1,
    adaptiveHeight: true, // Adjust height to fit content
  };

  return (
    <div className="fixed w-screen p-2 h-screen z-10 bg-opacity-90 bg-slate-800">
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
              <div className="md:mx-20 mt-2 h-full flex flex-col items-center justify-center">
                <img
                  src={`Images/search/${entry.name}`}
                  alt={entry.description}
                  className="carousel-image border-2 border-zinc-50 p-1 mx-auto md:mx-0" // Center on mobile, default on larger screens
                />
                <div className="bg-white p-6 mt-3 flex flex-col justify-between w-full max-w-lg border-2 border-zinc-50 mx-auto md:mx-0">
                  <p className="text-gray-700 text-xl text-center">
                    {entry.description}
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

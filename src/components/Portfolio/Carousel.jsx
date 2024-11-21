import Slider from "react-slick";
import "./Carousel.css";

const ImageCarousel = ({ imageMetadata }) => {
  console.log(imageMetadata);
  var settings = {
    dots: true,
    accessibility: true,
    centerMode: true,
    infinite: true,
    variableWidth: true,
    initialSlide: 0,
  };
  return (
    <div className="fixed w-screen p-2 h-screen z-10 bg-opacity-90 bg-slate-800 flex justify-center">
      <Slider {...settings} className="carousel">
        {imageMetadata.map((entry, index) => (
          <div className="px-1 text-center">
            <img
              src={`Images/search/${entry.name}`}
              alt={entry.description}
              className="carousel-image"
            />
            <p className="text-zinc-50">{entry.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

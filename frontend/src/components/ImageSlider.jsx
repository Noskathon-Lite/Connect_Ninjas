import { useState, useContext } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { MenuContext } from "./Navbar";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import "./styles.css";

export default function ImageSlider() {
  const [images] = useState([
    { id: 1, url: image1, alt: "Image 1" },
    { id: 2, url: image2, alt: "Image 2" },
    { id: 3, url: image3, alt: "Image 3" },
  ]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  
  const isMenuOpen = useContext(MenuContext);

  function handlePrevious() {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  }

  function handleNext() {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  }

  if (loading) return <div className="text-center p-4">Loading the data ...</div>;
  if (errorMsg !== null) return <div className="text-center p-4 text-red-500">Error occurred: {errorMsg}</div>;

  return (
    <div className="relative flex justify-center items-center mt-4 w-full h-[300px] md:h-[450px]">
      <div className={`absolute inset-0 flex items-center justify-center z-20 ${isMenuOpen ? 'pointer-events-none' : ''}`}>
        <BsArrowLeftCircleFill
          className={`arrow left-2 md:left-4 w-6 h-6 md:w-8 md:h-8 cursor-pointer transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handlePrevious}
        />

        <BsArrowRightCircleFill
          className={`arrow right-2 md:right-4 w-6 h-6 md:w-8 md:h-8 cursor-pointer transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleNext}
        />

        <span className={`circle-indicators gap-1 md:gap-2 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}>
          {images?.map((_, index) => (
            <button
              key={index}
              className={
                currentSlider === index
                  ? "current-indicator w-3 h-3 md:w-4 md:h-4"
                  : "current-indicator inactive-indicator w-3 h-3 md:w-4 md:h-4"
              }
              onClick={() => setCurrentSlider(index)}
            ></button>
          ))}
        </span>
      </div>

      {images?.map((image, index) => (
        <img
          key={image.id}
          alt={image.alt}
          src={image.url}
          className={
            currentSlider === index
              ? "current-image px-2 md:px-0"
              : "current-image hidden"
          }
        />
      ))}
    </div>
  );
}
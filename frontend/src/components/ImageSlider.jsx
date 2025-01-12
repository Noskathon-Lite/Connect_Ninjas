import { useState, useContext } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { MenuContext } from "./Navbar";  // Import the context
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
  
  // Get the menu state from context
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
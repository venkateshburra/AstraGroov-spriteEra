import { useState, useRef, useEffect } from "react";
import Gallaryimage1 from "../GallarySection/image1.png";
import Gallaryimage2 from "../GallarySection/image2.png";
import Gallaryimage3 from "../GallarySection/image3.png";
import Gallaryimage4 from "../GallarySection/image4.png";
import Gallaryimage5 from "../GallarySection/image5.png";
import Gallaryimage6 from "../GallarySection/image6.png";
import Gallaryimage7 from "../GallarySection/image7.png";
import Gallaryimage8 from "../GallarySection/image8.png";
import Gallaryimage9 from "../GallarySection/image9.png";
import Gallaryimage10 from "../GallarySection/image10.png";
import Gallaryimage11 from "../GallarySection/image11.png";
import Gallaryimage12 from "../GallarySection/image12.png";
import { GallaryClose } from "../GallarySection/GallaryClose"; // Import the GallaryClose component
import CallToAction from "../CallToAction";

const images = [
  Gallaryimage1,
  Gallaryimage2,
  Gallaryimage3,
  Gallaryimage4,
  Gallaryimage5,
  Gallaryimage6,
  Gallaryimage7,
  Gallaryimage8,
  Gallaryimage9,
  Gallaryimage10,
  Gallaryimage11,
  Gallaryimage12,
];

export default function Gallary() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const enlargedImageRef = useRef(null);



  function handleClick(index) {
    setSelectedImageIndex(index); // Set the index of the clicked image
  }

  function closeImage() {
    setSelectedImageIndex(null); // Deselect the image
  }

  return (
    <div>
      <div id="gallery" className="mt-28 mb-24 relative max-w-[1300px] mx-auto">
        <h1 className="text-2xl font-medium md:text-4xl md:font-semibold text-center">
          Gallery
        </h1>

        {/* Render GallaryClose only if an image is selected */}
        {selectedImageIndex !== null && (
          <GallaryClose
            selectedImageIndex={selectedImageIndex}
            closeImage={closeImage}
            images={images} // Pass images array
            enlargedImageRef={enlargedImageRef} // Pass the reference
          />
        )}

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-4 gap-4 md:gap-7 mx-7 lg:mx-12 mt-12">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => handleClick(index)} // Pass the index of the clicked image
              className="cursor-pointer transition-transform"
            />
          ))}
        </div>
      </div>
      <CallToAction />
      <div className="mt-10 sm:px-16 px-6 sm:py-16 py-10 space-y-8 flex flex-col justify-center mx-auto items-center">
        <p className="text-[25px] md:text-[50px] text-center align-center flex justify-center items-center capitalize leading-[36.28px] md:leading-[72.55px] text-style-kaushan">
          India&apos;s No.1 school <br /> nurturing excellence and inspiring
          future leaders.
        </p>
      </div>
    </div>
  );
}

export function GallaryClose({ selectedImageIndex, closeImage, images, enlargedImageRef }) {
  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={closeImage}></div>

      {/* Enlarged Image Section */}
      <div
        className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2"
        ref={enlargedImageRef}
      >
        <div className="relative">
          <img
            src={images[selectedImageIndex]}
            alt="Selected"
            className=" w-[100%] md:w-[500px] md:h-[300px] lg:w-[801px] lg:h-[478px] z-20"
          />
          <p className="bg-white p-4 text-[15px] -mt-2 absolute left-[50%] right-[-50%] transform -translate-x-1/2">
            Lorem ipsum is a dummy or placeholder text commonly used in
            graphic design.
          </p>
          <button
            onClick={closeImage}
            className="absolute top-[-10px] right-[-20px] border-[1.6px] border-gray-600 px-3 py-1 sm:px-4 bg-gray-50 hover:bg-gray-300 hover:text-black sm:py-[9px] font-normal text-[15px] z-20 rounded-full"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}

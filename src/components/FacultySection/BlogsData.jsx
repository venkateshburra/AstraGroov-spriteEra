import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper modules
// import  Title  from "";
import Title from "../Title";
import ImageOne from "../FacultySection/geetam.png";
import ImageTow from "../FacultySection/geeta.png";
import ImageThree from "../FacultySection/kamlesh.png";

// Blogs Data
const blogs = [
  {
    geetamImg: ImageOne,
    Name: "Mr. Geetam Singh",
    Para: "Mathematics Faculty",
  },
  {
    geetamImg: ImageTow,
    Name: "Mrs. Geeta Rao",
    Para: "English Faculty",
  },
  {
    geetamImg: ImageThree,
    Name: "Dr. Kamlesh Srivastva",
    Para: "Science Faculty",
  },
];

export function BlogsData() {
  return (
    <section className="mx-7 mt-12 lg:mx-20">
      {/* Title Section */}
      {/* <Title color="#FF0000" title="Upcoming Events" /> */}

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="font-kanit custom-swiper"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index} className="">
            <div className="text-center max-w-[302px] md:max-w-[366px] mx-auto pb-4">
              {/* Blog Image */}
              <img
                src={blog.geetamImg}
                className="w-full rounded-t-xl max-w-[302px] md:max-w-[366px]"
                alt={blog.Name}
              />
              {/* Blog Info */}
              <div className="border-2 border-t-[0.1px] rounded-b-2xl">
                <h2 className="mt-4 text-xl md:text-[20px] lg:text-[25px] lg:mb-2 font-normal">
                  {blog.Name}
                </h2>
                <p className="text-gray-800 text-lg md:text-xl my-1 mb-3 lg:my-3 lg:mb-5 font-light">
                  {blog.Para}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

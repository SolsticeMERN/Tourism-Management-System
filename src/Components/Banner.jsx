import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideTo = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <div>
      <div>
        <div
          id="carouselExampleCaptions"
          className="relative "
          data-twe-carousel-init
          data-twe-ride="carousel"
        >
          {/* <!--Carousel indicators--> */}
          <div
            className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-twe-carousel-indicators
          >
            <button
              type="button"
              onClick={() => slideTo(0)}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                currentSlide === 0 && "opacity-100"
              }`}
              aria-current={currentSlide === 0}
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              onClick={() => slideTo(1)}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                currentSlide === 1 && "opacity-100"
              }`}
              aria-current={currentSlide === 1}
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              onClick={() => slideTo(2)}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                currentSlide === 2 && "opacity-100"
              }`}
              aria-current={currentSlide === 2}
              aria-label="Slide 3"
            ></button>
          </div>

          {/* <!--Carousel items--> */}
          <div className="relative w-full rounded-2xl  overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!--First item--> */}
            <div
              className={`relative float-left w-full  transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                currentSlide === 0 ? "-mr-0" : "-mr-[100%]"
              }`}
              data-twe-carousel-active={currentSlide === 0}
              data-twe-carousel-item
            >
              <img
                src="https://i.ibb.co/bXnyySQ/photo-1541417904950-b855846fe074-q-80-w-1741-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                className="block w-full  object-fill bg-cover h-[300px] md:h-[675px]"
                alt="..."
              />
              <div data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200" className="absolute  font-poppins inset-x-[15%] top-40 hidden py-5 text-center text-white space-y-3 md:block">
                <h5 className="uppercase">
                  Let&apos;s Travel the world With Us
                </h5>
                <div className="uppercase text-[#fff] font-black text-[75px]">
                  <span className="caption">Discover</span> the world with our
                  guide
                </div>
              </div>
            </div>
            {/* <!--Second item--> */}
            <div
              className={`relative  rounded-2xl float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                currentSlide === 1 ? "-mr-0" : "-mr-[100%]"
              }`}
              data-twe-carousel-active={currentSlide === 1}
              data-twe-carousel-item
            >
              <img
                src="https://i.ibb.co/NSpmr3F/premium-photo-1661963952208-2db3512ef3de-q-80-w-1844-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                className="block w-full object-fill bg-cover h-[300px] md:h-[675px]"
                alt="..."
                
              />
              <div data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200" className="absolute inset-x-[15%] top-40 hidden py-5  text-center text-white md:block">
                <h5 data-aos="fade-up" className="uppercase">
                  Let&apos;s Travel the world With Us
                </h5>
                <p
                  className="uppercase text-[#fff] font-black text-[75px]"
                >
                  Explore Rome With <span className="caption">TTravol</span>
                </p>
              </div>
            </div>
            {/* <!--Third item--> */}
            <div
              className={`relative rounded-2xl float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                currentSlide === 2 ? "-mr-0" : "-mr-[100%]"
              }`}
              data-twe-carousel-active={currentSlide === 2}
              data-twe-carousel-item
            >
              <img
                src="https://i.ibb.co/Mk09fBL/dl-beatsnoop-com-low-1714162893.jpg"
                className="block w-full object-fill bg-cover h-[300px] md:h-[675px]"
                alt="..."
              />
              <div data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200" className="absolute inset-x-[15%] top-40 hidden py-5 text-center text-white md:block">
                <h5 className="uppercase ">
                  Let&apos;s Travel the world With Us
                </h5>
                <p className="uppercase text-[#fff] font-black text-[75px]">
                  Explore The World With{" "}
                  <span className="caption">TTravol</span>
                </p>
              </div>
            </div>
          </div>

          {/* <!--Carousel controls - prev item--> */}
          <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={prevSlide}
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          {/* <!--Carousel controls - next item--> */}
          <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={nextSlide}
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

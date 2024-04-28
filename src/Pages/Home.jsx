import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import { Helmet } from "react-helmet-async";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
AOS.init();

const Home = () => {
  const touristSpots = useLoaderData();
  const featuredTouristSpots = touristSpots.slice(0, 6);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <title>Home- TTravol</title>
          <meta name="description" content="Description of Register" />
        </Helmet>
        {/* banner */}
        <div className="mt-8 mb-20">
          <Banner></Banner>
        </div>
        {/* tourists Spot */}
        <div>
          <section className="touristSpot">
            <div className="m-5 md:m-20 text-5xl text-center font-bold">
              <h2>Featured Tourist Spots</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredTouristSpots.map((spot, index) => (
                <div
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                  key={index}
                  className="block rounded-lg bg-[#f4f5f8] text-black shadow-secondary-1 dark:bg-surface-dark"
                >
                  <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    <img className="rounded-t-lg" src={spot.image} alt="" />
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-6 text-black dark:text-white">
                    <h5 className="mb-2 text-xl text-black font-medium leading-tight">
                      {spot.tourists_spot_name}
                    </h5>
                    <div>
                      <small className="text-black flex mb-2 items-center gap-2">
                        <FaLocationDot />
                        {spot.location}
                      </small>
                    </div>
                    <p className="mb-4 text-black">{spot.shortdescription}</p>
                    <div>
                      <Link to={`/viewDetails/${spot._id}`}>
                        <button
                          type="button"
                          className="inline-block btn rounded bg-[#1f95ae] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-5">
              <Link to="/allTouristSpot">
                <button
                  type="button"
                  className="inline-block btn rounded bg-[#1f95ae] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  View All
                </button>
              </Link>
            </div>
          </section>
        </div>
        {/* countries */}
        <div className="mb-20">
          <div className="m-5 md:m-10 mb-5 col text-5xl text-center font-bold">
            <h2>Countries</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 lg:p-10">
            {countries.map((country) => (
              <div key={country._id}>
                <Link to={`/countries/${country.country_Name}`}>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className="block rounded-lg bg-[#f4f5f8] shadow-secondary-1 dark:bg-surface-dark"
                  >
                    <div
                      className="relative overflow-hidden bg-cover bg-no-repeat"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      <img
                        className="rounded-t-lg h-96 w-full bg-cover object-cover"
                        src={country.image}
                        alt=""
                      />
                    </div>
                    <div className="p-6 text-black dark:text-white">
                      <div>
                        <small className="text-black text-2xl flex items-center mb-3 gap-2">
                          <FaLocationDot />
                          {country.country_Name}
                        </small>
                      </div>
                      <p className="mb-4 text-black">
                        {country.description.slice(0, 100)}...
                      </p>
                      <div></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Information section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-7 space-y-8 p-5 ">
              <p className="text-[#2095AE] tracking-widest">
                THE BEST TRAVEL AGENCY
              </p>
              <h2 className="text-5xl font-bold">
                DISCOVER THE <span className="text-[#2095AE]">WORLD</span>{" "}
                <br /> WITH OUR GUIDE
              </h2>
              <div>
                <p className="text-[#676977]">
                  TTravol is your premier tourism agency, dedicated to crafting
                  unforgettable travel experiences tailored to your preferences.
                  Whether you seek adventure, relaxation, or cultural
                  exploration, we provide expert guidance and personalized
                  service to ensure your journey exceeds expectations. <br />{" "}
                  <span>
                    Let TTravol be your compass as you explore the world&apos;s
                    wonders.
                  </span>
                </p>
              </div>
              <div className=" font-barlow">
                <h3 className="flex items-center gap-2">
                  <FaRegCheckCircle className="bg-[#2095AE] text-3xl decoration-clone rounded-full text-white" />
                  <span className="text-[#676977]">20 Years of Experience</span>
                </h3>
                <h3 className="flex items-center gap-2">
                  <FaRegCheckCircle className="bg-[#2095AE] text-3xl decoration-clone rounded-full text-white" />
                  <span className="text-[#676977]">30+ Tour Destinations</span>
                </h3>
              </div>
              <div className=" font-barlow">
                <h3 className="flex items-center gap-2">
                  <MdOutlineSupportAgent className="text-3xl" />
                  <span className="text-[#676977]">24/7 Customer Support</span>
                </h3>
                <h3 className="flex items-center gap-2">
                  <CiFaceSmile className="text-3xl" />
                  <span className="text-[#676977]">
                    100% Satisfaction Guarantee
                  </span>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="font-bold text-[#2095AE] text-3xl">
                  <span>
                    <FaPhone />
                  </span>
                </div>
                <div>
                  <p className="text-[#676977]">For Information</p>
                  <p className="text-[#2095AE] text-xl">+158 996 888</p>
                </div>
              </div>
            </div>
            <div className="col-span-5 relative">
              <div>
                <div className="z-10 bg-transparent">
                  <img
                    src="https://i.ibb.co/gPyghVd/about.jpg"
                    className="max-w-full bg-cover "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* media section */}
        <div>
          <div>
            <div className="md:text-[150px] text-5xl mb-5 text-start font-poppins font-black tracking-widest">
              <h2>Instagram</h2>
            </div>
          </div>
          {/* image */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:-translate-y-20">
            {/* card 1 */}
            <a href="https://www.instagram.com/roxstaranne/p/C5dIpvBSRjB/?img_index=1" target="_blank" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsOuzxJB7F0hY8tIY2w0fs2mg5jl-kyT8WbaffxVZM3xzpq3u_"
                alt="paris"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </a>
            {/* card 2 */}
            <a href="https://www.instagram.com/p/C4DteqZofg_/"  target="_blank" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RZ6eX2hPF_tgkGo8n_i8EIKsPr50qLoj71pNUIwRfXK-YELk"
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">Vatican City</h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Holy See
              </div>
            </a>
            {/* card 3 */}
            <a href="https://www.instagram.com/shivaleekaoberoi/p/CsxoZQroiTt/?img_index=1" target="_blank" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnopfjh--BVgI4wCYQiWB6Un0hbIMiscVD-lIn1TmrJCjtMya3OPXy_a-cf7KpLdCPwKc&usqp=CAU"
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">venice canal
</h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              City of Canals
              </div>
            </a>
            {/* card 4 */}
            <a href="https://www.instagram.com/p/ChkgDXJrLrK/" target='_blank' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpB_7D-f-ShIFn_m70CojUjy52h1lDXZ38DmLK2OqIv6gjwlNKH4MV60bAvq2q4VKfsQ&usqp=CAU"
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">Alhambra canal</h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              a masterpiece of Islamic art
              </div>
            </a>
            {/* card 5 */}
            <a href="https://www.instagram.com/alperyesiltas/p/CXJM8gOoGrI/" target='_blank' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpsm_vzdRWOmPpzA7T6hASxsUaT076Ff2HVWMW942npDswkR7JdVB3jkdetn-8BpUvLA&usqp=CAU"
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">British museum</h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              treasure trove of human history
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

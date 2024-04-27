import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Home = () => {
  const touristSpots = useLoaderData();
  console.log(touristSpots);
  const featuredTouristSpots = touristSpots.slice(0, 6);

  return (
    <div>
      <Helmet>
        <title>Home- TTravol</title>
        <meta name="description" content="Description of Register" />
      </Helmet>
      <div className="mt-8">
        <Banner></Banner>
      </div>
      <div>
        <section className="touristSpot">
          <div className="m-5 md:m-20 text-5xl text-center font-bold">
            <h2>Featured Tourist Spots</h2>
          </div>
          <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTouristSpots.map((spot, index) => (
              <div data-aos="flip-left" data-aos-duration="1000"
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
    </div>
  );
};

export default Home;

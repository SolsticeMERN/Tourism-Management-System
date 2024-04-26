import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";

const Home = () => {
  const touristSpots = useLoaderData();
  console.log(touristSpots);
  const featuredTouristSpots = touristSpots.slice(0, 6);

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <section className="touristSpot">
          <div className="m-5 md:m-20 text-5xl text-center font-bold">
            <h2>Featured Tourist Spots</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTouristSpots.map((spot, index) => (
              <div
                key={index}
                className="block rounded-lg bg-gray-600 shadow-secondary-1 dark:bg-surface-dark"
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
                <div className="p-6 text-surface dark:text-white">
                  <h5 className="mb-2 text-xl font-medium leading-tight">
                    {spot.tourists_spot_name}
                  </h5>
                  <small>{spot.location}</small>
                  <p className="mb-4 text-base">{spot.shortdescription}</p>
                  <div>
                    <Link to="/viewDetails">
                      <button
                        type="button"
                        className="inline-block btn rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
                className="inline-block btn rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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

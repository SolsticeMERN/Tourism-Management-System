import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const AllCountriesTouristSpots = () => {
  const specificCountriesTouristSpots = useLoaderData();
  console.log(specificCountriesTouristSpots);

  return (
    <div>
      <div>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specificCountriesTouristSpots.map((spot, index) => (
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
      </div>
    </div>
  );
};

export default AllCountriesTouristSpots;

import { Link } from "react-router-dom";

const TouristSport = ({touristic}) => {

    const {image, tourists_spot_name, location, shortdescription,} = touristic

    // const {image, tourists_spot_name, country_Name, location, shortdescription, average_cost, seasonality, travel_time, totalVisitorsPerYear} = touristic

  return (
    <div>
        {/* card 1 */}
      <div className="block rounded-lg bg-gray-600 shadow-secondary-1 dark:bg-surface-dark">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          <img
            className="rounded-t-lg"
            src={image}
            alt=""
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
        <div className="p-6 text-surface dark:text-white">
          <h5 className="mb-2 text-xl font-medium leading-tight">{tourists_spot_name}</h5>
          <small>{location}</small>
          <p className="mb-4 text-base">
            {shortdescription}
          </p>
          <Link to='/viewDetails'>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristSport;

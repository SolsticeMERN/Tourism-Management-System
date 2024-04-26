import { useLoaderData } from "react-router-dom";
import TouristSport from "../Components/TouristSport";

const AllTouristsSpot = () => {
    const tourismSpots = useLoaderData()
    return (
        <div>
            <div className="m-5 text-5xl text-center font-bold">
            <h2>All Tourist Spots</h2>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 lg:p-10">
        {
            tourismSpots.map((touristic, index) => <TouristSport key={index} touristic={touristic}></TouristSport>)
        }
     </div>
     </div>
    );
};

export default AllTouristsSpot;
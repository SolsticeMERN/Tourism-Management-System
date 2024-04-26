import { useLoaderData } from "react-router-dom";
import TouristSport from "../Components/TouristSport";
import { useState } from "react";

const AllTouristsSpot = () => {
  const tourismSpots = useLoaderData();
  const [sortBy, setSortBy] = useState(null);

  const sortedTourismSpots = [...tourismSpots].sort((a, b) => {
    const costA = parseFloat(a.average_cost.replace(/[€£]/g, ""));
    const costB = parseFloat(b.average_cost.replace(/[€£]/g, ""));

    if (sortBy === "ascending") {
      return costA - costB;
    } else if (sortBy === "descending") {
      return costB - costA;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <div className="m-5 text-5xl text-center font-bold">
        <h2>All Tourist Spots</h2>
      </div>
      {/* Dropdown menu for sorting */}
      <div className="flex justify-center my-5">
                <select
                    id="sortBy"
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-400 rounded-md"
                >
                    <option value="">Sort by Average Cost</option>
                    <option value="ascending">Low to High</option>
                    <option value="descending">High to Low</option>
                </select>
            </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 lg:p-10">
        {sortedTourismSpots.map((touristic, index) => (
          <TouristSport key={index} touristic={touristic}></TouristSport>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;

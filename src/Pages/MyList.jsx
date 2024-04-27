import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import TouristSport from "../Components/TouristSport";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myTourismSpots, setMyTourismSpots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myTourismSpots/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTourismSpots(data);
        console.log(data);
      });
  }, [user]);

  return (
    <div>
      <div className="m-5 text-5xl text-center font-bold">
        <h2>My List</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 lg:p-10">
        {myTourismSpots.map((touristic, index) => (
          <TouristSport key={index} touristic={touristic}></TouristSport>
        ))}
      </div>
    </div>
  );
};

export default MyList;

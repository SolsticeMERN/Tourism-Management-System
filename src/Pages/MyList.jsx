import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyListCard from "../Components/MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myTourismSpots, setMyTourismSpots] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://tourism-management-server-sand.vercel.app/myTourismSpots/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTourismSpots(data);
        console.log(data);
      });
  }, [user, control]);

  return (
    <div>
      <div className="m-5 text-5xl text-center font-bold">
        <h2>My List</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 lg:p-10">
        {myTourismSpots.map((touristic, index) => (
          <MyListCard key={index} control={control} setControl={setControl}  touristic={touristic}></MyListCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;

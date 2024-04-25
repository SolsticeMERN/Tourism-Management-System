import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Pages/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/allTouristSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/addTouristSpot",
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
    ],
  },
]);

export default router;

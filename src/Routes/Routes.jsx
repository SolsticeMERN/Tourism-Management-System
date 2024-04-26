import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      }
    ],
  },
]);

export default router;

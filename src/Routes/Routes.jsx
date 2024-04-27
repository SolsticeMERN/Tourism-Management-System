import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateTourismSpot from "../Components/UpdateTourismSpot";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/tourismSpots")
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch("http://localhost:3000/tourismSpots")
      },
      {
        path: "/addTouristSpot",
        element: <PrivateRoutes><AddTouristsSpot></AddTouristsSpot></PrivateRoutes>,
      },
      {
        path: "/myList",
        element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:3000/tourismSpots/${params.id}`)
      },
      {
        path: "/updateTouristSpot/:id",
        element: <PrivateRoutes><UpdateTourismSpot></UpdateTourismSpot></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:3000/tourismSpots/${params.id}`)
      }
    ],
  },
]);

export default router;

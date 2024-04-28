import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/allTouristSpot'>All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to='/addTouristSpot'>Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to='/myList'>My List</NavLink>
      </li>
    </>
  );

  const { user, SignOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    SignOutUser()
      .then(() => {
        console.log("Sign-out successful");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  return (
    <div>
      <div className="navbar relative z-50 bg-base-100 dark:bg-white rounded-2xl text-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-5 w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to='/'>
          <button className="btn btn-ghost text-xl">TTravol</button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
            {navLinks}
          </ul>
        </div>
        {/* user information */}
        <div className="navbar-end gap-5">
          <div>
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              title={user.displayName}
            >
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-3 w-52"
            >
              <li>
                <h2 className="p-2">{user.displayName}</h2>
              </li>
              <li>
                <a className="bg-red-600 p-2 text-white" onClick={handleLogOut}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn bg-[#0dcdbd] text-white">
            Login
          </Link>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

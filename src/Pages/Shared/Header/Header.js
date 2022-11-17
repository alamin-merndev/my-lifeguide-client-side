import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../Assets/Logo/logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (window.confirm("Are you sure want to logout?")) {
      logOut()
        .then(() => {
          setTimeout(() => {
            toast.warn("Logout Success");
            navigate("/");
          }, 2000);
        })
        .catch((error) => console.error(error));
    }
  };
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/services">Services</Link>
      </li>
    </>
  );
  const menuItemsTwo = (
    <>
      {user ? (
        <>
          <li className="font-semibold">
            <Link>Add Services</Link>
          </li>
          <li className="font-semibold">
            <Link>My Review</Link>
          </li>
          <li className="font-semibold">
            <Link onClick={handleLogOut}>Logout</Link>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
            {menuItemsTwo}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0">{menuItemsTwo} </ul>
      </div>
    </div>
  );
};

export default Header;

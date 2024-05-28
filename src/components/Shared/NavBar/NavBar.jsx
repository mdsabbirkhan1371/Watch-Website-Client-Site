import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/404/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add_Watch</NavLink>
      </li>
      <li>
        <NavLink to="/watches">Watches</NavLink>
      </li>
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/signUp">SignUp</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <ul>{navLinks}</ul>
          </ul>
        </div>
        <img className="w-24 rounded-sm" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            className="btn btn-primary btn-outline w-36"
            onClick={handleLogout}
          >
            SignOut
          </button>
        ) : (
          <button className="btn btn-primary btn-outline w-36">
            <Link to="/signIn">Sign In</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;

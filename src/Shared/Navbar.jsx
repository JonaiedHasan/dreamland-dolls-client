/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
          .then(() => { })
          .catch((err) => {
           
          });
    }
    return (
        <div className="my-container">
            <div className="navbar bg-base-100">
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
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "default"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li tabIndex={0}>
                                <NavLink
                                    to="/allToys"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "default"
                                    }
                                >
                                    All Toys
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/myToys"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "default"
                                    }
                                >
                                    My Toys
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addToys"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "default"
                                    }
                                >
                                    Add Toys
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "default"
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">
                        <div className='w-36'><img className='rounded-full' src={'https://i.ibb.co/m6FGWNd/Capture.png'} alt="" /></div>
                        {" "}
                     
                        {/* <p className="text-color">Dreamland Dolls</p> {" "} */}
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li tabIndex={0}>
                            <NavLink
                                to="/allToys"
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                All Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myToys"
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                My Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addToys"
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Add Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex sm:flex-col md:flex-row">
                    {user ? (
                        <div className="flex justify-center items-center">
                            {" "}
                            <div>
                               
                            </div>
                            <div>
                                <button onClick={handleLogOut} className="btn-outlined">
                                    Sign Out
                                </button>
                            </div>
                            <div className="tooltip" data-tip={user.displayName}>
                                <img
                                    src={user.photoURL}
                                    className="w-12 h-12 rounded-full ml-4"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            {" "}
                            <NavLink to="/login">
                                <button className="btn-outlined">Log In</button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="btn-outlined">Register</button>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
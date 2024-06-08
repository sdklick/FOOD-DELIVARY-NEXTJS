import React from "react";
import Link from "next/link";
import Image from "next/image";
import delipng from "./images/deli.png";

const ResturentHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image
              src={delipng} // Path to your image in the public directory
              alt="Logo"
              width={30} // Desired width of the image
              height={24}
              className="d-inline-block align-text-top"
            />
            Foody Call
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Login/Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResturentHeader;

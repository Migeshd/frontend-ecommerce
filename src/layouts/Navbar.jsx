import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
<>
    <nav className="nav">
        <navleft>
            <header>
                SALESBERRY
            </header>
        </navleft>

        <navcenter>
                <div class="input-group rounded ">
                    <input
                        type="search"
                        class="form-control rounded "
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>
        </navcenter>
        
        <navright className="navright">
          <ul className="ullist">
            <li>
              <Link className="link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to={"/menu"}>
                Menu
              </Link>
            </li>
            <li>
              <Link className="link" to={"/cart"}>
                Cart
              </Link>
            </li>
            <li>
              <Link className="link" to={"/favourites"}>
                Favourites
              </Link>
            </li>
            <li>
              <Link className="link" to={"/signin"}>
                Signin
              </Link>
            </li>
            <li>
              <Link className="link" to={"/register"}>
                Register
              </Link>
            </li>
          </ul>
        </navright>
      </nav>
    </>
  );
};

export default Navbar;

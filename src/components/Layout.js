import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "green" : "",
    fontSize: isActive ? "2rem" : "",
  };
};

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <a>요소는 전체를 렌더링하므로 <Link> 또는 <NavLink>를 사용한다. */}
            {/* <a href="/">Home</a> */}
            {/* Link는 선택한 컴포넌트에 스타일 지정을 할 수 없으나 NavLink는 선택한 컴포넌트에 스타일 지정을 할 수 있다. */}
            {/* <Link to="/" Home </Link> */}
            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"} style={activeStyle}>
              DashBoard
            </NavLink>
          </li>
          <li>
            <NavLink to="noting-here" style={activeStyle}>
              Nothing Here
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;

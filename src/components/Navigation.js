import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNeos } from "@fortawesome/free-brands-svg-icons";
import {
  faUsers,
  faCommentDots,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavList = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  background-color: #eeeeee;
`;

const NavLinkStyle = {
  width: "86.5px",
  lineHeight: 4,
  textAlign: "center",
  color: "#aca8a8",
};

const activeStyle = {
  color: "orange",
};

const Navigation = ({ userObj }) => {
  return (
    <NavList>
      <NavLink to="/" style={NavLinkStyle} exact activeStyle={activeStyle}>
        <FontAwesomeIcon icon={faUsers} size="2x" />
      </NavLink>

      <NavLink
        to="/chattingplace"
        style={NavLinkStyle}
        activeStyle={activeStyle}
      >
        <FontAwesomeIcon icon={faCommentDots} size="2x" />
      </NavLink>

      <NavLink to="/myprofile" style={NavLinkStyle} activeStyle={activeStyle}>
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
      </NavLink>

      <NavLink to="/news" style={NavLinkStyle} activeStyle={activeStyle}>
        <FontAwesomeIcon icon={faNeos} size="2x" />
      </NavLink>
    </NavList>
  );
};
export default Navigation;

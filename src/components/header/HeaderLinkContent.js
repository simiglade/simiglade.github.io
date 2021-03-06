import React from "react";
import { NavLink } from "react-router-dom";

function HeaderLinkContent(props) {
  const { submenus } = props;

  return (
    <div className="flex flex-wrap justify-between shadow-lg rounded-sm">
      {submenus.map((menu) =>
        menu.submenus ? (
          <div className="p-6 space-y-2">
            {menu.label && (
              <h6
                className="text-body1 font-extrabold uppercase text-textPrimary"
                style={{ fontWeight: "500" }}
              >
                {menu.label}
              </h6>
            )}
            {menu.submenus.map((link) => (
              <NavLink
                to={link.path}
                className="block "
                style={{ color: "#3a7bd1", fontWeight: "400" }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        ) : (
          <NavLink
            to={menu.path}
            className=" block"
            style={{ color: "#3a7bd1", fontWeight: "400" }}
          >
            {menu.label}
          </NavLink>
        )
      )}
    </div>
  );
}

export default HeaderLinkContent;

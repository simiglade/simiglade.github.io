import React from "react";
import { NavLink } from "react-router-dom";

function HeaderLinkContent(props) {
  const { submenus } = props;

  return (
    <div className="flex flex-wrap justify-between">
      {submenus.map((menu) =>
        menu.submenus ? (
          <div className="p-6 space-y-2">
            {menu.label && (
              <h6 className="text-body1 font-extrabold uppercase text-textPrimary">
                {menu.label}
              </h6>
            )}
            {menu.submenus.map((link) => (
              <NavLink to={link.path} className="text-primary block">
                {link.label}
              </NavLink>
            ))}
          </div>
        ) : (
          <NavLink to={menu.path} className="text-primary block">
            {menu.label}
          </NavLink>
        )
      )}
    </div>
  );
}

export default HeaderLinkContent;

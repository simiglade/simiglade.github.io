import React from "react";
import HeaderLinkContent from "./HeaderLinkContent";

function HeaderLink(props) {
  const { label, submenus } = props.link;

  return (
    <div className="group relative">
      <span className="text-button cursor-pointer py-1 group-hover:border-b-2">
        {label}
      </span>
      <div className='absolute -bottom-2 w-full h-2' />
      <div
        style={{ top: "calc(100% + 8px)" }}
        className="absolute w-max right-0 top-full hidden group-hover:block bg-white"
      >
        <HeaderLinkContent submenus={submenus} />
      </div>
    </div>
  );
}

export default HeaderLink;

import React from "react";
import HeaderLinkContent from "./HeaderLinkContent";
import ButtonBase from "./ButtonBase";
import clsx from "clsx";

function HeaderMobileLink(props) {
  const { label, submenus } = props.link;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpanded = () => setIsExpanded((p) => !p);

  return (
    <div className="">
      <ButtonBase
        className="justify-between w-full h-10"
        onClick={toggleExpanded}
      >
        {label}{" "}
        <span className="material-icons ml-2">
          {isExpanded ? "expand_less" : "expand_more"}
        </span>
      </ButtonBase>
      <div
        className={clsx(
          "overflow-hidden transition-all",
          !isExpanded ? "h-0" : "h-auto"
        )}
      >
        <HeaderLinkContent submenus={submenus} />
      </div>
    </div>
  );
}

export default HeaderMobileLink;

import clsx from "clsx";
import React from "react";

/**
 *
 * @param {React.ComponentPropsWithoutRef<'div'>} props
 */
function SectionInfo(props) {
  const { className, ...rest } = props;

  return <div className={clsx("p-4 md:p-7 max-w-xl", className)} {...rest} />;
}

export default SectionInfo;

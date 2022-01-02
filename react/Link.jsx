import React from "react";

const Link = (props) => {
  const onMouseEnterHandler = () => {};
  const onMouseLeaveHandler = () => {};
  return (
    <a
      href={props.href}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      >{props.label}</a>
  );
};

export default Link

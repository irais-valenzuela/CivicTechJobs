import PropTypes from "prop-types";
import React from "react";
import "./_Buttons.scss";

function Button({ size = "sm", color = "primary", ...props }) {
  const Tag = 'href' in props ? 'a' : 'button'

  return (
    <Tag
      className={combineClasses(
        `btn-${size}${props.variant ? `-${props.variant}` : ""}`,
        `btn-${color}`,
        props.variant,
        props.class,
        props.disabled && "disabled"
      )}

      href={props.href}
    >
      {props.children}
    </Tag>
  );
}

Button.propTypes = {
  active: PropTypes.bool,
  class: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "icon"]),
  variant: PropTypes.oneOf(["long"]),
};

function combineClasses(...args) {
  let classes = [];
  for (const arg of args) {
    if (arg) {
      classes.push(arg);
    }
  }

  return classes.join(" ");
}

export { Button };

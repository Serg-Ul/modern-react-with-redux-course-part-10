import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...rest
}) => {
  const classes = classNames(className, 'flex items-center p-3 border', {
    'border-blue-600 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-800 text-white': secondary,
    'border-green-600 bg-green-500 text-white': success,
    'border-yellow-600 bg-yellow-500 text-white': warning,
    'border-red-600 bg-red-500 text-white': danger,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-600': outline && success,
    'text-yellow-600': outline && warning,
    'text-red-500': outline && danger,
    'rounded-full': rounded,
  });

  return (
    <button className={classes} {...rest}>{children}</button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkValueVariation: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

    if (count > 1) {
      return new Error('Only one of the primary, secondary, success, warning, danger can be true');
    }
  }
};

export default Button;
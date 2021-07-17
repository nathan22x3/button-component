import PropTypes from 'prop-types';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export const Button = ({
  label,
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  onClick,
  ...other
}) => {
  const StartIcon = () => {
    try {
      const Icon = require(`@material-ui/icons/${startIcon}`).default;
      return <Icon fontSize='small' />;
    } catch (error) {
      return <></>;
    }
  };

  const EndIcon = () => {
    try {
      const Icon = require(`@material-ui/icons/${endIcon}`).default;
      return <Icon fontSize='small' />;
    } catch (error) {
      return <></>;
    }
  };

  return (
    <button
      {...{ disabled }}
      css={[
        tw`flex gap-x-2 items-center px-4 py-2 rounded-md font-notosans font-medium text-grey-dark bg-default shadow duration-200 hover:bg-default-dark focus:bg-default-dark`,
        variant === 'outline' &&
          tw`border bg-white hover:!bg-opacity-10 focus:!bg-opacity-10`,

        variant === 'text' &&
          tw`text-primary !bg-white shadow-none hover:(!bg-primary !bg-opacity-10) focus:(!bg-primary !bg-opacity-10)`,

        disableShadow && tw`shadow-none`,

        disabled &&
          tw`!text-grey !bg-default !border-default shadow-none cursor-not-allowed hover:!bg-default`,
        disabled && variant && tw`!bg-white`,

        color !== 'default' && tw`text-white`,

        size === 'sm' && tw`px-3 py-[6px]`,
        size === 'lg' && tw`px-[22px] py-[11px]`,

        color === 'default' && tw`text-grey-dark bg-default border-grey`,
        color === 'default' && variant && tw`bg-white`,

        color === 'primary' &&
          tw`bg-primary border-primary hover:bg-primary-dark focus:bg-primary-dark`,
        color === 'primary' && variant && tw`text-primary bg-white`,

        color === 'secondary' &&
          tw`bg-secondary border-secondary hover:bg-secondary-dark focus:bg-secondary-dark`,
        color === 'secondary' && variant && tw`text-secondary bg-white`,

        color === 'danger' &&
          tw`bg-danger border-danger hover:bg-danger-dark focus:bg-danger-dark`,
        color === 'danger' && variant && tw`text-danger bg-white`,
      ]}
      {...other}
    >
      {startIcon && <StartIcon />}
      {label}
      {endIcon && <EndIcon />}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['outline', 'text']),
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * Name of the icon.
   * Search the full list of icons at: https://material-ui.com/components/material-icons/
   */
  startIcon: PropTypes.string,
  /**
   * Name of the icon.
   * Search the full list of icons at: https://material-ui.com/components/material-icons/
   */
  endIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  variant: undefined,
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'default',
  onClick: () => {},
};

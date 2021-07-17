import React from 'react';
import { Button } from './Button';

export default {
  title: 'Controls/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
    color: {
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'default',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Default',
  variant: 'outline',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'default',
};

export const Text = Template.bind({});
Text.args = {
  label: 'Default',
  variant: 'text',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'default',
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  label: 'Default',
  disableShadow: true,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Default',
  disableShadow: false,
  disabled: true,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'default',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: 'Default',
  disableShadow: false,
  disabled: false,
  startIcon: 'AddShoppingCartRounded',
  endIcon: undefined,
  size: 'md',
  color: 'primary',
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: 'Default',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: 'AddShoppingCartRounded',
  size: 'md',
  color: 'primary',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Default',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'sm',
  color: 'primary',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Default',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'primary',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Default',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'lg',
  color: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  disableShadow: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  size: 'md',
  color: 'danger',
};

import React from 'react';
import { Color } from '../../types/color.types';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  bgnColor?: Color;
};

export const Button = ({ bgnColor, ...props }: Props) => {
  return <button style={{ backgroundColor: bgnColor }} {...props}></button>;
};

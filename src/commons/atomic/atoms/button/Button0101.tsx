import React from 'react';
import { Button0101Style } from './Button.styles';

interface IProps {
  backgroundColor: string;
}

const Button0101: React.FC<IProps> = ({ backgroundColor }) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <Button0101Style>name</Button0101Style>
    </div>
  );
};

export default Button0101;

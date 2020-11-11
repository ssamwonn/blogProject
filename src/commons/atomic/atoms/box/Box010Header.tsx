import React from 'react';
import { Box0101HeaderStyle } from './Box.styles';
import { BoxIProps } from './types';

interface IProps<T = string> {
  title: T;
}

const Box010Header: React.FC<IProps> = ({ title }) => {
  return <Box0101HeaderStyle>box010</Box0101HeaderStyle>;
};

export default Box010Header;

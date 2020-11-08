import React from 'react';
import Box010Header from '../atoms/box/Box010Header';
import Button0101 from '../atoms/button/Button0101';
import { OWarpper } from './Organisms.styls';

const OMainpage = () => {
  return (
    <>
      <OWarpper>
        <Box010Header />
        <Button0101 />
      </OWarpper>
    </>
  );
};

export default OMainpage;

import React from 'react';
import { Outlet } from 'react-router-dom';

const Regions = () => (
  <>
    <h2>You are in Regions</h2>
    <Outlet />
  </>
);

export default Regions;

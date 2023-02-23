import React from 'react';
import { Outlet } from 'react-router-dom';

const Nations = () => (
  <>
    <h2>You are in Nations</h2>
    <Outlet />
  </>
);

export default Nations;

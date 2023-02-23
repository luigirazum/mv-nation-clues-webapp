import React from 'react';
import { useParams } from 'react-router-dom';

const Region = () => {
  const params = useParams();

  return (
    <>
      <h2>You are in a Region</h2>
      <p>
        Region name is:
        {params.name}
      </p>
    </>
  );
};

export default Region;

import React from 'react';
import { useParams } from 'react-router-dom';

const Nation = () => {
  const params = useParams();

  return (
    <>
      <h2>You are in Nation</h2>
      <p>
        is a single nation, its name is:
        {params.name}
      </p>
    </>
  );
};

export default Nation;

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppName from '../AppName/AppName';

describe('tests for AppName component...', () => {
  it('renders a -Nation Clues- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <AppName />
      </BrowserRouter>,
    );

    expect(getByText(/NatinClues/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <AppName />
      </BrowserRouter>,
    );

    expect(tree).toMatchSnapshot();
  });
});

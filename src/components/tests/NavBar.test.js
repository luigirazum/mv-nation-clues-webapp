import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

describe('tests for NavBar component...', () => {
  it('renders -All Nations- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    expect(getByText(/All Nations/i)).toBeInTheDocument();
  });

  it('renders -by Name- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    expect(getByText(/by Name/i)).toBeInTheDocument();
  });

  it('renders -by Region- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    expect(getByText(/by Region/i)).toBeInTheDocument();
  });
});

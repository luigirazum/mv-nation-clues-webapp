import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

describe('tests for NavBar component...', () => {
  it('renders a -All Nations- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    expect(getByText(/All Nations/i)).toBeInTheDocument();
  });

  it('renders a -by Name- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    expect(getByText(/by Name/i)).toBeInTheDocument();
  });

  it('renders a -by Region- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    expect(getByText(/by Region/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    expect(tree).toMatchSnapshot();
  });
});

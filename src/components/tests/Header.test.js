import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';

describe('tests for Header component...', () => {
  it('renders a -Nation Clues- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(getByText(/NatinClues/i)).toBeInTheDocument();
  });

  it('renders a -All Nations- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(getByText(/All Nations/i)).toBeInTheDocument();
  });

  it('renders a -by Name- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(getByText(/by Name/i)).toBeInTheDocument();
  });

  it('renders a -by Region- link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(getByText(/by Region/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(tree).toMatchSnapshot();
  });
});

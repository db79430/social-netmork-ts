import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {store} from "./Redux/redux-store";

test('renders learn react link', () => {
  render(<div>learn react</div>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

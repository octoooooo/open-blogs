import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Home from './index';

describe('Home', () => {
  it('renders Home page', () => {
    render(<Home />);

    const text = screen.getByText('Home');

    expect(text).toBeInTheDocument();
  });
});

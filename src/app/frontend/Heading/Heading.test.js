import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Heading from './Heading';

describe('<Heading />', () => {
  test('it should mount', () => {
    render(<Heading />);
    
    const heading = screen.getByTestId('Heading');

    expect(heading).toBeInTheDocument();
  });
});
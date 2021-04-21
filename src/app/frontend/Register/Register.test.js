import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from './Register';

describe('<Register />', () => {
  test('it should mount', () => {
    render(<Register />);
    
    const signup = screen.getByTestId('Register');

    expect(signup).toBeInTheDocument();
  });
});

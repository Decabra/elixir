import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RequestNewTemplate from './RequestNewTemplate';

describe('<RequestNewTemplate />', () => {
  test('it should mount', () => {
    render(<RequestNewTemplate />);
    
    const requestNewTemplate = screen.getByTestId('RequestNewTemplate');

    expect(requestNewTemplate).toBeInTheDocument();
  });
});
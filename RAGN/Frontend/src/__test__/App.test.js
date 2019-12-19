import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('testing two things', () => {
  test('renders main page', () => {
    render(<App />);
  });
});

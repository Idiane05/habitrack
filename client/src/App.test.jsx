import { render } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders heading', () => {
    const { getByText } = render(<App />);
    expect(getByText('My Habits')).toBeTruthy();
  });
});

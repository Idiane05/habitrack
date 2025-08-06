// import { render } from '@testing-library/react';
// import App from './App';
// import { describe, it, expect } from 'vitest';

// describe('App', () => {
//   it('renders heading', () => {
//     const { getByText } = render(<App />);
//     expect(getByText('My Habits')).toBeTruthy();
//   });
// });
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { describe, it, expect, beforeEach } from 'vitest';

describe('App', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('renders heading', () => {
    render(<App />);
    expect(screen.getByText('My Habits')).toBeTruthy();
  });

  it('adds a new habit', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter new habit');
    const addButton = screen.getByText('Add Habit');

    fireEvent.change(input, { target: { value: 'Read book' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Read book')).toBeTruthy();
  });

  it('toggles a habit done status', () => {
    render(<App />);
    // Add habit first
    const input = screen.getByPlaceholderText('Enter new habit');
    const addButton = screen.getByText('Add Habit');
    fireEvent.change(input, { target: { value: 'Exercise' } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.checked).toBe(false);

    // Toggle checkbox
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it('deletes a habit', () => {
    render(<App />);
    // Add habit first
    const input = screen.getByPlaceholderText('Enter new habit');
    const addButton = screen.getByText('Add Habit');
    fireEvent.change(input, { target: { value: 'Meditate' } });
    fireEvent.click(addButton);

    // Confirm habit is added
    expect(screen.getByText('Meditate')).toBeTruthy();

    // Click delete button
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    // Habit should be gone
    expect(screen.queryByText('Meditate')).toBeNull();
  });
});

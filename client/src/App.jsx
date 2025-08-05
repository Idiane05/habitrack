import { useEffect, useState } from 'react';

function App() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/habits')
      .then(res => res.json())
      .then(data => setHabits(data));
  }, []);

  const toggleHabit = (id) => {
  const habit = habits.find(h => h.id === id);
  if (!habit) return;

  const updatedHabit = { ...habit, done: !habit.done };

  fetch(`http://localhost:5000/api/habits/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ done: updatedHabit.done })
  })
    .then(res => res.json())
    .then(data => {
      const updated = habits.map(h =>
        h.id === data.id ? data : h
      );
      setHabits(updated);
    });
};


  const addHabit = () => {
    if (!newHabit.trim()) return;

    const habitToAdd = {
      id: Date.now(), // temporary ID
      name: newHabit.trim(),
      done: false
    };

    setHabits([...habits, habitToAdd]);
    setNewHabit('');

    // Optionally send to backend here
    fetch('http://localhost:5000/api/habits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(habitToAdd)
    });
  };

  return (
    <div>
      <h1>My Habits</h1>

      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Enter new habit"
      />
      <button onClick={addHabit}>Add Habit</button>

      <ul>
        {habits.map(habit => (
          <li key={habit.id}>
            <label>
              <input
                type="checkbox"
                checked={habit.done}
                onChange={() => toggleHabit(habit.id)}
              />
              {habit.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

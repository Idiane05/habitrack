const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'habits.json');

let habits = [];
function loadHabits() {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    habits = JSON.parse(data);
  } catch (err) {
    habits = [];
  }
}

function saveHabits() {
  fs.writeFileSync(dataPath, JSON.stringify(habits, null, 2));
}

app.get('/api/habits', (req, res) => {
  loadHabits();
  res.json(habits);
});

app.post('/api/habits', (req, res) => {
  const { id, name, done } = req.body;
  if (!name) return res.status(400).json({ error: 'Habit name is required' });

  const newHabit = { id, name, done };
  habits.push(newHabit);
  saveHabits();

  res.status(201).json(newHabit);
});

app.put('/api/habits/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { done } = req.body;

  const habit = habits.find(h => h.id === id);
  if (!habit) return res.status(404).json({ error: 'Habit not found' });

  habit.done = done;
  saveHabits();

  res.json(habit);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

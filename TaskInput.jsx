import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateWeather } from '../redux/slices/tasksSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const fetchWeather = async (id, location) => {
    try {
      const apiKey = '8b69189fe7a01807c0d5177a6da7696b'; // Ensure this is your valid API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        dispatch(
          updateWeather({
            id,
            weather: {
              temp: data.main.temp,
              condition: data.weather[0].description,
            },
          })
        );
      } else {
        console.error('Invalid location:', data.message);
        dispatch(
          updateWeather({
            id,
            weather: {
              temp: 'N/A',
              condition: 'Invalid location or API issue',
            },
          })
        );
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      dispatch(
        updateWeather({
          id,
          weather: {
            temp: 'N/A',
            condition: 'Unable to fetch weather',
          },
        })
      );
    }
  };

  const handleSubmit = () => {
    if (task) {
      const id = Date.now();
      dispatch(addTask({ id, task, priority, location, weather: null }));
      if (location) fetchWeather(id, location);
      setTask('');
      setLocation('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskInput;

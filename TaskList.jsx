import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/slices/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>
            {task.task} - {task.priority}
          </p>
          {task.location && (
            <p>
              Location: {task.location}{' '}
              {task.weather && typeof task.weather.temp === 'number' && typeof task.weather.condition === 'string'
  ? `${task.weather.temp}°C, ${task.weather.condition}`
  : '- Loading weather...'}


            </p>
          )}
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

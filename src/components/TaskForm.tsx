import { TaskFormProps } from '@/interfaces/items';
import { useState } from 'react';

export default function TaskForm({ addTask }: TaskFormProps) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => {
          setTaskTitle(e.target.value);
          }
        }
        placeholder="Enter a new task"
      />
      <button className='buttonForm' type="submit">Add Task</button>
    </form>
  );
}
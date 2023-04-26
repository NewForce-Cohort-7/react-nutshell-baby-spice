import React, { useState } from "react";

export const ModifyTaskForm = ({ task, onSave, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(task.date)

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(task.id, title, description, date);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="taskForm--modify">
      <div className="taskForm--row">
        <label htmlFor="taskForm--title">Title:</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          id="taskForm--title"
        />
      </div>
      <div className="taskForm--row">
        <label htmlFor="taskForm--description">Description:</label>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          id="taskForm--description"
        />
      </div>
      <div className="taskForm--row">
        <label htmlFor="taskForm--date">Due Date:</label>
        <input
          value={date}
          onChange={(event) => setDate(event.target.value)}
          type="date"
          id="taskForm--date"
        />
      </div>
      <button className="taskBtn">Save Changes</button>
      <button type="button" className="taskBtn" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

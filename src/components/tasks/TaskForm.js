import { useState } from "react";

export const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      alert("Please enter both a title and description for the task.");
      return;
    }

    const taskObject = { title, description, date, completed: false };
    onAddTask(taskObject);
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="taskForm--new">
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
      <div>
        <label htmlFor="taskForm--date">Due Date:</label>
        <input
          value={date}
          onChange={(event) => setDate(event.target.value)}
          type="date"
          id="taskForm--date"
        />
      </div>
      <button className="taskBtn">Add</button>
    </form>
  );
};

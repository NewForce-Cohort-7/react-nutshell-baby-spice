import React from "react";

export const AddTaskButton = ({ label, onClick }) => {
  return (
    <button className="taskBtn" onClick={onClick}>
      {label}
    </button>
  );
};

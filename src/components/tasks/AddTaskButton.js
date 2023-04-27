import React from "react";

export const AddTaskButton = ({ label, onClick }) => {
  return (
    <button type="button" className="taskBtn" onClick={onClick}>
      {label}
    </button>
  );
};

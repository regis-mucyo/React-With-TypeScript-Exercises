import React from "react";
export function ToDo() {
  const [task, setTask] = React.useState<string[]>([]);
  const handleSubmit = (formData: FormData) => {
    let taskName = formData.get("task") as string;
    setTask((prevTask) => [...prevTask, taskName]);
  };

  return (
    <>
      {" "}
      <h1>Todo App Without Styles</h1>
      <br />
      <form action={handleSubmit}>
        <input type="text" name="task" />
        <button>Add Task</button>
        <br />
        <br />
        <h1>List Of Tasks</h1>
        <ul>
          {task.map((ta) => (
            <li key={ta}>{ta}</li>
          ))}
        </ul>
      </form>
    </>
  );
}

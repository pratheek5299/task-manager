import { useState } from "react";
import styles from "./create-task.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducers/taskReducer";
function CreateTask() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [showForm, setShowForm] = useState(true);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        let obj = {
            task,
            description,
            status: 'To Do'
        }
        dispatch(addTask(obj))
        setTask('')
        setDescription('')
    }

  return (
    <div className={styles.createTaskContainer}>
      <div className={styles.createTask}>
        <div className={styles.createHeadingContainer}>
            <h2>Create a Task</h2>
            <button onClick={()=> setShowForm(!showForm)}>Show Form</button>
        </div>
         <form className={`${styles.createTaskForm} ${showForm ? styles.showForm : ''}`} onSubmit={handleSubmit}>
            <input value={task} onChange={(e)=> setTask(e.target.value)} type="text" name="taskName" placeholder="Enter your task" />
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Describe your task"
              name="taskDescription"
            />
            <button type="submit">Submit</button>
          </form>

      </div>
    </div>
  );
}
export default CreateTask;

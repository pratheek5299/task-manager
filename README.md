# Task Manager App
# Process Document Take Home Task

In the React JS default folder structure (created by using `npx create-react-app <app-name>`) I have created a `components` folder which mainly contains the components of the app that we are going to build.

Initially, I have created a form which takes the task name and task description from the user. My next approach is to use Redux and Firebase databases to store the data and also to make it persistent.

## Approach

1. **Use Redux**: Get the data from the form through actions and reducers.

2. **Connect with Firebase**: Connect the application with Firebase.

3. **Add Form Details Action**: In the `addFormDetails` action, create a new document. Set the Status of the task as 'To Do' by default.

4. **Display Tasks**: Get the data from the database and update the state. Implement real-time updates from the database if necessary. Create a component to display the data from the state.

5. **Task Item**: Each task item should have a Task Name, Task Description, and Task Status. Include update and delete buttons with each task item.

6. **Update and Delete**: Implement update and delete actions. Use the document ID fetched from the database to perform the delete action. For the update action, convert the specific task into a form. Allow editing of task name, task description, and task status. Display predefined options for the status to the user.

7. **Submit Form**: When updating tasks, the data needs to go through Redux and be updated to the database upon form submission.

8. **Search Feature**: Implement searching with a dropdown to select options. Use `useEffect` Hook to filter the state based on the selected option. Display the required list of items accordingly.


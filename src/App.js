import { Provider } from 'react-redux';
import './App.css';
import CreateTask from './components/create-task/create-task';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
      <h1>Task Manager</h1>
      <div>
        <CreateTask/>
      </div>
    </div>
    </Provider>
  );
}

export default App;

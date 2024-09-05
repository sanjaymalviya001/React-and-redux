// import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import { store } from './app/store';
import StudentManagment from './components/StudentManagment';


function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <h1>Learning Redux</h1>
      <AddTodo/>
      <Todos/>
      <StudentManagment/>

      </Provider>
    </div>
  );
}

export default App;

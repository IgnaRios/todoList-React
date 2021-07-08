import React, {useState, useEffect} from 'react';
import './App.css'
//import components
import Header from './componentes/Header';
import Form from './componentes/Form';
import TodoList from './componentes/TodoList';


import './App.css';

const App = () => {
  
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    getLocalTodos()
  }, []);
  
  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () =>{
    switch (status){
      case 'Completed': 
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'Uncompleted': 
      setFilteredTodos(todos.filter((todo) => todo.completed === false))
      break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
  

  return (
    <>
    <Header />
    <div className='container'>
      <Form 
        setInputText={setInputText} 
        inputText={inputText} 
        todos ={todos} 
        setTodos={setTodos}
        setStatus={setStatus} 
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
    </ >
  
  );
}

export default App;

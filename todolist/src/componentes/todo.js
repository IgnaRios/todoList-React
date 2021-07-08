import React from 'react';

const Todo = ({text, todo, todos, setTodos}) =>{
    
    const deleteHandler = () =>{
        setTodos(todos.filter((item) => item.id !== todo.id))
    };
    
    const completeHandler = () =>{
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return{
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item
            })
        )
    };


    return(
        <div className='todo'>
            <li className='todo-item'>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <img src='C:\Users\ignac\OneDrive\Escritorio\DiplomaturaProgramacion\TPs\proyecto\todolist\public\checkicon.jpg' alt='checked' height='5px' width='5px' />
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fa fas-trash'> </i>
            </button>
        </div>
    );
};

export default Todo; 
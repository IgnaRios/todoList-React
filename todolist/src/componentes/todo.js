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
                Completed
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                X
            </button>
        </div>
    );
};

export default Todo; 
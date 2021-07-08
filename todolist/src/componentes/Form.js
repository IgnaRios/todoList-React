import React  from 'react';

const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {
    
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, 
            {
                text: inputText,
                completed: false, 
                id: Math.floor(Math.random()*10000)  
            }
        ]);
        setInputText('');
    };
    
    const statusHandler = (e) => {
        setStatus(e.target.value)
    } 

    return(
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type='text' 
                className='todo-input'
            />
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value='All'>All</option>
                    <option value='Completed'>Completed</option>
                    <option value='Uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    );
}; 

export default Form; 
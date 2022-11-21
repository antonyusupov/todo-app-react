import React, {useState} from 'react';
import './App.css';

function App() {

    const [list, setList] = useState([ ]);
    const [input, setInput] = useState('');

    const addTodo= (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo
        }
        // Add to list
        setList ([...list , newTodo]) ;
        // Clear input field
        setInput ('');
    };


    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList);
    };
// (alert('type todo'))

  return (
    <div className='todo__list-container'>
        <div className="todo__list-content">
            <h1>To-Do List</h1>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button 
            onClick={() => input !== '' ? addTodo(input) : alert('Type To-Do to add!')}>Add</button>

            <ul>
                {list.map((todo) => (
                    <li key={todo.id}>
                        <p>{todo.todo}</p>
                        <button onClick={()=> deleteTodo(todo.id)}>&times;</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default App;
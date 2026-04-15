import React, { useState } from 'react'

const Todo = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const sub = () => {
    if( editIndex == null){
      console.log(name)
      setTodos([...todos, name]);
      setName("");
    }else{
      const newTodos = [...todos];
      newTodos[editIndex] = name;
      setTodos(newTodos);
      setEditIndex(null);
      setName("");
    }
  }

  const handleDelete = (index) => {
    setTodos(todos.filter(((item, i) => i !== index)));
  }
  const handleEdit = (index) => {
    setEditIndex(index)
    setName(todos[index]);
    setTodos(todos.filter(((item, i) => i !== index)));
    console.log(editIndex)
  }
  return (
    <div className='container'>

      <div class="mb-3">
        <label for="exampleInputText1" class="form-label">username</label>
        <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      {editIndex == null ? <button type="submit" class="btn btn-primary" onClick={sub}>Add user</button> :
        <button type="submit" class="btn btn-warning" onClick={sub}>Update user</button>
      }




      <hr />
      <div className='card p-1'>
        {todos.map((item, index) => {
          console.log(item)
          return (
            <div>
              <p className='d-flex justify-content-between bg-warning px-1 my-1'>{item} <button onClick={() => handleDelete(index)} className='btn'>Delete</button></p>
              <button className='btn btn-success' onClick={() => handleEdit(index)}>Edit</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo

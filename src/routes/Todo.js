import React, { useState } from 'react'

const Todo = () => {
    const [name,setName] = useState("");
    const [todos, setTodos] = useState([]);

    const sub= ()=>{
        console.log(name)
        setTodos([...todos,name]);
        setName("");
    }
  return (
    <div className='container'>

  <div class="mb-3">
    <label for="exampleInputText1" class="form-label">username</label>
    <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp" value={name} onChange={(e) => setName(e.target.value)} />
  </div>
  <button type="submit" class="btn btn-primary" onClick={sub}>Add user</button>
      
      <hr />
      <div>
        {todos.map(( item,index) => {
            console.log(item)
            return(
                <p>{item}</p>
            )
        })}
      </div>
    </div>
  )
}

export default Todo

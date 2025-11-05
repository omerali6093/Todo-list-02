import React from "react";
import SearchTodo from "./SearchTodo";
import TodoInput from "./TodoInput";
import Todo from "./Todo";
import { useState } from "react";


function TodoWrapper() {


    const [todos, setTodo] = useState([])


    const addTodo = (todo) => {
        setTodo([
            ...todos, {id:Math.random(), task: todo}
        ])
    }



    console.log("todos =>", todos);
    


    return (
        <div>
        < TodoInput addTodo={addTodo}/>

        < SearchTodo />

        {todos.map((todo) => (
           // console.log(todo.task)
            <Todo 
            id={todo.id}
            task={todo.task}
            />
        )
        )}

        </div>



    )
}

export default TodoWrapper
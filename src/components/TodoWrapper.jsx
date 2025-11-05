import React from "react";
import SearchTodo from "./SearchTodo";
import TodoInput from "./TodoInput";
import Todo from "./Todo";


function TodoWrapper() {
    return (
        <div>
        < TodoInput />

        < SearchTodo />

        < Todo />

        </div>



    )
}

export default TodoWrapper
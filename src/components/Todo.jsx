import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Todo ({id, task, deleteTodo}) {

    
    return (
        <div className="todo-list border border-gray-300 rounded-lg mt-10">
            <div className="todo-title flex items-center justify-between p-4">
                <p>{task}</p>

                <div className="todo-icons flex items-center gap-2">
                    <button className="p-1.5 border cursor-pointer border-gray-400 rounded-md text-sm">
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </button>
                    <button className="bg-[#de3b40] cursor-pointer rounded-md p-1.5 text-white text-sm" 
                    onClick={() => deleteTodo(id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Todo
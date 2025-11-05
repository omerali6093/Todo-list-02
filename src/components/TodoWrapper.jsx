import React from "react";


function TodoWrapper() {
    return (
        <div className="add-task-input border border-gray-200 mt-6 p-7 shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]">
            <h2 className="text-[18px] font-medium">Add New Task</h2>
            <div className="input-section mt-3 flex items-center gap-2">
                <input 
                type="text" 
                placeholder="Enter a new task...." 
                className="border  border-gray-300 w-[780px] py-2 px-3 text-[16px] rounded-lg"/>
                <button className="border px-5 py-2 rounded-lg bg-[#636ae8] text-white cursor-pointer">
                    Add Task</button>
            </div>
        </div>
    )
}

export default TodoWrapper
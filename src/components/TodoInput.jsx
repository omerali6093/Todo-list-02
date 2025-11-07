import { useState } from "react"

function TodoInput ({addTodo}) {


    const [value, setValue] = useState("")
    console.log("value =>", value);

    const handleTodo = () => {
        if(value) {
            addTodo(value)
            setValue("")
        }
    }
    

    return (
        <div className="add-task-input border border-gray-200 mt-6 p-7
         shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] rounded-lg">
            <h2 className="text-[18px] font-medium">Add New Task</h2>
            <div className="input-section mt-3 flex items-center gap-2">
                <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Enter a new task...." 
                className="border  border-gray-300 w-[460px] py-2 px-3 text-[16px] rounded-lg outline-none"/>
                <button className="border px-5 py-2 rounded-lg bg-[#636ae8]
                 text-white cursor-pointer "
                 onClick={handleTodo}>
                    Add Task</button>
            </div>
        </div>
    )
}

export default TodoInput
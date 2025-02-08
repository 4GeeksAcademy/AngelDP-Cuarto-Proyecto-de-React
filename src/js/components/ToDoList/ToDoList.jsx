import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {

    const [task, setTask] = useState([]);
    const [inputValue, setInputValue] = useState("");


    const pressKey = (e) => {
        if(e.key === "Enter"){
            setTask([...task, inputValue]);
            setInputValue("");
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const removeTask = (index) => {
        const newTasks = [...task];
        newTasks.splice(index, 1);
        setTask(newTasks);
    }

    return (
        <>
            <div className="base">
                <div className="myToDoList">
                    <div className="toDo"> 
                        <input 

                            className="inputTask" 
                            type="text" 
                            placeholder="Write your task here:" 
                            value={inputValue}
                            onChange={handleChange}
                            onKeyDown={pressKey}

                        />
                    </div>
                    <div className="list">
                        {task.length === 0 ? (

                            <p className="text-center text-muted">"No tasks to do..."</p>

                        ) : (

                            <ul>
                                {task.map((task, index) => (
                                    <li key={index} className="d-flex justify-content-between">
                                        {task}
                                        <button onClick={() => removeTask(index)} type="button" className="btn btn-danger d-none d-hover-block">
                                            X
                                        </button>
                                    </li>
                                ))}
                            </ul>

                        )}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoList;
import React, { useEffect, useState } from 'react';
import Tasks from "../Tasks/Tasks.jsx"
import PendingTask from '../PendingTask/PendingTask.jsx';

const MyList = (props) => {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = sessionStorage.getItem("tasks")
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [imputValue, setImputValue] = useState("");

    useEffect (() => {
        sessionStorage.setItem("tasks", JSON.stringify(tasks));
    }), [tasks];

    const handleChange = (e) => {
        setImputValue(e.target.value);
    };

    const pressKey = (e) => {
        if (e.key === "Enter") {
            setTasks([...tasks, imputValue]);
            setImputValue("")
        };
    };

    const deleteTask = (index) => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTasks(newTask);
    };

    return (
        <>
            <Tasks
                catchValue={handleChange}
                taskValue={imputValue}
                sendTask={pressKey}
            />

            <PendingTask
                taskList={tasks}
                deleteTask={deleteTask}
            />
        </>
    );
};
export default MyList;
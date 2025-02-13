import React from 'react';
import "./Tasks.css"

const Tasks = (props) => {
    return (
        <>
            <input 
                type="text" 
                placeholder='Write your task here :'
                value={props.taskValue}
                onChange={props.catchValue}
                onKeyDown={props.sendTask}
            />
        </>
    );
};
export default Tasks;
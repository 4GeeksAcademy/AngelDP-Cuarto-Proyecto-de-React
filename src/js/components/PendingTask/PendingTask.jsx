import React from 'react';
import "./PendingTask.css";

const PendingTask = (props) => {


    return (
        <>
            {props.taskList.length === 0 ? (
                <p className='d-flex justify-content-center'>
                   * No pending Tasks ... *
                </p>
            ) : (
                <ul>
                    {props.taskList.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button style={{ float: 'right' }} className="btn btn-danger" onClick={() => props.deleteTask(index)}> X </button>
                        </li>
                    ))}
                </ul>
            )}

        </>
    );
};
export default PendingTask;
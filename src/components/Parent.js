import React, { useState } from 'react'
import Child from './Child';
const data=[{task:"Learn React",done:false},
            {task:"Build a React app",done:false},
            {task:"Deploy the React app",done:false}     
]
const Parent=()=>{
    const [toDoList,setToDoList]=useState(data);

    const TaskCompleted=(id)=>{
        setToDoList(
            data.filter((item,index)=>{
                if(index!=id) return item;
                else{
                    item.done=true;
                    return item;
                }
            })
        )
    }

    return <div className='Parent'>
        <h1>Parent Component</h1>
        <div className='child'>
            <h2>Child Component</h2>
            <ul>
                {
                    toDoList.map((list,index)=>{
                        return <Child list={list} id={index} TaskCompleted={TaskCompleted}/>
                    })
                }
            </ul>
        </div>
    </div>
}

export default Parent
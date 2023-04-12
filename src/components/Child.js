import React from 'react'

const Child=({list,id,TaskCompleted})=>{
    // console.log(list);
    
    return <li>
        {list.task}
        {
            (!list.done)
            ?<button onClick={()=>TaskCompleted(id)}>Complete</button>
            :""
        }
    </li>
}

export default Child
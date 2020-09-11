import React from 'react';

const List = (props) => {
    console.log(props)
    const myTasks = props.todos.map((entry,index) => {
        return (
        <div key={index} className="my-tasks">
            <li>{entry.item}</li>
            <button id={index} onClick={(event)=> props.deleteItem(event)}>x</button>
        </div>
        )
    })
    return (
        <div>
              <h2>My Tasks</h2>
              <ul>
              {myTasks}
              </ul>
         
        </div>
      
    )
}

export default List
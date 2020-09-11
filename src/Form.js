import React from 'react';

const Form = (props) => {
    const { onChange, onClick, value, style } = props
    return (
        <div>
            <form onClick={(event)=>onClick(event)}>
                <input type="text" onChange={(event)=>onChange(event)} placeholder="enter task" value={value}/>
                <input type="submit" value="add"/>
                <div style={{display: style}}>Input must be more than 1 character and less than 200 characters</div>
            </form>      
        </div>       
    )
}

export default Form
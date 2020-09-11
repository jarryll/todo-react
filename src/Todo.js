import React from 'react';
import Form from './Form';
import List from './List';

class Todo extends React.Component {
    constructor() {
        super ()
        this.state = {
            style: 'none',
            value: '',
            todos: []
        }
    }

    handleChange = (event) => {
        this.setState ({
            value: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        if (this.state.value !== '') {    
            if (this.state.value.length <= 1 || this.state.value.length > 200) {
                this.setState ({
                    style: 'block'
                })
            } else {
                this.setState ((prevState) => {
                    const newTodo = {
                        id: prevState.todos.length + 1,
                        item: this.state.value
                    }
                    return {
                        todos: [...this.state.todos, newTodo],
                        value: '',
                        style: 'none'
                    }             
                })
            }
            
        }    
    }

    deleteItem = (event) => {
        this.state.todos.splice(event.target.id, 1)
        const remainingItems = this.state.todos
        this.setState ({
            todos: remainingItems
        })
    }

    render () {
        return (
            <div>
                <h2>This is the to-do container</h2>
                <Form onChange={this.handleChange} onClick={this.handleClick} value={this.state.value} style={this.state.style}/>
                <List todos={this.state.todos} deleteItem={this.deleteItem}/>
            </div>
        )
    }
}

export default Todo


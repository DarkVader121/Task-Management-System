import { createState, useState } from '@tanstack/react-query'

const todosContainer = createState({
    todos: [], 
});

function addTodo(todo) {
    todosContainer.todos.set(todos => [
        ...todos,
        {
            id:todos.lenght + 1, 
            title: todos.title,
            description: todos.description,
            deadline:todo.deadline, 
            completed:false
        }
    ]); 
}

// Export the state and control functions
export function useTodosStore() {
    const todos = useState(todosContainer.todos);
    return { todos, addTodo }; 
}
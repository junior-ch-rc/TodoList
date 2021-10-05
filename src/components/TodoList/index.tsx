import { TodoType } from "../../types/todoType";
import { Todo } from "../Todo";
import { useState } from "react";
import './index.css';

let mockData = [
    {
        id: 1,
        todo: "Lavar Louça",
        deadline: "2021-09-29",
        completed: false
    },
    {
        id: 2,
        todo: "Lavar roupas",
        deadline: "2021-09-30",
        completed: false
    },
    {
        id: 3,
        todo: "Lavar casa",
        deadline: "2021-10-01",
        completed: false
    },
];

export const TodoList = () => {
    const [todos, setTodos] = useState<TodoType[]>(mockData);

    const handleTodoDid = (id: number, e: Event) => {
        e.preventDefault();
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                let aux = { ...todo, completed: !todo.completed };
                return aux;
            } else {
                return todo;
            }
        });

        setTodos(updatedTodos);
    };

    const handleTodoChange = (id: number, e: React.FormEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value;
        mockData = todos.map(todo => {
            if (todo.id === id) {
                let aux = { ...todo, todo: newValue };
                return aux;
            } else {
                return todo;
            }
        });

        setTodos(mockData);
    }

    const handleTodoRemove = (id: number) => {
        // mockData.splice(id-1, 1);
        let updatedTodos = todos.filter(t => t.id !== id);
        console.log(mockData);

        setTodos(updatedTodos);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="todoList">
                    {todos.map(todo => {
                        return <Todo key={todo.id} todo={todo} onTodoRemove={handleTodoRemove} onTodoDid={handleTodoDid} onTodoChange={handleTodoChange} />
                    })}
                </div>
            </div>
        </div>
    );
}
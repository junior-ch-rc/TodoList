import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { TodoType } from "../../types/todoType";
import './index.css';

interface Props {
    todo: TodoType;
    onTodoDid: Function;
    onTodoChange: Function;
    onTodoRemove: Function;
}

export const Todo = ({todo, onTodoDid, onTodoChange, onTodoRemove} : Props) => {
    const editableTodo = useRef<HTMLParagraphElement>(null);
    const todoInput = useRef<HTMLInputElement>(null);
    const optionsTodo = useRef<HTMLDivElement>(null);

    const handleEditTodo = () => {
        if (editableTodo.current != null && todoInput.current != null && optionsTodo.current != null) {
            editableTodo.current.style.display = "none";
            todoInput.current.style.display = "block";
            optionsTodo.current.style.display = "block";
            todoInput.current.focus();
        }
    }

    const handleCancel = () => {
        if (editableTodo.current != null && todoInput.current != null && optionsTodo.current != null) {
            editableTodo.current.style.display = "block";
            todoInput.current.style.display = "none";
            optionsTodo.current.style.display = "none";
        }
    }
    
    return (
        <div className="todoItem">
            <div className="optionsTodo" ref={optionsTodo}>
                    <FontAwesomeIcon className="iconOptions" icon={faEdit} />
                    <i onClick={(e) => {onTodoRemove(todo.id)}}><FontAwesomeIcon className="iconOptions" icon={faTrash} /></i>
                    <FontAwesomeIcon className="iconOptions" icon={faTimesCircle} onClick={handleCancel}/>
            </div>

            <span className={todo.completed === true ? "col-md-1 markBtn marked" : "col-md-1 markBtn"} onClick={(e) => {onTodoDid(todo.id, e)}}></span>
            <p ref={editableTodo} className={todo.completed === true ? "col-md-7 completedTask" : "col-md-7"} onClick={() => { handleEditTodo() }}>{todo.todo}</p>
            <input ref={todoInput} className="todoInput col-md-7" type="text" value={todo.todo} onChange={(e) => {onTodoChange(todo.id, e)}}/>
            <p className={todo.completed === true ? "completedTask" : ""}>{todo.deadline}</p>
        </div>
    );
}
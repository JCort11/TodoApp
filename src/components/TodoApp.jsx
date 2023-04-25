import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"



export const TodoApp = () => {
  
    const {todos, todosCount, pendingCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

    return (
    <>
        <h1 className="text-center">TodoApp</h1>
        <h1 id="title1">To do: { todosCount }, <small>pendings: { pendingCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                todos={ todos } 
                onDeleteTodo= { handleDeleteTodo }
                ontoggleTodo={ handleToggleTodo }
                />
            </div>
            <div className="col-4">
                <h4>Add a Task:</h4>
                <hr />
                <TodoAdd onNewToDo={ handleNewTodo }/>
            </div>
        </div>

    </>
  )
}

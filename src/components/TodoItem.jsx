
export const TodoItem = ({ todo, onDeleteTodo, ontoggleTodo }) => {
    return (
      <li key={ todo.id } className="list-group-item d-flex justify-content-between">
          <span 
          className={`align-self-center ${ todo.done ? 'text-decoration-line-through':''}`}
          onClick={ ()=> ontoggleTodo( todo.id ) }
          >{todo.description}</span>
          <button 
          className="btn btn-outline-danger" 
          onClick={ () => onDeleteTodo( todo.id ) }
          >Delete</button>
      </li>
    )
  }
  
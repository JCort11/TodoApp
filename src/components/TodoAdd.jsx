import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewToDo}) => {
 
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const onFormSubmit = ( event ) =>{
        event.preventDefault();
        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        }

        onNewToDo(newTodo);
        onResetForm();
    }

    return (
    <form onSubmit={ onFormSubmit }>
        <input type="text" placeholder="Add to do task" id='task1' className="form-control" name='description' value={ description } onChange={ onInputChange }/>
        <button type="submit" className="btn btn-outline-warning mt-1">Add</button>
    </form>
  )
}

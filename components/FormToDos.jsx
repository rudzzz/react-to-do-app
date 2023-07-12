import { useState } from "react";

const FormToDos = ({addTodos}) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submited");
        if(title && category){
            addTodos(title, category);
            setTitle("");
            setCategory("");
        } else{
            return;
        }
        console.log(title, category);
    }

    return (
        <div className="todo-form">
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type" value={title} onChange={ (event) => { setTitle(event.target.value) } }/>
                <select value={category} onChange={ (event) => { setCategory(event.target.value) } }>
                    <option value="">Choose a category</option>
                    <option value="Work">Work</option>
                    <option value="Life">Life</option>
                    <option value="Studies">Studies</option>
                </select>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default FormToDos;
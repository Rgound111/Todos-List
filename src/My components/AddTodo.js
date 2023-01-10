import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title and desc must be filled")
        }
        else {
            addTodo(title, desc)
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container  my-3'>
            <h3>Add Todo Here</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label forhtml="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label forhtml="Desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="Desc" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo

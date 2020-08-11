import React from "react";


const FormAdd = props => {
    return (
        <div className="form-container">
                    <h1>{props.msg}</h1>
            <form onSubmit={(e) => {props.handleFormSubmit(e)}}>
                <ul className="flex-outer">
                    <li>
                        <input 
                            value={props.title}
                            type="text"
                            name="addnote"
                            placeholder="Title" 
                            onChange={(e) => {props.onChangeTitle(e.target.value)}}
                            />
                    </li>
                    <li>
                        <textarea
                        value={props.note}
                            placeholder="Note...."
                            name="note" onChange={(e) => {props.onChangeNote(e.target.value)}}
                            rows="6"></textarea>
                    </li>
          
                     <li>
                        <button type="submit" >Submit</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}
export default FormAdd
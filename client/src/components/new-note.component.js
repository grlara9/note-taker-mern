import React from "react";


const FormAdd = props => {
    return (
        <div className="form-container">
            <form>
                <ul className="flex-outer">
                    <li>
                        <input 
                            value={props.title}
                            type="text"
                            name="addnote"
                            placeholder="Title"
                            onChange={props.handleInputChange}
                            />
                    </li>
                    <li>
                        <textarea
                            placeholder="Note...."
                            name="note" onChange={props.handleInputChange}
                            rows="6"></textarea>
                    </li>
          
                     <li>
                        <button type="submit" onClick={props.handleFormSubmit}>Submit</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}
export default FormAdd
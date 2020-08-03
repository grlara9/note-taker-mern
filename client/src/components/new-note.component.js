import React from "react";


const AddNote = props => {
    return (
        <div className="form-container">
        <form>
           
                <input 
                    value={props.title}
                    type="text"
                    name="addnote"
                    placeholder="Title"
                    onChange={props.handleInputChange}
                />

                <input 
                    value={props.note}
                    type="text"
                    name="addnote"
                    placeholder="White a note"
                    onChange={props.handleInputChange}
                />
          
          
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
        </div>
    )
}
export default AddNote
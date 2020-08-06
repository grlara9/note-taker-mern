import React from "react";


const FormAdd = props => {
    return (
        <div className="form-container">
        <form>
           <div className="form-group">
                <input 
                    className="form-control"
                    value={props.title}
                    type="text"
                    name="addnote"
                    placeholder="Title"
                    onChange={props.handleInputChange}
                />
                </div>

                <div className="form-group">
               
                <textarea class="form-control col-sm-12" 
                placeholder="Note...."
                name="note" onChange={props.handleInputChange}
                rows="3"></textarea>
                </div>
          
          
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
        </div>
    )
}
export default FormAdd
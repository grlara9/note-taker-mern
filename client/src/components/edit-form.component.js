import React from "react";


const EditForm = props => {

    return (
       
            <div className="form-container">
                    <h1>{props.msg}</h1>
            <form onSubmit={(e) => {props.handleFormSubmit(e)}}>
                <div className="form-input">
                        <input 
                            type="text"
                            name="addnote"
                            placeholder="Title" 
                            value={props.title}
                            onChange={(e) => {props.onChangeTitle(e.target.value)}}
                            />
                   </div>
                   <div className="form-input">
                        <textarea
                        value={props.note}
                            placeholder="Note...."
                            name="note" 
                            onChange={(e) => {props.onChangeNote(e.target.value)}}
                            rows="6"
                            cols="30s"
                            ></textarea>
                  </div>
                        <button type="submit" >Submit</button>
                   
            </form>
        </div>
    )
}
export default EditForm
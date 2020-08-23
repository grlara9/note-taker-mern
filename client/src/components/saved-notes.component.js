import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const SavedNotes  = props => {
    return (
        <div className="container">
            <div className="row">
                {props.notes.map(note => {
                    return (
                        <div className="card col-md-3">
                            <div className="card-header">
                                <h5>{note.title}</h5>
                            </div>
                            <div className="card-body " >
                                
                                <p className="card-text">{note.note}</p>
                                
                                <Link to={"/edit/"+note._id} ><button >Edit</button></Link>
                                
                                <a href="/"><button onClick={() => { props.delete(note._id) }}>Delete</button></a>
                                
                            </div>
                        
                        </div>
                    );                
                })} 
            </div>  
        </div>
        )
    } 
export default SavedNotes 
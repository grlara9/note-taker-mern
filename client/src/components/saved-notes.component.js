import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const SavedNotes  = props => {
    return (
        <div className="card">
            {props.notes.map(note => {
                
                return (
                    <div>
                        <div className="card-body" >
                            <h5 className="card-title">{note.title}</h5>
                            
                            <p className="card-text">{note.note}</p>
                            <Link to={"/edit/"+note._id} ><button >Edit</button></Link>
                            
                            <a href="/"><button onClick={() => { props.delete(props.note._id) }}>Delete</button></a>
                            
                        </div>
                    
                    </div>
                    );                
                })} 
            </div>  
        )
    } 
export default SavedNotes 
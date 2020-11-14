import React from 'react'
import { Link } from 'react-router-dom'

import './NoteList.css'
const NoteList  = props => {

    if (props.notes.length === 0){
        return (
            <div className="center">
            <h1>No Notes Found</h1>        
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                {props.notes.map(note => {
                    return (
                        <div className="card col-md-3" key={note._id} >
                           
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
export default NoteList
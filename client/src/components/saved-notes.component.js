import React, { Component } from 'react'

const SavedNotes  = props => {
    return (
        <div className="card">
            {props.notes.map(note => {
                return (
                    <div>
                        <div className="card-body" >
                            <h5 className="card-title">{note.title}</h5>
                            
                            <p className="card-text">{note.note}</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    
                    </div>
                    );                
                })} 
            </div>  
        )
    } 
export default SavedNotes 
import React, { Component } from 'react'
import FormAdd from '../components/new-note.component'
import axios from 'axios';
export default class AddNote extends Component {
    state={
        title:'',
        note:''

    }
   
    onChangeTitle= (value)=>{
        this.setState({
            title:value,
            
        })
    }

    onChangeNote= (value)=>{
        this.setState({
            
            note:value
        })
    }
    handleFormSubmit = (e) =>{
        e.preventDefault();
        const values = {
            title: this.state.title,
            note:this.state.note
        }
        axios.post('http://localhost:5000/api/addnote', values)
        .then(()=>{
            console.log("Data has been sent to the database")
            this.setState({
                title:'',
                note:''
            })
        })
        .catch(()=>{
            console.log("Internal server error")
        })
    }

    render() {
        return (
            <div>
                <FormAdd 
                onChangeTitle={this.onChangeTitle} 
                onChangeNote={this.onChangeNote}
                handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        )
    } 
}

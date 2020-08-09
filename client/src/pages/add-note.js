import React, { Component } from 'react'
import FormAdd from '../components/new-note.component'

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

    render() {
        return (
            <div>
                <FormAdd onChangeTitle={this.onChangeTitle} onChangeNote={this.onChangeNote}/>
            </div>
        )
    } 
}

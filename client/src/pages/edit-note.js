import React, { Component } from 'react'
import EditForm from '../components/edit-form.component'
import axios from 'axios';
export default class EditNote extends Component {
    constructor(props){
        super(props)
            this.state={
                title:'',
                note:'',
                msg:''
            }
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
                 <EditForm 
                onChangeTitle={this.onChangeTitle} 
                onChangeNote={this.onChangeNote}
                handleFormSubmit={this.handleFormSubmit}
                msg={this.state.msg}
                />    
            </div>
        )
    }
} 
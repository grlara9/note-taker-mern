import React, { Component } from 'react'
import EditForm from '../components/edit-form.component'
import axios from 'axios';
export default class EditNote extends Component {

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
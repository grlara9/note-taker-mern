import React, { Component } from 'react'
import FormAdd from '../components/new-note.component'

export default class AddNote extends Component {
    state={
        query:'',

    }
   
    onChange= (value)=>{
        this.setState({
            query:value
        })
    }


    render() {
        return (
            <div>
                <FormAdd onChange={this.onChange}/>
            </div>
        )
    } 
}

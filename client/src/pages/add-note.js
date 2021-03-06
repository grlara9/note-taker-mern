import React, { Component } from 'react'
import FormAdd from '../components/new-note.component'
import axios from 'axios';
export default class AddNote extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            note:'',
            msg:'',
            fields: {},
            errors: {}
        }

    }
    handleValidation=()=>{
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["addnote"]){
        formIsValid = false;
        errors["addnote"] = "Cannot be empty";
        }
        this.setState({errors: errors});
        return formIsValid;
  
    };
    
   
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
            this.setState({msg: 'Note added!'})
            this.setState({ 
                gitnote:'',
                title:'',
               
            })
        })
       
        .catch(()=>{
            this.setState({ msg: 'Internal server error'})
            
        })
    }

    render() {
        return (
            <div>
                <FormAdd 
                onChangeTitle={this.onChangeTitle} 
                onChangeNote={this.onChangeNote}
                handleFormSubmit={this.handleFormSubmit}
                msg={this.state.msg}
                />
            </div>
        )
    } 
}

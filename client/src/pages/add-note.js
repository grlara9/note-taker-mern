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
this.state = {
    fields: {},
    errors: {}
  }
}

handleValidation(){
  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

  //Name
  if(!fields["name"]){
    formIsValid = false;
    errors["name"] = "Cannot be empty";
  }

  if(typeof fields["name"] !== "undefined"){
    if(!fields["name"].match(/^[a-zA-Z]+$/)){
      formIsValid = false;
      errors["name"] = "Only letters";
    }      	
  }

  //Email
  if(!fields["email"]){
    formIsValid = false;
    errors["email"] = "Cannot be empty";
  }

  if(typeof fields["email"] !== "undefined"){
    let lastAtPos = fields["email"].lastIndexOf('@');
    let lastDotPos = fields["email"].lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
      formIsValid = false;
      errors["email"] = "Email is not valid";
    }
  }



  this.setState({errors: errors});
  return formIsValid;
}
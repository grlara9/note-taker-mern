import React, { Component } from 'react'
import axios from 'axios';
import NoteList from '../components/NoteList'

export default class AllNotes extends Component {
    constructor(props){
        super(props)
        this.state={
            notes:[]
        }
    }

componentDidMount(){
    axios.get('http://localhost:5000/api/')
        .then(response=>this.setState({notes:response.data}))
        .catch(err=>console.log(err))
    }

deletenote =(id)=>{
    axios.delete('http://localhost:5000/api/'+id)
        .then(promise => this.setState({
        notes: [...this.state.todos.filter(note => note._id ===! id)]
        })
    )
}

    render() { 
        return (
            <NoteList 
                notes={this.state.notes} 
                delete={this.deletenote} 
            />
         )
    }
}

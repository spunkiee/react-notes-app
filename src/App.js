import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CreateNotes from "./components/CreateNotes"
import Notes from './components/Notes';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      notes:[],
      currentNote: {
        title:'',
        content:'',
        key: ''
      }
    }
  }
  
  addNote = (e) => {
    e.preventDefault();
    const newNote = this.state.currentNote;
    console.log(newNote);

    if(newNote.title !== " "){
      const notes = [...this.state.notes, newNote];

      this.setState({
        notes: notes,
        currentNote: {
          title: '',
          content: ''
        }
      })
    }
    console.log(newNote)
  }

  deleteNote = (key) => {
    const filterNotes = this.state.notes.filter(note => note.key !== key);

    this.setState({
      notes: filterNotes
    })
  }

  editNote = (key) => {
    
  }

  handleNoteTitle = (e) => {
    this.setState({
      currentNote: {
        title: e.target.value,
        content: this.state.currentNote.content,
        key: Date.now()
      }
    })
    console.log(e.target.value)
  }

  handleNoteContent = (e) => {
    this.setState({
      currentNote: {
        title: this.state.currentNote.title,
        content: e.target.value,
        key: this.state.currentNote.key
      }
    })
  }

  setUpdateTitle = (value, key) => {
    const notes = this.state.notes;
    notes.map(note => {
      if(note.key === key) {
        note.title = value;
      }
    })
    this.setState({
      notes:notes,
    })
  }

  setUpdateContent = (value, key) => {
    const notes = this.state.notes;
    notes.map(note => {
      if(note.key === key) {
        note.content = value;
      }
    })
    this.setState({
      notes:notes,
    })
  }

  render() {
    return (
      <>
        <Header />
        <hr></hr>
        <Sidebar />
        <CreateNotes currentNote={this.state.currentNote} addNote={this.addNote} handleNoteTitle={this.handleNoteTitle} handleNoteContent={this.handleNoteContent} />
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} editNote= {this.editNote} setUpdateTitle={this.setUpdateTitle} setUpdateContent={this.setUpdateContent}/>
      </>
    );
  }
}

export default App; 
import React, { Component } from 'react'
import './CreateNotes.css'
import plus from "./plus.png"

export default class CreateNotes extends Component {
    render() {
        return (
            <div className="create-form">
                <form className="create-note" onSubmit={this.props.addNote}>
                    <input className="input-field" type="text" name="title" placeholder="Title" onChange={this.props.handleNoteTitle} value={this.props.currentNote.title}/>
                    <textarea className="text-area" placeholder="Take a note..." onChange={this.props.handleNoteContent} value={this.props.currentNote.content}/>
                    <button className="add-button"><img src={plus} width="20" height="20" /></button>
                </form> 
            </div>
        )
    }
}
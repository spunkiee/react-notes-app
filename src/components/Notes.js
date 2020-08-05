import React, { Component } from 'react'
import "./Notes.css"
import Edit from "./edit1.png"
import Delete from "./delete.png"
import FlipMove from 'react-flip-move';

export default function Notes(props) {
    const notes = props.notes;
    const listNotes = notes.map (notes => {
        return <div className="note-card" key="notes.key">
            <div className="note-container">
                <h4 className="note-title">
                    <input className="input-field" type="text" id={notes.key} value={notes.title} onChange={(e) => { props.setUpdateTitle(e.target.value, notes.key) }} />
                </h4>
                <p className="note-content">
                    <textarea className="text-area" type="text" id={notes.key} value={notes.content} onChange={(e) => { props.setUpdateContent(e.target.value, notes.key) }} />    
                </p>
                <div className="buttons">
                    {/* <button className="edit-button" onClick={() => { props.editNote(notes.key) }}><img src={Edit} width="20" height="20" /></button> */}
                    <button className="delete-button" onClick={() => { props.deleteNote(notes.key) }}><img src={Delete} width="20" height="20" /></button>
                </div>
            </div>
        </div>
    })

    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listNotes}
            </FlipMove>
        </div>
    )
}

import React, { Component } from 'react'
import "./SidebarMenu.css"

const NotesColor = (val) => {
    return (val === "Notes")
}

const NotesHover = (val) => {
    return (val === "Notes")
}

export default class SidebarMenu extends Component {
    render() {
        return (
            <div className={`side-bar-menu ${NotesColor(this.props.name) ? "notes-color" : null} ${NotesHover(this.props.name) ? null : "notes-hover"}`}>
                <img alt="side-bar-menu" src={this.props.img} width="25" height="25" className="image"/>
                <span className="text">{this.props.name}</span>
            </div>
        )
    }
}

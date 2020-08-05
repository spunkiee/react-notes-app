import React from 'react'
import SidebarMenu from './SidebarMenu'
import NotesImage from './notes.png'
import ReminderImage from './reminder.png'
import EditImage from './edit.png'
import ArchiveImage from './archive.png'
import TrashImage from './trash.png'

export default function Sidebar() {
    return (
        <div className="side-bar">
            <SidebarMenu name={"Notes"} img={NotesImage}/>
            <SidebarMenu name={"Reminders"} img={ReminderImage}/>
            <SidebarMenu name={"Edit labels"} img={EditImage}/>
            <SidebarMenu name={"Archive"} img={ArchiveImage}/>
            <SidebarMenu name={"Trash"} img={TrashImage}/>
        </div>
    )
}
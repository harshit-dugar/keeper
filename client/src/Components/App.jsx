import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Note';
import CreateArea from "./CreateArea";
import axios from 'axios';

function App(){
    const [notes, setNotes] = React.useState([])

    function addNote(newNote){
        setNotes((prevNotes)=>{
            return [...prevNotes, newNote]
        })
        axios.post('http://localhost:3001/add', newNote)
    }
    React.useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then((response)=>{
            setNotes(response.data);
        }
        )
    })
    function deleteNote(id){
        setNotes((prevNotes)=>{
            return prevNotes.filter((noteContent, index)=>{
                return index !== id;
            })
        })
        axios.post('http://localhost:3001/delete',{title:notes[id].title,content:notes[id].content})
    }
    return (
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
            {notes.map((noteContent,index)=>
                 (
                    <Notes 
                        key={index}
                        id={index}
                        title={noteContent.title}
                        content={noteContent.content}
                        onDelete={deleteNote}
                    />
                )
            )}
            <Footer />
        </div>
    );
}

export default App;
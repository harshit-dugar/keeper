import React from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    })
    function handleChange(event){
        const {name, value} = event.target;
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]: value
            }
        })
    }
    function submitNote(event){
        event.preventDefault();//prevents the page from refreshing
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        // console.log(note);
    }
  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={submitNote}>
            <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
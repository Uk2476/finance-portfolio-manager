import mongoose from "mongoose";

const NoteScheme = new mongoose.Schema({
    name : {
        type: String ,
        required : true,
    },
    type : {
        type :String ,
        required : true,
    },
    amount : {
        type : Number ,
        required : true,
    }
})

const Note = mongoose.model("Note" , NoteScheme);

export default Note;
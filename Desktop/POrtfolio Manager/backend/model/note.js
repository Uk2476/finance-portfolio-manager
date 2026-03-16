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
    BuyingAmount : {
        type : Number ,
        required : true,
    },
    SellingAmount : {
        type : Number ,
        required : true,
    }

}, {timestamps : true})

const Note = mongoose.model("Note" , NoteScheme);

export default Note;
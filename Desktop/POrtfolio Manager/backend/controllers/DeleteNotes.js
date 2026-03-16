import Note from '../model/note.js';

async function Deletenotes(req , res) {
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote){
            return res.status(404).json({ msg : "Note not found" });
        }
        res.status(200).json({ msg : "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete note' });
    }
}

export default Deletenotes;
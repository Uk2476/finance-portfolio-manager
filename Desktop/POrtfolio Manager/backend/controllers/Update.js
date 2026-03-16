import Note from '../model/note.js';

export async function UpdateNote (req, res) {
    try {
        const {name , type , BuyingAmount} = req.body;
        const updateNote = await Note.findByIdAndUpdate(req.params.id , {name, type, BuyingAmount} , { new : true });
        if(!updateNote){
            return res.status(400).json({ msg : "Note not updated" });
        }
        res.status(201).json({ msg : "Note updated successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update note' });
    }
}

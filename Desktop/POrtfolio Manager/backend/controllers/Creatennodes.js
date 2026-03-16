import Note from '../model/note.js';

async function Creatennodes(req, res) {
  try {
    const { name , type , BuyingAmount} = req.body;
    const NewNote = new Note({ name, type, BuyingAmount });
    if(!NewNote){
      res.status(400).json({ msg : "Note not found" });
    }
    await NewNote.save();
    res.status(201).json({ message: 'Node created successfully' });
  } catch (error) {
    console.error("error in creatennodes function" , error);
    res.status(500).json({ error: 'Failed to create node' });
  }
}

export default Creatennodes;


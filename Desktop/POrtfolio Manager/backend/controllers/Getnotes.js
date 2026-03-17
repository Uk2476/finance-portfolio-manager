import  db  from "../config/firebase.js";

async function Getnotes (req , res) {
    try {
        const Snapshot = await db.collection("portfolios").get();
        const data  = Snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch notes' });
        console.error("Error fetching notes:", error);
    }
}

export default Getnotes;




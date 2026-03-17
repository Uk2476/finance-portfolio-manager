import  db  from "../config/firebase.js";

async function UpdateSellingAmount (req, res) {
    try {
        const{ SellingAmount} = req.body;        
        if(req.body.SellingAmount === undefined){
            return res.status(400).json({ msg : "Selling amount is required" });
        }
        await db.collection("portfolios").doc(req.params.id).update({
            SellingAmount : SellingAmount,
            updatedAt: new Date()
        });
        res.status(201).json({ msg : "Note updated successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update note' });
    }
}

export default UpdateSellingAmount;

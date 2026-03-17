import db from "../config/firebase.js";

async function Creatennodes(req, res) {
  try {
    const { name , type , BuyingAmount} = req.body;

    if (!name || !type || !BuyingAmount) {
      return res.status(400).json({ error: 'Missing required fields' });
   }

    await db.collection("portfolios").add({
      name : name,
      type : type,
      BuyingAmount : BuyingAmount,
      SellingAmount: 0,             
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.status(201).json({ message: 'Node created successfully' });
  } catch (error) {
    console.error("error in creatennodes function" , error);
    res.status(500).json({ error: 'Failed to create node' });
  }
}

export default Creatennodes;


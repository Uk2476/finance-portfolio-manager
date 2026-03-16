import { useState } from "react"
import { Navigate } from "react-router";


const CreatePage = () => {
  const [ name , setName] = useState("");
  const [ type , setType] = useState("");
  const [ BuyingAmount , setBuyingAmount] = useState(0);

  const handleSubmit = async (e) =>{
    e.preventDefault;

    if(!name || !type || !BuyingAmount){
      alert("Please fill all the fields");
      return;
    }

    try {

      await axios.post("http://localhost:5001/api/portfolio", {
        name,
        type,
        BuyingAmount
      });
      alert("Note created successfully");
      Navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to create note");
    }
  }


  return (  
    <div>
      CreatePage
    </div>
  )
}

export default CreatePage

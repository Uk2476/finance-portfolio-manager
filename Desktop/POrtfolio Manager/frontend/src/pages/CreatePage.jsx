import { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router";
import axios from "axios";


const CreatePage = () => {
  const [ name , setName] = useState("");
  const [ type , setType] = useState("");
  const [ BuyingAmount , setBuyingAmount] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!name || !type || !BuyingAmount){
      alert("Please fill all the fields");
      return;
    }

    try {

      await axios.post("https://finance-portfolio-manager.onrender.com/api/portfolio", {
        name,
        type,
        BuyingAmount
      });
      alert("Purchase created successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to create purchase",error);
    }
  }


  return (  
    <div className="min-h-screen flex items-center  justify-center">
      <div className= "container mx-auto px-4, py-8 ">
        <div className= "max-w-xl mx-auto bg-lime-100 rounded-lg shadow-md" >
          <Link to={"/"} className=" btn btn-ghost bg-stone-200 mb-4 ml-1 mt-1">
            Back to Home
          </Link>
          <div className="card ">
            <div className="card-body">
              <h2 className ="card-title mb-4 text-2xl">Add new purchase</h2>
              <form onSubmit = {handleSubmit } >
                <div className="form-control mb-3 shadow-sm">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-control mb-3 ">
                  <label htmlFor="type">Type</label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value = {type}
                    onChange = {(e) => setType(e.target.value)}
                  />  
                </div>
                <div className="form-control mb-3 ">
                  <label htmlFor="BuyingAmount">Buying Amount</label>
                  <input
                    type="number"
                    className="input input-bordered"
                    value = {BuyingAmount}
                    onChange = {(e) => setBuyingAmount(e.target.value)}
                  />  
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Create purchase
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage

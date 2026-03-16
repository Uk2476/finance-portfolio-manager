import {useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";

const SellingInfoPage = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [BuyingAmount, setBuyingAmount] = useState("");
    const [SellingAmount, setSellingAmount] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();

        try {
            if(!SellingAmount.trim()){
                alert("Please fill the selling amount");
                return;
            }
        
            await axios.put(`http://localhost:5001/api/portfolio/selling/${id}`, {
                SellingAmount
            });
            alert("Selling amount updated successfully");
            navigate("/pastholdings")
        } catch (error) {
            console.error(error);
            alert("Failed to update selling amount");
        }
    } 

  return (
    <div  className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-xl mx-auto bg-orange-100 rounded-lg shadow-md p-6">
                <Link to="/" className="btn btn-ghost bg-stone-200 mb-4 ml-1 mt-1">Back to Home</Link>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title mb-4 text-2xl">Sold</h2>
                        <form onSubmit={update}>
                            <div className="form-control mb-3 shadow-sm">
                                <label htmlFor="SellingAmount">Selling Amount</label>
                                <input
                                    type = "number"
                                    placeholder="Enter amount"
                                    value = {SellingAmount}
                                    onChange={(e) => setSellingAmount(e.target.value)}
                                    className="input input-bordered"
                                />
                            </div> 
                            <button type="submit" className="btn btn-primary mt-4">Update</button>
                        </form>    
                   </div>
                </div>                
            </div>
        </div>          
    </div>
  )
}

export default SellingInfoPage

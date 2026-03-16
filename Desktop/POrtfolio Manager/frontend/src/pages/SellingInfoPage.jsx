import {useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

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
    <div>
      
    </div>
  )
}

export default SellingInfoPage

import { useState,useEffect } from "react";
import axios from "axios";
import SoldCard from "../components/SoldCard";
import { Link } from "react-router";

const PastHolding = () => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHoldings = async() => {
    try {
      const res = await axios.get("http://localhost:5001/api/portfolio");
      setHoldings(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch past holdings", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchHoldings();
  }, []);

  return (
    <div className="min-h-screen ">
      <h1 className="text-4xl font-bold mb-4 mt-4 ml-4">Past Holdings</h1>
      <Link to="/" className="btn btn-ghost bg-stone-200 mb-4 ml-4 mt-1">
        Back to Home
      </Link>
      <div className="max-w-7xl mx-auto p-4 mb-6 ">
        {holdings.length>0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holdings.map((note) => (
              note.SellingAmount != 0 &&
                <SoldCard key={note._id} holding={note} />
            ))}
          </div>
        )}
      </div>   
    </div>
  )
}

export default PastHolding

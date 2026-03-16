import { useState,useEffect } from "react";
import axios from "axios";

const PastHolding = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async() => {
    try {
      const res = await axios.get("http://localhost:5001/api/portfolio");
      setNotes(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch past holdings", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);
  
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto p-4 mb-6 bg-black">
        {}
      </div>   
    </div>
  )
}

export default PastHolding

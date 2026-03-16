import { useState,useEffect } from "react";
import axios from "axios";
import SoldCard from "../components/SoldCard";

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
      <div className="max-w-7xl mx-auto p-4 mb-6 ">
        {notes.length>0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
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

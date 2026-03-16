import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router";

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNotes = async() =>{
        try {
            const res = await res.axios.get("http://localhost:5001/api/portfolio");
            setNotes(res.data);
            console.log(res.data);
        }
        catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchNotes();
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default HomePage

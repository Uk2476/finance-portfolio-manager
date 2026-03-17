import { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNotes = async() =>{
        try {
            const res = await axios.get("https://finance-portfolio-manager.onrender.com/api/portfolio");
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
        <div className = "min-h-screen">
            <div className = "max-w-7xl mx-auto p-4 mt-6">
                {loading && <div className = "text-center text-primary py-10">Loading...</div>}
                {notes.length>0 && (
                    <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map((note) => (
                            note.SellingAmount === 0 &&
                                <NoteCard key={note.id} note={note} />
                        ))}
                    </div>
                )}
            </div>
        </div>  
    )
}

export default HomePage

import { formatDate } from "../lib/utils";
import { Link } from "react-router";

const NoteCard = ({ note}) => {


  return (
    <Link
      to={`/sellinginfo/${note._id}`}
      className="card bg-white shadow-md rounded-lg hover:shadow-lg "
     >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.name}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.type}</p>
        <p className="text-base-content/70 line-clamp-3">Bought At : {note.BuyingAmount} rupees</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>

        </div>
      </div>
    </Link>
  );
};
export default NoteCard;
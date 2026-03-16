import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-10xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-primary font-mono tracking-tight">Portfolio</h1>
          <div className="flex items-left gap-5">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>Add Holding</span>
            </Link>
            <Link to={"/pastholdings"} className="btn btn-primary">
              <span>Past Holdings
              </span>
            </Link>           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
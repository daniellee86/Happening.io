//NEXT IMPORTS
import Link from "next/link";
//ICON IMPORTS
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav
      id="nav-container"
      className=" py-2 flex justify-center border-b-2 border-slate-300 "
    >
      <div
        id="nav-item-wrapper"
        className="flex items-center justify-between min-w-1/2"
      >
        <button className="nav-button group">
          {" "}
          <Link href="/">
            <AiOutlineHome className="nav-item" />
          </Link>
        </button>
        <button className="nav-button group">
          {" "}
          <Link href="/event-list">
            <AiOutlineCalendar className="nav-item" />
          </Link>
        </button>
        <button className="group nav-button bg-purple-500 hover:bg-purple-700 rounded-full">
          {" "}
          <Link href="/create-event">
            <AiOutlinePlus className="nav-item group-hover:fill-white" />
          </Link>
        </button>
        <button className="nav-button group">
          {" "}
          <Link href="/">
            <AiOutlineBell className="nav-item" />
          </Link>
        </button>
        <button className="nav-button group">
          {" "}
          <Link href="/">
            <AiOutlineUser className="nav-item" />
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

AiOutlineBell;

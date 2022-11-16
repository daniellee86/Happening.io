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
      className=" py-2 flex justify-center bg-primaryOne/90 h-[7vh] "
    >
      <div
        id="nav-item-wrapper"
        className="flex items-center justify-between min-w-1/2"
      >
        <Link href="/">
          <button className="nav-button group">
            <AiOutlineHome className="nav-item" />
          </button>
        </Link>
        <Link href="/event-list">
          <button className="nav-button group">
            <AiOutlineCalendar className="nav-item" />
          </button>
        </Link>
        <Link href="/create-event">
          <button className="group nav-button bg-gradient-to-r from-primaryThree to-primaryFour hover:from-primaryTwo hover:to-primaryTwo rounded-full">
            <AiOutlinePlus className="w-5 h-5 fill-white" />
          </button>
        </Link>
        <Link href="/">
          <button className="nav-button group">
            <AiOutlineBell className="nav-item" />
          </button>
        </Link>
        <Link href="/">
          <button className="nav-button group">
            <AiOutlineUser className="nav-item" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

AiOutlineBell;

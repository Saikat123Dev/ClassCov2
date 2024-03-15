import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";


const Home = () => {
  const menus = [
    { name: "Overview", link: "/", icon: MdOutlineDashboard },
    { name: "Class Schedule", link: "/", icon: AiOutlineUser },
    { name: "Grades Overview", link: "/", icon: FiMessageSquare },
    { name: "Attendence", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "Class Notes", link: "/", icon: FiFolder },
    { name: "Settings", link: "/", icon: FiShoppingCart },
    { name: "Logout", link: "/", icon: AiOutlineHeart, margin: true },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      
<div className="grid grid-cols-2 grid-rows-5 gap-4 w-full h-screen">
    <div className="col-start-1 row-start-1 bg-lime-600" >1</div>
    <div className="col-start-1 row-start-2 bg-red-300">2</div>
    <div className="col-start-1 row-start-3 bg-green-500">3</div>
    <div className="col-start-1 row-start-4 bg-pink-500">4</div>
    <div className="col-start-1 row-start-5 bg-blue-600">5</div>
    <div className="col-start-2 row-start-1 bg-violet-600">6</div>
    <div className="col-start-2 row-start-2 bg-amber-400">7</div>
    <div className="col-start-2 row-start-3 bg-teal-900">8</div>
    <div className="col-start-2 row-start-4 bg-slate-100">9</div>
</div>
    
  
    </section>
  );
};

export default Home;

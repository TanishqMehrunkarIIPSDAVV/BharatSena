import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SideIcons = () => {
    return (
        <div className="fixed top-[70px] left-0 z-[1] backdrop-blur-[10px] ml-[20px] mt-[25px] flex flex-col items-center">
            {/* Top Divider */}
            <div className="w-[3px] h-[200px] bg-white"></div>

            {/* Icons */}
            <FaInstagram className="font-black text-3xl mt-[20px] hover:cursor-pointer hover:text-orange-800 hover:scale-125 transition-transform duration-300" />
            <FaFacebook className="font-black text-3xl mt-[20px] hover:cursor-pointer hover:text-blue-700 hover:scale-125 transition-transform duration-300" />
            <FaYoutube className="font-black text-3xl mt-[20px] hover:cursor-pointer hover:text-green-800 hover:scale-125 transition-transform duration-300" />

            {/* Bottom Divider */}
            <div className="w-[3px] h-[200px] bg-white mt-[20px]"></div>
        </div>
    );
};

export default SideIcons;

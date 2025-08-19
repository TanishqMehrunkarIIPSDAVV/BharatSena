import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SideIcons=()=>
{
    return(
        <div className="fixed top-[70px] left-0 z-[1] backdrop-blur-[10px] ml-[20px] mt-[25px]">
            <div className="ml-[13px] w-[3px] h-[200px] bg-white"></div>
            <FaInstagram className="font-black text-3xl mt-[20px] hover:cursor-pointer"/>
            <FaFacebook className="font-black text-3xl mt-[20px] hover:cursor-pointer"/>
            <FaYoutube className="font-black text-3xl mt-[20px] hover:cursor-pointer"/>
            <div className="ml-[13px] w-[3px] h-[200px] bg-white mt-[20px]"></div>
        </div>
    );
}

export default SideIcons;
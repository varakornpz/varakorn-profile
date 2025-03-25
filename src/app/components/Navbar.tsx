
import { BiHomeAlt ,  BiIdCard } from "react-icons/bi";

import CustomLink from './CustomLink';

export default ()=>{
    return(
        <div className="flex flex-row justify-center animate-fade-in-up z-50">
            <nav className="z-50 fixed backdrop-blur-md  flex flex-row border-emerald-400 border-2 w-fit border-green-white rounded-lg px-2 py-1 top-5">
                <CustomLink to="/" icon={<BiHomeAlt/>}>Home</CustomLink>
                <CustomLink to="/about" icon={< BiIdCard/>}>About</CustomLink>
            </nav>
        </div>
    )
}
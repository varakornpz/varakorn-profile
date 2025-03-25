
// import { BiHomeAlt ,  BiIdCard } from "react-icons/bi";

// import CustomLink from './CustomLink';

// export default ()=>{
//     return(
//         <div className="fixed flex items-center flex-row justify-center animate-fade-in-up z-50">
//             <nav className="fixed backdrop-blur-md  flex flex-row border-emerald-400 border-2 w-fit border-green-white rounded-lg px-2 py-1 top-5">
//                 <CustomLink to="/" icon={<BiHomeAlt/>}>Home</CustomLink>
//                 <CustomLink to="/about" icon={< BiIdCard/>}>About</CustomLink>
//             </nav>
//         </div>
//     )
// }

import { BiHomeAlt, BiIdCard } from "react-icons/bi";
import CustomLink from "./CustomLink";
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="nav-fade-in-up fixed top-6 left-1/2 transform -translate-x-1/2 backdrop-blur-md border-emerald-400 border-2 rounded-lg px-2 py-1 flex flex-row gap-4 z-50">
      <CustomLink to="/" icon={<BiHomeAlt />}>Home</CustomLink>
      <CustomLink to="/about" icon={<BiIdCard />}>About</CustomLink>
    </nav>
  );
};

export default Navbar;


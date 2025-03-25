import { BiLogoGithub ,  BiLogoInstagramAlt } from "react-icons/bi";

export default ()=>{
    return(
        <div className="text-white flex flex-row sm:pl-0 pl-2">
            <a href="https://github.com/varakornpz" target="_blank" className="flex flex-row items-center p-2">
                <div className="sm:text-3xl text-2xl">
                    <BiLogoGithub/>
                </div>
                <p className="sm:text-xl sm:pl-2">Github</p>
            </a>
            <a href="https://www.instagram.com/pleum_ppez" target="_blank" className="flex flex-row items-center p-2">
                <div className="sm:text-3xl text-2xl">
                    <BiLogoInstagramAlt/>
                </div>
                <p className="sm:text-xl sm:pl-2">Instagram</p>
            </a>
        </div>
    )
}

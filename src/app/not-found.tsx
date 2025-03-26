import Link from "next/link"

export default function Custom404 (){
    return(
        <div className="bg-black h-screen">
            <div className="flex flex-col items-center">
                <h1 className="text-white font-semibold sm:text-2xl sm:mt-[15%] mt-[60%] text-center">
                    "Oops! Looks like you took a wrong turn. 🚀"
                </h1>
                <h2 className="text-white sm:text-xl  mt-7 text-center">
                    "This page is lost in space... but don't worry, you can always beam back home!"
                </h2>
                <Link className="text-white mt-7 border-2 bg-cyan-300 bg-opacity-10 px-3 py-2 rounded-lg border-sky-500 " href={"/"}>
                    "Return to Home 🛸"
                </Link>
            </div>
        </div>
    )
}
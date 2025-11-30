import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link"

type StackName = 
    | "react"
    | "next"
    | "elysia"
    | "sveltekit"
    | "tailwind"


const stackImage = {
    "react" : "" ,
    "next" : "" ,
    "elysia" : "" ,
    "sveltekit" : "" ,
    "tailwind" : ""
}

type Props = {
    name : string ,
    title : string ,
    image : string ,
    stackName : StackName[] ,
    link : string | null ,
    scale? : 75 | 100 | 125 | 150
}

export default function ProjectCaed(props : Props){
    const {name , title , image , stackName , link , scale = 100} = props
    return(
        // <div className="bg-white w-[25vw] h-[30vh] rounded-md flex flex-row items-center">
        //     <div className="w-[13vw] h-[29vh] ml-1 relative overflow-hidden rounded-md">
        //         <Image
        //             src={"https://media.thairath.co.th/image/a5HOutp1V22x5itXrQNzxdcxXTdpx9Y07mpRTTPa7KYw3ke9vA1.png"}
        //             fill
        //             alt={name}
        //             className="object-cover"
        //         />
        //     </div>
        //     <div className="ml-2">
        //         <h1>Heeeeeeee</h1>
        //     </div>
        // </div>
         
        // <div className="bg-white border-green-500 text-white w-[25vw] h-[23vh] flex flex-col rounded-b-md">
        //     <div className="w-[25vw] h-[20vh] overflow-hidden relative rounded-t-md -inset-y-3">
        //         <Image
        //             src={"https://media.thairath.co.th/image/a5HOutp1V22x5itXrQNzxdcxXTdpx9Y07mpRTTPa7KYw3ke9vA1.png"}
        //                 fill
        //                 alt={name}
        //                 className="object-cover"
        //             />
        //     </div>
        //     <div className="bg-gray-800 pl-2 pb-2">
        //         <h1 className="font-semibold">{name}</h1>
        //         <p>{title}</p>
        //     </div>
        // </div>

        <div className="md:w-[25vw] w-[85vw] h-fit">
            <div className="h-[25vh] relative overflow-hidden rounded-md">
                <Image
                    src={image}
                    fill
                    alt={name}
                    className={`object-cover object-top origin-top-left scale-${scale}`}
                    
                />
            </div>
            <div className="text-white">
                <h1 className="font-semibold">{name}</h1>
                <p>{title}</p>
                {typeof(link) == "string" ? <Link target="_blank" href={link}><span className="inline-flex items-center gap-1 font-bold underline   ">Visit<FaExternalLinkAlt/></span></Link> : null}
            </div>
        </div>
    )
}
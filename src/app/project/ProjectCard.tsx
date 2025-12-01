import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link"

type StackName = 
    | "react"
    | "next"
    | "elysia"
    | "svelte"
    | "sveltekit"
    | "tailwind"
    | "stripe"


const stackImage: Record<StackName, string> = {
    "react" : "/stack_icon/react.svg" ,
    "next" : "/stack_icon/next.svg" ,
    "elysia" : "/stack_icon/elysia.svg" ,
    "sveltekit" : "/stack_icon/svelte.svg" ,
    "tailwind" : "/stack_icon/tailwind.svg" ,
    "svelte" : "/stack_icon/svelte.svg" ,
    "stripe" : "/stack_icon/stripe.svg"
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
    const loadStack = ()=>{
        for (let i = 0 ; i < stackName.length ; i++){
            try{
                return `/stack_icon/${stackName[i]}.svg`
            }
            catch{
                return
            }
        }
    }
    return(

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
                <div className="flex flex-row gap-3">
                    {stackName.map((stack)=>(
                        <Image
                            key={stack}
                            src={stackImage[stack]}
                            width={24}
                            height={24}
                            alt={stack}
                            
                        />
                    ))}
                </div>
                {typeof(link) == "string" ? <Link target="_blank" href={link}><span className="inline-flex items-center gap-1 font-bold underline   ">Visit<FaExternalLinkAlt/></span></Link> : null}
            </div>
        </div>
    )
}
'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"

type Props = {
    to : string ,
    // activepath : string | undefined,
    icon : React.ReactNode ,
    children : React.ReactNode
}
export default (props : Props)=>{
    const pathname = usePathname()
    const {to  , icon , children} = props
    return(
        <Link className={`flex flex-row items-center p-2 ${pathname === to ? 'text-green-400' : 'text-white'} `} href={to}>
            <div className="text-2xl">
                    {icon}
            </div>
            <p className="pl-2">{children}</p>
        </Link>
    )
}
import BasicInfo from "./BasicInfo"
import { Metadata } from "next"
import PremierProSVG from '@/../public/premiere.svg'


export const metadata: Metadata = {
    title: "Varakorn Kaewmanee",
    description: "created by my self",
    openGraph : {
        images : ""
    }
};

export default ()=>{
    return(
        <div className="h-screen bg-gray-900">

            <div>
                <BasicInfo/>
            </div>
        </div>
    )
}
import React from 'react'
import Image from 'next/image'
type Props = {}

export default function Other({}: Props) {
  return (
        <div className="text-white grid md:grid-cols-10 grid-cols-3 gap-02 w-fit pl-0 md:border-0 border rounded-md md:pt-0 pt-2 md:bg-gray-900 bg-slate-900">
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/ubuntu.svg"} alt='react' width={100} height={100}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>ubuntu</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/c.svg"} alt='react' width={100} height={100}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>c</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/cplusplus.svg"} alt='react' width={100} height={100}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>c++</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-16 w-10' src={"/csharp.svg"} alt='react' width={100} height={100}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>c#</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/python.svg"} alt='react' width={100} height={100}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>python</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/premiere.svg"} alt='react' width={100} height={100}></Image>
                  <h2 className='md:text-sm  font-bold capitalize pt-2 text-center'>adobe premierepro</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/aftereffects.svg"} alt='react' width={100} height={100}></Image>
                  <h2 className='md:text-sm  font-bold capitalize pt-2 text-center'>adobe aftereffect</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/photoshop.svg"} alt='react' width={100} height={100}></Image>
                  <h2 className='md:text-sm  font-bold capitalize pt-2 text-center'>adobe photoshop</h2>
                </div>
    </div>
  )
}

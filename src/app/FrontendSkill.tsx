import React from 'react'
import Image from 'next/image'
type Props = {}

export default function ({}: Props) {
  return (
        <div className="text-white grid md:grid-cols-10 grid-cols-3 gap-02 w-fit pl-0 md:border-0 border rounded-md md:pt-0 pt-2 md:bg-gray-900 bg-slate-900">
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/javascript.svg"} alt='react' width={100} height={100}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>javascript</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/typescript.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>typescript</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/react.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>react</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/redux.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>redux</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/tailwind.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>tailwind</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/bootstrap.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>bootstrap</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='md:w-12 w-8' src={"/bulma.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>bulma</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='bg-white pl-1 md:w-12 w-8' src={"/ne.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>Ne</h2>
                </div>
              </div>
  )
}
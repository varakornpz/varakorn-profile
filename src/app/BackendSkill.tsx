import React from 'react'
import Image from 'next/image'
type Props = {}

export default function backendSkill({}: Props) {
  return (
        <div className="text-white grid md:grid-cols-10 grid-cols-3 gap-02 w-fit pl-0 md:border-0 border rounded-md md:pt-0 pt-2 md:bg-gray-900 bg-slate-900">
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='bg-white px-1 md:w-12 w-8' src={"/xt.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>xt.js</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='w-16' src={"/nodejs.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>node.js</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='bg-white py-0 px-2 w-16' src={"/express.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>express</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='w-16' src={"/prisma.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>Prisma</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='w-16' src={"/mysql.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>mysql</h2>
                </div>
                <div className="flex flex-col md:border border-slate-500  justify-center items-center w-auto px-6 py-4 text-sm">
                  <Image className='w-12' src={"/supabase.svg"} alt='react' width={40} height={40}></Image>
                  <h2 className='md:text-base  font-bold capitalize pt-2'>supabase</h2>
                </div>
              </div>
  )
}
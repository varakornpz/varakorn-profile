import SocialMedia from "./SocialMedia";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Varakorn Kaewmanee",
  description: "created by my self",
  openGraph : {
      images : ""
  }
};

export default function Home() {
  return (
    <>
    <main className="">
      <div className="bg-gray-900 h-screen flex pb-28 flex-col" id="sec1 scroll-smooth">
        <div className="sm:my-14 sm:pt-20 pt-16 mt-6 sm:ml-36 text-white sm:text-4xl">
          <h1 className='sm:text-6xl text-4xl sm:pl-0 pl-5 font-bold'>Guess <span className='sm:hidden bg-gradient-to-r text-transparent bg-clip-text from-white to-green-300'>what?</span><span className='sm:inline hidden'>What?</span></h1>
            <div className="flex sm:pl-0 pl-5 sm:flex-row flex-col sm:gap-2 gap-0">
                <h1 className='sm:text-6xl text-4xl'>I'm</h1>
                <h1 className="font-bold sm:pl-0 pl-0 sm:text-6xl text-4xl bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">Varakorn Kaewmanee</h1>
            </div>
          <h1 className='sm:pl-0 pl-5'>and I did absolutely nothing. o(*￣︶￣*)o</h1>
          <div className="mt-4">
            <SocialMedia/>
          </div>
        </div>

        <div>
          <div className='absolute sm:top-28 top-10 left-3/4 sm:w-60 sm:h-60 w-24 h-24 bg-blue-400 rounded-full  filter blur-3xl mix-blend-normal opacity-30 move1'></div>
          <div className='absolute sm:top-28 top-10 left-2/3 sm:w-60 sm:h-60 w-24 h-24 bg-cyan-300  rounded-full filter blur-3xl mix-blend-normal  opacity-30 move2'></div>
        </div>


      
{/* 
        <div className="sm:mt-0 mt-4 sm:ml-36 ml-5 flex flex-col sm:w-auto w-11/12">
          <div className='bg-slate-900 w-fit px-6 py-4 border border-solid rounded-sm border-slate-500'>
            <h1 className="text-white sm:text-2xl text-xl font-bold">About Me</h1>
            <div className="text-white sm:text-xl text-base italic pl-5 flex flex-col gap-3">
              <h2>{"> I study in grade 12 at Surat Thani School."}</h2>
              <h2>{"> I like to code in my free time."}</h2>
            </div> 
          </div>
        </div> */}


          {/* <h1 className="text-white sm:text-2xl text-xl mt-6">My Skills</h1>
          <div className="text-xl italic sm:pl-5 pl-2 flex flex-col sm:mt-4 mt-1 gap-3">
              <h1 className='text-white font-bold'>Frontend</h1>
              <FrontendSkill/>
              <h1 className='text-white font-bold'>Backend</h1>
              <BackendSkill/>
              <h1 className='text-white font-bold'>Others</h1>
              <Other/>
          </div> */}



          {/* <div className='flex flex-col justify-center items-center mt-20'>
            <h1 className='text-xl font-bold text-white'>Contact</h1>
            <div className='flex flex-row text-slate-300 gap-1'>
              <p>Email :</p>
              <p>varakorn2324@gmail.com</p>
            </div>
            <div className='flex flex-row text-slate-300 gap-1'>
              <p>Facebook :</p>
              <a className='text-sky-500' href="https://www.facebook.com/profile.php?id=100029589252616" target='_blank'>Pleum Varakorn</a>
            </div>
          </div> */}

      </div>
      
      <div>

      </div>

    </main>
    </>
  );
}

import FrontendSkill from './FrontendSkill';

import BackendSkill from './BackendSkill';

import Other from './Other';
export default function Home() {
  return (
    <main className="">
      <div className="bg-gray-900 h-fit flex pb-28 flex-col" id="sec1 scroll-smooth">
        <div className="md:my-14 mt-6 md:ml-36 text-white md:text-4xl">
          <div className="flex md:pl-0 pl-5 md:flex-row flex-col md:gap-2 gap-0">
            <h1 className='md:text-6xl text-4xl'>My name is</h1>
            <h1 className="font-bold md:pl-0 pl-0 md:text-6xl text-4xl bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">Varakorn Kaewmanee</h1>
          </div>
        </div>
        <div className="md:mt-0 mt-4 md:ml-36 ml-5 flex flex-col md:w-auto w-11/12">
          <div className='bg-slate-900 w-fit px-6 py-4 border border-solid rounded-md border-slate-500'>
            <h1 className="text-white md:text-2xl text-xl font-bold">About Me</h1>
            <div className="text-white md:text-xl text-base italic pl-5 flex flex-col gap-3">
              <h2>{"> I study in grade 12 at Surat Thani School."}</h2>
              <h2>{"> I like to write some code in my free time."}</h2>
            </div>
          </div>
          <h1 className="text-white md:text-2xl text-xl mt-6">My Skills</h1>
          <div className="text-xl italic md:pl-5 pl-2 flex flex-col md:mt-4 mt-1 gap-3">
              <h1 className='text-white font-bold'>FrontEnd</h1>
              <FrontendSkill/>
              <h1 className='text-white font-bold'>Backend</h1>
              <BackendSkill/>
              <h1 className='text-white font-bold'>Others</h1>
              <Other/>
          </div>


        </div>
        <div className='flex flex-col justify-center items-center mt-20'>
            <h1 className='text-xl font-bold text-white'>Contact</h1>
            <div className='flex flex-row text-slate-300 gap-1'>
              <p>Email :</p>
              <p>varakorn2324@gmail.com</p>
            </div>
            <div className='flex flex-row text-slate-300 gap-1'>
              <p>Facebook :</p>
              <a className='text-sky-500' href="https://www.facebook.com/profile.php?id=100029589252616" target='_blank'>Pleum Varakorn</a>
            </div>
          </div>
      </div>    
    </main>
  );
}

/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative bg-trueGray-400 ">
        <div className='container mx-auto '>   
            <div className="flex flex-col-reverse lg:flex-row justify-center lg:py-12 lg:flex lg:items-center mb-4">
                <div className="sm:text-left">
                    <h1 className=" font-light text-5xl lg:text-6xl text-black">
                        product store
                    </h1>

                    <p className="mt-4 text-xl lg:text-2xl sm:leading-relaxed text-black lg:mr-24">
                    you can explore and shop many different collection <br className='hidden lg:block' /> from various brands here.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a href="#" className="bg-black   text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto flex font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
                        <img src="/shopping_bag_white.png" className="mr-3 h-6" alt="Harmattan Logo"/>
                        Shopping
                        </a>
                    </div>
                </div>
                <div className='relative mb-8 lg:mb-0 lg:max-h-[25rem]'>
                    <div className='relative lg:min-h-[25rem] rounded-tl-[7rem] rounded-br-[7rem] border border-[#AFAFAF]'>
                        
                    <img
                        src="/display.jpg" alt=""
                        className='lg:max-h-[27rem] relative bottom-[1rem] right-[1rem] rounded-tl-[7rem] rounded-br-[7rem]  
                        ' />   
                    </div>
            </div>
            </div>
        </div>
    </section>
  )
}

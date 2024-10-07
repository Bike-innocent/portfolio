import React from 'react'
import Icons from './mini-component/Icons'

import { FaWhatsapp, FaEnvelope,  } from 'react-icons/fa'; 
import BackToTop from './mini-component/BackToTop';


function Footer() {
    return (
        <>
            <footer class="footer bg-black-800 pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-[60px]">
                <div class="container">
                    <div class="overflow-x-hidden" data-aos="flip-down">
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                            <div class="pt-12">
                                <h3 class="text-white  font-Syne font-bold text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]"><span
                                    class="relative z-[1] before:rounded-full  before:block before:absolute before:top-[8px] before:left-[0] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">Le</span>
                                    t’s work together</h3>
                                <div class="flex flex-wrap items-center mt-10">
                                    <span class="text-xl font-bold font-Syne text-white">Based in Ilorin |</span>


                                    <Icons />


                                </div>
                            </div>

                            <div class="py-9 px-7  border-gray-500 border rounded-2xl flex flex-col justify-between group">
                                <h3 class="text-xl font-bold font-Syne text-white">Need a reliable developer?</h3>
                                <div class="flex justify-between items-center">

                                    <p class="text-2xl font-bold font-Syne leading-none text-orange "> <a href="mailto:hello@buike.com.ng">hello@buike.com.ng </a></p>

                                    <div className='text-white  group-hover:animate-arrow-move-up group-hover:text-orange'>
                                        {/* Add the anchor tag around the icon */}
                                        <a href="mailto:hello@buike.com.ng">
                                            <FaEnvelope size={33} /> {/* Correct icon name */}
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div class="py-9 px-7  border-gray-500 border rounded-2xl flex flex-col justify-between group">
                                <h3 class="text-xl font-bold font-Syne text-white">Want to learn more about my work?</h3>
                                <div class="flex justify-between items-center">
                                    <p class="text-2xl font-bold font-Syne leading-none text-orange">+234 808 887 9523 </p>

                                    <div className='text-white group-hover:animate-arrow-move-up group-hover:text-orange'>
                                      
                                        <a
                                            href="https://wa.me/2348088879523" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                        >
                                            <FaWhatsapp size={35} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div class="grid grid-cols-1 gap-6">
                            <div class="py-[72px] text-center">
                                {/* <h1 class="text-5xl md:text-6xl lg:text-8xl  font-bold text-[#FFE9D9]">Innotech</h1> */}
                            </div>
                        </div>

                        <BackToTop/>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

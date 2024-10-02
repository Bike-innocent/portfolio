import React from 'react'
import Icons from './mini-component/Icons'
import { Link } from 'react-router-dom';



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


                                    <Icons/>


                                </div>
                            </div>

                            <div class="py-9 px-7  border-gray-500 border rounded-2xl flex flex-col justify-between group">
                                <h3 class="text-xl font-bold font-Syne text-white">Looking for a hectic designer?</h3>
                                <div class="flex justify-between items-center">
                                    <p class="text-2xl font-bold font-Syne leading-none text-orange ">hello@buike.com.ng</p>
                                  <Link to="#" class="text-white group-hover:animate-arrow-move-up group-hover:text-orange">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6667 28.3334L28.3334 11.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.6667 11.6667H28.3334V28.3334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </Link>
                                </div>
                            </div>

                            <div class="py-9 px-7  border-gray-500 border rounded-2xl flex flex-col justify-between group">
                                <h3 class="text-xl font-bold font-Syne text-white">Want a more in-depth look at my history?</h3>
                                <div class="flex justify-between items-center">
                                    <p class="text-2xl font-bold font-Syne leading-none text-orange">+234 808 887 9523 </p>
                                  <Link to="#" class="text-white group-hover:animate-arrow-move-up group-hover:text-orange">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6667 28.3334L28.3334 11.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.6667 11.6667H28.3334V28.3334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </Link>
                                </div>
                            </div>

                        </div>

                       

                        <div class="grid grid-cols-1 gap-6">
                            <div class="py-[72px] text-center">
                                {/* <h1 class="text-5xl md:text-6xl lg:text-8xl  font-bold text-[#FFE9D9]">Innotech</h1> */}
                            </div>
                        </div>


                        <div class="border-t  border-gray-500 pt-6 py-[72px] ">
                            <div class="grid grid-cols-12">

                                <div class="col-span-12 sm:col-span-8 order-last sm:order-first">
                                    <p class="text-white text-lg font-normal font-sans leading-7">©2024 Chibuike Innocent, All Rights Reserved
                                    </p>
                                </div>
                                <div class="col-span-12 sm:col-span-4 order-first sm:order-last">
                                    <div class="flex justify-end mb-2 sm:mb-0">
                                      <Link id="scrollUp" class="flex flex-wrap items-center gap-2 group" href="#" aria-label="scroll up">
                                            <span
                                                class="text-white text-lg font-normal font-sans leading-7 transition-all group-hover:text-orange">Back
                                                to
                                                Top</span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 19V5" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M19 12L12 5L5 12" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

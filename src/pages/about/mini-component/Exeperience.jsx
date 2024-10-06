import React from 'react'
import { Link } from 'react-router-dom'

function Exeperience() {
  return (
    <>
       <section class="bg-white py-[50px] overflow-x-hidden">
            <div class="container" data-aos="zoom-out">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] xl:gap-[134px]">
                    <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
                        <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] mb-5">
                            My vision is to create happy my clients
                        </h3>
                        <p class="paragraph mb-7">
                            That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not
                            only reflects who you are and what you stand for, but words that truly land with those that
                            read them, calling your audience in and making them want more.
                        </p>
                     
                    </div>

                    <div class="flex flex-col justify-end">
                        <div class="flex flex-wrap flex-col mb-12">
                            <span
                                class="text-black-800 text-[65px] xl:text-[80px] font-bold font-Syne leading-none inline-block relative z-10 before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">3+</span>
                            <span class="strock-text mt-5">Years of <br/> experience</span>

                        </div>

                        <div class="px-6 py-6 bg-black-800 rounded-lg flex flex-wrap justify-between items-end group">
                            <div class="flex flex-col flex-wrap gap-y-2">
                                <span class="text-orange text-lg font-normal leading-none">SAY HELLO!</span>
                                <h4 class="text-white text-2xl xl:text-[32px] font-bold font-Syne leading-none">
                                    hello@buike.com.ng
                                </h4>
                            </div>
                            <div class="flex flex-wrap justify-end">
                                <Link to="#" class="group-hover:animate-arrow-move-up">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 34L34 14" stroke="#3B82F6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14 14H34V34" stroke="#3B82F6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Exeperience

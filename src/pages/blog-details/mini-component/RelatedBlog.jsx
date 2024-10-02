import React from 'react'

function RelatedBlog() {
  return (
    <>
      
        {/* <!-- Blog Section Start --> */}
        <section class="bg-white pb-[120px]">
            <div class="container">

                <div class="grid grid-cols-12">
                    <div class="col-span-12" data-aos="flip-down">
                        <div class="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                            <span class="text-orange text-xl">Blog</span>
                            <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                Related <span
                                    class="relative z-[1] before:rounded-full before:block before:absolute before:top-[8px] before:left-[18px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">po</span>st

                            </h3>
                        </div>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {/* <!-- Blog Item Start --> */}
                    <div data-aos="fade-up">
                        <div class="rounded-[20px] overflow-hidden mb-6">
                            <img class="w-full" src="assets/images/blog/blog1.png" alt="blog image"/>
                        </div>
                        <div class="flex flex-wrap flex-col gap-3">
                            <ul class="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                                <li class="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                                    <a class="text-black-text-800" href="#">UI Design</a>
                                </li>
                                <li class="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                                    <a class="text-orange" href="#">03 May 2019</a>
                                </li>

                            </ul>
                            <div class="flex justify-between items-end text-black-800 hover:text-orange group">
                                <h4 class="font-bold font-Syne transition-all leading-8 text-[18px] md:text-[20px] 2xl:text-[22px]">
                                    <a href="blog-details.html">Right-lo-left
                                        behind development in mobile web design</a>
                                </h4>
                                <a href="blog-details.html">
                                    <svg class="group-hover:animate-arrow-move-up" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Blog Item End --> */}

                    {/* <!-- Blog Item Start --> */}
                    <div class="sm:mt-10" data-aos="fade-up" data-aos-delay="300">
                        <div class="rounded-[20px] overflow-hidden mb-6">
                            <img class="w-full" src="assets/images/blog/blog2.png" alt="blog image"/>
                        </div>
                        <div class="flex flex-wrap flex-col gap-3">
                            <ul class="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                                <li class="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                                    <a class="text-black-text-800" href="#">UI Design</a>
                                </li>
                                <li class="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                                    <a class="text-orange" href="#">03 May 2019</a>
                                </li>

                            </ul>
                            <div class="flex justify-between items-end text-black-800 hover:text-orange group">
                                <h4 class="font-bold font-Syne transition-all leading-8 text-[18px] md:text-[20px] 2xl:text-[22px]">
                                    <a href="blog-details.html">Connect
                                        craft: Reading
                                        the smart experience</a>
                                </h4>
                                <a href="blog-details.html">
                                    <svg class="group-hover:animate-arrow-move-up" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Blog Item End --> */}

                    {/* <!-- Blog Item Start --> */}
                    <div data-aos="fade-up" data-aos-delay="500">
                        <div class="rounded-[20px] overflow-hidden mb-6">
                            <img class="w-full" src="assets/images/blog/blog3.png" alt="blog image"/>
                        </div>
                        <div class="flex flex-wrap flex-col gap-3">
                            <ul class="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                                <li class="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                                    <a class="text-black-text-800" href="#">UI Design</a>
                                </li>
                                <li class="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                                    <a class="text-orange" href="#">03 May 2019</a>
                                </li>

                            </ul>
                            <div class="flex justify-between items-end text-black-800 hover:text-orange group">
                                <h4 class="font-bold font-Syne transition-all leading-8 text-[18px] md:text-[20px] 2xl:text-[22px]">
                                    <a href="blog-details.html">Ecoglow: Sustainable
                                        skincare a brighter tomorrow</a>
                                </h4>
                                <a href="blog-details.html">
                                    <svg class="group-hover:animate-arrow-move-up" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Blog Item End --> */}

                    {/* <!-- Blog Item Start --> */}
                    <div class="sm:mt-10" data-aos="fade-up" data-aos-delay="700">
                        <div class="rounded-[20px] overflow-hidden mb-6">
                            <img class="w-full" src="assets/images/blog/blog4.png" alt="blog image"/>
                        </div>
                        <div class="flex flex-wrap flex-col gap-3">
                            <ul class="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                                <li class="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                                    <a class="text-black-text-800" href="#">UI Design</a>
                                </li>
                                <li class="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                                    <a class="text-orange" href="#">03 May 2019</a>
                                </li>

                            </ul>
                            <div class="flex justify-between items-end text-black-800 hover:text-orange group">
                                <h4 class="font-bold font-Syne transition-all leading-8 text-[18px] md:text-[20px] 2xl:text-[22px]">
                                    <a href="blog-details.html">Right-lo-left behind
                                        development in mobile web design</a>
                                </h4>
                                <a href="blog-details.html">
                                    <svg class="group-hover:animate-arrow-move-up" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Blog Item End --> */}

                </div>

            </div>
        </section>
        {/* {/* <!-- Blog Section End --> */} 
    </>
  )
}

export default RelatedBlog

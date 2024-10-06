import React from 'react'

function AboutTab() {
    return (
        <>
           
                <div className="grid grid-cols-1">
                    <div>
                         <img src="assets/images/about/about5.png" className='mx-auto sm:max-w-[450px] md:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px]' alt="about me" />
                    </div>
               
                    <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Based in Ilorin</h4>
                    <p className="paragraph mb-7">Mark Henry, <span className="text-black-800">Web Developer</span>,
                        based
                        in
                        Ilorin. That is where I come in. A
                        lover of words, a wrangler of copy. Here to create copy that not only reflects who you
                        are
                        and what you stand for,</p>
                    <p className="paragraph mb-14">but words that truly land with those that read them, calling your
                        audience
                        in and making them want more.</p>

                    <ul className="flex-col gap-3 inline-flex">
                        <li className="gap-10 inline-flex items-center">
                            <span className="w-[110px] text-black-text-800 text-lg  font-normal leading-none">
                                Name</span>
                            <span className="text-black-800 text-xl md:text-2xl font-bold font-Syne leading-8">
                                Chibuike Innocent</span>
                        </li>
                        <li className="gap-10 inline-flex items-center">
                            <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                Nationality</span>
                            <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                                Nigeria</span>
                        </li>
                        <li className="gap-10 inline-flex items-center">
                            <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                Phone</span>
                            <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                                +234 808 887 9523</span>
                        </li>
                        <li className="gap-10 inline-flex items-center">
                            <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                Email</span>
                            <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                                hello@buike.com.ng</span>
                        </li>
                        <li className="gap-10 inline-flex items-center">
                            <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                Experience</span>
                            <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                                3+ years</span>
                        </li>
                        <li className="gap-10 inline-flex items-center">
                            <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                Freelance</span>
                            <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                                Available</span>
                        </li>
                     
                        <li className="gap-10 inline-flex items-center">
                            <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                                Language</span>
                            <span className="text-black-800  text-xl md:text-2xl font-bold font-Syne leading-8">
                                English</span>
                        </li>
                    </ul>

                </div>
           
        </>
    )
}

export default AboutTab

import React from 'react';

const ContactCard = () => {
    return (


        <div className="col-span-12 xl:col-span-4" data-aos="zoom-in" data-aos-delay="1000">
            <a href="mailto:hello@buike.com.ng">
                <div className="px-6 py-9 bg-black-800 rounded-lg flex flex-wrap flex-col justify-between max-w-[416px] mx-auto h-full group">
                    <div className="flex flex-wrap justify-end relative">
                        <a href="mailto:hello@buike.com.ng" className="group-hover:animate-arrow-move-up">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.3333 56.6666L56.6667 23.3333"
                                    stroke="#3B82F6"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M23.3333 23.3333H56.6667V56.6666"
                                    stroke="#3B82F6"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-col flex-wrap gap-y-2">
                        <span className="text-orange text-lg font-normal leading-none">SAY HELLO!</span>
                        <h4 className="text-white text-2xl xl:text-[32px] font-bold font-Syne leading-none">
                            <a href="mailto:hello@buike.com.ng">hello@buike.com.ng</a>
                        </h4>
                    </div>
                </div>
            </a>
        </div >

    );
};

export default ContactCard;

import React from 'react';
import {  FaEnvelope} from 'react-icons/fa';

const ContactCard = () => {
    return (


        <div className="col-span-12 xl:col-span-4" data-aos="zoom-in" data-aos-delay="1000">
            <a href="mailto:hello@buike.com.ng">
                <div className="px-6 py-9 bg-black-800 rounded-lg flex flex-wrap flex-col justify-between max-w-[416px] mx-auto h-full group">
                    <div className="flex flex-wrap justify-end relative">
                        <a href="mailto:hello@buike.com.ng" className="text-orange group-hover:animate-arrow-move-up">
                        <FaEnvelope size={33} />
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

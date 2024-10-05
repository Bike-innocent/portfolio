


// import React, { useState } from 'react';
// import axiosInstance from '../../../axiosInstance'; // Import your custom Axios instance
// import Icons from './Icons';
// import { toast, ToastContainer } from 'react-toastify'; // Import Toast components
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

// function ContactForm() {
//     // Form state
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     // Form submission handler
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axiosInstance.post('/contact', { email, message });
//             toast.success('Message sent successfully!, will reach out within 24 hours', { // Success toast
//                 position: "top-center",
//                 autoClose: 5000, // Closes after 3 seconds
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//             setEmail(''); // Clear the form
//             setMessage('');
//         } catch (error) {
//             toast.error('Something went wrong. Please try again.', { // Error toast
//                 position: "top-right",
//                 autoClose: 3000, // Closes after 3 seconds
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//         }
//     };

//     return (
//         <>
//             <ToastContainer /> {/* Add the ToastContainer to render toast notifications */}
            
//             <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-[18px]">
//                 <div className="col-span-12">
//                     <label className="text-sm font-normal font-Inter leading-tight mb-3 block" htmlFor="Email">Email</label>
//                     <input
//                         id="Email"
//                         className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-orange focus:outline-none"
//                         type="email"
//                         required
//                         placeholder="Your email*"
//                         name="email"
//                         value={email} // Bind to state
//                         onChange={(e) => setEmail(e.target.value)} // Update state on input change
//                     />
//                 </div>

//                 <div className="col-span-12">
//                     <label className="text-sm font-normal font-Inter leading-tight mb-3 block" htmlFor="Message">Message</label>
//                     <textarea
//                         className="h-[140px] font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-orange focus:outline-none resize-none"
//                         name="message"
//                         id="Message"
//                         cols="30"
//                         rows="10"
//                         required
//                         placeholder="Type your message"
//                         value={message} // Bind to state
//                         onChange={(e) => setMessage(e.target.value)} // Update state on input change
//                     />
//                 </div>

//                 <div className="col-span-12">
//                     <button className="flex items-center flex-wrap btn-primary group" type="submit">
//                         Submit
//                         <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                                 <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                             </svg>
//                         </span>
//                     </button>
//                 </div>

//                 <div className="col-span-12">
//                     <div className="justify-start sm:items-center gap-[23px] inline-flex mt-14 flex-col sm:flex-row">
//                         <svg width="110" height="2" viewBox="0 0 110 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M0 1H110" stroke="#080808" strokeOpacity="0.1" />
//                         </svg>

//                         <div className="flex flex-wrap gap-[23px]">
//                             <h4 className="text-black-800 text-xl font-bold font-Syne leading-7">Follow me</h4>
//                             <Icons />
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </>
//     );
// }

// export default ContactForm;




import React, { useState } from 'react';
import axiosInstance from '../../../axiosInstance'; // Import your custom Axios instance

function ContactForm({ triggerToast }) { // Accept the triggerToast function as a prop
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/contact', { email, message });
            triggerToast('success', 'Message sent successfully! Will reach out within 24 hours'); // Trigger success toast
            setEmail(''); // Clear the form
            setMessage('');
        } catch (error) {
            triggerToast('error', 'Something went wrong. Please try again.'); // Trigger error toast
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-[18px]">
            <div className="col-span-12">
                <label className="text-sm font-normal font-Inter leading-tight mb-3 block" htmlFor="Email">Email</label>
                <input
                    id="Email"
                    className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-orange focus:outline-none"
                    type="email"
                    required
                    placeholder="Your email*"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="col-span-12">
                <label className="text-sm font-normal font-Inter leading-tight mb-3 block" htmlFor="Message">Message</label>
                <textarea
                    className="h-[140px] font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-orange focus:outline-none resize-none"
                    name="message"
                    id="Message"
                    cols="30"
                    rows="10"
                    required
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <div className="col-span-12">
                <button className="flex items-center flex-wrap btn-primary group" type="submit">
                    Submit
                    <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </form>
    );
}

export default ContactForm;

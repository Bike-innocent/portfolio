// import React from 'react'

// function MediaShare() {
//     return (
//         <>
//             <div class="inline-flex justify-between mt-6 flex-col md:flex-row gap-4 md:gap-0">
//                 <div class="inline-flex gap-4 items-center ">
//                     <span class="text-black-text-800 text-sm font-normal font-Inter leading-tight">Share:</span>
//                     <ul class="inline-flex sm:gap-4">
//                         <li>

//                         </li>
//                         <li>

//                         </li>
//                         <li></li>
//                         <li><a href="#" class="text-black-800 transition-all duration-300 hover:text-orange"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M16.1338 27H13.2313V17.6529H16.1338V27ZM14.681 16.3779C13.7528 16.3779 13 15.6091 13 14.681C13 14.2352 13.1771 13.8076 13.4923 13.4923C13.8076 13.1771 14.2352 13 14.681 13C15.1268 13 15.5544 13.1771 15.8696 13.4923C16.1848 13.8076 16.3619 14.2352 16.3619 14.681C16.3619 15.6091 15.6088 16.3779 14.681 16.3779ZM26.9972 27H24.1009V22.4499C24.1009 21.3655 24.079 19.9748 22.5918 19.9748C21.0827 19.9748 20.8514 21.153 20.8514 22.3718V27H17.952V17.6529H20.7358V18.9279H20.7764C21.1639 18.1936 22.1105 17.4185 23.5227 17.4185C26.4603 17.4185 27.0003 19.353 27.0003 21.8655V27H26.9972Z" fill="currentColor" fill-opacity="0.9" />
//                             <path d="M26.5003 21.8655V26.5H24.6009V22.4499V22.4436C24.6009 21.9238 24.6009 21.2074 24.3689 20.6216C24.2467 20.3131 24.0518 20.0158 23.7411 19.799C23.4292 19.5815 23.0434 19.4748 22.5918 19.4748C22.1495 19.4748 21.7646 19.5614 21.441 19.7405C21.1146 19.9213 20.8806 20.1797 20.7179 20.4748C20.4054 21.0414 20.3514 21.7532 20.3514 22.3718V26.5H18.452V18.1529H20.2358V18.9279V19.4279H20.7358H20.7764H21.0779L21.2186 19.1613C21.5238 18.583 22.3047 17.9185 23.5227 17.9185C24.8682 17.9185 25.5525 18.3507 25.94 18.9662C26.3609 19.6348 26.5003 20.62 26.5003 21.8655ZM15.6338 26.5H13.7313V18.1529H15.6338V26.5ZM14.681 15.8779C14.0351 15.8779 13.5 15.3391 13.5 14.681C13.5 14.3678 13.6244 14.0674 13.8459 13.8459C14.0674 13.6244 14.3678 13.5 14.681 13.5C14.9942 13.5 15.2946 13.6244 15.5161 13.8459C15.7375 14.0674 15.8619 14.3678 15.8619 14.681C15.8619 15.3391 15.3266 15.8779 14.681 15.8779Z" stroke="currentColor" stroke-opacity="0.9" />
//                         </svg>
//                         </a></li>
//                         <li><a href="#" class="text-black-800 transition-all duration-300 hover:text-orange"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M18.332 20.833C18.6899 21.3114 19.1465 21.7073 19.6708 21.9938C20.1952 22.2802 20.775 22.4506 21.3709 22.4933C21.9669 22.5359 22.565 22.45 23.1248 22.2411C23.6846 22.0323 24.193 21.7055 24.6154 21.283L27.1154 18.783C27.8744 17.9971 28.2943 16.9446 28.2848 15.8521C28.2753 14.7597 27.8371 13.7146 27.0646 12.9421C26.2921 12.1695 25.247 11.7313 24.1545 11.7218C23.062 11.7123 22.0095 12.1323 21.2237 12.8913L19.7904 14.3163" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                             <path d="M21.6659 19.167C21.308 18.6886 20.8514 18.2927 20.3271 18.0062C19.8027 17.7198 19.2229 17.5494 18.627 17.5067C18.031 17.4641 17.4329 17.55 16.8731 17.7589C16.3133 17.9677 15.8049 18.2945 15.3825 18.717L12.8825 21.217C12.1235 22.0029 11.7036 23.0554 11.713 24.1479C11.7225 25.2403 12.1607 26.2854 12.9333 27.0579C13.7058 27.8305 14.7509 28.2687 15.8434 28.2782C16.9358 28.2877 17.9883 27.8677 18.7742 27.1087L20.1992 25.6837" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

//                         </svg>
//                         </a></li>

//                     </ul>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default MediaShare
















import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    FacebookIcon,
    XIcon,
    WhatsappIcon,
    LinkedinIcon,
  } from 'react-share';
  

  import { FaLink } from 'react-icons/fa';

function MediaShare({ blogUrl }) {
    const currentUrl = window.location.href;

    const copyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        alert('Link copied to clipboard!');
    };

    return (
        <div className="inline-flex justify-between mt-6 flex-col md:flex-row gap-4 md:gap-0">
            <div className="inline-flex gap-4 items-center">
                <span className="text-black-text-800 text-lg font-bold  font-Inter leading-tight">Share:</span>
                <ul className="inline-flex sm:gap-4">
                    <li>
                        <FacebookShareButton url={blogUrl} >
                            <FacebookIcon className="text-black-800 transition-all duration-300 hover:text-orange" size={24}  round  />
                        </FacebookShareButton>
                    </li>
                    <li>
                        <TwitterShareButton url={blogUrl}>
                            < XIcon className="text-black-800 transition-all duration-300 hover:text-orange " size={24}  round  />
                        </TwitterShareButton>
                    </li>
                    <li>
                        <LinkedinShareButton url={blogUrl}>
                            <LinkedinIcon className="text-black-800 transition-all duration-300 hover:text-orange" size={24}  round  />
                        </LinkedinShareButton>
                    </li>
                    <li>
                        <WhatsappShareButton >
                            < WhatsappIcon className="text-black-800 transition-all duration-300 hover:text-orange" size={24}  round  />
                        </WhatsappShareButton>
                    </li>
                    <li>
                        <button onClick={copyLink} className="focus:outline-none">
                            <FaLink className="text-black-800 transition-all duration-300 hover:text-orange" size={24}  round  />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MediaShare;

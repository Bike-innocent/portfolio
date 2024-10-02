import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosInstance'; // Assuming you have an Axios instance set up
import RelatedBlog from './mini-component/RelatedBlog';
import MediaShare from './mini-component/MediaShare';

function BlogDetails() {
    const { slug } = useParams(); // Get the slug from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the blog details based on the slug
        const fetchBlogDetails = async () => {
            try {
                const response = await axiosInstance.get(`/blogs/${slug}`);
                setBlog(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch blog details.');
                setLoading(false);
            }
        };

        fetchBlogDetails();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            {/* Hero Section Start */}
            <section className="bg-secondary pt-[110px]">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0" data-aos="flip-down" data-aos-delay="300">
                    <div className="grid grid-cols-1">
                        <h4 className="text-black-800 font-bold font-Syne leading-snug text-[23px] sm:text-[32px] md:text-[44px] max-w-[950px] mb-12">
                            {blog.title}
                        </h4>
                        <img className="w-full rounded-[20px] max-h-[550px] object-cover mb-5" src={blog.image} alt={blog.title} />
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

            <section className="bg-white pb-[120px] mt-[-280px] pt-[280px]">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
                    <div className="grid grid-cols-1 mb-12">
                        <ul className="flex flex-wrap gap-x-[80px] gap-y-6 pb-8 border-b border-black-800 border-opacity-10">
                            <li className="flex flex-wrap flex-col gap-3">
                                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Category</span>
                                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{blog.category}</h4>
                            </li>
                            <li className="flex flex-wrap flex-col gap-3">
                                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Date</span>
                                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{new Date(blog.created_at).toLocaleDateString()}</h4>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1">
                        <h3 className="text-2xl font-bold font-Syne leading-10 mb-5">Description</h3>
                        <div className="custom-quill-content mb-12 " dangerouslySetInnerHTML={{ __html: blog.description }} />
                      
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <MediaShare />
                    </div>
                </div>
            </section>

            <RelatedBlog />
        </>
    );
}

export default BlogDetails;

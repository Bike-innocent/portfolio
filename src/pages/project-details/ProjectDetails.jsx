
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosInstance'; // Import your axios instance
import RelatedProject from './mini-component/RelatedProject';
import { Skeleton } from '@nextui-org/react';

function ProjectDetails() {
  const { slug } = useParams(); // Extract the project slug from the URL
  const [project, setProject] = useState(null); // State to store project data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch the project details using the slug
    axiosInstance
      .get(`/projects/${slug}`)
      .then((response) => {
        setProject(response.data); // Store the project data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error.response?.data?.message || 'Error fetching project data');
        setLoading(false);
      });
  }, [slug]);


  if (loading) {
    return (
      <div className="max-w-[1075px] mx-auto px-4 xl:px-0 ">
        {/* Skeleton for title and metadata */}
        <Skeleton className="mb-4 h-12 w-3/4" /> {/* Title */}
        <Skeleton className="mb-2 h-4 w-1/3" /> {/* Category */}
        <Skeleton className="mb-2 h-4 w-1/4" /> {/* Start Date */}
        
        {/* Skeleton for project details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pb-12">
          <div>
            <Skeleton className="h-10 w-full" /> {/* Project Name */}
            <Skeleton className="mt-2 h-6 w-1/2" /> {/* Client */}
            <Skeleton className="mt-2 h-6 w-1/2" /> {/* Category */}
            <Skeleton className="mt-2 h-6 w-1/2" /> {/* Tools */}
          </div>
        </div>

        {/* Skeleton for image */}
        <Skeleton className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[20px]" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an error
  }

  if (!project) {
    return <div>No project found.</div>; // Handle case when no project is found
  }

  return (
    <>
      {/* Render the project details */}
        {/* Hero Section Start */}
        <section className="bg-secondary pt-[110px]">
        <div className="max-w-[1075px] mx-auto px-4 xl:px-0" data-aos="flip-down" data-aos-delay="300">
          <div className="grid grid-cols-1 lg:grid-cols-2 pb-12">
            <div className="mb-2">
              <ul className="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                <li className="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px]">
                  <a className="text-black-text-800" href="#">{project.category}</a>
                </li>
                <li className="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px] ml-[10px]">
                  <a className="text-orange" href="#">{project.start_date}</a>
                </li>
              </ul>

              <h4 className="text-black-800 font-bold mb-0 text-[32px] lg:text-[44px]">
                {project.name}
              </h4>
            </div>

            <ul className="flex flex-wrap gap-y-6 lg:gap-y-2">
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Client</span>
                <h2 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.client || 'N/A'}</h2>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Category</span>
                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.category}</h4>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Tools</span>
                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.tools || 'N/A'}</h4>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Start Date</span>
                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.start_date || 'N/A'}</h4>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">End Date</span>
                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.end_date || 'N/A'}</h4>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Project URL</span>
                <a href={project.url}  className="text-orange underline text-[15px] font-bold font-sans leading-none">{project.url}</a>
                
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 mb-8">
            <img className="w-full rounded-[20px] max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover" src={project.image} alt={project.name} />
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Description Section */}
      <section className="bg-white pb-[120px] mt-[-130px] pt-[130px] md:mt-[-280px] md:pt-[280px]">
        <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1">
            <h3 className="text-[32px] font-bold font-Syne leading-10 mb-4">Description</h3>
            <p className="paragraph mb-12">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <RelatedProject />
    </>
  );
}

export default ProjectDetails;


import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosInstance'; // Adjust the path if necessary
import Arrow1 from './mini-component/Arrow1';
import Arrow2 from './mini-component/Arrow2';
import VeiwAllProject from './mini-component/VeiwAllProject';
import { Skeleton } from '@nextui-org/react'; // Import NextUI Skeleton
import SkeletonComponent from './mini-component/SkeletonComponent';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state for the entire data

  // Fetch projects from the backend API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get('/projects');
        setProjects(response.data);
        setLoading(false); // Set loading to false once projects are fetched
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section className="bg-secondary py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12" data-aos="fade-up">
              <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span className="text-orange text-xl">Portfolio</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  My recent{' '}
                  <span className="relative z-[1] before:rounded-full before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    w
                  </span>
                  ork
                </h3>
              </div>
            </div>

            {/* Loop through only the first two projects */}
            {loading ? (
              // Show skeletons while data is being fetched
              <>
                {[1, 2].map((_, index) => (
                  <div
                    className="col-span-12 md:col-span-6 "
                    key={index}
                  >
                   <SkeletonComponent/>
                  </div>
                ))}
              </>
            ) : (
              // Show the actual content when the data is fetched
              projects.slice(0, 2).map((project, index) => (
                <div
                  className="col-span-12 md:col-span-6"
                  data-aos="fade-up"
                  data-aos-delay={`${300 + index * 200}`} // Adding a delay for each project
                  key={project.id}
                >
                  <div className="w-full">
                    <img
                      src={project.image}
                      alt={`project-${project.id}`}
                      className="mb-6 rounded-[20px] object-cover w-full  max-h-[280px] sm:max-h-[320px] md:max-h-[300px] lg:max-h-[350px]"
                    />
                  </div>
                  <div className="flex flex-wrap flex-col gap-3">
                    <div className="flex flex-wrap gap-2">
                      <a
                        className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VIEW LIVE
                      </a>
                      <a
                        className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                        href={`/project/${project.id}`}
                      >
                        DESCRIPTION
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                      <h4 className="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                        <a className="transition-all" href={`/project/${project.id}`}>
                          {project.name}
                        </a>
                      </h4>
                      <a className="group-hover:animate-arrow-move-up" href={`/project/${project.id}`}>
                        <Arrow1 />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <VeiwAllProject />
        </div>
      </section>
    </>
  );
}

export default Portfolio;

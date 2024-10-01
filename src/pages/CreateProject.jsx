import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

function CreateProject() {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null, // For file upload
    client: '',
    tools: '',
    start_date: '',
    end_date: '',
    category: '',
    url: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input change for text fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle file change for image input
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Post request to create the project
      await axiosInstance.post('/projects', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Redirect to a success page or project list after submission
      navigate('/projects');
    } catch (err) {
      console.error('Error creating project:', err);
      setError('Failed to create the project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 lg:px-16 bg-gray-100 py-[100px]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Create New Project</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Project Name"
              />
            </div>

            {/* Client */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Client</label>
              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Client Name"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Project Category"
              />
            </div>

            {/* Tools */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Tools</label>
              <input
                type="text"
                name="tools"
                value={formData.tools}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tools Used"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* URL */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Project URL</label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Live Project URL"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Project Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Description (Full width) */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="5"
                placeholder="Project Description"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
            >
              {loading ? 'Creating...' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateProject;


























// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../axiosInstance';
// import { useNavigate, useParams } from 'react-router-dom'; // useParams to get slug from URL

// function ProjectForm() {
//   const { slug } = useParams(); // Get slug from URL (if editing)
//   const navigate = useNavigate();

//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     image: null, // For file upload
//     client: '',
//     tools: '',
//     start_date: '',
//     end_date: '',
//     category: '',
//     url: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);

//   // Fetch project data if editing
//   useEffect(() => {
//     if (slug) {
//       setIsEditMode(true); // We're editing if slug is present
//       fetchProjectDetails();
//     }
//   }, [slug]);

//   // Function to fetch the project details by slug
//   const fetchProjectDetails = async () => {
//     try {
//       const response = await axiosInstance.get(`/projects/${slug}`);
//       const projectData = response.data;

//       // Pre-fill form with fetched project data
//       setFormData((prevData) => ({
//         ...prevData,
//         name: projectData.name || '',
//         description: projectData.description || '',
//         client: projectData.client || '',
//         tools: projectData.tools || '',
//         start_date: projectData.start_date || '',
//         end_date: projectData.end_date || '',
//         category: projectData.category || '',
//         url: projectData.url || '',
//         image: null, // Image should only change if the user uploads a new one
//       }));
//     } catch (err) {
//       console.error('Error fetching project details:', err);
//       setError('Failed to load project details.');
//     }
//   };

//   // Handle input change for text fields
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle file change for image input
//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       image: e.target.files[0]
//     });
//   };

//   // Handle form submission (create or update project)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const formDataToSend = new FormData();

//       // Append only fields that are not empty
//       Object.keys(formData).forEach((key) => {
//         if (formData[key]) {
//           formDataToSend.append(key, formData[key]);
//         }
//       });

//       if (isEditMode) {
//         // PUT request to update the project if editing
//         await axiosInstance.put(`/projects/${slug}`, formDataToSend, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//       } else {
//         // POST request to create the project if not editing
//         await axiosInstance.post('/projects', formDataToSend, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//       }

//       // Redirect to project list after successful submission
//       navigate('/projects');
//     } catch (err) {
//       console.error('Error submitting project:', err);
//       setError('Failed to submit the project. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="px-4 lg:px-16 bg-gray-100 py-[100px]">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-8 text-center">
//           {isEditMode ? 'Edit Project' : 'Create New Project'}
//         </h2>

//         {error && <div className="text-red-500 mb-4">{error}</div>}

//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Form fields */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Project Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Project Name"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Client</label>
//               <input
//                 type="text"
//                 name="client"
//                 value={formData.client}
//                 onChange={handleChange}
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Client Name"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Project Category"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Tools</label>
//               <input
//                 type="text"
//                 name="tools"
//                 value={formData.tools}
//                 onChange={handleChange}
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Tools Used"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Start Date</label>
//               <input
//                 type="date"
//                 name="start_date"
//                 value={formData.start_date}
//                 onChange={handleChange}
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">End Date</label>
//               <input
//                 type="date"
//                 name="end_date"
//                 value={formData.end_date}
//                 onChange={handleChange}
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Project URL</label>
//               <input
//                 type="url"
//                 name="url"
//                 value={formData.url}
//                 onChange={handleChange}
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Live Project URL"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Project Image</label>
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//              {/* Description (Full width) */}
//              <div className="col-span-1 md:col-span-2">
//               <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 rows="5"
//                 placeholder="Project Description"
//               />
//             </div>
//           </div>

//           <div className="mt-8">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
//             >
//               {loading ? (isEditMode ? 'Updating...' : 'Creating...') : (isEditMode ? 'Update Project' : 'Create Project')}
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ProjectForm;










// // import React, { useState, useEffect } from 'react';
// // import axiosInstance from '../axiosInstance';
// // import { useNavigate, useParams } from 'react-router-dom'; // useParams to get slug from URL

// // function ProjectForm() {
// //   const { slug } = useParams(); // Get slug from URL (if editing)
// //   const navigate = useNavigate();

// //   // Form state
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     description: '',
// //     image: null, // For file upload
// //     client: '',
// //     tools: '',
// //     start_date: '',
// //     end_date: '',
// //     category: '',
// //     url: ''
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [isEditMode, setIsEditMode] = useState(false);

// //   // Fetch project data if editing
// //   useEffect(() => {
// //     if (slug) {
// //       setIsEditMode(true); // We're editing if slug is present
// //       fetchProjectDetails();
// //     }
// //   }, [slug]);

// //   // Function to fetch the project details by slug
// //   const fetchProjectDetails = async () => {
// //     try {
// //       const response = await axiosInstance.get(`/projects/${slug}`);
// //       const projectData = response.data;
      
// //       // Pre-fill form with fetched project data
// //       setFormData({
// //         name: projectData.name,
// //         description: projectData.description,
// //         client: projectData.client,
// //         tools: projectData.tools,
// //         start_date: projectData.start_date,
// //         end_date: projectData.end_date,
// //         category: projectData.category,
// //         url: projectData.url,
// //         image: null, // Image needs to be uploaded again
// //       });
// //     } catch (err) {
// //       console.error('Error fetching project details:', err);
// //       setError('Failed to load project details.');
// //     }
// //   };

// //   // Handle input change for text fields
// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   // Handle file change for image input
// //   const handleFileChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       image: e.target.files[0]
// //     });
// //   };

// //   // Handle form submission (create or update project)
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const formDataToSend = new FormData();
// //       Object.keys(formData).forEach((key) => {
// //         formDataToSend.append(key, formData[key]);
// //       });

// //       if (isEditMode) {
// //         // PUT request to update the project if editing
// //         await axiosInstance.put(`/projects/${slug}`, formDataToSend, {
// //           headers: {
// //             'Content-Type': 'multipart/form-data'
// //           }
// //         });
// //       } else {
// //         // POST request to create the project if not editing
// //         await axiosInstance.post('/projects', formDataToSend, {
// //           headers: {
// //             'Content-Type': 'multipart/form-data'
// //           }
// //         });
// //       }

// //       // Redirect to project list after successful submission
// //       navigate('/projects');
// //     } catch (err) {
// //       console.error('Error submitting project:', err);
// //       setError('Failed to submit the project. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section className="px-4 lg:px-16 bg-gray-100 py-[100px]">
// //       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
// //         <h2 className="text-2xl font-bold mb-8 text-center">
// //           {isEditMode ? 'Edit Project' : 'Create New Project'}
// //         </h2>

// //         {error && <div className="text-red-500 mb-4">{error}</div>}

// //         <form onSubmit={handleSubmit} encType="multipart/form-data">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Form fields */}
// //             {/* Name */}
// //             <div>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">Project Name</label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 placeholder="Project Name"
// //               />
// //             </div>

// //            {/* Client */}
// //            <div>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">Client</label>
// //               <input
// //                 type="text"
// //                 name="client"
// //                 value={formData.client}
// //                 onChange={handleChange}
// //                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 placeholder="Client Name"
// //               />
// //             </div>

// //             {/* Category */}
// //             <div>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
// //               <input
// //                 type="text"
// //                 name="category"
// //                 value={formData.category}
// //                 onChange={handleChange}
// //                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 placeholder="Project Category"
// //               />
// //             </div>

// //             {/* Tools */}
// //             <div>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">Tools</label>
// //               <input
// //                 type="text"
// //                 name="tools"
// //                 value={formData.tools}
// //                 onChange={handleChange}
// //                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 placeholder="Tools Used"
// //               />
// //             </div>

// //             {/* Start Date */}
// //             <div>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">Start Date</label>
// //               <input
// //                 type="date"
// //                 name="start_date"
// //                 value={formData.start_date}
// //                 onChange={handleChange}
// //                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               />
// //             </div>

// //             {/* End Date */}
// //             <div>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">End Date</label>
// //               <input
// //                 type="date"
// //                 name="end_date"
// //                 value={formData.end_date}
// //                 onChange={handleChange}
// //                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               />
// //             </div>

// //             {/* URL */}
// //             <div>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">Project URL</label>
// //               <input
// //                 type="url"
// //                 name="url"
// //                 value={formData.url}
// //                 onChange={handleChange}
// //                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 placeholder="Live Project URL"
// //               />
// //             </div>

// //             {/* Image Upload */}
// //             <div>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">Project Image</label>
// //               <input
// //                 type="file"
// //                 name="image"
// //                 accept="image/*"
// //                 onChange={handleFileChange}
// //                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               />
// //             </div>
            
// //             {/* Description (Full width) */}
// //               <div className="col-span-1 md:col-span-2">
// //               <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
// //               <textarea
// //                 name="description"
// //                 value={formData.description}
// //                 onChange={handleChange}
// //                 required
// //                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 rows="5"
// //                 placeholder="Project Description"
// //               />
// //             </div>
// //           </div>


// //           {/* Submit Button */}
// //           <div className="mt-8">
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="w-full p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
// //             >
// //               {loading ? (isEditMode ? 'Updating...' : 'Creating...') : (isEditMode ? 'Update Project' : 'Create Project')}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }

// // export default ProjectForm;

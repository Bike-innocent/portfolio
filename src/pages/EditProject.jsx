
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

function EditProject() {
  const { slug } = useParams();
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


  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  // Fetch the project details when editing
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axiosInstance.get(`/projects/${slug}`);
        const projectData = response.data;

        setFormData({
          name: projectData.name,
          description: projectData.description,
          client: projectData.client,
          tools: projectData.tools,
          start_date: projectData.start_date,
          end_date: projectData.end_date,
          category: projectData.category,
          url: projectData.url,
          image: null // Don't prepopulate image since it's a file upload
        });
      } catch (err) {
        console.error('Error fetching project details:', err);
        setErrors({ general: 'Failed to load project details.' });
      }
    };

    fetchProjectDetails();
  }, [slug]);

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
    setProcessing(true);
    setErrors({}); // Reset errors before submission
    const formDataToSend = new FormData();
    formDataToSend.append('_method', 'PUT');
    
    // Append form data
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      // Send PUT request to update the project
      await axiosInstance.post(`/projects/${slug}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Redirect after successful update
      navigate('/projects', { state: { success: 'Project updated successfully.' } });
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ general: 'Failed to update the project. Please try again.' });
      }
    } finally {
      setProcessing(false);
    }
  };

  return (
    <section className="px-4 lg:px-16 bg-gray-100 py-[100px]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Edit Project</h2>

        {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>}


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

            {/* Description */}
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
              disabled={processing}
              className="w-full p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
            >
              {processing ? 'Updating...' : 'Update Project'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditProject;



























// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../axiosInstance';
// import { useNavigate, useParams } from 'react-router-dom';

// function EditProject() {
//   const { slug } = useParams();
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


//   const [errors, setErrors] = useState({});
//   const [processing, setProcessing] = useState(false);

//   // Fetch the project details when editing
//   useEffect(() => {
//     const fetchProjectDetails = async () => {
//       try {
//         const response = await axiosInstance.get(`/projects/${slug}`);
//         const projectData = response.data;

//         setFormData({
//           name: projectData.name,
//           description: projectData.description,
//           client: projectData.client,
//           tools: projectData.tools,
//           start_date: projectData.start_date,
//           end_date: projectData.end_date,
//           category: projectData.category,
//           url: projectData.url,
//           image: null // Don't prepopulate image since it's a file upload
//         });
//       } catch (err) {
//         console.error('Error fetching project details:', err);
//         setErrors({ general: 'Failed to load project details.' });
//       }
//     };

//     fetchProjectDetails();
//   }, [slug]);

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

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setProcessing(true);
//     setErrors({}); // Reset errors before submission
//     const formDataToSend = new FormData();
//     formDataToSend.append('_method', 'PUT');
    
//     // Append form data
//     Object.keys(formData).forEach((key) => {
//       if (formData[key]) {
//         formDataToSend.append(key, formData[key]);
//       }
//     });

//     try {
//       // Send PUT request to update the project
//       await axiosInstance.post(`/projects/${slug}`, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Redirect after successful update
//       navigate('/projects', { state: { success: 'Project updated successfully.' } });
//     } catch (err) {
//       if (err.response && err.response.data.errors) {
//         setErrors(err.response.data.errors);
//       } else {
//         setErrors({ general: 'Failed to update the project. Please try again.' });
//       }
//     } finally {
//       setProcessing(false);
//     }
//   };

//   return (
//     <section className="px-4 lg:px-16 bg-gray-100 py-[100px]">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-8 text-center">Edit Project</h2>

//         {/* Display general error */}
//         {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>}

//         {/* Form */}
//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Name */}
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
//               {errors.name && <div className="text-red-500 mt-1">{errors.name[0]}</div>}
//             </div>

//             {/* Client */}
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

//             {/* Other fields omitted for brevity */}
//             {/* ... */}

//             {/* Description */}
//             <div className="col-span-1 md:col-span-2">
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
//               {errors.description && <div className="text-red-500 mt-1">{errors.description[0]}</div>}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-8">
//             <button
//               type="submit"
//               disabled={processing}
//               className="w-full p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
//             >
//               {processing ? 'Updating...' : 'Update Project'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default EditProject;

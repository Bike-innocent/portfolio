import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import axiosInstance from '../../../../axiosInstance'; // Ensure axiosInstance is correctly set up

const ProjectDropdown = ({ project }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to fetch user info based on token
  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get('/user'); // Token is handled by axiosInstance
      const user = response.data;
      
      // Check if user has admin role
      const adminRole = user.roles.some(role => role.name === 'admin');
      setIsAdmin(adminRole);
    } catch (error) {
      console.error('Error fetching user:', error);
      setIsAdmin(false); // Assume not admin if there's an error
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  // Trigger fetching user data when token is available or changes
  useEffect(() => {
    const authToken = localStorage.getItem('authToken'); // Check if token is available

    if (authToken) {
      fetchUser(); // Fetch user details if token is found
    } else {
      setLoading(false); // No token, no need to load user data
    }

    // Listen for changes in localStorage (token updates)
    const handleStorageChange = () => {
      const newToken = localStorage.getItem('authToken');
      if (newToken) {
        fetchUser(); // Fetch user immediately if token is set
      } else {
        setIsAdmin(false); // If token is removed, hide admin UI
      }
    };

    window.addEventListener('storage', handleStorageChange); // Add event listener for storage changes

    return () => {
      window.removeEventListener('storage', handleStorageChange); // Cleanup event listener
    };
  }, []);

  // Show loading spinner or message while checking admin status
  if (loading) {
    return null; // You can replace this with a loading spinner if needed
  }

  // Only show the dropdown if the user is an admin
  if (!isAdmin) {
    return null; // Do not render the dropdown for non-admin users
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="text-gray-700 hover:text-gray-900">
          <BsThreeDotsVertical size={24} />
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="edit" onClick={() => console.log('Edit project', project.id)} textValue="edit">
          <div className="flex items-center">Edit</div>
        </DropdownItem>
        <DropdownItem key="delete" onClick={() => console.log('Delete project', project.id)} textValue="delete">
          <div className="flex items-center">Delete</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProjectDropdown;

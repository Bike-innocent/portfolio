import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosInstance'; // Update with the correct path
import Arrow from './Arrow';

function AuthNav() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken'); // Get the auth token

        if (authToken) {
            const fetchUser = async () => {
                try {
                    const response = await axiosInstance.get('/user', {
                        headers: {
                            Authorization: `Bearer ${authToken}`, // Include the token in the request
                        },
                    });
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

            fetchUser(); // Call the fetchUser function if the token exists
        } else {
            setLoading(false); // No token means not loading anymore
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a proper loader
    }

    return (
        <>
            {isAdmin && ( 
                <>
                    <li className="border-b border-border-white py-4 group">
                        <a href="create-project" className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300">
                            Add Project
                            <Arrow />
                        </a>
                    </li>
                    <li className="border-b border-border-white py-4 group">
                        <a href="create-blog" className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300">
                            Add Blog
                            <Arrow />
                        </a>
                    </li>
                </>
            )}
        </>
    );
}

export default AuthNav;

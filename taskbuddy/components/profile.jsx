import React from 'react';

const Profile = () => {
    const user = {
        name: 'John Doe',
        profilePicture: 'https://example.com/profile-picture.jpg',
        // Add any additional user details here
    };

    return (
        <div>
            <h1>{user.name}</h1>
            <img src={user.profilePicture} alt="Profile Picture" />
            {/* Add additional details or options here */}
        </div>
    );
};

export default Profile;
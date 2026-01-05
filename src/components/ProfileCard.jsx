import { useState } from "react";

function ProfileCard({ name, role, bio, darkMode }) {
    const [likes, setLikes] = useState(0);

    return (
        <div className={`profile-card ${darkMode ? 'dark' : ''}`}>
            <div className="profile-header">
                <div className="profile-info">
                    <h2 className="profile-name">{name}</h2>
                    <p className="profile-role">{role}</p>
                </div>
            </div>
            
            <p className="profile-bio">{bio}</p>

            <button className="like-button" onClick={() => setLikes(likes + 1)}>
                ❤️ Like ({likes})
            </button>
        </div>
    );
}

export default ProfileCard;
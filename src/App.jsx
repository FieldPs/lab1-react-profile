import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileCardSkeleton from "./components/ProfileCardSkeleton";
import './App.css';

function App() {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  
  const username = "FieldPS"; // Change to invalid username like "thisuserdoesnotexist12345" to test error

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('User not found');
        }
        return res.json();
      })
      .then(data => {
        if (data.message === 'Not Found') {
          throw new Error('User not found');
        }
        setGithubData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
        setGithubData(null);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const [skills, setSkills] = useState(['React', 'Git', 'JavaScript', 'CSS']);
  const [newSkill, setNewSkill] = useState("");
  
  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode} className="toggle-btn">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="content-wrapper">
        <h1 className="main-title">My Team Portfolio</h1>

        {loading ? (
          <ProfileCardSkeleton darkMode={darkMode} />
        ) : error ? (
          <div className="error-container">
            <div className="error-icon">✕</div>
            <h2 className="error-title">User not found</h2>
            <p className="error-message">The GitHub user "{username}" could not be found.</p>
          </div>
        ) : (
          githubData && (
            <ProfileCard
              name={githubData.name || githubData.login}
              role="GitHub Developer"
              bio={githubData.bio || "No bio available"}
              darkMode={darkMode}
            />
          )
        )}

        <div className="skills-section">
          <div className="skills-input-group">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              placeholder="Add a new skill"
              className="skill-input"
            />
            <button onClick={addSkill} className="add-skill-btn">
              + Add
            </button>
          </div>
          
          <h3 className="skills-title">Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

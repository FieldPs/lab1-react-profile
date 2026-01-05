import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard"

function App() {
  const [githubData, setGithubData] = useState(null);
  const username = "FieldPS";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      setGithubData(data);
    })
    .catch(err => console.error(err));
  }, []);

  const [skills, setSkills] = useState(['React', 'Git']);
  const [newSkill, setNewSkill] = useState("");
  const addSkill = () => {
      if (newSkill.trim() !== "") {
          setSkills([...skills, newSkill.trim()]);
          setNewSkill("");
      }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>My Team Portfolio</h1>

      {githubData ? (
        <ProfileCard
          name={githubData.name || githubData.login}
          role="Github User"
          bio={githubData.bio || "No bio available"}
        />
      ) : (
        <p>Loading data from Github...</p>
      )}
      <div>
        <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a new skill"
        />
        <button onClick={addSkill}>Add Skill</button>
        <h3>Skills:</h3>
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default App

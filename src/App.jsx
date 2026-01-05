import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard"

function App() {
  const [githubData, setGithubData] = useState(null);
  const username = "FieldPS"

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      setGithubData(data);
    })
    .catch(err => console.error(err));
  }, []);
  
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
    </div>
  )
}

export default App

import ProfileCard from "./components/ProfileCard"

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>My Team Portfolio</h1>

      <ProfileCard
        name="พชรพล ครองแสนเมือง"
        role="Student @ CEDT"
        bio="gang gang gang gang gang ไตปลา"
      />

      <ProfileCard
        name="John Doe"
        role="Guest Developer"
        bio="I love coding and learning new things."
      />
    </div>
  )
}

export default App

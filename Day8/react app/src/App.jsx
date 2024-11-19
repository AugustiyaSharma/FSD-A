import './App.css'
import Marks from './Marks'


const App = ({name,email,mob}) => {
  return (
    <>
    <div id="disp"> 
      <h1>Student Details</h1>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Mobile No. {mob}</h2>
      </div>
      <Marks m1={60}  m2={70} m3={90}/>
      </>
  )
}

export default App

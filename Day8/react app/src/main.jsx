import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DisplayMarks from './DisplayMarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"Augustiya"} email={"augustiya2321@gmail.com"} mob={7982414087}/>
    
    <App name={"Augustiya"} email={"augustiya2321@gmail.com"} mob={7982414087}/>
    <DisplayMarks />
    {/* <Marks m1={83} m2={65} m3={74}/>
    <Marks m1={87} m2={85} m3={84}/> */}
  </StrictMode>
);
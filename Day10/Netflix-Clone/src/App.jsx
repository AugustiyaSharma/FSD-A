import React from 'react';
import Movieslist from "./Movieslist"

export const App=()=>{
  return(
    <div>
      <h1 style={{backgroundColor:"black",
        color:"white",
        textAlign:"center",
        fontSize:"20px"}}>
          Netflix Clone
        </h1>
        <Movieslist />
    </div>
  )
}
export default App;
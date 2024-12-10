import React, { useState } from 'react'
import pic from "../Images/images.jpeg"

const ImageApp = () => {

    const [height, setheight] = useState(200);
    const [width, setWidth] = useState(200);
    const [rotation, setRotation] = useState(0);
  
  
    return (  
  
      <div className='disp'>
        <div className="img">
          <img src={pic} style={{height:height, width:width , transform: `rotate(${rotation}deg)`
            
          }} />
        </div>
        <div className='panel'>
        <button onClick={()=>{setheight(height + 10);}}>Increase Height</button>
        <button onClick={()=>{setheight(height - 10);}}>Decrease Height</button>
        <button onClick={()=>{setWidth(width + 10);}}>Increase Width</button>
        <button onClick={()=>{setWidth(width - 10);}}>Decrease Width</button>
        <button onClick={()=>{setRotation(rotation + 90);}}>Rotate Clockwise</button>
        <button onClick={()=>{setRotation(rotation - 90);}}>Rotate Anti-Clockwise</button>
        </div>
        
      </div>
  
    )
  }
  
  export default ImageApp
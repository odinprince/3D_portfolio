import React from 'react';
import { Html,useProgress } from '@react-three/drei';


const Loader = () => {
  const {progress}=useProgress();
  return (
    <Html
    as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span></span>
      <p
      style={{
        fontSize:30,
        color:'#915eff',
        fontWeight: 800,
        marginTop:40
      }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader

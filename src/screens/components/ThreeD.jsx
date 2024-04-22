import { useGLTF } from '@react-three/drei'  // load 3d model
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'


function ThreeD() {
  return (
        <Canvas  style={{ position: 'relative', width: '100%', height: '150%', overflow:"visible"}}>
            <Model/>
            <Environment preset='sunset'/>
            {/* <OrbitControls/> */}
            <OrbitControlsEnabled/>
        </Canvas>
  )
}

export default ThreeD


export function Model() {
    const model = useGLTF("/assets/statChart.glb")
    const cubeRef = useRef()
    useFrame((state, delta)=>{
        cubeRef.current.rotation.y -= 0.01
    })
    return (
        <mesh ref={cubeRef} scale={[3, 3, 3]}>
            <primitive object={model.scene}/>
        </mesh>
    )
}


function OrbitControlsEnabled() {
  const { camera } = useThree();
  const initialPosition = { x: 5, y: 4, z: 10 };
  const [enableControls, setEnableControls] = useState(false);

  // Set initial camera position
  camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);

  // Enable controls after initial rendering
  setTimeout(() => {
    setEnableControls(true);
  }, 1000);

  return enableControls && <OrbitControls />;
}

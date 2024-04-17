import { useGLTF } from '@react-three/drei'  // load 3d model
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'


function ThreeD() {
  return (
    <div className='canv h-[500px] w-[500px] m-auto mt-3 bg-white rounded-lg'>
        <Canvas>
            <Model/>
            <Environment preset='sunset'/>
            <OrbitControls/>
        </Canvas>
    </div>
  )
}

export default ThreeD


export function Model() {
    const model = useGLTF("/statChart.glb")
    const cubeRef = useRef()
    useFrame((state, delta)=>{
        cubeRef.current.rotation.y -= 0.01
    })
    return (
        <mesh ref={cubeRef}>
            <primitive object={model.scene}/>
        </mesh>
    )
}

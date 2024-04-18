import { useGLTF } from "@react-three/drei"; // load 3d model
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import simtrakLogo from "/assets/simtrak-logo.png";
import { Link } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function Landing() {
  return (
    <div className="h-screen w-screen bg-[#c8c8c8] overflow-hidden">
      <div class="flex w-full h-20 bg-red-50 justify-between items-center">
        <img src={simtrakLogo} className="h-20" alt="" />
        <div className="flex gap-5 font-poppins">
          <Link to="/">Examples</Link>
          <Link to="/">Inspiration</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Blog</Link>
        </div>
        {!localStorage.getItem("authToken") ? (
          <div className="flex gap-3">
            <Link to="/login">
              <button className="btn bg-[#1366D9] text-white poppins-5">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn">Signup</button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3 md:gap-10">
            <CiBellOn size={24} />
            <FaUserCircle size={44} />
          </div>
        )}
      </div>
      <div className="mt-5 flex h-[700px]">
      <div className="w-[600px] left-36 top-72 h-80 absolute z-10 ">
        <h1 className="font-poppins text-5xl leading-normal text-[#13161b] font-light">
          Meet CMS — the simple way to manage portfolio &amp; showcase
          your work in style
        </h1>
      </div>
      <Canvas className="translate-x-[560px]">
        <Model />
        <Environment preset="sunset" />
        <OrbitControlsEnabled />
      </Canvas>
      </div>

    </div>
  );
}

export default Landing;

function Model() {
  const model = useGLTF("/assets/office.glb");
  const cubeRef = useRef();
  // useFrame((state, delta)=>{
  //     cubeRef.current.rotation.y -= 0.001
  // })
  return (
    <mesh ref={cubeRef} scale={[3, 3, 3]}>
      <primitive object={model.scene} />
    </mesh>
  );
}

function OrbitControlsEnabled() {
  const { camera } = useThree();
  const initialPosition = { x: 8, y: 3, z: 5 };
  const [enableControls, setEnableControls] = useState(false);

  // Set initial camera position
  camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);

  // Enable controls after initial rendering
  setTimeout(() => {
    setEnableControls(true);
  }, 1000);

  return enableControls && <OrbitControls />;
}

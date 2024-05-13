import { useGLTF } from "@react-three/drei"; // load 3d model
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import simtrakLogo from "/assets/simtrak-logo.png";
import { Link } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Landing() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div class="flex w-full h-20 px-5 justify-between items-center">
        <img src={simtrakLogo} className="h-10 md:h-20" alt="" />
        <div className="gap-5 font-poppins hidden md:flex">
          <Link to="/">Examples</Link>
          <Link to="/">Inspiration</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Blog</Link>
        </div>
        {!localStorage.getItem("authToken") ? (
          <>
              <div className="hidden md:flex gap-3">
                <Link to="/login">
                  <button className="btn bg-[#1366D9] text-white poppins-5">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btn">Signup</button>
                </Link>
              </div>

            <button
              className="flex md:hidden p-3"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu size={44} />
            </button>
          </>
        ) : (
          <div className="flex items-center gap-3 md:gap-10">
            <CiBellOn size={24} />
            <FaUserCircle size={44} />
          </div>
        )}
      </div>
      <div>
        {showMenu && (
          <div className="md:hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
            <div className="py-1">
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Signup
              </Link>
              <Link to="/"  className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Examples</Link>
              <Link to="/"  className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Inspiration</Link>
              <Link to="/"  className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pricing</Link>
              <Link to="/"  className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blog</Link>
            </div>
          </div>
        )}
      </div>

      <div className=" mt-5 block lg:flex h-[700px]">
          <div className="lg:w-full mt-10 items-center overflow-hidden">
          <Canvas className="h-[40%] md:translate-x-[260px] lg:translate-x-[560px] md:flex">
          <Model />
          <Environment preset="sunset" />
          <OrbitControlsEnabled />
        </Canvas>
          </div>
        <div className="fixed text-center w-full m-auto h-80 lg:w-[600px] lg:absolute lg:left-36 lg:top-72 z-10 ">
          <h1 className="font-poppins text-3xl md:text-5xl leading-normal lg:leading-relaxed text-[#13161b] font-light">
            Meet CMS — the simple way to manage &amp; organize your Inventory 
          </h1>
        </div>
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
  const initialPosition = { x: 7, y: 4, z: 5 };
  const [enableControls, setEnableControls] = useState(false);

  // Set initial camera position
  camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);

  // Enable controls after initial rendering
  setTimeout(() => {
    setEnableControls(true);
  }, 1000);

  return enableControls && <OrbitControls />;
}

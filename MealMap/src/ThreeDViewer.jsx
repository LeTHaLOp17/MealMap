import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const BurgerModel = () => {
  // Load the GLB file
  const { scene } = useGLTF("/models/burger2.glb");

  return <primitive object={scene} scale={0.5} />;
};

const ThreeDViewer = () => {
  return (
    <Canvas>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[100, 500, 90]} />
      
      {/* Model */}
      <BurgerModel />
      
      {/* Controls */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ThreeDViewer;

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import "./App.css";
import Vivek from "./Vivek";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom />
        <Suspense fallback={null}>
          <PerspectiveCamera
            position={[0, 20, 50]} // Set initial position of the camera
            makeDefault // Makes this the default camera
          />
          <Vivek />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;

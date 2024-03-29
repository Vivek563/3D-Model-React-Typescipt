import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Vivek from "../public/Vivek";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom />
        <Suspense fallback={null}>
          <PerspectiveCamera position={[0, 20, 50]} makeDefault />
          <Vivek />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;

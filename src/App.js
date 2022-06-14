import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import "./App.css";

const Box = (props) => {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useFrame(() => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => setIsClicked(!isClicked)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      scale={isClicked ? 2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <mesh>
            <Box position={[-1.6, 0, 0]} />
            <Box position={[1.6, 0, 0]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
          </mesh>
        </Canvas>
      </div>
      <h1>Threejs Fiber</h1>
      <a href="./">See more</a>
    </>
  );
}

export default App;

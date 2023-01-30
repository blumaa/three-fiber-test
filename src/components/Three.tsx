import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";

const getRndInteger = (min: number, max: number) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 0.01;
};
const randNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randColor = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

const Cube = ({ speed, color }: { speed: number; color: string }) => {
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += speed;
    meshRef.current.rotation.y += speed;
    // meshRef.current.rotation.y += randNum(0.01, 0.02);
    // meshRef.current.rotation.y += randNum(0.01, 0.02);
  });

  return (
    <mesh
      ref={meshRef}
      position={[randNum(-2, 2), randNum(-2, 2), randNum(0, 1)]}
      // position={[randNum(-1,1), 0, randNum(-1,1)]}
    >
      <boxGeometry args={[randNum(-2, 2), randNum(-2, 2), randNum(-2, 2)]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export const Three = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        {/* <Canvas camera={{ position: [0, 0, 5] }}> */}
        <PerspectiveCamera fov={75} makeDefault position={[0, 0, 10]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <group>
          <>
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
            <Cube speed={getRndInteger(0, 4)} color={randColor()} />
          </>
        </group>
      </Canvas>
    </div>
  );
};

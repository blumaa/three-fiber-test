import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const Cube = ({
  boxSize = [1, 1, 1],
  speed,
  color = "white",
  position = [0, 0, 0],
}: {
  boxSize: [number, number, number];
  speed: number;
  color?: string;
  position: [number, number, number];
}) => {
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += speed;
    meshRef.current.rotation.y += speed;
    meshRef.current.position.y += speed;
    meshRef.current.position.x += speed;
    // meshRef.current.rotation.y += randNum(0.01, 0.02);
    // meshRef.current.rotation.y += randNum(0.01, 0.02);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      // position={[randNum(-1,1), 0, randNum(-1,1)]}
    >
      <boxGeometry args={boxSize} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { randNum } from "./utils";

export const Sphere = ({
  color = "silver",
  position,
  size = 1,
  speed = 0.2,
}: {
  size?: number;
  color?: string;
  position: [number, number, number];
  speed: number;
}) => {
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    if (meshRef.current.position.z > 100) {
      meshRef.current.position.z = -100;
      // meshRef.current.position.y = position[1]
      // meshRef.current.position.x = position[0]
    } else {
      meshRef.current.position.z += speed;
      // meshRef.current.position.y += -0.04;
      // meshRef.current.position.x += -0.03;
    }
    // meshRef.current.rotation.y += randNum(0.01, 0.02);
    // meshRef.current.rotation.y += randNum(0.01, 0.02);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[randNum(0.01, size), 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

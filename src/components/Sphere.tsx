import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const Sphere = ({
  color,
  position,
  size,
}: {
  size: [number, number, number];
  color: string;
  position: [number, number, number];
}) => {
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    if (meshRef.current.position.x > 20) {
      
      meshRef.current.position.x = -20
      meshRef.current.position.y = -20
    }else{

      meshRef.current.position.x += 0.04;
      meshRef.current.position.y += 0.04;
    }
    // meshRef.current.rotation.y += randNum(0.01, 0.02);
    // meshRef.current.rotation.y += randNum(0.01, 0.02);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

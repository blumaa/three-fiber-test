import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Cube } from "./Cube";
import { Sphere } from "./Sphere";
import {
  getRndInteger,
  randArray,
  randArrayPosNeg,
  randColor,
  randomPosNegNum,
} from "./utils";

export const Three = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas style={{ background: "black" }}>
        {/* <Canvas camera={{ position: [0, 0, 5] }}> */}
        <PerspectiveCamera fov={75} makeDefault position={[0, 0, 20]} />
        <ambientLight />
        <pointLight position={[10, 10, 1]} />
        <group>
          <>
            {/* {[...Array(100)].map(() => { */}
            {/*   return ( */}
            {/*     <Cube */}
            {/*       boxSize={[2,3,2]} */}
            {/*       // boxSize={randArray()} */}
            {/*       speed={getRndInteger(0, 1.2)} */}
            {/*       // color={randColor()} */}
            {/*       position={randArrayPosNeg()} */}
            {/*     /> */}
            {/*   ); */}
            {/* })} */}
            {[...Array(30)].map(() => {
              return (
                <Sphere
                  // color={randColor()}
                  color={"grey"}
                  speed={getRndInteger(1, 20)}
                  position={randArrayPosNeg()}
                  size={randArray()}
                />
              );
            })}
          </>
        </group>
      </Canvas>
    </div>
  );
};

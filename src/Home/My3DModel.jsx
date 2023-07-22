import React from "react";
import { Canvas } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function My3DModel() {
  const gltfRef = React.useRef();

  const onLoad = (gltf) => {
    gltfRef.current = gltf;
    gltf.scene.position.set(0, 0, 0);
  };

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group position={[0, 0, 0]}>
        <mesh visible position={[0, 0, 0]}>
          <primitive object={gltfRef.current && gltfRef.current.scene} />
        </mesh>
      </group>
      <GLTFLoader url="/path/to/your/model.gltf" onLoad={onLoad} />
    </Canvas>
  );
}

export default My3DModel;

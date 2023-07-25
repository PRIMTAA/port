import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"
const Rainbow = () => {
  const rainbow = useGLTF('./abs_rainbow/scene.gltf')

  return (
    <mesh>
    
    {/* <pointLight intensity={3} /> */}
      <spotLight 
        position={[-20,80,20]}
        angle ={0.12}
        penumbra = {.25}
        intensity={5} 
      />
    <primitive
    object={rainbow.scene}
    scale={1.75}
    position-y={0} 
    rotation-y={0}/>
    </mesh>
  )
}

const RainbowCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop="demand"
    gl={{preserveDrawingBuffer:true}}
    camera={{
      fov:45,
      near:0.1,
      far:200,
      position:[-4,3,6]
    }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2} />
        <Rainbow/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default RainbowCanvas
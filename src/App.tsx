import { Canvas } from "@react-three/fiber";
import "./style.css"

function Box() {
    return (
    <mesh>
       <boxBufferGeometry attach="geometry" />
       <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
    )        
}


export default function App() {
    return <Canvas>
        <Box />
    </Canvas>
}
